# Node.js Microservice

## Tech Stack

- AWS Lambda
- Node.js
- OpenApi
- Serverless Framework
- TypeScript
- Jest
- Yarn

## Prerequisites
- Node v14+ installed.

## Getting Started

### Local
1. Install dependencies: `yarn`
1. Create an `.env` file and copy variables from `.env.example`
1. Build the microservice locally: `yarn invoke:<MicroserviceFunction>`

### AWS Lambda Deploy
1. Deploy the microservice to AWS Lambda: `yarn serverless deploy`
1. Checkout the microservice by running the endpoint that it creates on your first deploy.

(Note: the endpoint can be configured to a custom endpoint via AWS Route 53.)

## Unit Tests

- Run all Tests: `yarn test`

- Run single Test: `yarn test <TestRelativePath>`

## Linting

- Using airbnb linting with custom TypeScript configs, run: `yarn lint`

## Folder structure

Under `api-spec`:
- Includes the OpenAPI specification for each microservice.

Under `serverless.yml`:
- Declare your microservices, with custom configurations required to configure an AWS Lambda.

Under `src`:
- `/clients`: To call an external API endpoint or database for data.
- `/handlers`: Acts as an controller, handling http responses.
- `/helpers`: Reusuable methods that can be used across all microservices.
- `/services`: Building the API response.
- `config.ts`: Environment variable declaration with types.
- `errors.ts`: Error handling.
- `types.ts`: Includes all the Types.

---

By Raymond Ly
