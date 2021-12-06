import albumService, {findAlbumById} from "./album-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
//const ALBUM_URL = "http://localhost:8080/orm/albums"

const AlbumEditorForm = () => {
    const [album, setAlbum] = useState({})
    const {albumId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findAlbumById(albumId)
    }, []);
    const findAlbumById = (id) =>
        albumService.findAlbumById(id)
            .then(album => setAlbum(album))
    const updateAlbum = (id, newAlbum) =>
        albumService.updateAlbum(id, newAlbum)
            .then(() => history.goBack())
    const deleteAlbum = (id) =>
        albumService.deleteAlbum(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Album Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={album.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAlbum(album => ({...album, title: e.target.value}))}
                value={album.title}/>
            <label>Year Released</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAlbum(album => ({...album, year: e.target.value}))}
                value={album.year}/>
            <button
                onClick={() => updateAlbum(album.id, album)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteAlbum(album.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default AlbumEditorForm