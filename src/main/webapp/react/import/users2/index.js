import ListenerList from "./listeners/listener-list";
import PlaylistList from "./playlists/playlist-list";
import CollectingList from "./collectings/collecting-list";
import ListenerEditorForm from "./listeners/listener-editor-form";
import PlaylistEditorForm from "./playlists/playlist-editor-form";
import CollectingEditorForm from "./collectings/collecting-editor-form";
import CollectingsForListener from "./collectings/collectings-for-listener";
import CollectingsForPlaylist from "./collectings/collectings-for-playlist";

const {HashRouter, Route, Link} = window.ReactRouterDOM;
const App = () => {
    // console.log(window.ReactRouterDOM)
    return (

        <div className="container">
            <HashRouter>
                <h1>Music Management System</h1>
                <div className="form-group row">
                    <div className="col-sm-1">
                        <Link to="/listeners">
                            Listener
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/playlists">
                            Playlist
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/collectings">
                            Collecting
                        </Link>
                    </div>
                </div>
                <br/>


                <Route path={["/listeners"]} exact={true}>
                    <ListenerList/>
                </Route>

                <Route path={["/playlists"]} exact={true}>
                    <PlaylistList/>
                </Route>

                <Route path={["/collectings"]} exact={true}>
                    <CollectingList/>
                </Route>

                <Route path="/listeners/:id" exact={true}>
                    <ListenerEditorForm/>
                </Route>

                <Route path="/playlists/:id" exact={true}>
                    <PlaylistEditorForm/>
                </Route>

                <Route path="/collectings/:id" exact={true}>
                    <CollectingEditorForm/>
                </Route>

                <Route path="/playlists/:pid/collectings" exact={true}>
                    <CollectingsForPlaylist/>
                </Route>

                <Route path="/listeners/:lid/collectings" exact={true}>
                    <CollectingsForListener/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;

// /**
//  * The root of the application (entry point of applications)
//  * The App component implements navigation between two screens implemented in React components
//  * ListenerList and ListenerFormEditor
//  */
// import ListenerList from "./listeners/listener-list"; // load ListenerList screen
// import ListenerFormEditor from "./listeners/listener-editor-form"; // load ListenerFormEditor screen
//

// const {HashRouter, Route} = window.ReactRouterDOM; // libraries for screen navigation
// const App = () => { // root component
//     return (
//         <div className="container-fluid">
//             <HashRouter>
//                 <Route path={["/listeners", "/"]} exact={true}>
//                     <ListenerList/>
//                 </Route>
//                 <Route path="/listeners/:id" exact={true}>
//                     <ListenerFormEditor/>
//                 </Route>
//
//             </HashRouter>
//         </div>
//     );
// }
//
// export default App;
//
// /*
// HashRouter defines two routes for navigating to either of two screens implemented by React components
// ListenerList and ListenerFormEditor implemented under src/main/webapp/react/social/listeners/listener-list.js
// and src/ main/webapp/react/social/listeners/listener-editor-form.js.
//
// If the listener types a URL that matches "/" or "/listeners", then screen ListenerList is rendered.
// If the listener types a URL that matches "/listeners" followed by a listener ID, then screen ListenerFormEditor is rendered.
//
// The ListenerList component defines the default screen that displays when the listener first loads the application.
// As the names suggest, the ListenerList screen will render a list of listeners and the ListenerFormEditor screen allows editing a listener using a form.
//
// These two screens will allow full CRUD interaction with the listeners table through an HTTP API.
// Communication with the server will be implemented in src/main/webapp/react/social/listeners/listener-service.js.
// The navigation has already been setup for you so you don't have to do anything here either.
//
//  */
