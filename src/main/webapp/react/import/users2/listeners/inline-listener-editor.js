const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineListenerEditor = ({listener, deleteListener, updateListener}) => {
    const [listenerCopy, setListenerCopy] = useState(listener)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={listenerCopy.userId}
                            onChange={(e)=>setListenerCopy(listenerCopy => ({...listenerCopy, userId: e.target.value}))}/>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <input*/}
                    {/*        className="form-control"*/}
                    {/*        value={listenerCopy.language}*/}
                    {/*        onChange={(e)=>setListenerCopy(listenerCopy => ({...listenerCopy, language: e.target.value}))}/>*/}
                    {/*</div>*/}
                    <div className="col">
                        <Link to={`/listeners/${listenerCopy.id}/albums`}>
                            View albums
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateListener(listenerCopy.id, listenerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteListener(listener.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/listeners/${listenerCopy.id}`}>
                            {listenerCopy.userId}
                        </Link>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <Link to={`/listeners/${listenerCopy.id}`}>*/}
                    {/*        {listenerCopy.language}*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col">
                        <Link to={`/listeners/${listenerCopy.id}/albums`}>
                            View albums
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineListenerEditor;