module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '391075d2349d8be1cccaf253f86dd290'),
  },
});
