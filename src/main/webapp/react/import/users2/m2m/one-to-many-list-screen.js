import service, {findOneToManyRecords} from "./service";
import {schema} from "./schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const OneToManyListScreen = () => {
    const history = useHistory();
    const params = useParams();
    const oneTableName = params.oneTable;
    const oneTable = schema.tables.find(table => table.name === oneTableName);
    const id = params.id;
    const manyTableName = params.manyTable;
    const manyTable = schema.tables.find(table => table.name === manyTableName);

    const [records, setRecords] = useState([]);

    const findOneToMany = () =>
        service.findOneToManyRecords(oneTableName, id, manyTableName)
            .then(records => setRecords(records));

    const createOneToMany = () =>
        service.createOneToMany(oneTableName, id, manyTableName)
            .then(() => window.location.reload());

    useEffect(findOneToMany, []);

    return (
        <div className="pt-2">
            <h2 className="mb-3">
                <button onClick={() => history.goBack()}
                        className="btn btn-warning me-2">
                    <i className="me-2 fas fa-chevron-left"></i>
                    Back
                </button>
                {oneTable.label}'s {manyTable.labelPlural}
                <button onClick={createOneToMany}
                        className="btn btn-primary float-end">
                    Add {manyTable.label}
                    <i className="ms-2 fas fa-plus"></i>
                </button>
            </h2>
            <div className="list-group">
                {
                    records.map(record =>
                                    <Link to={`/${manyTable.name}/${record.id}/edit`}
                                          className="list-group-item"
                                          key={record.id}>
                                        {
                                            manyTable.fields.map((field, ndx) =>
                                                                     field.references ? null :
                                                                     <span key={field.name}>{
                                                                         manyTable.list &&
                                                                         manyTable.list[field.name] &&
                                                                         manyTable.list[field.name].show &&
                                                                         <span>
                                                    {record[field.name]}
                                                                             {
                                                                                 ndx < manyTable.fields.length - 1 &&
                                                                                 <span>, </span>
                                                                             }
                                                </span>
                                                                     }</span>
                                            )
                                        }
                                        <i className="fas fa-chevron-right float-end"></i>
                                    </Link>
                    )
                }

            </div>
        </div>
    )
}

export default OneToManyListScreen;