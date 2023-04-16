module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/interfaces/*'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@mocks/(.*)': '<rootDir>/src/mocks/$1',
    '^@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^@elements/(.*)': '<rootDir>/src/elements/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@icons/(.*)': '<rootDir>/src/icons/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules', 'src']
};
