## Starting

Git clone project
```sh
git clone https://github.com/developer-kirill-nefodov/spa-project.git

cd ./SPA Project/
```

Install dependencies
```sh
npm install
```
Start project
```sh
npm run server
```
```sh
npm run client
```

## Description


## Project running
### Front running: http://localhost:3000
* dashboard: http://localhost:3000/dashboard
* add new entry: http://localhost:3000/details/new
* update entry: `http://localhost:3000/details/[id]`

### Backend running: http://localhost:4000
* api docs: http://localhost:4000/graphql
```
body: {
  id: string
  text1?: string
  text2?: string
  text3?: string
  summary?: string
  nickname?: string
  createdAt?: string
  updatedAt?: string
}
```

## Technologies:
 * Node
 * REST API
 * GraphQL
 * React
 * Apollo
 * Typescript

## Dependencies:
 * react
 * react-router-dom
 * styled-components
