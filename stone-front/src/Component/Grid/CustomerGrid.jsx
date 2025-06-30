import { useEffect, useState } from "react";
import { getGridConfig } from "../../constants/grid/CustomerGridConfig";
import { isEmptyObj, } from "../Common/CommonComponents.jsx";
import DataGrid from "../Common/DataGrid.jsx";
import { getMockCustomerData } from "../../constants/grid/mockData";

const TestCustomerGrid = ({ selfGrid: { gridParam } }) => {
    const [gridConfig, setGridConfig] = useState({});
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setGridConfig(getGridConfig());
    }, []);

    useEffect(() => {
        const data = getMockCustomerData(gridParam?.custNm);
        setRows(data);
    }, [gridParam]);

    return (
        <div className="muiSection">
            {!isEmptyObj(gridConfig) && (
                <DataGrid
                    params={gridParam}
                    gridConfig={gridConfig}
                    rows={rows}
                    props={{ gridDivClassName: "menu-auth-height" }}
                />
            )}
        </div>
    );
};

export default TestCustomerGrid;
