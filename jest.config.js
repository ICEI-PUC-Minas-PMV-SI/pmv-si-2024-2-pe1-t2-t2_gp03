module.exports = {
  roots: ['<rootDir>/src'], // Apenas a pasta 'src' será considerada
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Padrão de arquivos de teste
    '**/?(*.)+(spec|test).[jt]s?(x)' // Arquivos que terminam com '.spec.js' ou '.test.js'
  ],
  moduleFileExtensions: ['js', 'jsx'], // Suporte apenas a JavaScript
  transform: {}, // Desabilita transformações
  testEnvironment: 'jest-environment-jsdom', // Define o ambiente de teste como jest-environment-jsdom
};
