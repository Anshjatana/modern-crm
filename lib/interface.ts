export interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    statusFilter: string;
    setStatusFilter: (value: string) => void;
    handleSortByDate: () => void;
    sortOrder: string;
  }
 export interface AddRowAndColumnButtonsProps {
    handleAddRow: () => void;
    handleAddColumn: () => void;
  }
 export  interface TableComponentProps {
    data: Array<{ [key: string]: any; id: string; status: string }>;
    columns: Array<{ key: string; label: string }>;
    searchTerm: string;
    statusFilter: string;
    editingCell: { rowId: string; columnKey: string } | null;
    setEditingCell: (cell: { rowId: string; columnKey: string } | null) => void;
    editingHeader: string | null;
    setEditingHeader: (header: string | null) => void;
    handleCellEdit: (rowId: string, columnKey: string, value: string) => void;
    handleHeaderEdit: (columnKey: string, value: string) => void;
  }