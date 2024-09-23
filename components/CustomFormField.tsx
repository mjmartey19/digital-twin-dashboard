"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/LoginForm";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select as CustomSelect,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import ReactSelect, { MultiValue } from "react-select";
interface SelectOption {
  id: string;
  name: string | JSX.Element;
  image: string;
}
interface CustomProps {
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
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    iconSrc,
    iconAlt,
    placeholder,
    type,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
    options
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-700 group">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || ""}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="shad-input border-0 focus:border-green-500"
              type={type}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="GH"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="calendar"
            className="ml-2"
          />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <CustomSelect onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{props.children}</SelectContent>
          </CustomSelect>
        </FormControl>
      );
    case FormFieldType.SELECTSEARCH:
      const selectedOption = props.options?.find(option => option.id === field.value?.id) || null;
      console.log(selectedOption);
      console.log(props.options);

      return (
        <FormControl>
          <ReactSelect
            className="basic-single"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            isSearchable
            isClearable
            onChange={(selectedOption) => field.onChange(selectedOption)}
            placeholder={props.placeholder}
            options={options}
            formatOptionLabel={(option) => (
              <div className="flex items-center gap-2">
                <Image
                  src={option.image}
                  width={32}
                  height={32}
                  alt="driver"
                  className="rounded-full"
                />
                <p>{option.name}</p> {/* Display the option's name */}
              </div>
            )}

            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: state.isFocused ? 'none' : base.borderColor,
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'none',
                },
              }),

            }}
          />

        </FormControl>
      );


    case FormFieldType.MULTI_SELECT:
      console.log(field.value);
      console.log(options)
      return (
        <FormControl>
          <ReactSelect
            defaultValue={field.value || []}
            isMulti
            onChange={(selectedOptions: MultiValue<SelectOption>) => {
              field.onChange(selectedOptions || []);
            }}
            options={options as SelectOption[]}
            formatOptionLabel={(option) => (
              <div className="flex items-center gap-2">
                <Image
                  src={option.image}
                  width={32}
                  height={32}
                  alt="janitor"
                  className="rounded-full"
                />
                <p>{option.name}</p>
              </div>
            )}
            className="react-select"
            placeholder={props.placeholder}
            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: state.isFocused ? 'none' : base.borderColor,
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'none',
                },
              }),
            }}
          />
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="text-black">{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
