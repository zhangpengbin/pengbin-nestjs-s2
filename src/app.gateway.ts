/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 11:54:25
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 20:26:01
 */

import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway(3001, { namespace: 'app' })
export class AppGateway {
    
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string) {
        console.log(data);
        return 'Server: got it!';
    }
}