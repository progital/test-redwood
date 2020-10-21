# Full stack CRUD app with authentication

An example CRUD app that uses RedwoodJS, GraphQL API, PostreSQL database and JWT-based authentication.

## Config

You need to configure `DATABASE_URL` and `JWT_SECRET`

`JWT_SECRET` is essentially a password. You can use any long random string.

`DATABASE_URL` is a connection string formatted as below for the Postgres database.

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

## Local Dev Setup

- Redwood requires yarn. Install it and clone the repo.
- Add the required configuration values to your `.env` file
- First run:
  - `yarn install`
  - create db tables with `yarn rw db up`
- Start development servers with `yarn rw dev`
- Your app is available at `localhost:8910`

## Deploying to Netlify

- Create a site that pulls from this repo
- Configure environment variables
- Build
