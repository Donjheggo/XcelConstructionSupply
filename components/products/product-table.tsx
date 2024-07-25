import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  export default function ProductTable({
    variants = [],
    sizes = [],
    colors = [],
  }: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  }) {
    const columns = [
      { label: 'Variants', data: variants },
      { label: 'Sizes', data: sizes },
      { label: 'Colors', data: colors },
    ];
  
    const filteredColumns = columns.filter(column => column.data.some(item => item !== ""));
    const maxRows = Math.max(...filteredColumns.map(column => column.data.length), 0);
  
    return (
      <Table className="border border-stone-300">
        <TableHeader>
          <TableRow>
            {filteredColumns.map((column, index) => (
              <TableHead key={index} className="text-center font-semibold">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: maxRows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {filteredColumns.map((column, colIndex) => (
                <TableCell key={colIndex} className="text-center">
                  {column.data[rowIndex] || ""}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  