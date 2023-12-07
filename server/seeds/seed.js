const db = require('./config/connection');
const { User, Cookies } = require('../models');
const cookieSeeds = require('./userSeeds.json');
const userSeeds = require('./thoughtSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        // Clean the 'User' and 'Cookie' collections
        await cleanDB('Users', 'users');
        await cleanDB('Cookies', 'cookies');

        // Seed users
        const users = await User.create(userSeeds);

        // Seed cookies
        const cookies = await Cookie.create(cookieSeeds);

        // Log the user and cookie seeding
        console.log(`${users.length} users seeded successfully.`);
        console.log(`${cookies.length} cookies seeded successfully.`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});
