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

