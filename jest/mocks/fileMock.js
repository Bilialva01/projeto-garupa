module.exports = 'test-file-stub'
module.exports = {
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  