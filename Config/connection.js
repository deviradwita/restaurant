const { Pool } = require('pg')
 
// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RestaurantDB',
  password: 'postgres',
  port: 5432,
  idleTimeoutMillis:500 //buat end otomatis
})
 
// buat cek doang, bisa comment kalo udah selesai cek
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports =pool