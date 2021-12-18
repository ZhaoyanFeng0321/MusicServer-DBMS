import playlistService from "./playlist-service";
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const PlaylistList = () => {

    const history = useHistory()
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        findAllPlaylists()
    }, [])

    const findAllPlaylists = () =>
        playlistService.findAllPlaylists()
            .then(playlists => setPlaylists(playlists))


    return(
        <div className="container">
            <h2>Playlists List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/playlists/new")}>
                Add Playlist
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Title</div>
                        <div className="col-sm-2">Description</div>
                    </div>
                </li>
                {
                    playlists.map(playlist =>

                                     <li className="list-group-item"
                                         key={playlist.id}>
                                         <Link to={`/playlists/${playlist.id}`}>
                                             <div className="form-group row">
                                                 <div className="col-sm-2">{playlist.id}</div>
                                                 <div className="col-sm-2">{playlist.title}</div>
                                                 <div className="col-sm-2">{playlist.description}</div>
                                             </div>
                                         </Link>
                                     </li>)
                }
            </ul>
        </div>
    )
}

export default PlaylistList;

// import PlaylistEditorInline from "./playlist-editor-inline";
// import playlistService, {createPlayListForListener} from "./playlist-service"
//
// const LISTENER_URL = "http://localhost:8080/orm/listeners"
// const PLAYLIST_URL = "http://localhost:8080/orm/playlists"
// const { useState, useEffect } = React;
// const {Link, useParams, useHistory} = window.ReactRouterDOM;
//
// const PlaylistList = () => {
//     const [playlists, setPlaylists] = useState([])
//     const [newPlaylist, setNewPlaylist] = useState({})
//     const {listenerId} = useParams()
//     useEffect(() => {
//         findPlaylistsForListener(listenerId)
//     }, [])
//     // useEffect(() => {
//     //     findAllPlaylists()
//     // }, [])
//
//    const createPlaylistForListener = (playlist) =>
//         playlistService.createPlaylistForListener(listenerId, playlist)
//             .then(playlist => {
//                 setNewPlaylist({name:''})
//                 setPlaylists(playlists => ([...playlists, playlist]))
//             })
//     const findPlaylistsForListener = (listenerId) =>
//         playlistService.findPlaylistsForListener(listenerId)
//             .then(playlists => setPlaylists(playlists))
//     const createPlaylist = (playlist) =>
//         playlistService.createPlaylist(playlist)
//             .then(playlist => {
//                 setNewPlaylist({title:''})
//                 setPlaylists(playlists => ([...playlists, playlist]))
//             })
//     const updatePlaylist = (id, newPlaylist) =>
//         playlistService.updatePlaylist(id, newPlaylist)
//             .then(playlist => setPlaylists(playlists => (playlists.map(playlist => playlist.id === id ? newPlaylist : playlist))))
//     const findAllPlaylists = () =>
//         playlistService.findAllPlaylists()
//             .then(playlists => setPlaylists(playlists))
//     const deletePlaylist = (id) =>
//         playlistService.deletePlaylist(id)
//             .then(playlists => setPlaylists(playlists => playlists.filter(playlist => playlist.id !== id)))
//     return(
//         <div>
//             <h2>
//                 <Link onClick={() => history.back()}>
//                     <i className="fas fa-arrow-left margin-right-10px"></i>
//                 </Link>
//                 Playlists
//             </h2>
//             <ul className="list-group">
//                 <li className="list-group-item">
//                     <div className="row">
//                         <div className="col">
//                             <input placeholder="Playlist Title"
//                                    title="Please enter a title for the playlist" className="form-control" value={newPlaylist.title}
//                                    onChange={(e) => setNewPlaylist(newPlaylist => ({...newPlaylist, title: e.target.value}))}/>
//                         </div>
//                         <div className="col-3">
//                             <i className="fas fa-plus fa-2x float-right" onClick={() => createPlaylistForListener(newPlaylist)}></i>
//                         </div>
//                     </div>
//                 </li>
//             {
//                 playlists.map(playlist =>
//                     <li key={playlist.id} className="list-group-item">
//                         <PlaylistEditorInline key={playlist._id}
//                             updatePlaylist={updatePlaylist}
//                             deletePlaylist={deletePlaylist}
//                             playlist={playlist}/>
//                     </li>)
//             }
//             </ul>
//         </div>
//     )
// }
//
// export default PlaylistList;