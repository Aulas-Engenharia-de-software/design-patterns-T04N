// config.js - Versão ingênua
let appConfig = {
  theme: 'light',
  language: 'pt-BR',
  apiUrl: 'https://api.example.com'
};

function updateConfig(newConfig) {
  appConfig = { ...appConfig, ...newConfig };
}

function getConfig() {
  return appConfig;
}

// Problema: Qualquer um pode criar uma nova instância
const anotherConfig = { ...appConfig }; // Violação do Singleton