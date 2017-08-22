// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

var path = require('path'),
    config,
    ghost_url='https://'+process.env.PROJECT_DOMAIN+'.glitch.me';

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: ghost_url,
        mail: {
          "transport": "SMTP",
        "options": {
          "service": "Mailgun",
          "auth": {
              "user": process.env.SMTP_LOGIN,
              "pass": process.env.SMTP_PASSW
        }
    }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/.data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '3000'
        },
      
        forceAdminSSL: true,
        privacy: {
          useUpdateCheck: false
        }
    }
};

module.exports = config;
