import artistService, {findArtistById} from "./artist-service" // import artist-service so we can fetch a single artist for the ID

// use React's artistState and artistEffect hooks to load a artist identified by the ID encoded in the browser's path
const {useState, useEffect} = React; // import React's hooks

// import useParams to parse parameters from URL
// import useHistory
const {useParams, useHistory} = window.ReactRouterDOM;

const ArtistFormEditor = () => {

    //get the ID of the artist from the browser's path
    const {id} = useParams() // parse "id" from URL as defined in URL pattern in index2.js
    const [artist, setArtist] = useState({})
    useEffect(() => { // on load
        if(id !== "new") { // check for the artist ID so that only load the artist if the ID is not "new"
            findArtistById(id) // find the artist by their ID encoded from path
        }
    }, []);
    const findArtistById = (id) => // fetch a single artist using their ID
        artistService.findArtistById(id) // use artist service's new findArtistById
            .then(artist => setArtist(artist)) // store artist from server to local artist state variable

    /*
       Declare a deleteArtist event handling function we can invoke when we click on a new Delete button
    */
    const deleteArtist = (id) => // deleteArtist event handler accepts artist's ID
        artistService.deleteArtist(id) // invokes artist service's deleteUse passing ID
            .then(() => history.back()) // if successful, navigate back to artist list

    /*
    If the ID is different then "new", then we should load the existing artist. We'll also add a
    new Create button that will send the new artist to the server. Finally, we'll need to make the
    input fields editable by keeping track of any changes and updating the local artist instance so
    we can send the latest artist data to the server.
     */
    const createArtist = (artist) => // handle Create button click to send artist
        artistService.createArtist(artist) // to the server
            .then(() => history.back()) // then return to artist list

    /*
    Use the new update artist service to send updates to the server.
     */
    const updateArtist = (id, newArtist) => // update artist with ID with new artist data
        artistService.updateArtist(id, newArtist) // send new artist to server
            .then(() => history.back()) // then go back to artist list

    return (
        /*
         render the artist in the form
         */
        <div>
            <h2>Artist Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={artist.id}/><br/>
            <label>First Name</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's first name
                       setArtist(artist => // as the artist types in the
                                   ({...artist, firstName: e.target.value}))} // input field
                   value={artist.firstName}/><br/>
            <label>Last Name</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's last name
                       setArtist(artist => // as the artist types in the
                                   ({...artist, lastName: e.target.value}))} // input field
                   value={artist.lastName}/><br/>
            <label>Username</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's username
                       setArtist(artist => // as the artist types in the
                                   ({...artist, username: e.target.value}))} // input field
                   value={artist.username}/><br/>
            <label>Password</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's password
                       setArtist(artist => // as the artist types in the
                                   ({...artist, password: e.target.value}))} // input field
                   value={artist.password}/><br/>
            <label>Email</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's password
                       setArtist(artist => // as the artist types in the
                                   ({...artist, email: e.target.value}))} // input field
                   value={artist.email}/><br/>
            <label>Birthday</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's password
                       setArtist(artist => // as the artist types in the
                                   ({...artist, dateOfBirth: e.target.value}))} // input field
                   value={artist.dateOfBirth}/><br/>
            <label>Language</label>
            <input className="form-control"
                   onChange={(e) => // update local artist object's password
                       setArtist(artist => // as the artist types in the
                                   ({...artist, language: e.target.value}))} // input field
                   value={artist.language}/><br/>

            <button className="btn btn-danger" // new Cancel button
                    onClick={() => { // add a button when you click use history to go back
                        history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger" // new Delete button
                // notifies deleteArtist event handler on click
                    onClick={() => deleteArtist(artist.id)}>
                Delete
            </button>
            <button className="btn btn-primary" // new Save button
                // sends updates to server
                    onClick={() => updateArtist(artist.id, artist)}>
                Save
            </button>
            <button className="btn btn-success" // new Create button to create new artist label
                    onClick={() => createArtist(artist)}>
                Create
            </button>
        </div>
    )
}

export default ArtistFormEditor