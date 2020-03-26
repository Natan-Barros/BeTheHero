const knex = require("knex");
const connfiguration = require("../../knexfile");

const connection = knex(connfiguration.development);

module.exports = connection;