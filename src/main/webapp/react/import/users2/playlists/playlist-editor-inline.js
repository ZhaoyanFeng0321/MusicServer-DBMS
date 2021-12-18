const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const PlaylistEditorInline = ({playlist, deletePlaylist, updatePlaylist}) => {
    const [playlistCopy, setPlaylistCopy] = useState(playlist)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={playlistCopy.title}
                            onChange={(e)=>setPlaylistCopy(playlistCopy => ({...playlistCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <Link to={`/playlists/${playlistCopy.id}/songs`}>
                            View songs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updatePlaylist(playlistCopy.id, playlistCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deletePlaylist(playlistCopy.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/playlists/${playlistCopy.id}`}>
                            {playlistCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/playlists/${playlistCopy.id}/songs`}>
                            View songs
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default PlaylistEditorInline;