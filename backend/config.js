const TOKEN_PRIVATE_KEY = "supersecret_dont_share";

const DB_INFO = Object.freeze({
  userId      : "liam",
  password    : '24hkH6ZRESDkhNnM',
  clusterName : "cluster0",
  portNumber  : 5000,
  dbName      : "mern"
});

const API_BASE = Object.freeze({
  home: "http://localhost:5000",
  placesRoutes: "/api/places",
  usersRoutes: "/api/users"
});

const API_PLACES = Object.freeze({
  root : `/`,
  pid : `/:pid`,
  userUid : `/user/:uid`,
});

const API_USERS = Object.freeze({
  root : `/`,
  signup : `/signup`,
  login : `/login`,
});

module.exports = { DB_INFO, API_BASE, API_PLACES, API_USERS, TOKEN_PRIVATE_KEY };