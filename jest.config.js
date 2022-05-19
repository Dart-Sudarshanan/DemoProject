module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: ['nodules_modules/(?!(jest-)?react-native|@?react-navigation)'],
    setupFiles: ['./setup_jest.js']
};