const http = require('http');

const server = http.createServer(() => {
  console.log('Пришёл запрос!');
}); // создаём сервер

server.listen(3000); // будем принимать сообщения с 3000 порта
