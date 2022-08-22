# X Files GraphQL API

An X-Files GraphQL API which can be found at https://x-files.dev. Under the hood this is a server built using `apollo-server-lambda` deployed to AWS Lambda.

# Setup

```bash
# clone the repo
git clone git@github.com:elloboblanco/x-files-api.git

# use proper version of node and install global tools
nvm use
npm install --location=global serverless

# install dependencies and run the server
npm install
npm run start:dev
```

# Production Build

```bash
npm run build
npm start
```
