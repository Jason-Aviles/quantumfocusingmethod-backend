const db = require("./database/dbConfig");

module.exports = {
  insert_email
};

//foodtruck





async function insert_email(user) {
  return await db("user")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

