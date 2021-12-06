const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const AlbumEditorInline = ({album, deleteAlbum, updateAlbum}) => {
    const [albumCopy, setAlbumCopy] = useState(album)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={albumCopy.title}
                            onChange={(e)=>setAlbumCopy(albumCopy => ({...albumCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <Link to={`/albums/${albumCopy.id}/songs`}>
                            View songs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateAlbum(albumCopy.id, albumCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteAlbum(album.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/albums/${albumCopy.id}`}>
                            {albumCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/albums/${albumCopy.id}/songs`}>
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

export default AlbumEditorInline;