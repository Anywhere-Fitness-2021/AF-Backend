
exports.seed = function(knex) {
  return knex("Users").insert([
    {username: "instructor", password: "1234", role: "instructor"},
    {username: "client", password: "1234", role: "client"}
  ])
};
