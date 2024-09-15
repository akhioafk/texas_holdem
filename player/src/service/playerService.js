const playerEntity = require("../models/playerEntity");
const { getPlayerRepository } = require("../repository");

class playerService {
    async createPlayerService (username, email, firstName, lastName, age) {
        const playerRepository = getPlayerRepository();
        const player = new playerEntity();

        player.username = username;
        player.email = email;
        player.firstName = firstName;
        player.lastName = lastName;
        player.age = age;

        return await playerRepository.save(player)
    }
};