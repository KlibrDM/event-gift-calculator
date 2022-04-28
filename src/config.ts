/*
 * Base price refers to the lowest price which will be multiplied
 * Usually base price is for villages & relation colleague
 */

//Value is base price
export const events: Array<{ type: string; value: number }> = [
  {
    type: "Nuntă",
    value: 400,
  },
  {
    type: "Botez",
    value: 200,
  },
  {
    type: "Majorat",
    value: 100,
  },
];

//Value is multiplier
export const locations: Array<{ type: string; value: number }> = [
  {
    type: "București",
    value: 1.5,
  },
  {
    type: "Oraș provincie",
    value: 1.25,
  },
  {
    type: "Sat",
    value: 1,
  },
];

//Value is multiplier
export const relations: Array<{ type: string; value: number }> = [
  {
    type: "Familie",
    value: 2,
  },
  {
    type: "Prietenie apropiata",
    value: 1.5,
  },
  {
    type: "Prietenie",
    value: 1.2,
  },
  {
    type: "Coleg",
    value: 1,
  },
];
