module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL + (process.env.NODE_ENV === 'production' ? '?ssl=true' : '') || 'postgresql://[USERNAME]@localhost/[DATABASE]',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://[USERNAME]@localhost/[DATABASE-TEST]'
};
