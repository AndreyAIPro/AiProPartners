import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import mData from "../../../data/dataForTable.json";
import { useMemo } from "react";

const TableFinance = () => {
  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: "Дата",
      accessorKey: "date",
      footer: "date",
    },
    {
      header: "Сумма",
      accessorKey: "sum",
      footer: "sum",
    },
    {
      header: "Способ вывода",
      accessorKey: "withdrawal",
      footer: "withdrawal",
    },
    {
      header: "Комментарий",
      accessorKey: "comments",
      footer: "comments",
    },
    {
      header: "Статус",
      accessorKey: "status",
      footer: "status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="border-[2px] border-gray w-[1100px] ">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-gray">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-left font-nunito-sans text-text2 py-1 last:text-right last:pr-4 first:pl-4"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-[1px] border-gray">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={` font-nunito-sans text-text2 py-1 border-r-2 border-gray pl-2
                ${row.original.status === "Успешно" ? "last:text-green" : row.original.status === "Отклонено" ? "last:text-red" : row.original.status === "В обработке" ? "last:text-blue" : ""}
                last:text-right last:pr-2 first:text-left first:pl-2`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFinance;
