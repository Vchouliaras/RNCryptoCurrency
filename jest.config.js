module.exports = {
  "preset": "react-native",
  "cacheDirectory": "cache",
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!react-native|@shoutem/theme|@shoutem/animation|@shoutem/ui)"
  ],
  "testRegex": "(__test__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  // "coverageThreshold": {
  //   "global": {
  //     "statements": 80
  //   }
  // },
  "collectCoverageFrom": [
    "src/*/**",
    "!src/**/*.styles.ts",
    "!src/context/*",
    "!src/config/*"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
}