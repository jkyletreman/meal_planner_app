require('dotenv').config();
if (process.env.APP_MODE === undefined) {
 throw Error('APP_MODE not set in application environment');
}

module.exports = {
 development: {
   client: 'pg',
   connection: process.env.DATABASE_URL || "postgres://localhost:5432/meal_planner"
 },
 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
}
