export const yupMessages = {
  itemDeleted: (itemName: string): string => `${itemName} has been successfully deleted.`,
  itemCreated: (itemName: string): string => `${itemName} has been successfully created.`,
  itemUpdated: (itemName: string): string => `${itemName} has been successfully updated.`
};

export const errorMessages = {
  requiredField: 'This field is required.',
  numberField: 'This field must be a number.',
  systemError: 'System has some problems. Please, try again later.',
  invalidFormat: 'Invalid format.'
};
