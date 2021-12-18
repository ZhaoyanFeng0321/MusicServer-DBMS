import RecordListScreen from "./record-list-screen";
import RecordEditorScreen from "./record-editor-screen";
import OneToManyListScreen from "./one-to-many-list-screen";
import Tables from "./tables";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={"/"} exact={true}>
                    <Tables/>
                </Route>
                <Route path={["/:table/list"]} exact={true}>
                    <RecordListScreen/>
                </Route>
                <Route path={["/:table/:id/edit"]} exact={true}>
                    <RecordEditorScreen/>
                </Route>
                <Route path={["/:oneTable/:id/:manyTable/list"]} exact={true}>
                    <OneToManyListScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;