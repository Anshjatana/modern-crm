"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  LayoutGrid, 
  Settings, 
  RefreshCw,
  History
} from "lucide-react";

export function Sidebar() {
  const [layout, setLayout] = useState("grid"); // Example state to handle layout
  const [historyOpen, setHistoryOpen] = useState(false); // Example state to handle history view
  const [isRefreshing, setIsRefreshing] = useState(false); // Example state for refresh action

  // Handle layout change
  const handleLayoutChange = () => {
    setLayout((prev) => (prev === "grid" ? "list" : "grid"));
    // Add any specific action here based on layout (e.g., switch view types)
  };

  // Handle history toggle
  const handleHistoryToggle = () => {
    setHistoryOpen(!historyOpen);
    // Add any history-related logic here (e.g., show/hide history section)
  };

  // Handle refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false); // Simulate refresh action
    }, 2000);
  };

  // Handle settings toggle
  const handleSettingsToggle = () => {
    // Add settings-related logic here (e.g., open settings modal)
    console.log("Opening settings...");
  };

  return (
    <div className="border-r bg-background w-[60px] flex flex-col items-center py-4">
      <div className="space-y-4 w-full">
        {/* Layout Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
          onClick={handleLayoutChange}
        >
          <LayoutGrid className="h-5 w-5 animate-pulse " />
        </Button>
        
        {/* History Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
          onClick={handleHistoryToggle}
        >
          <History className="h-5 w-5 animate-bounce " />
        </Button>
        
        {/* Refresh Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
          onClick={handleRefresh}
          disabled={isRefreshing} // Disable button during refresh
        >
          <RefreshCw className="h-5 w-5 animate-spin" />
        </Button>
      </div>
      
      <div className="mt-auto space-y-4">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Settings Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
          onClick={handleSettingsToggle}
        >
          <Settings className="h-5 w-5 animate-spin " />
        </Button>
      </div>
    </div>
  );
}
