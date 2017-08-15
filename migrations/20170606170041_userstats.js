
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('session_date').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.string('username').notNullable().unique();
        table.string('rightanswers');
        table.string('longestStreak');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};