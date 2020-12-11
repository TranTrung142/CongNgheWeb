import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
import { tableIcons } from "utils/IconUtil";
import { currencyFormat } from "utils/NumberFormat";

function Customers(props) {
    const history = useHistory();
    const columns = [
        {
            title: "CODE",
            field: "code",
            customFilterAndSearch: (term, rowData) =>
                term == rowData.code.length,
        },
        { title: "Name", field: "name" },
        {
            title: "Gender",
            field: "gender",
            lookup: { 1: "Male", 0: "Female" },
        },
        { title: "Birthday", field: "birthday", filtering: false },
        { title: "Phone number", field: "phone" },
        { title: "Email", field: "email" },
        { title: "Address", field: "address" },
    ];
    const data = [
        {
            code: "SE00001",
            name: "Tran Trung nn",
            gender: 1,
            birthday: "14/02/1999",
            phone: "0966865142",
            email: "trung@gmail.com",
            address: "Hà Nội",
        },
        {
            code: "SE00001",
            name: "Tran Trung nn",
            gender: 0,
            birthday: "14/02/1999",
            phone: "0966865142",
            email: "trung@gmail.com",
            address: "Hà Nội",
        },
        {
            code: "SE00001",
            name: "Tran Trung nn",
            gender: 1,
            birthday: "14/02/1999",
            phone: "0966865142",
            email: "trung@gmail.com",
            address: "Hà Nội",
        },
    ];
    return (
        <MaterialTable
            icons={tableIcons}
            title="List customer"
            columns={columns}
            data={data}
            onRowClick={(event, row) => {
                history.push(`/admin/customers/${row.code}`);
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

export default Customers;
