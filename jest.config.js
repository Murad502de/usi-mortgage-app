module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/test/",
    ".module.ts",
    ".types.ts"
  ],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ["**/*.test.ts"],
  moduleNameMapper: {
    '\\.(css|less|scss)$': './test/__mocks__/styleMock',
  }
};