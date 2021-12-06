/**
 * The root of the application (entry point of applications)
 * The App component implements navigation between two screens implemented in React components
 * ArtistList and ArtistFormEditor
 */
import ArtistList from "./artists/artist-list"; // load ArtistList screen
import ArtistFormEditor from "./artists/artist-form-editor"; // load ArtistFormEditor screen
import AlbumList from "./productions/albums/album-list";
import AlbumEditorForm from "./productions/albums/album-editor-form";
import SongList from "./productions/songs/song-list";
import SongEditorForm from "./productions/songs/song-editor-form";

const {HashRouter, Route} = window.ReactRouterDOM; // libraries for screen navigation
const App = () => { // root component
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
                <Route path="/artists/:id" exact={true}>
                    <ArtistFormEditor/>
                </Route>
                <Route path="/artists/:artistId/albums" exact={true}>
                    <AlbumList/>
                </Route>
                <Route path="/albums/:albumId" exact={true}>
                    <AlbumEditorForm/>
                </Route>
                <Route path="/albums/:albumId/songs" exact={true}>
                    <SongList/>
                </Route>
                <Route path="/songs/:songId" exact={true}>
                    <SongEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;

/*
HashRouter defines two routes for navigating to either of two screens implemented by React components
ArtistList and ArtistFormEditor implemented under src/main/webapp/react/social/artists/artist-list.js
and src/ main/webapp/react/social/artists/artist-form-editor.js.

If the artist types a URL that matches "/" or "/artists", then screen ArtistList is rendered.
If the artist types a URL that matches "/artists" followed by a artist ID, then screen ArtistFormEditor is rendered.

The ArtistList component defines the default screen that displays when the artist first loads the application.
As the names suggest, the ArtistList screen will render a list of artists and the ArtistFormEditor screen allows editing a artist using a form.

These two screens will allow full CRUD interaction with the artists table through an HTTP API.
Communication with the server will be implemented in src/main/webapp/react/social/artists/artist-service.js.
The navigation has already been setup for you so you don't have to do anything here either.

 */
