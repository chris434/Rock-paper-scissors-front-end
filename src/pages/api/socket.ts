import { Server } from 'socket.io'

const SocketHandler = (req, res) => {
  
  if (res.socket.server.io) {
    console.log('Socket is already running')
    res.end();
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server,{path:'/api/socket'})
    res.socket.server.io = io

    io.on('concession', (socket) => {
      socket.broadcast.emit('hello')
    })
  }
  res.end()
}

export default SocketHandler