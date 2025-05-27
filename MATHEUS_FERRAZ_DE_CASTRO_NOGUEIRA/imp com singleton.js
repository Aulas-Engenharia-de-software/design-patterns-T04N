// config.js - Com Singleton
const AppConfig = (function() {
  let instance;
  
  function createInstance() {
    const config = {
      theme: 'light',
      language: 'pt-BR',
      apiUrl: 'https://api.example.com',
      
      update(newConfig) {
        Object.assign(this, newConfig);
      },
      
      get() {
        return { ...this };
      }
    };
    return config;
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Object.freeze impede modificações acidentais
Object.freeze(AppConfig);