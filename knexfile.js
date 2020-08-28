	
require("dotenv").config();	

module.exports = {	
  development: {	
    client: process.env.CLIENT,	
    connection: {	
      host:process.env.HOST ,	
      user:process.env.USER,	
      password:process.env.PASSWORD,	
      database:process.env.DATABASE,	
      insecureAuth : process.env.INSECUREAUTH,	
      charset: "utf8"	
    },	
    useNullAsDefault: true	
  },	

  // staging: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "ig_clone",	
  //     charset: "utf8"	
  //   },	
  //   useNullAsDefault: true	
  // },	
  pool: {	
    min: 2,	
    max: 10	
  },	
  migrations: {	
    tableName: "knex_migrations"	
  },	

  // production: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "ig_clone",	
  //     charset: "utf8"	
  //   },	
  //   useNullAsDefault: true,	
  //   pool: {	
  //     min: 2,	
  //     max: 10	
  //   },	
  //   migrations: {	
  //     tableName: "knex_migrations"	
  //   }	
  // }	

  // For local testing	
  // testing: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "lambdaStaging",	
  //     charset: "utf8",	
  //   useNullAsDefault: true,	
  // }	
};