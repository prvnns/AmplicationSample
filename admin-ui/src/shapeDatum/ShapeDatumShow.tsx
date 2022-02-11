import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ShapeDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image [image]" source="imageImage" />
        <TextField label="Name" source="name" />
        <TextField label="Origin" source="origin" />
        <TextField label="UnitPrice" source="unitPrice" />
        <TextField label="UnitsSold" source="unitsSold" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
