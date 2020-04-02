# Contribution Guide

## Directory structure

```
src
├── api                                         # Here's where all the endpoints are 
├── config                                      # You probably won't need to change nothing here
├── public                                      # You probably won't need to change nothing here
├── server.js                                   # Server logs 
├── api.js                                      # Main entrypoint
├── app.js                                      # The Express application
```

## Creating new modules

- Create new modules inside the `src/` folder.
- Create the necessary files following the folder structure described before.

### Rules

- **Helpers** should end with `.helper.js`
- Should have unit tests ending with `.test.js`

## Pull Request Check List

Before open your Pull Request, check:

- [ ] I created and ran the unit tests (`npm test`).
- [ ] I created the documentation for my module.
- [ ] I tested the module manually 
