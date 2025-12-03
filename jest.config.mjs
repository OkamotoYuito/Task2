export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
