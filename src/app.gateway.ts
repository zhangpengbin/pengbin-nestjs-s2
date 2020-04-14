/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 11:54:25
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-14 11:48:33
 */

import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(3001, { namespace: 'app' })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    handleConnection(client: any, ...args: any[]) {

        console.log('Client connected!');
        // throw new Error("Method not implemented.");
    }
    handleDisconnect(client: any) {

        console.log('Client disconnected!');
        // throw new Error("Method not implemented.");
    }

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string) {

        // client.emit('message', 'Send a message!');
        // client.broadcast.emit('message', `${client.id} : Broadcast.`)

        console.log(data);
        return 'Server: got it!';
    }

    @SubscribeMessage('message')
    handleMessage(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket
    ) {

        client.broadcast.emit('message', `${client.id}: ${data}`);
        
        return data;
    }
}