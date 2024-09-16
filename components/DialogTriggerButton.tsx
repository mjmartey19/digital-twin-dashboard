// components/CustomDialogTrigger.tsx

import { Button, ButtonProps } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface DialogTriggerButtonProps extends Omit<ButtonProps, 'size'> {
    dialogOpen: boolean;
    onDialogOpenChange: (open: boolean) => void;
    size?: "sm" | "lg" | "default" | "icon"; // Match the ButtonProps size options
    icon?: React.ReactNode;
    label: string;
}

export function DialogTriggerButton({
    dialogOpen,
    onDialogOpenChange,
    size = "sm",
    icon = <Plus className="h-4 w-4" />,
    label,
    ...props
}: DialogTriggerButtonProps) {
    return (
        <DialogTrigger asChild>
            <Button size="sm" className="sm:hidden bg-green-500">
                {icon}
            </Button>
            <Button
                size={size}
                className={`hidden sm:flex bg-green-500 hover:bg-green-400  ${props.className}`}
                onClick={() => onDialogOpenChange(!dialogOpen)}
                {...props}
            >
                {icon} {label}
            </Button>
        </DialogTrigger>
    );
}
