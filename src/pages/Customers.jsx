import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import Header from "../components/Header";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      dataSource={customersData}
      allowSorting
      allowPaging
      toolbar={["Delete"]}
      editSettings={{ allowEditing: true, allowDeleting: true }}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
    </GridComponent>
  </div>
  )
};

export default Customers;
