const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", socket => {
    // let previousId;
  
    // const safeJoin = currentId => {
    //   socket.leave(previousId);
    //   socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
    //   previousId = currentId;
    // };
    socket.on("newtravel", trip => {
        console.log(trip)
        socket.emit("getLocation");
      });
    // ...
  });

  http.listen(4444, () => {
    console.log('Listening on port 4444');
  });