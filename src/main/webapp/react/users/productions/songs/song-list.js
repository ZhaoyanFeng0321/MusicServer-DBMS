import SongEditorInline from "./song-editor-inline";
import songService, {createSongForAlbum} from "./song-service"

const ALBUM_URL = "http://localhost:8080/orm/songs"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const SongList = () => {
    const [songs, setSongs] = useState([])
    const [newSong, setNewSong] = useState({})
    const {albumId} = useParams()
    useEffect(() => {
        findSongsForAlbum(albumId)
    }, [])
    const createSongForAlbum = (song) =>
        songService.createSongForAlbum(albumId, song)
            .then(song => {
                setNewSong({name:''})
                setSongs(songs => ([...songs, song]))
            })
    const updateSong = (id, newSong) =>
        songService.updateSong(id, newSong)
            .then(song => setSongs(songs => (songs.map(song => song.id === id ? newSong : song))))
    const findSongsForAlbum = (albumId) =>
        songService.findSongsForAlbum(albumId)
            .then(songs => setSongs(songs))
    const deleteSong = (id) =>
        songService.deleteSong(id)
            .then(songs => setSongs(songs => songs.filter(song => song.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Songs
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Song Name"
                                   title="Please enter a name for the song"
                                   className="form-control"
                                   value={newSong.name}
                                   onChange={(e) => setNewSong(newSong => ({...newSong, name: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createSongForAlbum(newSong)}></i>
                        </div>
                    </div>
                </li>
            {
                songs.map(song =>
                    <li key={song.id} className="list-group-item">
                        <SongEditorInline key={song._id}
                                          updateSong={updateSong}
                                          deleteSong={deleteSong}
                                          song={song}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default SongList;