import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
import { tableIcons } from "utils/IconUtil";
import { currencyFormat } from "utils/NumberFormat";

function SellerDetailProducts(props) {
    const history = useHistory();
    const {products} = props.seller
    const columns = [
        {
            title: "CODE",
            field: "code",
            customFilterAndSearch: (term, rowData) =>
                term == rowData.code.length,
        },
        { title: "Name", field: "name" },
        { title: "Quantity", field: "quantity" },
        { title: "Discount", field: "discount", render: row => <span>{row.discount}% </span> },
        { title: "Price", field: "price", render: (row) => <span>{currencyFormat(row.price)} </span> },
    ];
    
    return (
        <MaterialTable
            icons={tableIcons}
            title="List products of seller"
            columns={columns}
            data={products}
            onRowClick={(event, row) => {
                console.log(row.code);
                history.push(`/admin/sellers/${row.code}`);
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

export default SellerDetailProducts;
