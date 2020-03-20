1. create README.md
2. `git init`
3. `npm init -y`
4. `npx gitignore node`
5. after setting up COMPLETELY blank repo on Github a. `git remote -v` b.
   `git remote add orgin <URL>` c. `git remote -v` d. `knex init` #1
6. add dependencies  
   a. `npm i express cors helmet morgan knex sqlite3` b. `npm i -D nodemon`
7. scaffold basic structure a. `mkdir api auth database` b.
   `touch index.js api/server.js auth/character-model.js auth/character-router.js`
8. confirm helmet and morgan are working
9. build `index.js and server.js`
10. test api is working
11. build server, character-router
12. build `dbConfig.js`
13. `touch .env` => PORT=5555
14. create model
15. `knex migrate:make characters`
16. `knex migrate:latest`
17. `knex seed:make 00_characters`
18. `knex seed:run`
19. build seed data
20. view in http client

#1

```migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
```
