export class ServerService {
    constructor() { }
    servers = [
        {
            id: 1,
            name: 'Server 1',
            status: 'active'
        },
        {
            id: 2,
            name: 'server 2',
            status: 'inactive'
        },
        {
            id: 3,
            name: 'server 3',
            status: 'unkinown'
        }
    ];
    getServers() {
        return this.servers;
    }
    getServer(id: number) {
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        return server;
    }

    updateServer(id: number, serverInfo: { name: string, status: string }) {
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}