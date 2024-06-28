import { Table, flexRender } from "@tanstack/react-table";
import { ReactNode, useMemo } from "react";
import Skeleton from "../components/custom/Skeleton";

type useTableLoadingProps<TData> = {
    isDataPending: boolean;
    rowsCount: number;
    table: Table<TData>;
    customLoadingColumns?: {columnIndex: number, node: ReactNode}[]
};

function generateTableSkeletonRows(
    rowCount: number,
    columnsCount: number,
    customLoads?: {columnIndex: number, node: ReactNode}[]
  ): ReactNode[] {
    const finalArray: ReactNode[] = [];
    for (let y = 0; y < rowCount; y++) {
      const cellsArray: ReactNode[] = [];
      for (let x = 0; x < columnsCount; x++) {
        const foundCustom = customLoads?.find((e) => e.columnIndex === x);
        cellsArray.push(
          <td key={`${x}=${y}`} className="h-12">
            <div className="mx-4">
              {
                foundCustom !== undefined?
                foundCustom.node
                :
                <Skeleton className="h-3.5 w-4/5 bg-gra" />
              }
            </div>
          </td>,
        );
      }
      finalArray.push(<tr key={y}>{cellsArray}</tr>);
    }
    return finalArray;
  }
  

export default function useTableLoading<TData>(
    props: useTableLoadingProps<TData>,
  ) {
    const { isDataPending, rowsCount, table } = props;
  
    const columns = table.getVisibleFlatColumns();
    const VisibleColumns = columns.length;
  
    const skeletonRows = useMemo(
      () => generateTableSkeletonRows(rowsCount, VisibleColumns, props.customLoadingColumns),
      [props.rowsCount, VisibleColumns],
    );
  
  

    if (!isDataPending) {
        return table.getRowModel().rows.map(row => (
            <tr key={row.id} className="h-12 text-sm text-[#1C1C1C] relative hover:bg-[#FBFBFB] w-full transition-all">
              {row.getVisibleCells().map(cell => (
                
                <td key={cell.id} className="align-middle">
                  <div className="mx-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))
    }

    return skeletonRows;
}