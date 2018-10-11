module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['mithril-serializer'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/', '/node_modules/'],
};
