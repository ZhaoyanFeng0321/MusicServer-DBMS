import collectingService from "./collecting-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const CollectingEditorForm = () => {
    const {id} = useParams()
    const [collecting, setCollecting] = useState({})
    let lid;
    let pid;

    useEffect(() => {
        if(id !== "new") {
            findCollectingById(id)
        }
    }, []);

    const createCollecting = (lid, pid, collecting) =>
        collectingService.createCollecting(lid, pid, collecting)
            .then(() => history.back())

    const findCollectingById = (id) =>
        collectingService.findCollectingById(id)
            .then(collecting => setCollecting(collecting))

    const deleteCollecting = (id) =>
        collectingService.deleteCollecting(id)
            .then(() => history.back())

    const updateCollecting = (id, newCollecting) =>
        collectingService.updateCollecting(id, newCollecting)
            .then(() => history.back())

    return (
        <div>
            <h2>Collecting Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   readOnly
                   value={collecting.id}/>
            <label>Listener ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       setCollecting(collecting =>
                                         ({...collecting, listenerId: e.target.value}))}
                   value={collecting.listenerId}/>
            <label>Playlist ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       setCollecting(collecting =>
                                         ({...collecting, playlistId: e.target.value}))}
                   value={collecting.playlistId}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteCollecting(collecting.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createCollecting(collecting.listenerId, collecting.playlistId, collecting)}>
                Create
            </button>
            {/*<button className="btn btn-primary"*/}
            {/*        onClick={() => updateCollecting(collecting.id, collecting)}>*/}
            {/*    Save*/}
            {/*</button>*/}
            <br/>

            {/*<Link to={`/listeners/${collecting.listenerId}`}>*/}
            {/*    <div className="form-group row">*/}
            {/*        <h2>Listener Information</h2>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link to={`/playlists/${collecting.playlistId}`}>*/}
            {/*    <div className="form-group row">*/}
            {/*        <h2>Playlist Information</h2>*/}
            {/*    </div>*/}
            {/*</Link>*/}
        </div>
    )
}

export default CollectingEditorForm