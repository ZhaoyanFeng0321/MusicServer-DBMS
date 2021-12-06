const ALBUM_URL = "http://localhost:8080/orm/albums"
const SONG_URL = "http://localhost:8080/orm/songs"

export const createSongForAlbum = (albumId, song) =>
    fetch(`${ALBUM_URL}/${albumId}/songs`, {
        method: 'POST',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findSongsForAlbum = (albumId) =>
    fetch(`${ALBUM_URL}/${albumId}/songs`)
        .then(response => response.json())

export const findSongById = (id) =>
    fetch(`${SONG_URL}/${id}`)
        .then(response => response.json())

export const updateSong = (id, song) =>
    fetch(`${SONG_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteSong = (id) =>
    fetch(`${SONG_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createSongForAlbum,
    findSongsForAlbum,
    findSongById,
    updateSong,
    deleteSong
}