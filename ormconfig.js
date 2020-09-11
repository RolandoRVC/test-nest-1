module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "testnest",
    "synchronize": true,
    "dropSchema": false,
    "logging": true,
    "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
    "migrations": ["migrations/**/*.ts"],
    "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
    "cli": {
        "entitiesDir": "src",
        "migrationsDir": "migrations",
        "subscribersDir": "subscriber"
    }
}
