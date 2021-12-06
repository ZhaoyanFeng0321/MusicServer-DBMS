/*
let's try retrieving the users from within our Web application
 */
// TODO: declare URL where server listens for HTTP requests
const ARTISTS_URL = "http://localhost:8080/orm/artists"

// TODO: retrieve all artists from the server
export const findAllArtists = () =>
    fetch(ARTISTS_URL) // send GET request to server
        .then(response => response.json()) // parse response from server

// TODO: retrieve a single artist by their ID
export const findArtistById = (id) => // send HTTP GET request to server
    fetch(`${ARTISTS_URL}/${id}`) // encode user ID at end of path
        .then(response => response.json()) // parse HTTP response body as JSON

// TODO: delete a artist by their ID
export const deleteArtist = (id) => // deleteUser function accepts user's ID
    fetch(`${ARTISTS_URL}/${id}`, { // encode user's ID at the end of the URL
        method: "DELETE" // send an HTTP DELETE request to the server
    })

// TODO: create a new artist using a function called createArtist() that POSTs a new artist to the server
//  formatted as a string representation of a JSON user object
export const createArtist = (artist) => // accept a user object
    fetch(ARTISTS_URL, { // send user object to server
        method: 'POST', // using HTTP POST
        body: JSON.stringify(artist), // encode object as a JSON string
        headers: {'content-type': 'application/json'} // tell server to interpret this as an object
    })
        .then(response => response.json()) // parse response from server

// TODO: update a artist by their ID
export const updateArtist = (id, artist) => // update a artist whose ID is id and new values are in artist
    fetch(`${ARTISTS_URL}/${id}`, { // send request to server with ID embedded in URL
        method: 'PUT', // send an HTTP PUT request
        body: JSON.stringify(artist), // embed artist data in the BODY as JSON string
        headers: {'content-type': 'application/json'} // tell server to interpret object as JSON
    })
        .then(response => response.json()) // parse response

// TODO: export all functions as the API to this service
export default { // export functions in this file for others to import
    findAllArtists, // The findAllArtists function retrieves users from the server
    findArtistById, // export this function for others to import
    deleteArtist, // export method for others to import
    createArtist, // export so others can import
    updateArtist // export for others to import
}