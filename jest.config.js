module.exports = {
    verbose: true,
    bail: true,
    transform: { "^.+\\.(?:js|jsx|ts|tsx)$": "babel-jest" },
    // moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    // modulePaths: ["<rootDir>/packages/foodloc-models"],
    // projects: ["<rootDir>/packages/foodloc-models"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/setupTests.{js,jsx}",
        "!src/serviceWorker.{js,jsx}",
        "!src/**/*.(spec|test|stories).{js,jsx}"
    ],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 98,
            functions: 98,
            lines: 98
        }
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
}