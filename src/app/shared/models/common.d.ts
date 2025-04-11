interface IDeepLinkingDetails {
  user_type: string;
  route_value: string;
  need_to_login: number;
  route_description?: string;
  route_identification: string | number;
  route_details: { [key: string]: any };
}

interface IDropdownOption {
  id?: number | string;
  value?: number | string;
  label?: number | string;
}

interface IMatTableFilter {
  globalFilterColumns: string[];
  filterObject: IMatTableFilterObject;
}

interface IMatTableFilterObject extends Record<string, IFilter> {
  globalFilter: IFilter;
}

interface IFilter {
  filter: {
    value: number | string;
    matchMode?: IStringMatchMode | IDateMatchMode;
  };
}

type IStringMatchMode =
  | 'startsWith'
  | 'endsWith'
  | 'contains'
  | 'notContains'
  | 'equals'
  | 'notEquals';

type IDateMatchMode = 'dateIs' | 'dateIsNot' | 'dateIsBefore' | 'dateIsAfter';

interface IBespokeInfo {
  id: number;
  image: string;
  information: string;
}

type IPageType = 'add' | 'edit';
