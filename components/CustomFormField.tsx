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
import { Drivers, Janitors } from "@/constants";

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
      return (
        <FormControl>
           <ReactSelect
        options={options}
        isSearchable
        isClearable
        placeholder={props.placeholder}
        className="basic-single"
        classNamePrefix="react-select"
        // Set the default value for the select field
        defaultValue={options?.find((option) => option.value.id === field.value.id)}
        // Update the form state when a new value is selected
        onChange={(selectedOption) => field.onChange(selectedOption?.value)}
       
      />

        </FormControl>
      );


      case FormFieldType.MULTI_SELECT:
        return (
          <FormControl>
            <ReactSelect
              options={options}
              isSearchable
              isMulti
              placeholder={props.placeholder}
              className="basic-single"
              classNamePrefix="react-select"
              defaultValue={options?.filter(option => 
                field.value?.some((val: Staffprops) => val.id === option.value.id)
              )}
              onChange={(selectedOptions: MultiValue<{ value: any; label: React.ReactNode }>) => {
                const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                field.onChange(selectedValues);
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
