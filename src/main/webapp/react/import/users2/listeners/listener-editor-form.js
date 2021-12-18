import listenerService from "./listener-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ListenerFormEditor = () => {
    const {id} = useParams()
    const [listener, setListener] = useState({})

    useEffect(() => {
        if(id !== "new") {
            findListenerById(id)
        }
    }, []);

    const createListener = (listener) =>
        listenerService.createListener(listener)
            .then(() => history.back())

    const findListenerById = (id) =>
        listenerService.findListenerById(id)
            .then(listener => setListener(listener))

    const deleteListener = (id) =>
        listenerService.deleteListener(id)
            .then(() => history.back())

    const updateListener = (id, newListener) =>
        listenerService.updateListener(id, newListener)
            .then(() => history.back())

    return (
        <div>
            <h2>Listener Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={listener.id}/>
            <label>User Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setListener(listener =>
                                          ({...listener, username: e.target.value}))}
                   value={listener.username}/>
            <label>First Name</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's first name
                       setListener(listener => // as the listener types in the
                                   ({...listener, firstName: e.target.value}))} // input field
                   value={listener.firstName}/><br/>
            <label>Last Name</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's last name
                       setListener(listener => // as the listener types in the
                                   ({...listener, lastName: e.target.value}))} // input field
                   value={listener.lastName}/><br/>
            <label>Password</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's password
                       setListener(listener => // as the listener types in the
                                   ({...listener, password: e.target.value}))} // input field
                   value={listener.password}/><br/>
            <label>Email</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's password
                       setListener(listener => // as the listener types in the
                                   ({...listener, email: e.target.value}))} // input field
                   value={listener.email}/><br/>
            <label>Birthday</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's password
                       setListener(listener => // as the listener types in the
                                   ({...listener, dateOfBirth: e.target.value}))} // input field
                   value={listener.dateOfBirth}/><br/>
            <label>Vip</label>
            <input className="form-control"
                   onChange={(e) => // update local listener object's password
                       setListener(listener => // as the listener types in the
                                   ({...listener, vip: e.target.value}))} // input field
                   value={listener.vip}/><br/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteListener(listener.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createListener(listener)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateListener(listener.id, listener)}>
                Save
            </button>

            {/*<br/>*/}
            {/*<Link to={`/listeners/${listener.id}/collectings`}>*/}
            {/*    <h2>Collectings</h2>*/}
            {/*</Link>*/}

        </div>
    )
}

export default ListenerFormEditor

// import listenerService, {findListenerById} from "./listener-service" // import listener-service so we can fetch a single listener for the ID
//
// // use React's listenerState and listenerEffect hooks to load a listener identified by the ID encoded in the browser's path
// const {useState, useEffect} = React; // import React's hooks
//
// // import useParams to parse parameters from URL
// // import useHistory
// const {useParams, useHistory} = window.ReactRouterDOM;
//
// const ListenerFormEditor = () => {
//
//     //get the ID of the listener from the browser's path
//     const {id} = useParams() // parse "id" from URL as defined in URL pattern in index2.js
//     const [listener, setListener] = useState({})
//     useEffect(() => { // on load
//         if(id !== "new") { // check for the listener ID so that only load the listener if the ID is not "new"
//             findListenerById(id) // find the listener by their ID encoded from path
//         }
//     }, []);
//     const findListenerById = (id) => // fetch a single listener using their ID
//         listenerService.findListenerById(id) // use listener service's new findListenerById
//             .then(listener => setListener(listener)) // store listener from server to local listener state variable
//
//     /*
//        Declare a deleteListener event handling function we can invoke when we click on a new Delete button
//     */
//     const deleteListener = (id) => // deleteListener event handler accepts listener's ID
//         listenerService.deleteListener(id) // invokes listener service's deleteUse passing ID
//             .then(() => history.back()) // if successful, navigate back to listener list
//
//     /*
//     If the ID is different then "new", then we should load the existing listener. We'll also add a
//     new Create button that will send the new listener to the server. Finally, we'll need to make the
//     input fields editable by keeping track of any changes and updating the local listener instance so
//     we can send the latest listener data to the server.
//      */
//     const createListener = (listener) => // handle Create button click to send listener
//         listenerService.createListener(listener) // to the server
//             .then(() => history.back()) // then return to listener list
//
//     /*
//     Use the new update listener service to send updates to the server.
//      */
//     const updateListener = (id, newListener) => // update listener with ID with new listener data
//         listenerService.updateListener(id, newListener) // send new listener to server
//             .then(() => history.back()) // then go back to listener list
//
//     return (
//         /*
//          render the listener in the form
//          */
//         <div>
//             <h2>Listener Editor</h2>
//             <label>ID</label>
//             <input className="form-control"
//                    value={listener.id}/><br/>
//             <label>First Name</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's first name
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, firstName: e.target.value}))} // input field
//                    value={listener.firstName}/><br/>
//             <label>Last Name</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's last name
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, lastName: e.target.value}))} // input field
//                    value={listener.lastName}/><br/>
//             <label>Username</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's username
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, username: e.target.value}))} // input field
//                    value={listener.username}/><br/>
//             <label>Password</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's password
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, password: e.target.value}))} // input field
//                    value={listener.password}/><br/>
//             <label>Email</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's password
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, email: e.target.value}))} // input field
//                    value={listener.email}/><br/>
//             <label>Birthday</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's password
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, dateOfBirth: e.target.value}))} // input field
//                    value={listener.dateOfBirth}/><br/>
//             <label>Vip</label>
//             <input className="form-control"
//                    onChange={(e) => // update local listener object's password
//                        setListener(listener => // as the listener types in the
//                                    ({...listener, vip: e.target.value}))} // input field
//                    value={listener.vip}/><br/>
//
//             <button className="btn btn-danger" // new Cancel button
//                     onClick={() => { // add a button when you click use history to go back
//                         history.back()}}>
//                 Cancel
//             </button>
//             <button className="btn btn-danger" // new Delete button
//                 // notifies deleteListener event handler on click
//                     onClick={() => deleteListener(listener.id)}>
//                 Delete
//             </button>
//             <button className="btn btn-primary" // new Save button
//                 // sends updates to server
//                     onClick={() => updateListener(listener.id, listener)}>
//                 Save
//             </button>
//             <button className="btn btn-success" // new Create button to create new listener label
//                     onClick={() => createListener(listener)}>
//                 Create
//             </button>
//         </div>
//     )
// }
//
// export default ListenerFormEditor