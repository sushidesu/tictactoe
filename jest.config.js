module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["e2e"],
}
