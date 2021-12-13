/*
In the listeners/listener-list.js React component, implement a screen that retrieves listeners from the server
and renders them as a list.
 */
import InlineListenerEditor from "./inline-listener-editor";
import listenerService from "./listener-service" // import userService to talk to the server

const {Link, useHistory} = window.ReactRouterDOM; // import Link component to navigate to other
                                                  // screens
const LISTENER_URL = "http://localhost:8080/orm/listeners"

const {useState, useEffect} = React; // import state management React hooks

const ListenerList = () => {
    /*
    Let's use user-service's findAllUsers function to retrieve all users from the server
    and store them in a users state variable initialized as an empty array.
     */

    const [listeners, setListeners] = useState([]) // create a users state variable
    //const [newListener, setNewListener] = useState({})
    useEffect(() => { // on load
        findAllListeners() // call local function findAllListeners()
    }, [])
    const findAllListeners = () => // local function findAllListeners
        listenerService.findAllListeners() // use userService.findAllListeners() to retrieve listeners from server
            .then(listeners => setListeners(listeners)) // store them in local listeners state variable

    // Add new user that not in "history"
    const history = useHistory()

    return (
        <div>
            <h2>Listeners</h2>

            <button onClick={() => history.push(
                "/listeners/new")} // Add a button that will navigate to the same listener edit form
                // we've been using,
                // but we'll pass "new" as the user ID, meaning we don't want to edit an existing
                // user, but create a new one instead.
                    className="btn btn-primary">
                Add Listener
            </button>


            <ul className="list-group">
                {
                    /*
                    iterate over the listeners array,
                    for each listener add a line item tag <li>,
                    for each listener render listener's user id, and language
                     */
                    listeners.map(listener =>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={`/listeners/${listener.id}`}>
                                                    {listener.firstName},
                                                    {listener.lastName},
                                                    {listener.username}
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

export default ListenerList;