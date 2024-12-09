module.exports.CorsControl = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://christmas-website-server.vercel.app/?vercelToolbarCode=ruTQ0lMOUh68Lkj"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
};
