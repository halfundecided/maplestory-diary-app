require('dotenv').config();
const server = require('./graphql');

server.listen().then(({ url }) => console.log(`Maple Story Diary backend service running on ${url}`));
