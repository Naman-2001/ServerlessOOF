## My first try on going serveless with AWS lambda functions along with dynamodb and other microservices.

## Packages included for AWS support
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```
## To deploy
```
sls deploy -v
```
##To deploy a specific function
```
sls deploy -f FUNCTION_NAME -v
```

You are ready to go!
