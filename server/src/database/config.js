const { MongoClient } = require('mongodb');

let CONNECTION = null;
let DB = null;

const mongoConnect = async () => {
    if (!CONNECTION) {
        const connectConfig = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };
        CONNECTION = await MongoClient.connect(process.env.MONGO_URL, connectConfig);
        DB = await CONNECTION.db(process.env.DATABASE);
    }

    return DB;
};

const getCollectionHandle = collectionName => {
    let collectionHandle = null;

    return async () => {
        if (!collectionHandle) {
            const db = await mongoConnect();
            collectionHandle = await db.collection(collectionName);
        }

        return collectionHandle;
    };
};

module.exports = {
    mongoConnect,
    getCollectionHandle,
};
