let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer);
    return io;
  },
  getIo: () => {
    if (!io) {
      const error = new Error("Socket.io is not Initialized");
    }
    return io;
  },
};
