/*
In the artists/artist-list.js React component, implement a screen that retrieves artists from the server
and renders them as a list.
 */
import InlineArtistEditor from "./inline-artist-editor";
import artistService from "./artist-service" // import userService to talk to the server

const {Link, useHistory} = window.ReactRouterDOM; // import Link component to navigate to other
                                                  // screens
const ARTIST_URL = "http://localhost:8080/orm/artists"

const {useState, useEffect} = React; // import state management React hooks

const ArtistList = () => {
    /*
    Let's use user-service's findAllUsers function to retrieve all users from the server
    and store them in a users state variable initialized as an empty array.
     */

    const [artists, setArtists] = useState([]) // create a users state variable
    //const [newArtist, setNewArtist] = useState({})
    useEffect(() => { // on load
        findAllArtists() // call local function findAllArtists()
    }, [])
    const findAllArtists = () => // local function findAllArtists
        artistService.findAllArtists() // use userService.findAllArtists() to retrieve artists from server
            .then(artists => setArtists(artists)) // store them in local artists state variable

    // Add new user that not in "history"
    const history = useHistory()

    return (
        <div>
            <h2>Artists</h2>

            <button onClick={() => history.push(
                "/artists/new")} // Add a button that will navigate to the same artist edit form
                // we've been using,
                // but we'll pass "new" as the user ID, meaning we don't want to edit an existing
                // user, but create a new one instead.
                    className="btn btn-primary">
                Add Artist
            </button>


            <ul className="list-group">
                {
                    /*
                    iterate over the artists array,
                    for each artist add a line item tag <li>,
                    for each artist render artist's user id, and language
                     */
                    artists.map(artist =>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={`/artists/${artist.id}`}>
                                                    {artist.firstName},
                                                    {artist.lastName},
                                                    {artist.username}
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={`/artists/${artist.id}/albums`}>
                                                    View albums
                                                </Link>
                                            </div>
                                            {/*<div className="col-3">*/}
                                            {/*    <i className="fas fa-plus fa-2x float-right"*/}
                                            {/*       onClick={() => createAlbum(newAlbum)}></i>*/}
                                            {/*</div>*/}
                                        </div>
                                    </li>)
                }
            </ul>


        </div>

    )
}

export default ArtistList;