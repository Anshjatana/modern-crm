import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SortAsc, Sparkles, Share2, Download, Trash2 } from "lucide-react";
import { HeaderProps } from '@/lib/interface'

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  handleSortByDate,
  sortOrder,
}) => (
  <div className="flex items-center justify-between mb-6">
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
      <Button
        variant="secondary"
        onClick={() => setStatusFilter(statusFilter === "all" ? "completed" : "all")}
      >
        <Filter className="h-4 w-4" /> Filter
      </Button>
      <Button variant="secondary" onClick={handleSortByDate}>
        <SortAsc className={`h-4 w-4 ${sortOrder === "asc" ? "rotate-180" : ""}`} /> Sort
      </Button>
    </div>
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
);
