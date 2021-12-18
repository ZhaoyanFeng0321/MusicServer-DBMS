import collectingService from "./collecting-service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CollectingsForListener = () => {

    const history = useHistory()
    const [collectings, setCollectings] = useState([])
    const {lid} = useParams()

    useEffect(() => {
        findCollectingsForListener(lid)
    }, [])

    const findCollectingsForListener = (lid) =>
        collectingService.findCollectingsForListener(lid)
            .then(collectings => setCollectings(collectings))

    return(
        <div className="container">
            <h2>Collectings List of Listener {lid}</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Playlist</div>
                        <div className="col-sm-2">Listener</div>
                    </div>
                </li>
                {
                    collectings.map(collecting =>
                        <li className="list-group-item"
                            key={collecting.id}>
                            <Link to={`/collectings/${collecting.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{collecting.id}</div>
                                    <div className="col-sm-2">{collecting.pid}</div>
                                    <div className="col-sm-2">{collecting.lid}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default CollectingsForListener;