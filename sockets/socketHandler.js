module.exports = (io) => {
    io.on("connection", (socket) => {
      console.log("User Connected");
  
      socket.on("newTask", (task) => {
        io.emit("taskAdded", task);
      });
  
      socket.on("disconnect", () => {
        console.log("User Disconnected");
      });
    });
  };
  