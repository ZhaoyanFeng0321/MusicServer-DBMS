import service from "./service";
import {schema} from "./schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const RecordListScreen = () => {
    const tableName = useParams().table;
    const table = schema.tables.find(table => table.name === tableName);

    const [records, setRecords] = useState([])

    const findAllRecords = () =>
        service.findAllRecords(tableName)
            .then(records => setRecords(records))

    useEffect(findAllRecords, []);

    const createRecord = () =>
        service.createRecord(tableName)
            .then(() => window.location.reload())

    return (
        <div className="pt-2">
            <h2 className="mb-3">
                <Link to="/" className="btn btn-warning me-2">
                    <i className="fas fa-chevron-left me-2"></i>
                    Tables
                </Link>
                {table.label} List
                <button onClick={createRecord}
                        className="btn btn-primary float-end">
                    Add {table.label}
                    <i className="ms-2 fas fa-plus"></i>
                </button>
            </h2>
            <div className="list-group">
                {
                    records.map(record =>
                                    <Link to={`/${table.name}/${record.id}/edit`}
                                          className="list-group-item"
                                          key={record.id}>
                                        {
                                            table.fields.map((field, ndx) =>
                                                                 <span key={field.name}>{
                                                                     table.list &&
                                                                     table.list[field.name] &&
                                                                     table.list[field.name].show &&
                                                                     <span>
                                            {record[field.name]}
                                                                         {
                                                                             ndx < table.fields.length - 1 &&
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

export default RecordListScreen;