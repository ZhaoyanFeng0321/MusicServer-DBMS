/*
let's try retrieving the users from within our Web application
 */
// TODO: declare URL where server listens for HTTP requests
const LISTENERS_URL = "http://localhost:8080/orm/listeners"

// TODO: retrieve all listeners from the server
export const findAllListeners = () =>
    fetch(LISTENERS_URL) // send GET request to server
        .then(response => response.json()) // parse response from server

// TODO: retrieve a single listener by their ID
export const findListenerById = (id) => // send HTTP GET request to server
    fetch(`${LISTENERS_URL}/${id}`) // encode user ID at end of path
        .then(response => response.json()) // parse HTTP response body as JSON

// TODO: delete a listener by their ID
export const deleteListener = (id) => // deleteUser function accepts user's ID
    fetch(`${LISTENERS_URL}/${id}`, { // encode user's ID at the end of the URL
        method: "DELETE" // send an HTTP DELETE request to the server
    })

// TODO: create a new listener using a function called createListener() that POSTs a new listener to the server
//  formatted as a string representation of a JSON user object
export const createListener = (listener) => // accept a user object
    fetch(LISTENERS_URL, { // send user object to server
        method: 'POST', // using HTTP POST
        body: JSON.stringify(listener), // encode object as a JSON string
        headers: {'content-type': 'application/json'} // tell server to interpret this as an object
    })
        .then(response => response.json()) // parse response from server

// TODO: update a listener by their ID
export const updateListener = (id, listener) => // update a listener whose ID is id and new values are in listener
    fetch(`${LISTENERS_URL}/${id}`, { // send request to server with ID embedded in URL
        method: 'PUT', // send an HTTP PUT request
        body: JSON.stringify(listener), // embed listener data in the BODY as JSON string
        headers: {'content-type': 'application/json'} // tell server to interpret object as JSON
    })
        .then(response => response.json()) // parse response

// TODO: export all functions as the API to this service
export default { // export functions in this file for others to import
    findAllListeners, // The findAllListeners function retrieves users from the server
    findListenerById, // export this function for others to import
    deleteListener, // export method for others to import
    createListener, // export so others can import
    updateListener // export for others to import
}