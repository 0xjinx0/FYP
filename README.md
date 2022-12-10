# Chia Jing Herng FYP (Charity Authentication System using Blockchain Technology)

A charity authentication system prototype made with ReactJS as the frontend and build on the Ethereum Blockchain.\
With the objective to help improve the donation gathered by charitable organization. 

## Important stuff to take note before deploying the application!
1. This prototype application is set to run on a fake local blockchain Truffle Ganache.
2. Kindly install Truffle Ganache [here](https://trufflesuite.com/ganache/)
3. Ensure the Ganache is running when the application is deployed.

## Deploy with ease
Simply run the following command and enjoy the application! 

 ```
sudo git clone https://github.com/0xjinx0/FYP.git
cd FYP
sudo npm start
```

## Troubleshooting 
If an error pops-out indicating that react scripts are not installed, kindly run `sudo npm install react-scripts` in the `FYP` folder.

## Instructions (Manual creation of the application using the folders in this project)
The below instructions are only needed if you want to create the React Application manually.\
Kindly follow the steps below to use the application on your localhost (with fake/personal blockchain installed, e.g. Ganache, Hardhat)

### `npx create-react-app <name of application>`
Create a React application template by running the codew above.\
This should create all the essentials files and folder for a React application

## Essential installations
Kindly follow the instructions below to install necessary utilities that are used in this project.

### `npm install react-router-dom`
Run the commnad above to install routing features from react that is used in this project

### `npm install --save react-router-hash-link`
Run the commnad above to install HASH ROUTING (precise routing to a specific location on a page by id)

## Starting up the application
Follow the instructions below to run the application on your localhost.\
Please ensure previous steps have been achieved without error.

### `import the files from this repository into the development folder`
Once the React template is created, remove template files and add in the files from this repository following the branches (main, src, src>components, src>components>pages)

### `DO NOT REMOVE node_modules folder`
Use the node modules folder that has been created when running `npx create-react-app <name of application>`\
ONLY REPLACE PUBLIC, SRC, README.md, ADD IMAGE AND AFTER TOO

### `Before starting`
Kindly update the index.html as well as the favicon.ico in the public directory to ensure the frontend of the application is rendered in the correct way.

### `npm start`
Run the command above to launch the application on your localhost:3000

## Troubleshooting
This section will have some commands that would be useful when encountering some errors while developing and running the code on your local machine.\
The commands below are not mandatory to be executed, but can be used when facing certain errors and bugs that may occur.

### `npm install react-scripts`
Run the command above if there the applciation encounters an error indicating that there are no scripts found.

### `npm install --global yarn`
Run the commnad above to install yarn if it is not installed previously.

