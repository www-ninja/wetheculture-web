## Backend
This is Node.js backend api for we the culture website.

## Install

**Postgres**  
This project requires Postgres to be installed and running

**Project Specific Dependencies**  
To install this project for first use run:
```sh
yarn install
```   

**DB setup & clear** 
To create a database:
```sh
yarn db:create
```   

To migrate tables:
```sh
yarn db:migrate
```   

To reset tables:
```sh
yarn db:clear
```   



## Launch
Run the backend app
```sh
yarn start
```
Access API at: http://domain:5000/

## Project Structure
```
backend
├── config
|  └── config.js
├── migrations
├── seeders
├── src
|  └── controllers
|  |      └── controller files
|  └── middlewares
|  |      └── middleware files
|  └── models
|  |      └── model files
|  └── routes
|  |      └── routes files
|  └── services
|  |      └── service files
|  └── index.js
└── test
