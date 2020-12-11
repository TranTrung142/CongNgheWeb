import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
import { tableIcons } from "utils/IconUtil";
import { currencyFormat } from "utils/NumberFormat";

function Bills(props) {
	const history = useHistory();

    const columns = [
        {
            title: "CODE",
            field: "code",
            customFilterAndSearch: (term, rowData) =>
                term == rowData.code.length,
        },
        { title: "Customer", field: "customer" },
        { title: "Total Product", field: "totalProduct", filtering: false },
        {
            title: "Total Price",
            field: "totalPrice",
            filtering: false,
            render: (rowData) => (
                <span>{currencyFormat(rowData.totalPrice)} </span>
            ),
        },
        {
            title: "Cash in",
            field: "cashIn",
            filtering: false,
            render: (rowData) => <span>{currencyFormat(rowData.cashIn)} </span>,
        },
        {
            title: "Cash out",
            field: "cashOut",
            filtering: false,
            render: (rowData) => (
                <span>{currencyFormat(rowData.cashOut)} </span>
            ),
        },
        { title: "Create date", field: "createOn", filtering: false },
    ];
    const data = [
        {
            code: "BI00001",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
        {
            code: "BI00002",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
        {
            code: "BI00003",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
    ];
    return (
        <MaterialTable
            icons={tableIcons}
            title="Purchase order list"
            columns={columns}
            data={data}
            onRowClick={(event, row) => {
				console.log(row.code);
				history.push(`/admin/bills/${row.code}`)
            }}
            options={{
                search: true,
                debounceInterval: 500,
                filtering: true,
                headerStyle: {
                    backgroundColor: "#a5c3f2",
                    fontWeight: "bold",
                    paddingLeft: 8,
                    textAlign: "left",
                },
                cellStyle: {
                    paddingLeft: 8,
                    // paddingRight: 0,
                    textAlign: "left",
                },
            }}
        />
    );
}

export default Bills;
