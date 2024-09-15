const { Repository, createConnection, getRepository } = require("typeorm");
const Player = require('./models/playerEntity')


let playerRepository;

const initializeConnection = async () => {
    try {
        await createConnection();
        console.log('db connected')

        playerRepository = getRepository(Player)
        console.log('repositories initialized')
    } catch (err) {
        console.log('error with db or repositories:', err)
    }
}

const getPlayerRepository = () => playerRepository;

module.exports = {
    initializeConnection,
    getPlayerRepository
}