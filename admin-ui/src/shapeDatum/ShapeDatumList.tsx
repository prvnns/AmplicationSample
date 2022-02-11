import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShapeDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ShapeData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image [image]" source="imageImage" />
        <TextField label="Name" source="name" />
        <TextField label="Origin" source="origin" />
        <TextField label="UnitPrice" source="unitPrice" />
        <TextField label="UnitsSold" source="unitsSold" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
