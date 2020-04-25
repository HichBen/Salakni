# Salakni

## API
### Install

Run the command below
```
npm install
```
Note : npm install will automatically compile TypeScript to Javascript code and you will not need to run tsc.

### Start
To start the api, run the following command:

```
npm start
```
### Clean
The command below will clean up the api folder and re-run a clean install. 
```
npm run clean 
```

## Folder Structures

```
├── README.md
├── Salakni.iml
├── api
│   ├── package.json
│   ├── src
│   │   ├── controller
│   │   │   ├── client.ts
│   │   │   └── reviews.ts
|   |   |   └── providers.ts
│   │   ├── index.ts
│   │   ├── route
│   │   │   └── client.ts
|   |   |   └── providers.ts
│   │   └── service
│   │       └── client.ts
|   |   |   └── providers.ts
│   └── tsconfig.json
└── public
    ├── assets
    │   └── img
    ├── css
    │   ├── bootstrap
    │   │   ├── css
    │   │   └── js
    │   ├── provider.css
    │   └── style.css
    ├── docs
    ├── imgs
    ├── index.html
    ├── login.html
    ├── providers.html
    ├── signup.html
    └── user.html

```
