const liveServer = require("live-server");

const params = {
  port: 8075, // Set the server port. Defaults to 8080.
  open: false, // When false, it won't load your browser by default.
  cors: true,
  mount: [
    ["/everything", "json/everything.json"],
    ["/sources", "json/sources.json"],
  ], // Mount a directory to a route.
  logLevel: 1, // 0 = errors only, 1 = some, 2 = lots
};
liveServer.start(params);
