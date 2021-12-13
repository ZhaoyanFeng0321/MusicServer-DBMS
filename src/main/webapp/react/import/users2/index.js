/**
 * The root of the application (entry point of applications)
 * The App component implements navigation between two screens implemented in React components
 * ListenerList and ListenerFormEditor
 */
import ListenerList from "./listeners/listener-list"; // load ListenerList screen
import ListenerFormEditor from "./listeners/listener-form-editor"; // load ListenerFormEditor screen


const {HashRouter, Route} = window.ReactRouterDOM; // libraries for screen navigation
const App = () => { // root component
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/listeners", "/"]} exact={true}>
                    <ListenerList/>
                </Route>
                <Route path="/listeners/:id" exact={true}>
                    <ListenerFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;

/*
HashRouter defines two routes for navigating to either of two screens implemented by React components
ListenerList and ListenerFormEditor implemented under src/main/webapp/react/social/listeners/listener-list.js
and src/ main/webapp/react/social/listeners/listener-form-editor.js.

If the listener types a URL that matches "/" or "/listeners", then screen ListenerList is rendered.
If the listener types a URL that matches "/listeners" followed by a listener ID, then screen ListenerFormEditor is rendered.

The ListenerList component defines the default screen that displays when the listener first loads the application.
As the names suggest, the ListenerList screen will render a list of listeners and the ListenerFormEditor screen allows editing a listener using a form.

These two screens will allow full CRUD interaction with the listeners table through an HTTP API.
Communication with the server will be implemented in src/main/webapp/react/social/listeners/listener-service.js.
The navigation has already been setup for you so you don't have to do anything here either.

 */
