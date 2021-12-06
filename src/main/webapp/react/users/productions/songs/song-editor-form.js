import songService from "./song-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const SongEditorForm = () => {
    const [song, setSong] = useState({})
    const {songId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findSongById(songId)
    }, []);
    const findSongById = (id) =>
        songService.findSongById(id)
            .then(song => setSong(song))
    const updateSong = (id, newSong) =>
        songService.updateSong(id, newSong)
            .then(() => history.goBack())
    const deleteSong = (id) =>
        songService.deleteSong(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Song Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={song.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setSong(song => ({...song, name: e.target.value}))}
                value={song.name}/>
            <label>Genre</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setSong(song => ({...song, genre: e.target.value}))}
                value={song.genre}/>
            <br/>
            <button
                onClick={() => updateSong(song.id, song)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSong(song.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default SongEditorForm