# FFRRIWB

## Live demo
[Deployed to Heroku](http://ffrriwb.herokuapp.com)

Currently, it uses:

* [React](http://facebook.github.io/react/) with [JSX](https://facebook.github.io/jsx/);
* [Flummox](https://github.com/acdlite/flummox) ([Flux](http://facebook.github.io/flux/) implementation) for the stores;
* [React-Router](https://github.com/rackt/react-router);
* [Immutable.js](http://facebook.github.io/immutable-js/) for immutability in the stores;
* [Babel](https://babeljs.io/) for ES6/ES7 transpilation and linting;
* [Webpack](http://webpack.github.io/) for the tooling and workflow management.

What was added/perfected:
Based on [Idiomatic React](https://github.com/netgusto/IdiomaticReact)

*  Flummox used to simplify Flux
*  Login modal dialog
*  Token based authentication to a (Rails) API
*  Async success/failure action handling
*  React-bootstrap used to simplify UI
*  Moved some objects to have ES6/ES7 style
*  Full login/logout action/store/UI logic
*  Example of access to private/public APIs, CRUD operations


## Install & run

```
npm install
grunt serve
```

Then navigate to [http://localhost:8000/webpack-dev-server]

## License

The MIT License (MIT). See the **LICENSE** file.
