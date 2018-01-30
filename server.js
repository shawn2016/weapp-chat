var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
  console.log('client connected');
  ws.on('message', function (message) {
    console.log(message)
    var message = JSON.parse(message)
    if (message.cmd == 'JOIN') {
      console.log('1234567890')
      var data = {
        cmd: "CMD",
        subCmd: "ROOMS",
        rooms: [{
          id: "001",
          name: "cc先生",
          count: "2",
          avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg",
          text: "正在载入聊天列表，请稍候",
          updated: new Date()
        }, {
          id: "001",
          name: "show",
          count: "2",
          avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg",
          text: "正在载入聊天列表，请稍候",
          updated: new Date()
        }, {
          id: "001",
          name: "as先生",
          count: "2",
          avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg",
          text: "正在载入聊天列表，请稍候",
          updated: new Date()
        }, {
          id: "001",
          name: "22先生",
          count: "0",
          avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg",
          text: "邮票吗",
          updated: new Date()
        }, {
          id: "001",
          name: "cc先生",
          count: "2",
          avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg",
          text: "正在载入聊天列表，请稍候",
          updated: new Date()
        }]
      }
      ws.send(JSON.stringify(data));
    } else if (message.cmd === 'MESSAGE') {
      console.log('----------------')
      ws.send(JSON.stringify(message));
    }
    console.log('lat-----data', message)
  });
});