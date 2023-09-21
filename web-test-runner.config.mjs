export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 79,
      functions: 80,
      lines: 80
    }
  }
};
