import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
    { id: 1, name: '홍길동', age: 30 },
    { id: 2, name: '김철수', age: 25 },
];

const columns = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'age', headerName: '나이', width: 100 },
];

export default function BasicDataGrid() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10]}
            />
        </div>
    );
}
