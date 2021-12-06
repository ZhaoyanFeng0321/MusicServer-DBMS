const ALBUM_URL = "http://localhost:8080/orm/albums"
const ARTIST_URL = "http://localhost:8080/orm/artists"

export const createAlbumForArtist = (artistId, album) =>
    fetch(`${ARTIST_URL}/${artistId}/albums`, {
        method: 'POST',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAlbumsForArtist = (artistId) =>
    fetch(`${ARTIST_URL}/${artistId}/albums`)
        .then(response => response.json())

export const createAlbum = (album) =>
    fetch(ALBUM_URL, {
        method: 'POST',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllAlbums = () =>
    fetch(ALBUM_URL)
        .then(response => response.json())

export const findAlbumById = (id) =>
    fetch(`${ALBUM_URL}/${id}`)
        .then(response => response.json())

export const updateAlbum = (id, album) =>
    fetch(`${ALBUM_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteAlbum = (id) =>
    fetch(`${ALBUM_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createAlbumForArtist,
    findAlbumsForArtist,
    createAlbum,
    findAllAlbums,
    findAlbumById,
    updateAlbum,
    deleteAlbum
}