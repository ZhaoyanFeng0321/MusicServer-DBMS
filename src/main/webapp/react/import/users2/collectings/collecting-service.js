const COLLECTINGS_URL = "http://localhost:8080/orm/collectings"
const LISTENERS_URL = "http://localhost:8080/orm/listeners"
const PLAYLIST_URL = "http://localhost:8080/orm/playlists"

export const findAllCollectings = () =>
    fetch(COLLECTINGS_URL)
        .then(response => response.json())

export const findCollectingById = (id) =>
    fetch(`${COLLECTINGS_URL}/${id}`)
        .then(response => response.json())

export const deleteCollecting = (id) =>
    fetch(`${COLLECTINGS_URL}/${id}`, {
        method: "DELETE"
    })

export const findCollectingsForListener = (lid) =>
    fetch(`${LISTENERS_URL}/${lid}/collectings`)
        .then(response => response.json())

export const findCollectingsForPlaylist = (pid) =>
    fetch(`${PLAYLIST_URL}/${pid}/collectings`)
        .then(response => response.json())

export const createCollecting = (lid, pid, collecting) =>
    fetch(`${LISTENERS_URL}/${lid}/playlists/${pid}/collectings`,{
        method: 'POST',
        body: JSON.stringify(collecting),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateCollecting = (id, collecting) =>
    fetch(`${COLLECTINGS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(collecting),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllCollectings,
    findCollectingById,
    deleteCollecting,
    createCollecting,
    updateCollecting,
    findCollectingsForListener,
    findCollectingsForPlaylist
}