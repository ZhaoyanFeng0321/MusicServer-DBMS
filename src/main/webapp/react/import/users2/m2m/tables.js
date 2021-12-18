import {schema} from "./schema";
const {Link} = window.ReactRouterDOM;
const Tables = () => {
    return(
        <div>
            <h1>Tables</h1>
            <div className="list-group">
                {
                    schema.tables.map(table =>
                                          <Link
                                              key={table.name}
                                              to={`/${table.name}/list`}
                                              className="list-group-item">
                                              {table.labelPlural}
                                          </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Tables;