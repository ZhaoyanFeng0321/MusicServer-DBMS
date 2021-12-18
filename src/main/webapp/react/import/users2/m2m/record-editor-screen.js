import service from "./service"
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const RecordEditorScreen = () => {
    const params = useParams();
    const tableName = params.table;
    const id = params.id;
    const table = schema.tables.find(table => table.name === tableName);

    console.log(schema);

    const [record, setRecord] = useState({});
    const history = useHistory();
    const removeRecord = () =>
        service.removeRecord(table.name, id)
            .then(() => history.goBack())
    const findRecordById = () =>
        service.findRecordById(table.name, id)
            .then(record => setRecord(record));
    useEffect(findRecordById, []);
    const updateLocalCopy = (event, field) => {
        const newValue = event.target.value;
        setRecord({
                      ...record,
                      [field.name]: newValue
                  });
    }
    const saveRecord = () =>
        service.updateRecord(table.name, record)
            .then(() => history.goBack());

    return (
        <div className="pt-2">
            <h2>
                <button onClick={() => history.goBack()}
                        className="btn btn-warning me-2">
                    <i className="me-2 fas fa-chevron-left"></i>
                    Back
                </button>
                {table.label} Editor
                <button onClick={removeRecord}
                        className="btn btn-danger me-2 float-end">
                    Delete
                    <i className="ms-2 fas fa-trash"></i>
                </button>
            </h2>
            {
                table.fields.map(field => (
                    <div key={field.name} className="mt-2">
                        <label>{field.label}</label>
                        <input defaultValue={record[field.name]}
                               readOnly={field.readonly}
                               onChange={(event) =>
                                   updateLocalCopy(event, field)}
                               className="form-control"/>
                    </div>
                ))
            }
            {
                table.relations &&
                <div className="mt-2">
                    <div className="list-group">
                        {
                            table.relations.map((relation, ndx) =>
                                                    <Link className="list-group-item" key={ndx}
                                                          to={`/${table.name}/${record.id}/${relation.references}/list`}>
                                                        {relation.label}
                                                        <i className="fas fa-chevron-right float-end"></i>
                                                    </Link>
                            )
                        }
                    </div>
                </div>
            }
            <br/>
            <button onClick={saveRecord}
                    className="btn btn-primary me-2">
                Save
                <i className="ms-2 fas fa-save"></i>
            </button>
        </div>
    )
}

export default RecordEditorScreen