	
require("dotenv").config();	

module.exports = {	
  development: {	
    client: "mysql",	
    connection: {	
      host:"us-cdbr-east-06.cleardb.net" ,	
      user:"b05152d15cde45",	
      password:"f892ac7a",	
      database:"heroku_48a1f21dcef3b30",	
      insecureAuth : true,	
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