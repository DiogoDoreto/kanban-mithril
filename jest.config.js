module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['./lib/mithril-serializer.js'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/', '/node_modules/'],
};
