# Serverless Framework Node HTTP API with Dynamoose on AWS

Este proyecto simple demuestra como crear un API RESTful utilizando el framework Serverless en AWS. Utilizamos AWS lambda para ejecutar nuestro codigo, API Gateway para gestionar las rutas de la API y DynamoDB como nuestra base de datos NoSQL.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Requisitos previos
- Node.js
- Serverless Framework configurado con tus credenciales de AWS.
- Dynamoose.js como biblioteca para trabajar con Amazon DynamoDB

### Despliege

```
$ npm install
$ serverless deploy
```

Despues de desplegar, deberias ver una salida similar a:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoints: 
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/starWarsPeople
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/starWarsPeople/{id}
functions:
  createStarWarsPeople: aws-node-reto-backend-dev-createStarWarsPeople
  getStarWarsPerson: aws-node-reto-backend-dev-getStarWarsPerson
```

### Invocacion
Después de una implementación exitosa, puede llamar a las URL con su respectivo Verbo.

```bash
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/starWarsPeople
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/starWarsPeople/1
```
_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).


