const db = require("./database/dbConfig");

module.exports = {
  insert_email
};

//foodtruck





 function insert_email(user) {
  return  db("user")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

