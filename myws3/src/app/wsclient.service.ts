import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsclientService {

  constructor() {
    //const socket = new WebSocket("ws://localhost:7890");
    const socket = new WebSocket("ws://192.168.102.102:7050");

    socket.addEventListener("open", () => {
      // send a message to the server
      socket.send(JSON.stringify({
        type: "hello from client",
        content: [ 3, "4" ]
      }));
      console.log("message: heelo dal client")

    });

    // receive a message from the server
    socket.addEventListener("message", ({ data }) => {
      const packet = JSON.parse(data);
      console.log("message: heelo dal server"+data)

      switch (packet.type) {
        case "message: hello from server":
          console.log("message: heelo dal server")
          break;
      }
    });
  }
}
