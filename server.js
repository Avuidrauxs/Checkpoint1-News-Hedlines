const express = require('express');
// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  //  de-facto standard header for identifying
  //  the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  // console.log(`Express server is up on port ${PORT}`);
});
