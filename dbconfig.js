var dbconfig = {
  development: {
    //connectionLimit : 10,
    host: "localhost",
    port: "3306",
    user: "devuser",
    password: "2023",
    database: "moviedb",
  },
  production: {
    //connectionLimit : 10,
    host: "localhost",
    port: "3306",
    user: "devuser",
    password: "P@ssw0rd@2023",
    database: "moviedb",
  },
};
module.exports = dbconfig;
