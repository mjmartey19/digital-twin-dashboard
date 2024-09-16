import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface CustomDialogHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export function CustomDialogHeader({
    title,
    description,
    className,
}: CustomDialogHeaderProps) {
    return (
        <DialogHeader className={"border-b pb-2"}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
    );
}
