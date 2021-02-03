
const dataBase = {
  host: process.env.HOST || "mk-mysql-app",
  user: process.env.USER || "mk",
  password: process.env.PASSWORD || "mk",
  dataBase: process.env.DB || "mk"
};


module.exports = {
        dataBase,
};