const { app } = require('./server')
const { db } = require('./models/db')

async function run () {
  await db.sync()
  console.log('Database is ready')
  app.listen(2929, () => {
    console.log('Server started on http://localhost:2929')
  })
}

run()