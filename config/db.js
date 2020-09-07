require('dotenv').config();
    module.exports = {
      use_env_variable: 'MYSQL_STR_CONN',
      dialect: 'mysql',
      logging: false
    };