const DEVELOPMENT_SOCKET_URL = 'http://localhost:8000/'
const PRODUCTION_SOCKET_URL = 'https://rock-paper-scissors-socket-io.onrender.com'
const SOCKET_URL= process.env.NODE_ENV === 'development' ?DEVELOPMENT_SOCKET_URL:PRODUCTION_SOCKET_URL
export {SOCKET_URL}