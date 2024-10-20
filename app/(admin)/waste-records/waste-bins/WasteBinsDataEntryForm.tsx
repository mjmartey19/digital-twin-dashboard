import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { wasteBinsCollectedSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

// Waste Bins Collected Data Entry Form
const WasteBinsDataEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const routes = ["Route A", "Route B", "Route C", "Route D"]; // Example routes

  const handleFormSubmit = async () => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Waste bin collection entry added successfully");
  };

  const form = useForm<z.infer<typeof wasteBinsCollectedSchema>>({
    resolver: zodResolver(wasteBinsCollectedSchema),
    defaultValues: {
      vin: "",
      route: "",
      date: "",
      wasteBinsCollected: 0,
      tripDuration: "",
      driverName: "",
      fuelConsumed: 0,
      notesRemarks: "",
    },
  });

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button size="sm" className="sm:hidden bg-green-500">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="hidden sm:flex bg-green-500 hover:bg-green-400"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Waste Bin Data
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add Waste Bins Collected Data"
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
                    label="Vehicle Identification No."
                    placeholder="Vehicle VIN"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="route"
                    label="Route"
                    placeholder="Select Route"
                  >
                    {routes.map((route, i) => (
                      <SelectItem key={i} value={route}>
                        {route}
                      </SelectItem>
                    ))}
                  </CustomFormField>
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="date"
                    label="Date"
                    placeholder="Select Date"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="wasteBinsCollected"
                    label="Waste Bins Collected"
                    placeholder="Number of Waste Bins Collected"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="tripDuration"
                    label="Trip Duration"
                    placeholder="Trip Duration (hours)"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverName"
                    label="Driver Name"
                    placeholder="Driver's Name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="fuelConsumed"
                    label="Fuel Consumed (Liters)"
                    placeholder="Fuel Consumed in Liters"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="notesRemarks"
                    label="Notes/Remarks"
                    placeholder="Additional Notes or Remarks"
                  />
                </div>

                <CustomDialogFooter
                  isPending={false}
                  onClose={() => setOpenDialog(false)}
                  onSubmit={() => handleFormSubmit()}
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

export default WasteBinsDataEntryForm;
