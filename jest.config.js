// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');

const config = {
  rootDir: '.',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['.d.ts', '.js'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@services/*': ['src/api/services/*'],
      '@app/*': ['src/*'],
      '@db/*': ['src/api/db/*'],
    },
    {
      prefix: '<rootDir>/',
    }
  ),
};

module.exports = config;
