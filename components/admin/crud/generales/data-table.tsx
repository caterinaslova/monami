'use client';
import * as React from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getPageNumbers } from '@/lib/getPageNumbers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  BotonAgregar:React.ComponentType
}

export function DataTable<TData, TValue>({
  columns,
  data,
  BotonAgregar
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10, // ✅ Mostrar 5 registros por página
  });

 
  const [sorting, setSorting] = React.useState<SortingState>([]);
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   []
  // );
  const [globalFilter, setGlobalFilter] = React.useState<any>([]);

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      pagination,
      sorting,
      // columnFilters,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const pagesToShow = getPageNumbers(currentPage, totalPages);
  return (
    <div className='rounded-md border mx-auto '>
      <div className='flex justify-between items-center py-4 px-2'>
        <Input
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          placeholder='Buscar...'
          className='max-w-xs placeholder:tracking-wider'
        />
        {/* <Input
          placeholder='Filtrar por nombre'
          value={(table.getColumn('nombre')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('nombre')?.setFilterValue(event.target.value)
          }
         className='max-w-xs'
        />
        <Input
          placeholder='Filtrar por telefono'
          value={(table.getColumn('telefono')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('telefono')?.setFilterValue(event.target.value)
          }
        className='max-w-xs'
        /> */}
        <BotonAgregar />
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No hay datos
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>

        {/* ##### pone en que pagina estoy */}
        {/* <span className='text-xs tracking-wide font-semibold text-stone-400'>
          {pagination.pageIndex + 1} de {table.getPageCount()}
        </span> */}

        {/* #### pone todas las paginas con numeros */}
        {/*       <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: table.getPageCount() }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              index === table.getState().pagination.pageIndex
                ? 'bg-black text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </button>
        ))} 
        </div>*/}

        {/* ### pone las paginas de manera truncada . Sirve para cuando hay muchas */}
        <div className=' hidden md:flex gap-2 justify-center items-center'>
          {pagesToShow.map((page, index) =>
            typeof page === 'number' ? (
              <Button
              variant={"outline"}
                key={index}
                onClick={() => table.setPageIndex(page - 1)}
                className={`px-3 py-1/2 rounded cursor-pointer ${
                  page === currentPage ? 'bg-black text-white' : ''
                }`}
              >
                {page}
              </Button>
            ) : (
              <span key={index} className='px-2 py-1 text-gray-500'>
                ...
              </span>
            )
          )}
        </div>

        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
