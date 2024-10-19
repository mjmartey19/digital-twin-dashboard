import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { wasteDumpingFeeSchema } from "@/lib/validation"; // Assuming validation is handled
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const WasteDumpingFeeEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleFormSubmit = async () => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Waste dumping fee entry added successfully");
  };

  const form = useForm<z.infer<typeof wasteDumpingFeeSchema>>({
    resolver: zodResolver(wasteDumpingFeeSchema),
    defaultValues: {
      vin: "",
      date: "",
      wasteDumped: 0,
      dumpingFacility: "",
      dumpingFeePerKg: 0,
      totalCost: 0,
      notesRemarks: "",
    },
  });

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button size="sm" className="sm:hidden bg-blue-500">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="hidden sm:flex bg-blue-500 hover:bg-blue-400"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Waste Dumping Fee Entry
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new Waste Dumping Fee Entry"
            description="Fill the form fields below"
          />

          <Form {...form}>
            <form
              noValidate
              onSubmit={handleFormSubmit}
              className="flex-1 space-y-8 pt-5"
            >
              <section className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="vin"
                    label="Vehicle Identification Number (VIN)"
                    placeholder="VIN"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="date"
                    label="Date"
                    placeholder="Pick a date"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="wasteDumped"
                    label="Waste Dumped (kg)"
                    placeholder="Amount of waste in kg"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="dumpingFacility"
                    label="Dumping Facility"
                    placeholder="Facility Name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="dumpingFeePerKg"
                    label="Dumping Fee per kg (GHS)"
                    placeholder="Fee per kg in GHS"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="totalCost"
                    label="Total Cost (GHS)"
                    placeholder="Total cost in GHS"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="notesRemarks"
                    label="Notes/Remarks"
                    placeholder="Any additional remarks"
                  />
                </div>

                <CustomDialogFooter
                  isPending={false}
                  onClose={() => setOpenDialog(false)}
                  onSubmit={() => handleFormSubmit}
                  submitLabel="Submit"
                  closeLabel="Cancel"
                />
              </section>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default WasteDumpingFeeEntryForm;
