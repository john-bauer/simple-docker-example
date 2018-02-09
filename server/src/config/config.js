const Path = require('path')

module.exports = {
    app: {
        name: 'Dockerized Node App',
        environment: process.env.NODE_ENV || 'development',
        port: process.env.port || 8081,
        publicDirectory: Path.join(__dirname, './public')
    },
    network: {
        bodyLimit: '100kb'
    }
}