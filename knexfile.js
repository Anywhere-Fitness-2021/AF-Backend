const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}


module.exports = {
  production: {
    ...sharedConfig,
    connection: { filename: "./data/auth.db3" },
    seeds: { directory: "./data/seeds" }
  },
  development: {
    ...sharedConfig,
    connection: { filename: './data/auth.db3' },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
