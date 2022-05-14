# X Files GraphQL API
An X-Files GraphQL API which can be found at https://x-files.dev. Under the hood this is a server built using `apollo-server-express` deployed to AWS Elastic Beanstalk (manually for now).

# Setup
```bash
# clone the repo
git clone git@github.com:elloboblanco/x-files-api.git

# use proper version of node and install global tools
nvm use

# install dependencies and run the server
npm i
npm run start:dev
```

# Production Build
```bash
npm run build
npm start
```
