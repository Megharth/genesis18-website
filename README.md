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
