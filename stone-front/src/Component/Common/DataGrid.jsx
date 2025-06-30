import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";

const DataGrid = ({
                      params,
                      gridConfig,
                      gridRef,
                      rows = [],
                      events = {},
                      props = {},
                      checkboxSelection = false,
                  }) => {
    return (
        <div className={props.gridDivClassName || "default-grid-wrapper"} style={{ height: 500, width: "100%" }}>
            <DataGridPro
                apiRef={gridRef}
                rows={rows}
                columns={gridConfig.columns}
                checkboxSelection={checkboxSelection}
                disableRowSelectionOnClick
                density="compact"
                {...events}
            />
        </div>
    );
};

export default DataGrid;
