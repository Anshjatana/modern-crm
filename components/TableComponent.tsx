import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { TableComponentProps } from "@/lib/interface";
import { Input } from "./ui/input";
  
  export const TableComponent: React.FC<TableComponentProps> = ({
    data,
    columns,
    searchTerm,
    statusFilter,
    editingCell,
    setEditingCell,
    editingHeader,
    setEditingHeader,
    handleCellEdit,
    handleHeaderEdit,
  }) => (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            {columns.map((col) => (
              <TableHead key={col.key}>
                {editingHeader === col.key ? (
                  <Input
                    autoFocus
                    defaultValue={col.label}
                    onBlur={(e) => handleHeaderEdit(col.key, e.target.value || col.label)}
                  />
                ) : (
                  <span onClick={() => setEditingHeader(col.key)} className="cursor-pointer">
                    {col.label}
                  </span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .filter((row) =>
              Object.values(row).some((val) =>
                val.toString().toLowerCase().includes(searchTerm.toLowerCase())
              )
            )
            .filter((row) => statusFilter === "all" || row.status === statusFilter)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.key === "date" ? (  // Preventing editing the date column
                    <span>{row[col.key]}</span>  // Displaying date as plain text
                  ) : col.key === "status" ? (
                        <select
                          value={row[col.key]}
                          onChange={(e) =>
                            handleCellEdit(row.id, col.key, e.target.value)
                          }
                          className="border border-gray-300 rounded-md p-1 text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition ease-in-out duration-200"
                        >
                          <option value="completed" className="text-sm border-none ">
                            Completed
                          </option>
                          <option value="processing" className="text-sm">
                            Processing
                          </option>
                          <option value="error" className="text-sm">
                            Error
                          </option>
                        </select> ):
                    editingCell?.rowId === row.id && editingCell?.columnKey === col.key ? (
                      <Input
                        autoFocus
                        defaultValue={row[col.key]}
                        onBlur={(e) => handleCellEdit(row.id, col.key, e.target.value)}
                      />
                    ) : (
                      <span onClick={() => setEditingCell({ rowId: row.id, columnKey: col.key })}>
                        {row[col.key]}
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
  