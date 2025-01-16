import { Button } from "@/components/ui/button";
import { AddRowAndColumnButtonsProps } from "@/lib/interface";


export const AddRowAndColumnButtons = ({ handleAddRow, handleAddColumn }: AddRowAndColumnButtonsProps) => (
  <div className="flex gap-4 mt-4">
    <Button onClick={handleAddRow}>Add Row</Button>
    <Button onClick={handleAddColumn}>Add Column</Button>
  </div>
);
