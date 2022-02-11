import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ShapeDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Image [image]" source="imageImage" />
        <TextInput label="Name" source="name" />
        <TextInput label="Origin" source="origin" />
        <NumberInput label="UnitPrice" source="unitPrice" />
        <NumberInput step={1} label="UnitsSold" source="unitsSold" />
      </SimpleForm>
    </Create>
  );
};
