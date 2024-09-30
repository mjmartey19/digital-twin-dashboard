import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import React from "react";

interface ISearchTableProps<TData> {
  table: Table<TData>;
  placeholder: string;
  searchBy: string;
}

const SearchTable = <TData,>({ table, searchBy, placeholder }: ISearchTableProps<TData>) => {
    return (
    <div>
      {/* You can add more functionality here */}
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder={`${placeholder}`}
          value={(table.getColumn(searchBy)?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn(searchBy)?.setFilterValue(event.target.value);
          }}
          className="w-[250px] lg:w-[450px]"
        />
      </div>
    </div>
  );
};

export default SearchTable;
