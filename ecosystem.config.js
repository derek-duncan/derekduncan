module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : "DerekDuncan",
      script    : "./index.js",
      watch     : ['app', 'lib'],
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],
}
