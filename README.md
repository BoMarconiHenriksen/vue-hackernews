# Vue HackerNews

A Hacker News clone with tests, written for the book [Testing Vue.js Applications](https://www.manning.com/books/testing-vuejs-applications)

## Test

Run full suite:

```
npm run test
```

Unit tests:
```
npm run test:unit
```

Integration tests:
```
npm run test:integration
```

E2E tests:
```
npm run test:e2e
```

## Development

Run the development server:

```
npm run serve
```

## Running the Hacker News production build locally
```
npm install http-server -g
```

```
npm run build
```

cd into the dist folder.

```
http-server
or
http-server –p 1234

http://localhost:8000.
```
