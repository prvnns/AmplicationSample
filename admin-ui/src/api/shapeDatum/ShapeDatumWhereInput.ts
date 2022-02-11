import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ShapeDatumWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imageImage?: StringNullableFilter;
  name?: StringNullableFilter;
  origin?: StringNullableFilter;
  unitPrice?: FloatNullableFilter;
  unitsSold?: IntNullableFilter;
};
