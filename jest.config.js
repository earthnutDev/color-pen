/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default () => {
  return {
    preset: 'ts-jest', // 使用 ts-jest 作为测试框架
    testEnvironment: 'node', // 使用 node 作为测试环境
    testMatch: ['**/*.test.(js|ts|tsx|jsx)'], // 匹配测试文件
    collectCoverage: true,
    coverageDirectory: 'coverage',
    // 测试覆盖率源文件设置，该配置高于 coveragePathIgnorePatterns
    collectCoverageFrom: [
      'src/**/*.{ts,tsx,js,jsx}',
      '!src/**/*.test.{tx,tsx,jsx,js}',
      '!src/**/*.d.ts',
      '!src/**/__mocks__/*',
      '!scr/**/index.ts',
      '!index.ts',
      '!**/types.ts',
      '!**/kindList.ts',
    ],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/test/',
      '\\.d\\.ts$',
      '\\.test\\.[jt]sx?$',
    ],
    coverageThreshold: {
      // 测试覆盖率阀值配置
      // 低于该阀值将触发 error
      global: {
        branches: 80,
        functions: 85,
        lines: 90,
        statements: 90,
      },
    },
    coverageReporters: ['text', 'lcov', 'html', 'text-summary'],
    verbose: true,
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          isolatedModules: true,
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    fakeTimers: {
      enableGlobally: true,
    },
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/todo/',
      '.d.ts',
      '/types.ts',
    ],
  };
};
