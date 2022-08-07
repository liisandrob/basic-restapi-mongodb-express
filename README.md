# Basic REST API arquitercture

## Detail
To speed up starting a REST API with Express and Mongodb.\
The project has basic error handling, functions for user's token (creation and control).\
Doesn't include CORS configuration.

Delete the ".gitkeep" files, they were created to keep the empty directories.

## ¿What dependencies are used?

### Production:

- Express
- Mongoose
- Helmet
- Morgan
- Cors
- JsonWebToken
- DotEnv

### Development:

- Nodemon

## Required Files

Rename the file ".env.example" to ".env" and fill in the necessary variables

```
# Server
PORT=
ENV=

# MongoDB
MONGO_USER=
MONGO_PASS=
MONGO_HOST=
MONGO_PORT=
MONGO_DATA=

# JWT
JWT_SECRET=
```

## Available scripts

### `npm run dev`

Run the API for development environment, restarting when changes are applied.

### `npm start`

Runs the API for production environment, where it's not restart if changes are applied.

## Steps to clone repository

Open terminal and type

```
" $ mkdir </path/to/repo> "

" $ cd </path/to/repo> "

" $ git clone https://github.com/liisandrob/basic-restapi-mongodb-express/ . "

" $ npm ci "

" $ npm run dev "
```

## Steps to push the project to a personal repository

Open terminal and type

```
" $ git remote add origin https://github.com/youraccount/your-repo.git "

" $ git branch -M main "

" $ git push -u origin main "
```