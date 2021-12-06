const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SongEditorInline = ({song, deleteSong, updateSong}) => {
    const [songCopy, setSongCopy] = useState(song)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={songCopy.name}
                            onChange={(e)=>setSongCopy(songCopy => ({...songCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="col"
                            className="form-control"
                            value={songCopy.genre}
                            onChange={(e)=>setSongCopy(songCopy => ({...songCopy, genre: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSong(songCopy.id, songCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSong(song.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/songs/${songCopy.id}`}>
                            {songCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                            {songCopy.genre}
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

export default SongEditorInline;