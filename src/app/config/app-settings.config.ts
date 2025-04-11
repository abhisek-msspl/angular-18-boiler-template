export const appSettings = {
  appTitle: 'Angular Project',
  credentialsKey: 'angular_project_user',
  rememberKey: 'angular_project_remember',
  rowsPerPage: 10,
  ajaxTimeout: 300000,
  mobilePattern: /^[\d()+-]+$/,
  number: /^\d+$/,
  whitespacePattern: /^(?! *$)[\s\S]+$/,
  emailPattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
  stringFilterDropdown: [
    { value: 'startsWith', label: 'Starts With' },
    { value: 'endsWith', label: 'Ends With' },
    { value: 'contains', label: 'Contains' },
    { value: 'notContains', label: 'Not Contains' },
    { value: 'equals', label: 'Equals' },
    { value: 'notEquals', label: 'Not Equals' },
  ],
  dateFilterDropdown: [
    { value: 'dateIs', label: 'Date is' },
    { value: 'dateIsNot', label: 'Date is not' },
    { value: 'dateIsBefore', label: 'Date is before' },
    { value: 'dateIsAfter', label: 'Date is after' },
  ],
  customDateFormate: {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'DD/MM/YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'DD/MM/YYYY',
    },
  },
};
