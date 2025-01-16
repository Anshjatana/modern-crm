"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortAsc, Download, Trash2, Sparkles, Share2 } from "lucide-react";

type DataRow = {
  id: number;
  date: string;
  action: string;
  enrichment: string;
  status: string;
  [key: string]: any;
};

const initialData: DataRow[] = [
  {
    id: 1,
    date: "Oct 12, 2024 at 14:08 PM",
    action: "Bitscale Evaluation - Account relevancy",
    enrichment: "Bitscale Evaluation - Account relevancy check",
    status: "completed",
  },
  {
    id: 2,
    date: "Oct 13, 2024 at 15:20 PM",
    action: "BMW Evaluation - Data processing",
    enrichment: "BMW Evaluation - Relevancy check",
    status: "error",
  },
  {
    id: 3,
    date: "Oct 14, 2024 at 16:30 PM",
    action: "Google Analysis",
    enrichment: "Google Evaluation - Lilevancy check",
    status: "processing",
  },
  {
    id: 4,
    date: "Oct 15, 2024 at 10:10 AM",
    action: "Apple Data Processing",
    enrichment: "Apple Evaluation - Olvancy check",
    status: "completed",
  },
  {
    id: 5,
    date: "Oct 16, 2024 at 12:45 PM",
    action: "Figma Analysis",
    enrichment: "Figma Evaluation - Evancy check",
    status: "processing",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [data, setData] = useState(initialData);
  const [columns, setColumns] = useState([
    { key: "date", label: "Input Column" },
    { key: "action", label: "Action Column" },
    { key: "enrichment", label: "Enrich Company" },
    { key: "status", label: "Status" },
  ]);
  const [editingCell, setEditingCell] = useState<{ rowId: number; columnKey: string } | null>(null);
  const [editingHeader, setEditingHeader] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('asc');

  // Function to generate formatted date
  const getFormattedDate = () => {
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .format(date)
      .replace(",", "")
      .replace("AM", "AM")
      .replace("PM", "PM")
      .replace(" at", " at"); // To match the exact format.
  };

  // Add Row Handler
  const handleAddRow = () => {
    const newRow: DataRow = {
      id: data.length + 1,
      date: getFormattedDate(), // Automatically set current time
      action: "New Action",
      enrichment: "New Enrichment",
      status: "processing", // Default status
    };
    const newData = [...data, newRow];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData)); // Save to localStorage
  };

  // Add Column Handler
  const handleAddColumn = () => {
    const newKey = `customColumn${columns.length + 1}`;
    const newColumns = [...columns, { key: newKey, label: `Custom Column ${columns.length + 1}` }];
    setColumns(newColumns);
    setData(
      data.map((row) => ({
        ...row,
        [newKey]: "New Value",
      }))
    );
    localStorage.setItem("columns", JSON.stringify(newColumns)); // Save columns to localStorage
  };

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // Parse date strings into Date objects for accurate comparison
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    localStorage.setItem("data", JSON.stringify(sortedData)); // Save sorted data to localStorage
  };

  // Handle Cell Edit
  const handleCellEdit = (rowId: number, columnKey: string, value: string) => {
    const updatedData = data.map((row) =>
      row.id === rowId ? { ...row, [columnKey]: value } : row
    );
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Save updated data to localStorage
  };

  // Handle Header Edit
  const handleHeaderEdit = (key: string, label: string) => {
    const updatedColumns = columns.map((col) => (col.key === key ? { ...col, label } : col));
    setColumns(updatedColumns);
    localStorage.setItem("columns", JSON.stringify(updatedColumns)); // Save updated columns to localStorage
  };

  // On Component Mount, check if data is available in localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const storedColumns = localStorage.getItem("columns");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
    if (storedColumns) {
      setColumns(JSON.parse(storedColumns));
    }
  }, []);

  return (
    <div className="p-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Search and Filter Section */}
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
          <Button variant="link" className="gap-2">
              <div className="grid grid-cols-1 w-4 h-4 border border-current">
                <div className="border-b border-current"></div>
              </div>
              1/1 Row
            </Button>
            <Button variant="link" className="gap-2">
              <div className="grid grid-cols-3 w-4 h-4 border border-current">
                <div className="border-r border-current"></div>
                <div className="border-r border-current"></div>
              </div>
              3/3 Column
            </Button>
            <Button
              variant="secondary"
              size="default"
              onClick={() => setStatusFilter(statusFilter === "all" ? "completed" : "all")}
            >
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="secondary" size="default" onClick={handleSortByDate}>
              <SortAsc className="h-4 w-4" /> Sort
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button size="default">
            Enrich <Sparkles className="h-4 ml-1 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
          <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Trash2 color="red" className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">#</TableHead>
              {columns.map((col) => (
                <TableHead key={col.key}>
                  {editingHeader === col.key ? (
                    <Input
                      autoFocus
                      defaultValue={col.label}
                      onBlur={(e) =>
                        handleHeaderEdit(col.key, e.target.value || col.label)
                      }
                    />
                  ) : (
                    <span
                      onClick={() => setEditingHeader(col.key)}
                      className="cursor-pointer"
                    >
                      {col.label}
                    </span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              .filter((row) => {
                // Filter by search term and status
                const matchesSearch = Object.values(row).some((value) =>
                  value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                );
                const matchesStatus =
                  statusFilter === "all" || row.status === statusFilter;
                return matchesSearch && matchesStatus;
              })
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-center">{row.id}</TableCell>
                  {columns.map((col) => (
                    <TableCell key={col.key}>
                      {col.key === "status" ? (
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
                        </select>
                      ) : editingCell?.rowId === row.id && editingCell?.columnKey === col.key ? (
                        <Input
                          autoFocus
                          defaultValue={row[col.key]}
                          onBlur={(e) =>
                            handleCellEdit(row.id, col.key, e.target.value)
                          }
                        />
                      ) : (
                        <span
                          onClick={() =>
                            setEditingCell({ rowId: row.id, columnKey: col.key })
                          }
                          className="cursor-pointer"
                        >
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

      {/* Add Row and Column Buttons */}
      <div className="flex gap-4 mt-4">
        <Button onClick={handleAddRow}>Add Row</Button>
        <Button onClick={handleAddColumn}>Add Column</Button>
      </div>
    </div>
  );
}
