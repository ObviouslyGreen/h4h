module.exports = {

  development: {
    client: 'pg',
    connection: 'h4h.cw87frmxhesj.us-west-1.rds.amazonaws.com',
    user : 'h4h',
    password : 'ZRq6PiPp%AJ*f!',
    database : 'DJango'
  },
  production: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  }

}
