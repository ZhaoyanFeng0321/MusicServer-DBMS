const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineArtistEditor = ({artist, deleteArtist, updateArtist}) => {
    const [artistCopy, setArtistCopy] = useState(artist)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={artistCopy.userId}
                            onChange={(e)=>setArtistCopy(artistCopy => ({...artistCopy, userId: e.target.value}))}/>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <input*/}
                    {/*        className="form-control"*/}
                    {/*        value={artistCopy.language}*/}
                    {/*        onChange={(e)=>setArtistCopy(artistCopy => ({...artistCopy, language: e.target.value}))}/>*/}
                    {/*</div>*/}
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}/albums`}>
                            View albums
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateArtist(artistCopy.id, artistCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteArtist(artist.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}`}>
                            {artistCopy.userId}
                        </Link>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <Link to={`/artists/${artistCopy.id}`}>*/}
                    {/*        {artistCopy.language}*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}/albums`}>
                            View albums
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineArtistEditor;