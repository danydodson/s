
module.exports = {
  appName: process.env.APP_NAME || 'SeeSee',
  port: process.env.PORT || 3100,
  host: process.env.HOST || '0.0.0.0',
  pwauri: process.env.PWA_URL,
  apiuri: `${process.env.API_URL}`,
  dburi: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV,
}
