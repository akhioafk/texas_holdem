const { EntitySchema } = require('typeorm')

// TODO: VIP system, session duration, last active

module.exports = new EntitySchema({
    name: 'Player',
    tableName: 'players',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },

        // Basic Player Information

        username: {
            type: 'varchar',
            unique: true,
            nullable: false
        },

        email: {
            type: 'varchar',
            unique: true
        },

        firstName: {
            type: 'varchar'
        },

        lastName: {
            type: 'varchar'
        },

        age: {
            type: 'int'
        },

        avatarUrl: {
            type: 'varchar',
            nullable: true
        },

        registeredAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        },

        // Game Related Information

        currentTableId: {
            type: 'int',
            nullable: true
        },

        handsWon: {
            type: 'int',
            default: 0
        },

        handsPlayed: {
            type: 'int',
            default: 0
        },

        wins: {
            type: 'int',
            default: 0
        },

        loses: {
            type: 'int',
            default: 0
        },

        // Financial Information

        withdrawals: {
            type: 'int',
            default: 0
        },

        chips: {
            type: 'decimal',
            default: 0
        },
    }
})