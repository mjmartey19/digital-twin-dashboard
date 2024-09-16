import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

interface CustomDialogFooterProps {
    isPending: boolean;
    onClose: () => void;
    onSubmit: () => void;
    submitLabel: string;
    closeLabel?: string;
}

export function CustomDialogFooter({
    isPending,
    onClose,
    onSubmit,
    submitLabel,
    closeLabel = "Close", // Default value for close button label
}: CustomDialogFooterProps) {
    return (
        <DialogFooter>
            <Button type="button" variant="secondary" onClick={onClose}>
                {closeLabel}
            </Button>
            <Button
                type="submit"
                className="bg-green-500 hover:bg-green-400"
                onClick={onSubmit}
                disabled={isPending}
            >
                {isPending && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                )}
                {submitLabel}
            </Button>
        </DialogFooter>
    );
}
