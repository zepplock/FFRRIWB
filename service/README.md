# A RoR API backend for React example 
FFRRIWB = Flux/Flummox, React/Router, Immutable, Webpack, Babel

# API Usage

## Un-authenticated
`http localhost:3000/v1/stories`

## Authentication
Returns devise access token 
`http localhost:3000/v1/login username=user1@example.com password=password`

## Authenticated

### Post a new story
`echo '{"story": {"title": "aaa", "body": "loremipsum"}}' | http POST localhost:3000/v1/stories Authorization:1:ZEW5wjYYhkQWuVZxor7a`

### List my todos
`http "localhost:3001/v1/todos" Authorization:2:HpFX8YQGCgR8hifQxezr`

# Deployment
This project can be deployed to Heroku

  * Create a new heroku app
  * `heroku run rake db:migrate`
  * `heroku run rake db:seed`
  *  build web app with `grunt build`
  *  copy files from `client/build` to `service/public`
  * `git subtree push --prefix service heroku master`