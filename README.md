# Next.js OpenJira App

to run locally you need the database

```
docker-compose up -d
```

- -d, means **detached**

## MongoDB Local Database

```
mongodb://localhost:27017/entriesdb
```

## Set environment variables

rename file **.env.template** to **.env**

## Fill the database with test information

call:

```
http://localhost:3000/api/seed
```
