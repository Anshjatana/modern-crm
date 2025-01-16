"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { TableComponent } from "@/components/TableComponent";
import { AddRowAndColumnButtons } from "@/components/AddRowAndColumnButtons";

type DataRow = {
  id: string;
  date: string;
  action: string;
  enrichment: string;
  status: string;
  [key: string]: any;
};

const initialData: DataRow[] = [
  {
    "id": "1",
    "date": "Oct 12, 2024 at 14:08 PM",
    "action": "Bitscale Evaluation - Account relevancy",
    "enrichment": "Bitscale Evaluation - Account relevancy check",
    "status": "completed",
    "isoDate": "2024-10-12T14:08:00"
  },
  {
    "id": "2",
    "date": "Oct 13, 2024 at 15:20 PM",
    "action": "BMW Evaluation - Data processing",
    "enrichment": "BMW Evaluation - Relevancy check",
    "status": "error",
    "isoDate": "2024-10-13T15:20:00"
  },
  {
    "id": "3",
    "date": "Oct 14, 2024 at 16:30 PM",
    "action": "Google Analysis",
    "enrichment": "Google Evaluation - Lilevancy check",
    "status": "processing",
    "isoDate": "2024-10-14T16:30:00"
  },
  {
    "id": "4",
    "date": "Oct 15, 2024 at 10:10 AM",
    "action": "Apple Data Processing",
    "enrichment": "Apple Evaluation - Olvancy check",
    "status": "completed",
    "isoDate": "2024-10-15T10:10:00"
  },
  {
    "id": "5",
    "date": "Oct 16, 2024 at 12:45 PM",
    "action": "Figma Analysis",
    "enrichment": "Figma Evaluation - Evancy check",
    "status": "processing",
    "isoDate": "2024-10-16T12:45:00"
  }
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
  const [editingCell, setEditingCell] = useState<{
    rowId: string;
    columnKey: string;
  } | null>(null);
  const [editingHeader, setEditingHeader] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const storedColumns = localStorage.getItem("columns");
    if (storedData) setData(JSON.parse(storedData));
    if (storedColumns) setColumns(JSON.parse(storedColumns));
  }, []);

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
  };

  const handleAddRow = () => {
    const newRow: DataRow = {
      id: (data.length + 1).toString(),
      date: getFormattedDate(),
      isoDate: new Date().toISOString(),
      action: "New Action",
      enrichment: "New Enrichment",
      status: "processing",
    };
    const newData = [...data, newRow];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const handleAddColumn = () => {
    const newKey = `customColumn${columns.length + 1}`;
    const newColumns = [
      ...columns,
      { key: newKey, label: `Custom Column ${columns.length + 1}` },
    ];
    setColumns(newColumns);
    setData(data.map((row) => ({ ...row, [newKey]: "New Value" })));
    localStorage.setItem("columns", JSON.stringify(newColumns));
  };

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.isoDate).getTime();
      const dateB = new Date(b.isoDate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }; 
  

  const handleCellEdit = (rowId: string, columnKey: string, value: string) => {
    const updatedData = data.map((row) =>
      row.id === rowId ? { ...row, [columnKey]: value } : row
    );
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const handleHeaderEdit = (key: string, label: string) => {
    const updatedColumns = columns.map((col) =>
      col.key === key ? { ...col, label } : col
    );
    setColumns(updatedColumns);
    localStorage.setItem("columns", JSON.stringify(updatedColumns));
  };

  return (
    <div className="p-6 bg-background">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        handleSortByDate={handleSortByDate}
        sortOrder={sortOrder}
      />
      <TableComponent
        data={data}
        columns={columns}
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        editingCell={editingCell}
        setEditingCell={setEditingCell}
        editingHeader={editingHeader}
        setEditingHeader={setEditingHeader}
        handleCellEdit={handleCellEdit}
        handleHeaderEdit={handleHeaderEdit}
      />
      <AddRowAndColumnButtons
        handleAddRow={handleAddRow}
        handleAddColumn={handleAddColumn}
      />
    </div>
  );
}
