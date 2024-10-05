/* eslint-disable no-unused-vars */

declare interface Staffprops {
  id: string;
  name: string;
  image: string;
}


declare interface SelectOption {
  value: Staffprops | Staffprops[];
  label: JSX.Element;
}

declare interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  options?: SelectOption[];
  className?: string;
  renderSkeleton?: (field: any) => React.ReactNode;
}
