#!/bin/bash


# 获取环境变量中的变更包字符串
UPDATE_PACKAGES=$UPDATE_PACKAGES
# 执行根路径
REPO_ROOT=$REPO_ROOT

echo "🌬️ 来"
echo "工作根路径 $REPO_ROOT"

PACKAGES_DIR="${REPO_ROOT}/packages"

if [ ! -d "$PACKAGES_DIR" ]; then
    echo "没有找到 ${PACKAGES_DIR}"
    exit 1;
fi

# 进入包工厂
cd "${PACKAGES_DIR}"
echo "☁️ 来"

# 将字符串转为数组
IFS=',' read -r -a PACKAGE_ARRAY <<< "$UPDATE_PACKAGES"
 
update_version() {
    local input="$1"
    local NAME=$(echo "${input//-/ }" | tr -s ' ') # 替换 - 为空格并删除重复的空格
    local CWD="${PACKAGES_DIR}/$input"
    if [ ! -d "$CWD" ]; then 
        echo "进入项目 $NAME 故障，路径为 ${CWD}"
        return 0
    fi
    cd "$CWD"
    # 依赖安装 
    npm ci
    local tag=$(npx @qqi/check-version c=. 2>&1)
    exit_code=$?
    if [ $exit_code -ne 0 ]; then 
      echo "版本校验失败： $tag"
      exit 0;
    fi
    if ! npm run build; then 
      echo "构建 $NAME 失败" 
      return 0
    fi
    local BUILD_DIST="${CWD}/dist"
    if [ ! -d "${BUILD_DIST}" ]; then
      echo "未找到 $NAME dist 构建：${BUILD_DIST}"
      return 0
    fi
    cd "${BUILD_DIST}" 
    
    echo "开始发布 $NAME npm 包"
    if ! npm publish --provenance --access public --tag "${tag}" ; then
        echo "$NAME 发布失败" 
        return 0
    fi
    
    echo "🚀🚀 $NAME  发布成功，完结 🎉🎉 撒花 🎉🎉"
}

main() {
    echo ${UPDATE_PACKAGES}
    echo ${PACKAGE_ARRAY}
    # 遍历变更的包数组，进行 npm 包推送
    for package in "${PACKAGE_ARRAY[@]}"; do
        echo "当前执行的推送为 $package"
        update_version "$package"
    done   
}

echo "准备好了么"
main
echo "哈哈，执行 🎊 🎊 🎊"