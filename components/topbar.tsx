"use client";

import React, { useState } from "react";
import { AvatarGroup, IconButton, Menu, MenuItem, Switch, TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Topbar() {
  const [fileName, setFileName] = useState("Name of the file");
  const [isEditing, setIsEditing] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleAutoSaveToggle = () => {
    setAutoSave(!autoSave);
    // You can implement auto-save logic here
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-14 border-b bg-background flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          {isEditing ? (
            <TextField
              value={fileName}
              onChange={handleFileNameChange}
              onBlur={toggleEditMode}
              size="small"
              variant="standard"
            />
          ) : (
            <span
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={toggleEditMode}
            >
              {fileName}
            </span>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Auto Save Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Auto Save</span>
          <Switch checked={autoSave} onChange={handleAutoSaveToggle} />
        </div>

        {/* User Profile Dropdown */}
        <div>
          <IconButton onClick={handleMenuOpen}>
          <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              <div style={{ display: "flex", flexDirection: "column", borderRadius:'20px', minWidth:'100px' }}>
                <strong>John Doe</strong>
                <span style={{ fontSize: "12px", color: "#888" }}>
                  john.doe@example.com
                </span>
              </div>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}