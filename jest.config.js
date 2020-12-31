module.exports = {
    transform: {
        '^.+\\.svelte$': 'svelte-jester',
        '^.+\\.js$': ['babel-jest',{ configFile: './babel-jest.config.js' }],
        '^.+\\.ts$': ['babel-jest',{ configFile: './babel-jest.config.js' }],
    },
    moduleFileExtensions: ['js', 'svelte', 'ts'],
    coveragePathIgnorePatterns: ["<rootDir>/src/common/clsx", "/assets/"]
}