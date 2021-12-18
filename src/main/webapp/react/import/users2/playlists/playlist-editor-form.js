import playlistService from "./playlist-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const PlaylistEditorForm = () => {
    const {id} = useParams()
    const [playlist, setPlaylist] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPlaylistById(id)
        }
    }, []);

    const createPlaylist = (playlist) =>
        playlistService.createPlaylist(playlist)
            .then(() => history.back())

    const findPlaylistById = (id) =>
        playlistService.findPlaylistById(id)
            .then(playlist => setPlaylist(playlist))

    const deletePlaylist = (id) =>
        playlistService.deletePlaylist(id)
            .then(() => history.back())

    const updatePlaylist = (id, newPlaylist) =>
        playlistService.updatePlaylist(id, newPlaylist)
            .then(() => history.back())

    return (
        <div>
            <h2>Playlist Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={playlist.id}/>
            <label>Title</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPlaylist(playlist =>
                                          ({...playlist, title: e.target.value}))}
                   value={playlist.title}/>
            <label>Description</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPlaylist(playlist =>
                                          ({...playlist, description: e.target.value}))}
                   value={playlist.description}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deletePlaylist(playlist.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createPlaylist(playlist)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updatePlaylist(playlist.id, playlist)}>
                Save
            </button>

            {/*<br/>*/}
            {/*<Link to={`/playlists/${playlist.id}/collectings`}>*/}
            {/*    <h2>Collectings</h2>*/}
            {/*</Link>*/}

        </div>
    )
}

export default PlaylistEditorForm

// import playlistService, {findPlaylistById} from "./playlist-service"
//
// const {useState, useEffect} = React
// const {useParams, useHistory} = window.ReactRouterDOM;
// //const PLAYLIST_URL = "http://localhost:8080/orm/playlists"
//
// const PlaylistEditorForm = () => {
//     const [playlist, setPlaylist] = useState({})
//     const {playlistId} = useParams()
//     const history = useHistory()
//     useEffect(() => {
//         findPlaylistById(playlistId)
//     }, []);
//     const findPlaylistById = (id) =>
//         playlistService.findPlaylistById(id)
//             .then(playlist => setPlaylist(playlist))
//     const updatePlaylist = (id, newPlaylist) =>
//         playlistService.updatePlaylist(id, newPlaylist)
//             .then(() => history.goBack())
//     const deletePlaylist = (id) =>
//         playlistService.deletePlaylist(id)
//             .then(() => history.goBack())
//
//     return (
//         <div>
//             <h2>
//                 Playlist Editor
//             </h2>
//             <label>Id</label>
//             <input
//                 className="form-control margin-bottom-10px"
//                 readOnly={true}
//                 value={playlist.id}/>
//             <label>Title</label>
//             <input
//                 className="form-control margin-bottom-10px"
//                 onChange={(e) => setPlaylist(playlist => ({...playlist, title: e.target.value}))}
//                 value={playlist.title}/>
//             <label>Year Released</label>
//             <input
//                 className="form-control margin-bottom-10px"
//                 onChange={(e) => setPlaylist(playlist => ({...playlist, description: e.target.value}))}
//                 value={playlist.description}/>
//             <button
//                 onClick={() => updatePlaylist(playlist.id, playlist)}
//                 className="btn btn-success btn-block">Save</button>
//             <button
//                 onClick={() => {
//                     history.goBack()
//                 }}
//                 className="btn btn-danger btn-block margin-left-10px">Cancel</button>
//             <button
//                 onClick={() => deletePlaylist(playlist.id)}
//                 className="btn btn-danger btn-block margin-left-10px">Delete</button>
//         </div>
//     )
// }
//
// export default PlaylistEditorForm