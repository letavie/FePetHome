// "use client";
// import * as React from "react";
// import { CompleteOrders } from "./CompleteOrder";
// import {
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
//   createColumnHelper,
// } from "@tanstack/react-table";
// import {
//   ArrowUpDown,
//   ChevronDown,
//   MoreHorizontal,
//   CheckCheck,
//   X,
//   CirclePlus,
// } from "lucide-react";

// import { Button } from "Components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "Components/ui/dropdown-menu";
// import { CancelOrder } from "./CancelOrder";
// import { ConfirmOrder } from "./ConfirmOrder";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "Components/ui/table";

// export const columns = [
//   {
//     accessorKey: "id",
//     header: "Stt",
//     cell: ({ row }) => (
//       <div className="capitalize  font-mainText3 ">{row.getValue("id")}</div>
//     ),
//   },
//   {
//     accessorKey: "idOrder",
//     header: "ID đơn hàng",
//     cell: ({ row }) => (
//       <div className="capitalize  font-mainText3 ">
//         {row.getValue("idOrder")}
//       </div>
//     ),
//   },
//   {
//     accessorKey: "product",
//     header: "Sản phẩm",
//     cell: ({ row }) => (
//       <div className="capitalize  font-mainText3 ">
//         {row.getValue("product")}
//       </div>
//     ),
//   },
//   {
//     accessorKey: "paymentMethod",
//     header: "Phương thức thanh toán",
//     cell: ({ row }) => {
//       const status = row.getValue("paymentMethod");
//       const statusText =
//         status === "OP"
//           ? "Chuyển khoản"
//           : status === "COD"
//           ? "Thanh toán tiền mặt"
//           : status;
//       return (
//         <div className="capitalize  font-mainText3 font-bold">{statusText}</div>
//       );
//     },
//   },
//   {
//     accessorKey: "dateOrder",
//     header: "Thời gian đặt hàng",
//     cell: ({ row }) => {
//       const status = row.getValue("dateOrder");

//       return <div className="capitalize  font-mainText3 ">{status}</div>;
//     },
//   },

//   {
//     accessorKey: "total",
//     header: "Tổng giá",
//     cell: ({ row }) => (
//       <div className="font-bold font-mainText3  ">
//         {row.getValue("total")} vnđ
//       </div>
//     ),
//   },
//   {
//     accessorKey: "status",
//     header: "Trạng thái",
//     cell: ({ row }) => {
//       const statuss = row.getValue("status");
//       const statusText =
//         statuss === "Processing"
//           ? "Đang xử lí"
//           : statuss === "Processed"
//           ? "Đã xử lý"
//           : statuss === "Cancelled"
//           ? "Đã hủy"
//           : statuss === "Completed"
//           ? "Hoàn thành"
//           : statuss === "In Transit"
//           ? "Đang vận chuyển"
//           : statuss;
//       const statusClass =
//         statuss === "Processing"
//           ? "text-yellow-400"
//           : statuss === "In Transit"
//           ? "text-violet-400"
//           : statuss === "Completed"
//           ? "text-green-400"
//           : statuss === "Cancelled"
//           ? "text-red-400"
//           : "";
//       return (
//         <div className={`capitalize font-bold font-mainText3 ${statusClass} `}>
//           {statusText}
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "statusPayment",
//     header: "Trạng thái thanh toán",
//     cell: ({ row }) => {
//       const status = row.getValue("statusPayment");
//       const statusText =
//         status === "PAID"
//           ? "Đã thanh toán"
//           : status === "UNPAID"
//           ? "Chưa thanh toán"
//           : status;

//       const statusClass =
//         status === "PAID"
//           ? "text-green-400"
//           : status === "UNPAID"
//           ? "text-gray-400"
//           : status;
//       return (
//         <div className={`capitalize font-bold font-mainText3 ${statusClass} `}>
//           {statusText}
//         </div>
//       );
//     },
//   },

//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const statuss = row.getValue("status");
//       if (statuss === "Cancelled" || statuss === "Completed") {
//         return null;
//       }
//       return (
//         <DropdownMenu modal={false}>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="start">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             {statuss === "In Transit" && (
//               <>
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <CompleteOrders orderId={row.getValue("idOrder")} />
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <CancelOrder orderId={row.getValue("idOrder")} />
//                 </DropdownMenuItem>
//               </>
//             )}

//             {statuss === "Processing" && (
//               <>
//                 {" "}
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <ConfirmOrder orderId={row.getValue("idOrder")} />
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <CancelOrder orderId={row.getValue("idOrder")} />
//                 </DropdownMenuItem>
//               </>
//             )}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//     className: "bg-green-500",
//   },
// ];

// export function DataTableOrder({ res }) {
//   const [sorting, setSorting] = React.useState([]);
//   const [columnFilters, setColumnFilters] = React.useState([]);
//   const [columnVisibility, setColumnVisibility] = React.useState({});
//   const [rowSelection, setRowSelection] = React.useState({});
//   const [paymentStatusFilter, setPaymentStatusFilter] = React.useState("");
//   const [startDateFilter, setStartDateFilter] = React.useState("");
//   const [endDateFilter, setEndDateFilter] = React.useState("");
//   const columnHelper = createColumnHelper();
//   const handleFilterChange = () => {
//     let filters = [];

//     if (paymentStatusFilter) {
//       console.log("tt", paymentStatusFilter);
//       filters.push({
//         id: "statusPayment",
//         value: paymentStatusFilter,
//       });
//     }
//     console.log("filters", filters);
//     if (startDateFilter || endDateFilter) {
//       filters.push({
//         id: "dateOrder",
//         value: { startDate: startDateFilter, endDate: endDateFilter },
//       });
//     }

//     setColumnFilters(filters);
//   };
//   const filterPaymentStatus = (rows, id, filterValue) => {
//     return rows.filter((row) => {
//       const rowValue = row.getValue(id);
//       return filterValue === "" || rowValue === filterValue;
//     });
//   };

//   const filterDateRange = (rows, id, filterValue) => {
//     const { startDate, endDate } = filterValue;
//     return rows.filter((row) => {
//       const rowDate = new Date(row.getValue(id));
//       const start = startDate ? new Date(startDate) : null;
//       const end = endDate ? new Date(endDate) : null;
//       return (!start || rowDate >= start) && (!end || rowDate <= end);
//     });
//   };

//   const table = useReactTable({
//     data: res,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//     filterFns: {
//       statusPayment: filterPaymentStatus,
//       dateOrder: filterDateRange,
//     },
//   });

//   return (
//     <div className="w-full">
//       <div className="mb-4 flex space-x-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Trạng thái thanh toán
//           </label>
//           <select
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//             value={paymentStatusFilter}
//             onChange={(e) => setPaymentStatusFilter(e.target.value)}
//           >
//             <option value="">Tất cả</option>
//             <option value="PAID">Đã thanh toán</option>
//             <option value="UNPAID">Chưa thanh toán</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Thời gian bắt đầu
//           </label>
//           <input
//             type="date"
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//             value={startDateFilter}
//             onChange={(e) => setStartDateFilter(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Thời gian kết thúc
//           </label>
//           <input
//             type="date"
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//             value={endDateFilter}
//             onChange={(e) => setEndDateFilter(e.target.value)}
//           />
//         </div>
//         <Button onClick={handleFilterChange} className="bg-textColer">
//           Áp dụng bộ lọc
//         </Button>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader className="rounded-md bg-textColer">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id} className="  text-white">
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { CompleteOrders } from "./CompleteOrder";
// import { DateRangePicker } from "shadcn/ui";
import { useTable, ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "Components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "Components/ui/select";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  CheckCheck,
  X,
  CirclePlus,
} from "lucide-react";

import { Button } from "Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "Components/ui/dropdown-menu";
import { CancelOrder } from "./CancelOrder";
import { ConfirmOrder } from "./ConfirmOrder";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "Components/ui/table";

export const columns = [
  {
    accessorKey: "id",
    header: "Stt",
    cell: ({ row }) => (
      <div className="capitalize  font-mainText3 ">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "idOrder",
    header: "ID đơn hàng",
    cell: ({ row }) => (
      <div className="capitalize  font-mainText3 ">
        {row.getValue("idOrder")}
      </div>
    ),
  },
  {
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => (
      <div className="capitalize  font-mainText3 ">
        {row.getValue("product")}
      </div>
    ),
  },

  {
    accessorKey: "dateOrder",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer items-center justify-center"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Thời gian đặt hàng
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("dateOrder");

      return <div className="capitalize  font-mainText3 ">{status}</div>;
    },
  },

  {
    accessorKey: "paymentMethod",
    header: "Phương thức thanh toán",
    cell: ({ row }) => {
      const status = row.getValue("paymentMethod");
      const statusText =
        status === "OP"
          ? "Chuyển khoản"
          : status === "COD"
          ? "Thanh toán tiền mặt"
          : status;
      return (
        <div className="capitalize  font-mainText3 font-bold">{statusText}</div>
      );
    },
  },

  {
    accessorKey: "total",
    header: "Tổng giá",
    cell: ({ row }) => (
      <div className="font-bold font-mainText3  ">
        {row.getValue("total")} vnđ
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
      const statuss = row.getValue("status");
      const statusText =
        statuss === "Processing"
          ? "Đang xử lí"
          : statuss === "Processed"
          ? "Đã xử lý"
          : statuss === "Cancelled"
          ? "Đã hủy"
          : statuss === "Completed"
          ? "Hoàn thành"
          : statuss === "In Transit"
          ? "Đang vận chuyển"
          : statuss;
      const statusClass =
        statuss === "Processing"
          ? "text-yellow-400"
          : statuss === "In Transit"
          ? "text-violet-400"
          : statuss === "Completed"
          ? "text-green-400"
          : statuss === "Cancelled"
          ? "text-red-400"
          : "";
      return (
        <div className={`capitalize font-bold font-mainText3 ${statusClass} `}>
          {statusText}
        </div>
      );
    },
  },
  {
    accessorKey: "statusPayment",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer items-center justify-center"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trạng thái thanh toán
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("statusPayment");
      const statusText =
        status === "PAID"
          ? "Đã thanh toán"
          : status === "UNPAID"
          ? "Chưa thanh toán"
          : status;

      const statusClass =
        status === "PAID"
          ? "text-green-400"
          : status === "UNPAID"
          ? "text-gray-400"
          : status;
      return (
        <div className={`capitalize font-bold font-mainText3 ${statusClass} `}>
          {statusText}
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const statuss = row.getValue("status");
      if (statuss === "Cancelled" || statuss === "Completed") {
        return null;
      }
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {statuss === "In Transit" && (
              <>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <CompleteOrders orderId={row.getValue("idOrder")} />
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <CancelOrder orderId={row.getValue("idOrder")} />
                </DropdownMenuItem>
              </>
            )}

            {statuss === "Processing" && (
              <>
                {" "}
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <ConfirmOrder orderId={row.getValue("idOrder")} />
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <CancelOrder orderId={row.getValue("idOrder")} />
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    className: "bg-green-500",
  },
];

export function DataTableOrder({ res }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  // const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const [paymentStatus, setPaymentStatus] = useState("");
  const table = useReactTable({
    data: res,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    filterFns: {
      paymentStatusFilter: (row, columnId, filterValue) => {
        if (filterValue === "ALL") return true;
        return row.getValue(columnId) === filterValue;
      },
    },
  });
  useEffect(() => {
    if (paymentStatus) {
      table.getColumn("statusPayment")?.setFilterValue(paymentStatus);
    } else {
      table.getColumn("statusPayment")?.setFilterValue(undefined);
    }
  }, [paymentStatus]);
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader className="rounded-md bg-textColer">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="  text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
