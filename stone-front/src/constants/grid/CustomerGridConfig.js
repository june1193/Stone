export const getGridConfig = () => {
    return {
        columns: [
            { field: "id", headerName: "ID", flex: 1 },
            { field: "custNm", headerName: "고객명", flex: 1 },
            { field: "phone", headerName: "전화번호", flex: 1 },
            { field: "chargeAmt", headerName: "요금", flex: 1, type: "number" },
            { field: "addr", headerName: "주소", flex: 2 },
        ],
    };
};
