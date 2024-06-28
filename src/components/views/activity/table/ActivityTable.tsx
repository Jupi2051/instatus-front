import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { API_Event } from "../../../../API/types/events/events"
import { ActivityTableColumns } from "./ActivityTableColumns"
import useTableLoading from "../../../../hooks/useTableLoading"
import Skeleton from "../../../custom/Skeleton"

type ActivityTableProps = {
    data: API_Event[],
    isLoading: boolean
}

export default function ActivityTable(props: ActivityTableProps)
{
  const table = useReactTable({
      data: props.data,
      columns: ActivityTableColumns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      manualPagination: true
  })

  const TableDisplay = useTableLoading({
    isDataPending: props.isLoading,
    rowsCount: 10,
    table: table,
    customLoadingColumns: [{
      columnIndex: 0,
      node: 
      <div className="mr-7">
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"/>
          <Skeleton className="h-3.5 w-full max-w-32 bg-gray-200 rounded-full animate-pulse"/>
        </div>
      </div>
    },
    {
      columnIndex: 3,
      node: <></>
    }
  ]
  });


    return (
        <div>
          <table className="w-full">
            <thead className="uppercase text-[#616161] pb-10 text-left w-full">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="w-full h-16 text-sm">
                  {headerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan}>
                      <div className="mx-4">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* <div className="h-1"></div> */}
            <tbody className="relative -top-3.5">
              {
                props.data.length === 0 && !props.isLoading?
                <>
                  <div className="flex items-center justify-center w-full absolute h-full top-1"><h1>No Results Found</h1></div>
                  <div className="h-10"></div>
                  </>
                  :
                <>{TableDisplay}</>
             }
            </tbody>
          </table>
        </div>
      )
}