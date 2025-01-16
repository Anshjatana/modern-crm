"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  LayoutGrid, 
  Settings, 
  RefreshCw,
  History
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="border-r bg-background w-[60px] flex flex-col items-center py-4">
      <div className="space-y-4 w-full">
        {/* Layout Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
        >
          <LayoutGrid className="h-5 w-5 animate-pulse " />
        </Button>
        
        {/* History Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none"
        >
          <History className="h-5 w-5 animate-bounce " />
        </Button>
        
        {/* Refresh Button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] rounded-none" 
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
        >
          <Settings className="h-5 w-5 animate-spin " />
        </Button>
      </div>
    </div>
  );
}
