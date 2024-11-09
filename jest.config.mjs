import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.config.mjs'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Suporte para aliases se usados.
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Padrão comum para testes
    '**/?(*.)+(spec|test).[tj]s?(x)', // Inclui *.test.js e *.spec.js
    '<rootDir>/src/**/*.test.[jt]s?(x)', // Garante que inclua testes dentro de src
  ],
}

export default createJestConfig(customJestConfig)
