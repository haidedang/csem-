# Exercise 4

Submission deadline: 13.12.2017, end of day

## Getting started

As in the Docker tutorial, use Docker Compose and the following commands to launch, inspect, and terminate your Dockerized application stack:

1. `docker-compose up -d --build`
2. `docker-compose ps`
3. `docker-compose down --volumes`

## Tasks

Please implement the following API with (1) a Postgres database backend and (2) a MongoDB database backend. The resulting Dockerized application should be startable using the _docker-compose.yml_ file. Deploying the app with a different database backend should be possible by simply switching the `DB_TYPE` environment variable in the _docker-compose.yml_ file to either `postgres` or `mongodb`. To keep things simple, it is OK that, for either deployment, a container with the other database is deployed as well (although only one of the two databases is used).

To check if your API and back-end implementation is compliant with the specification, in the _api_tests_ directory you find a Postman collection with tests that you can run with a collection test runner.

API specification: https://documenter.getpostman.com/view/355012/shop-app/7EK6WW6