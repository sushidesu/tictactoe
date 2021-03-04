module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: [
    "node_modules", "src"
  ],
  snapshotSerializers: ["@emotion/jest/serializer"]
};
