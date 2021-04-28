
exports.up = function(knex) {
  return knex.schema
  .createTable("Users", tbl=>{
    tbl.increments("Id")
    tbl.string("Username").unique().notNullable()
    tbl.string("Password").notNullable()
    tbl.string("Role").notNullable()
  })
  .createTable("Classes", tbl=>{
    tbl.increments("Id")
    tbl.integer("ClassId").unique().notNullable().unsigned()
    tbl.string("Name").notNullable()
    tbl.string("Type")
    tbl.string("StartTime")
    tbl.string("Duration")
    tbl.string("IntensityLevel")
    tbl.string("Location")
    tbl.integer("Attendees").unsigned()
    tbl.integer("MaxClassSize").unsigned()
})
  .createTable("ClassesUsersIntermediary", tbl=>{
    tbl.increments("CU_ID")
    tbl.integer("ClassId")
        .unique()
        .notNullable()
        .references("Id")
        .inTable("Classes")
        .onDelete("CASCADE")
    tbl.integer("User_One")
        .references("Id")
        .inTable("Users")
        .onDelete("CASCADE")
    tbl.integer("User_Two")
        .references("Id")
        .inTable("Users")
        .onDelete("CASCADE")
    tbl.integer("User_Three")
        .references("Id")
        .inTable("Users")
        .onDelete("CASCADE")

})

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("ClassesUsersIntermediary")
  .dropTableIfExists("Classes")
  .dropTableIfExists("Users")
};
