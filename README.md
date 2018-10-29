# Genesis18 Website

#### link for the website : [Genesis18](https://bvmites.github.io/genesis18-website "Genesis18")

## Dependencies
1. bootstrap-vue
2. vue-resource
3. vue-router
4. vuex
5. vue-recaptch

## Flow
1. Fetch events from events-api
2. Divide events into departments and make json
3. Loop the departments and route it with ID
4. Add the event into cart using eventID
5. compute the sum of events and form a temporary order
6. complete the recaptcha and confirm order
7. transfer temporary order to permanent order and send it to server
8. recieve order along with order-token from the server and display

## Components
1. Landing Component - UI component. Presented when the home page loads for the first time
2. Navbar component - Self explanatory
3. Order component - simple card for orders. represent order in cart view / order view. Represents details of the orders

## Views
1. Cart - A view that shows the pending orders of the usage
2. Department - A common view which renders the events of department based on the department-id provided.
3. Home - Home view of the website
4. Login - self explanatory
5. Orders - A view that shows the registered order of the user along with their order-token
6. Register - self explanatory
7. Team - A view containing details of the Genesis18 Heads
