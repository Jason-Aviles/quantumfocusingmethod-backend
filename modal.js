const db = require("./database/dbConfig");

module.exports = {
  insert_email,
  find,
  insert_email2,
  insert_email3,
  find2,
};

function find(user) {
  return db("user");
}

function find2(user) {
  return db("user2");
}

function insert_email(user) {
  return db("user")
    .insert(user)
    .then((ids) => ({ id: ids[0] }));
}

//number // email //username
function insert_email2(user) {
  return db("user2")
    .insert(user)
    .then((ids) => ({ id: ids[0] }));
}

// email //username
function insert_email3(user) {
  return db("user3")
    .insert(user)
    .then((ids) => ({ id: ids[0] }));
}
