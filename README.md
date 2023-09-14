 <h1 align="center">URL Shortener</h1>


This project is a URL shortening application with both front-end and back-end components, each running in separate Docker containers managed by Docker Compose. The project is divided into two parts: the front-end, built with React and Vite, and the back-end, powered by Express and Sequelize.

## Summary
The project includes:

* A front-end React application for shortening long URLs.
* A Node.js back-end server that manages shortened URLs and redirects to the original URLs.
* Utilizes a PostgreSQL database to store the shortened URLs.

## Pre-requisites

* Ensure that Docker and Docker Compose are installed on your machine.

## How to Initialize the Project

<h2 align="center">Front-end</h2>

1. Navigate to the front-end folder in the project.

2.  Create a .env file and input the following data:
```bash
REACT_APP_API_PORT=8819 ## Port of the back-end server
```

2. Run the following command to create and start the Docker container for the front-end application:

```bash
cd front-end
docker-compose up
```
3. The front-end application will be available at http://localhost:5173 in your browser.

<h2 align="center">Back-end</h2>

1. Navigate to the back-end folder in the project.

2. Create a .env file and input the following data:
```bash
PORT=8819  ## Port on which your server will be opened
POSTGRES_PORT=5432 ## Port of your PostgreSQL server.
POSTGRES_DB=url-shortener-db ## Your database name
POSTGRES_USER=admin ## Your database user
POSTGRES_PASSWORD=admin ## Your database password
```

3. Run the following command to create and start the Docker container for the back-end server:

```bash
cd back-end
docker-compose up
```
4. The back-end server will be available at http://localhost:8819 in your browser.

<h2 align="center">Final</h2>

* The front-end uses port 5173.
* The back-end uses port 8819.
* PostgreSQL uses port 5432.

Remember that these ports will be the ones you set in the .env file.