# Knight Chess Api 

## Setup

### Install dependencies

To run this project you will need to install:

- [NodeJS](https://nodejs.org/en/) (you can install the LTS version)
- I recommend you to use the [NVM](https://github.com/creationix/nvm) to install NodeJS.


To run this project, you need to:

**1) Configure the ejnv for the first usage**

- Install the dependencies. `npm install .`
- Setup the environment variables on the file `.env`


## Run

- `npm start` - Starts the Express server with logging
- **Important**: The server would be listen on the host:port that you configured on the `.env` 
```
APP_BASE_URL=http://localhost:4000
API_BASE_URL=http://localhost
PORT=3000
```


## Available scripts 

- `npm test` - Run all tests from the repository 
- `npm run test-file {path/to/file}` - Run only the specified test files 
- `npm run test:tdd` - Run all tests and watch for changing on the files 
- `npm run test:tdd {path/to/file}` - Run only the specified test file and watch for changes 

## The algorithm to get the knight moves
- There's at max 8 possibilities of moves given any initial position.
- Those are combinations of:
```
    (x - 1, y + 2)
    (x - 1, y - 2)
    (x - 2, y + 1)
    (x - 2, y - 1)
    (x + 1, y + 2)
    (x + 1, y - 2)
    (x + 2, y + 1)
    (x + 2, y - 1)
```
- Considering that, I implemented a recursive algorithmm like the following:
- Get the Algebraic Notation(A1) as (x,y)
- Validate all possible combinations
- If the turn is not 2, repeat with turn = turn + 1 
- Else, return all combinations found
