import { Server } from 'socket.io';
import Redis from 'ioredis';

const pub = new Redis({
    host: 'valkey-3b9d80f9-subratpandey-34d9.l.aivencloud.com',
    port: Number('27345'),
    username: 'default',
    password: 'AVNS_d6av5fd7B5Mqhz0N-lX'
});
const sub = new Redis({
    host: 'valkey-3b9d80f9-subratpandey-34d9.l.aivencloud.com',
    port: Number('27345'),
    username: 'default',
    password: 'AVNS_d6av5fd7B5Mqhz0N-lX'
});

class SocketService {
    private _io: Server;
    constructor() {
        console.log("Init Socket Server");
        this._io = new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        });
        sub.subscribe('MESSAGES');
    }

    public initListeners() {
        const io = this.io;
        console.log('Init Socket Listeners...');
        io.on('connect', (socket) => {
            console.log(`new socket connected`, socket.id);

            socket.on('event:message', async ({message}: {message: string}) => {
                console.log('New Message Recieved ', message);
            // publish this message to redis
            await pub.publish('MESSAGES', JSON.stringify({ message }))
            });
        })

        sub.on('message', (channel, message) => {
            if(channel === 'MESSAGES') {
                io.emit('message', message);
            }
        })
    }

    get io() {
        return this._io;
    }
}

export default SocketService;