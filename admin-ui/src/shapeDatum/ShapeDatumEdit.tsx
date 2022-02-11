import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ShapeDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Image [image]" source="imageImage" />
        <TextInput label="Name" source="name" />
        <TextInput label="Origin" source="origin" />
        <NumberInput label="UnitPrice" source="unitPrice" />
        <NumberInput step={1} label="UnitsSold" source="unitsSold" />
      </SimpleForm>
    </Edit>
  );
};
