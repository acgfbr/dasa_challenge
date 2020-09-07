require('dotenv').config();
    module.exports = {
      use_env_variable: 'CLEARDB_DATABASE_URL',
      dialect: 'mysql',
      logging: false
    };