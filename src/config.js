// The purpose of using config.js is to keep the server URL and other configurations in one place and make it easier to modify them without modifying the client-side code directly.
// By centralizing the server URL and other configurations in the config.js file, you can easily modify the URL in one place, and it will automatically reflect in all components that import and use the config.js file.
const config = {
    serverUrl: 'http://localhost:3001'
  };
  
export default config;