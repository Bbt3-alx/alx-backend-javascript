/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Create an updated row with an additional age field
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Update the row with the new data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

