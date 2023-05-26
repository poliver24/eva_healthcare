# eva_healthcare
Frontend Tech test for Eva Health

## Task Description:
Frontend task (1 hour)

Make a standalone web page to create a user. We need to collect the user’s first and last names, email address and age.
There is a POST api at https://mockend.com/api/pgilgunn/coding-test/users which will take data in the form:

{
"firstName": "",
"lastName": "",
"age": 34,
"email": "someone@example.com"
}

And respond with an object containing an “id” when successful
There is a GET endpoint at the same which may prove useful for testing, but note that this is a mocked API and will return random data and data you post won’t actually be saved.
   Eva Health Technologies Limited

## Approach 
I will be create a ReactJS App to do the following:

- Create a form collecting users first name, last name, email address and date of birth
- convert D.O.B to age in years
- Add validation to ensure all fields are collected
- onSubmit post form to https://mockend.com/api/pgilgunn/coding-test/users

I will then: 

- Add end to end testing to ensure code is working as designed
- Dockerise frontend for ease of use/deployment

### Form
The form will have 3 parts:
- First name & last Name
- Email address
- Date of Birth

## Running the Project

### Docker Compose

If you have Docker and Docker Compose installed, running the project becomes straightforward.

1. First, navigate to the root directory of the project in your terminal.

2. Run the following command:

    ```shell
    docker compose up
    ```

3. This command will build the Docker images and start the Docker containers as specified in the `docker-compose.yml` file.

4. The project should now be running and accessible at `http://localhost:3000` (or whichever port was specified in the Docker Compose file).

### NPM

If you want to run only the frontend react app, you can do so with npm.

1. Navigate to the root directory of the project in your terminal.

2. Install the project dependencies by running:

    ```shell
    npm install
    ```

3. Once the dependencies are installed, you can start the project by running:

    ```shell
    npm run start
    ```

4. The React app should now be running and accessible at `http://localhost:3000`.

