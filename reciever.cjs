const dgram = require('dgram');
const WebSocket = require('ws');

const udpServer = dgram.createSocket('udp4');
const wss = new WebSocket.Server({ port: 8080 });

udpServer.on('message', (msg, rinfo) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
});

udpServer.bind(5300);