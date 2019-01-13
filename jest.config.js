module.exports = {
  "cacheDirectory": "cache",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
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
    "!src/**/*.styles.ts"
  ]
}