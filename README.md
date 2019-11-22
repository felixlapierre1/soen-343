# soen-343
SOEN343 - Software Design 1 - Team Project

| Team Member        | Github User           |
| ------------- |:-------------:|
| Felix Lapierre     | felixlapierre |
| Rebecca (Jun) Loke      | arejayelle      |
| Alec Adub | alecadub      |
| Sharon Chee Yin Ho | sharon-ho |
| Brianne O'Gallagher-Roy | bogalla |
| Ferdousara Parvin | ferdousara-parvin |
| Thomas Gauvin | thomasgauvin |
| Dang Lam Ha Lara Tran | lara-tran |
| Mike Brichko | MikeBrichko |
| Viveka Anban | viveanban |

## How to set up Backend
### Setting up Gradle
- Install Gradle
- Make sure the environment variable JAVA_HOME contains the directory in which your JDK installation is located
### Setting up PostgreSQL
- Install PostgreSQL
  - It is recommended to leave all the default options.
  - pgAdmin will be installed alongside PostgreSQL.
  - Make sure to remember the password that you select for your admin user.
- Open pgAdmin
- In pgAdmin, Go to Servers -> PostgreSQL -> Databases, right click on Databases, and select Create -> Database
  - Is is recommended you name your database `wheelyclean`
- Close pgAdmin
- Open the folder at `WheelyCleanBackend/src/main/resources`
- Create a copy of the file `application.properties.example` and rename it to `application.properties`
- Edit the file:
  - Change the value of `spring.datasource.username` to the username of your PostgreSQL user.
  - Change the value of `spring.datasource.password` to the password of your PostgreSQL user.
  - Make sure the value of `spring.datasource.url` ends with the name of your database (default is `wheelyclean`)
### Starting the server
- Open a terminal in the WheelyCleanBackend folder
- Enter the command "run.bat". It will build and run the backend server on port 8080. You can check that the server has started correctly by heading to localhost:8080/greeting

## How to setup Frontend
### Prereqs
- Install Node.js (comes with npm)
- To verify that Node.js is installed, open a terminal and enter the command "node -v"
- To verify that Node.js is installed, open a terminal and enter the command "npm -v"
- Add a 'env.js' file to the src folder of wheely-clean-frontend folder
- Example env.js file:
    ``` export const APIKey = 'api_key;
        export const CUSTOMER_ID = 'customer_id';
        export const CLEANER_ID = 'cleaner_id';```
### Starting the server
- Open a separate terminal in the wheely-clean-frontend folder
- Enter the command "npm i"
- To start the server, enter the command "npm start". Head to "localhost:4200"

