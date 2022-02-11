import { ShapeDatum as TShapeDatum } from "../api/shapeDatum/ShapeDatum";

export const SHAPEDATUM_TITLE_FIELD = "name";

export const ShapeDatumTitle = (record: TShapeDatum): string => {
  return record.name || record.id;
};
