import collectingService from "./collecting-service";
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const CollectingList = () => {

    const history = useHistory()
    const [collectings, setCollectings] = useState([])

    useEffect(() => {
        findAllCollectings()
    }, [])

    const findAllCollectings = () =>
        collectingService.findAllCollectings()
            .then(collectings => setCollectings(collectings))


    return(
        <div className="container">
            <h2>Collectings List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/collectings/new")}>
                Add Collecting
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Listener</div>
                        <div className="col-sm-2">Playlist</div>
                    </div>
                </li>
                {
                    collectings.map(collecting =>

                                      <li className="list-group-item"
                                          key={collecting.id}>
                                          <Link to={`/collectings/${collecting.id}`}>
                                              <div className="form-group row">
                                                  <div className="col-sm-2">{collecting.id}</div>
                                                  <div className="col-sm-2">{collecting.listenerId}</div>
                                                  <div className="col-sm-2">{collecting.playlistId}</div>
                                              </div>
                                          </Link>
                                      </li>)
                }
            </ul>
        </div>
    )
}

export default CollectingList;