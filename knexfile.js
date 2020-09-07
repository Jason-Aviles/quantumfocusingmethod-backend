	
require("dotenv").config();	

module.exports = {	
  development: {	
    client: "mysql",	
    connection: {	
      host:process.env.NODE_HOST ,	
      user:process.env.NODE_USER,	
      password:process.env.NODE_PASSWORD,	
      database:process.env.NODE_DATABASE,	
      insecureAuth :true,	
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