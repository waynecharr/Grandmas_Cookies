const db = require('../config/connection');
const { User, Cookies } = require('../models');
const cookieSeeds = require('./cookiesData.json');
// const userSeeds = require('./usersData.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        // Clean the 'User' and 'Cookie' collections
        // await cleanDB('users');
        await cleanDB('cookies');

        // Seed users
        // const users = await User.create(userSeeds);

        // Seed cookies
        const cookies = await Cookies.create(cookieSeeds);

        // Log the user and cookie seeding
        // console.log(`${users.length} users seeded successfully.`);
        console.log(`${cookies.length} cookies seeded successfully.`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});
