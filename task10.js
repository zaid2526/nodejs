// 1......
// to make a package.json file run npm init command on terminal..
// then enter the information on the terminal according to the command..

//2...........
//npm start and npm start-server....
//we can make a default entry point for the project, and to run the project we just 
// just run the "npm start" command..
// we can just write a line of scripts in scipts section of package.json file
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node task7.js",
//     "start-server":"node task7.js"
//   }
//we can take any name but start a special keyword, for start keyword we just 
//simply type "npm start", for any other , we have to type "npm run 'key-name",
//example for "start-server"--- "npm run start-server", it could be any name 
// but neccessary to add run keyword after npm.

//3..........................
// npm install nodemon --save-dev // only for devlopment phase...
// nodemon solve the auto restart of the project when we make any changes in
// the project and save it, when we save the changes,then project auto restart..
// we do not need anything for restart....

//4.....
//--save-dev : it means installed package only for the devlopment phase, 
// the packages installedonly for dev phase,  that are not available in the production phase..
//--save :- it means installed packages are available bor the both development and 
//production phase also.. but only for that particular project

//5...........
// we just add "nodemon 'entry-file-name' " in the script section with "start" keyword
// in package.json file
// and after that ... just run "npm start"
// it mkaes ouer project autoRestart when make a chandes to save... everytmie... 
//..without doing anything..


