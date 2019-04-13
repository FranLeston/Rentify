// const createError = require('http-errors');
// const cors = require('cors');

// const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000")
//   .split(',')
//   .map(o => o.trim())

// module.exports = cors({
//   origin: (origin, next) => {
//     const allowed = !origin || allowedOrigins.indexOf(origin) !== -1;
//     if (allowed) {
//       next(null, allowed);
//     } else {
//       next(createError(401, 'Not allowed by CORS'));
//     }
//   },
//   credentials: true
// });
const cors = require('cors')
const createError = require('http-errors');

const allowedOrigins = ['mongodb://<lestonramos>:<NewYorkCity911$>@ds135786.mlab.com:35786/rentify-ironhack']
module.exports = cors({
  origin: (origin, next) => {
    const isAllowed = !origin || allowedOrigins.some(o => o === origin);
    if(isAllowed) {
      next(null,isAllowed);
    } else {
      next(createError(401, "Not allowed by CORS"))
    }
  },
  credentials: true
})