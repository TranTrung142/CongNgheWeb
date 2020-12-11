import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
import { tableIcons } from "utils/IconUtil";
import { currencyFormat } from "utils/NumberFormat";

function CustomerDetailBill(props) {
	const history = useHistory();
    const bills = props.customer.bills;
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
    return (
        <MaterialTable
            icons={tableIcons}
            title="Purchase order list"
            columns={columns}
            data={bills}
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
            style={{width: '1120px', margin: '8px'}}
        />
    );
}

export default CustomerDetailBill;
