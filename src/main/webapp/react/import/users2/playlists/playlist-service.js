const PLAYLIST_URL = "http://localhost:8080/orm/playlists"
//const LISTENER_URL = "http://localhost:8080/orm/listeners"

// export const createPlayListForListener = (listenerId, playlist) =>
//     fetch(`${PLAYLIST_URL}/${listenerId}/playlists`, {
//         method: 'POST',
//         body: JSON.stringify(playlist),
//         headers: {'content-type': 'application/json'}
//     })
//         .then(response => response.json())
//
// export const findPlaylistsForListener = (listenerId) =>
//     fetch(`${LISTENER_URL}/${listenerId}/playlists`)
//         .then(response => response.json())

export const createPlaylist = (playlist) =>
    fetch(PLAYLIST_URL, {
        method: 'POST',
        body: JSON.stringify(playlist),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllPlaylists = () =>
    fetch(PLAYLIST_URL)
        .then(response => response.json())

export const findPlaylistById = (id) =>
    fetch(`${PLAYLIST_URL}/${id}`)
        .then(response => response.json())

export const updatePlaylist = (id, playlist) =>
    fetch(`${PLAYLIST_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(playlist),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const deletePlaylist = (id) =>
    fetch(`${PLAYLIST_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    // createPlayListForListener,
    // findPlaylistsForListener,
    createPlaylist,
    findAllPlaylists,
    findPlaylistById,
    updatePlaylist,
    deletePlaylist
}