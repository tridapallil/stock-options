# Api project with server + serverless (microservice)
The goal of this project is to do an example of how to do a project using a service to deal with main problem from a software and a serverless to deal with little things

Basicly, a user-facing API that will receive requests from registered users asking for quote information.
An internal stock service that queries external APIs to retrieve the requested quote information.

You can download and use this project as a boilerplate to develop with the same architecture. 

# Considerations

The api service use a node and express server, to lead with some complex things, such as auth, jwt, connect to database, etc. As the stock service, was a simple service, it was chosen a serverless server to use less resources and make it simple. The serverless was developed thinking to deploy on aws lambda. As this project is running local, was used the serverless-offline to emulate aws lambda.

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
