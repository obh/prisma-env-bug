Test `node index.js`

Run with prod.env as `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@localhost:3306/slack?connection_limit=10&pool_timeout=20` fails with `Error querying the database: Unknown authentication plugin 'sha256_password'.`

However running the exact string works! Somehow found this strange, given - https://www.prisma.io/docs/guides/development-environment/environment-variables#expanding-variables
