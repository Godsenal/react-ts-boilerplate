// typescript jest setting
module.exports = {
  "roots": [
    "<rootDir>/src" // all typescript files in a src directory.
  ],
  "testEnvironment": "node",
  "transform": {
    "^.+\\.tsx?$": "ts-jest" // config just tells jest to use ts-jest for ts / tsx files.
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", // test regex.
  "moduleFileExtensions": [ // file extensions for test.
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "globals": {
    "window": true
  },
};