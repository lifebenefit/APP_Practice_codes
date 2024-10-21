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

module.exports = { API_BASE, API_PLACES, API_USERS };