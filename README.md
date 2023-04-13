# Introduction

Imagine a situation where you need to consult a public API, but only your backend service allows this query to be made, so that third-party service queries are abstracted from the frontend. The project should be scalable, tested and well documented.

With this project, you can: authenticate, register, get stocks, get history stocks and list the top most searched stocks on the api.

# Requirements

The backend should have authentication and a profile validation, so with that, some functionalities are only available to people with an admin profile.

There are two distinct components in this project:

1. An API that is accessible to users, who can request information about quotes by sending requests to it.
2. A stock service that operates within the system and communicates with external APIs to obtain the quote information that was requested by users.

The project which search the stocks, should use the api from https://stooq.com to get information about the stocks.

*In order to create a user account, the API service requires a request containing an email address and user role, and it will generate a random password to return in response.* 

*Only users with superuser privileges can access the stats endpoint, which will provide information on the top 5 most frequently requested stocks.*

*Users can retrieve their query history for the API service by accessing the history endpoint. The endpoint will return a list of saved entries from the database, with the most recent entries displayed first.*

The project should have 8 endpoints:

#### **AUTH:**

- **POST**: /auth/register
```
Post body: { "email": "luiz@gmail.com", "role": "user" }  //role could be user or admin 

Response: { "email": "luiz@gmail.com", "password": "5bbab761-a483-410a-ac0f-3ee8d98d14af" }
```

- **POST**: /auth/login

- **POST**: /auth/logout

- **POST**: /auth/refresh-tokens

- **POST**: /auth/forgot-password

#### **HISTORY**

- **GET**: /history
```
[
    {"date": "2023-04-01T19:20:30Z", "name": "APPLE", "symbol": "AAPL.US", "open": "123.66", "high": 123.66, "low": 122.49, "close": "123"},
    {"date": "2023-03-25T11:10:55Z", "name": "APPLE", "symbol": "AAPL.US", "open": "121.10", "high": 123.66, "low": 122, "close": "122"},
]
```
#### **STATS**

- **GET**: /stats
```
[
    {"stock": "aapl.us", "times_requested": 10},
    {"stock": "msft.us", "times_requested": 9},
]
```

#### **STOCK**

- **GET**: /stock
```
{
  "name": "MICROSOFT",
  "symbol": "MSFT.US",
  "open": 100.66,
  "high": 102.66,
  "low": 99.49,
  "close": 101.00
  }
```

# Api project with server + serverless

The goal of this project is to do an example of how to do a project using a server to deal with the main problem, and a serverless to deal with less complex things turning it high scalable.

Basicly, is a user-facing API that will receive requests from registered users asking for quote information.
An internal stock service that queries external APIs to retrieve the requested quote information.

You can download and use this project as a boilerplate to develop with the same architecture.

# Considerations

The api service use a node and express server, to lead with some complex things, such as auth, jwt, connect to database, etc. As the stock service, was a simple service, it was chosen a serverless server to use less resources and make it simple. The main goal of using serverless is to keep the service scalable and cheaper (since will not be all the time online), thinking that this server can be used for another third parties projects and scale automatically.

The serverless was developed thinking to deploy on aws lambda. As this project is running local, was used the serverless-offline to emulate aws lambda.

# Architecture

<img src="architecture.svg" alt="logo" height="90" align="center">

# Techs and Frameworks

- **[Express](https://www.npmjs.com/package/express "express")**

- **[Axios](https://www.npmjs.com/package/axios "axios")**

- **[EsLint](https://www.npmjs.com/package/eslint)**

- **[Serverless](https://www.serverless.com/plugins/serverless-offline)**

- **[Jest](https://jestjs.io/)**

- **[Docker](https://www.docker.com)**

- **[Swagger](https://swagger.io)**

- **[Mongo](https://www.mongodb.com/)**

- **[Mongoose](https://mongoosejs.com)**

- **[Joi](https://www.npmjs.com/package/joi)**

# How to run

*** Clone the project

```cd node-challenge```

**ENVS**

To use the e-mail service (to get a new password), you need to configure the SMTP variables on .env.
- Duplicate the .env.example, creating a .env file, and set the SMTP variables. 
- To make it easier, you can use the following values, which emulate a fake email service:
```
SMTP_HOST=smtp.ethereal.email
SMTP_PORT=587
SMTP_USERNAME=dario.langworth64@ethereal.email
SMTP_PASSWORD=BmtTZcJTsnKBscA5Rk
EMAIL_FROM=dario.langworth64@ethereal.email
```

** All the e-mails will be sent to their service, which you can access on this link https://ethereal.email/login **
```
email=dario.langworth64@ethereal.email 
password=BmtTZcJTsnKBscA5Rk
```

To run the project, you need to follow the steps above:
- Install [Docker](https://www.docker.com) to run the project container

- On the root project, run the following commands:
```docker-compose build```
```docker-compose up```

The servers will be running on:

- Api service: http://localhost:4000

- Stock service: http://localhost:3000

- Swagger docs: http://localhost:4000/v1/docs/#/

# How to test

The endpoints that you can use, is documented on swagger, but this is how to use and test:
- Register an email at: http://localhost:4000/v1/auth/register
- Login to get your JWT token at: http://localhost:4000/v1/auth/login

- Use the baerer token returned by the endpoint.

There are some tests that you can run, you need to access the project you want to test and run the following steps:

```cd api-service``` or ```cd stock-service```

```yarn```

```yarn test```

# Next steps

To make a better project, some things could be developed:
- Full unit tests and integrations tests.
- Document the stock-api
- Create validations to the user, such as confirmation mail to register and confirmation mail to change password.
