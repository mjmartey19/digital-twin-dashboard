import React, { useState } from "react";
import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { routeSchema } from "@/lib/validation"; // Assuming your Zod schema is defined here

const RouteDataEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleFormSubmit = async (data: any) => {
    // Handle form submission here
    console.log(data);
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Route data entry added successfully");
  };

  const form = useForm<z.infer<typeof routeSchema>>({
    resolver: zodResolver(routeSchema),
    defaultValues: {
      routeId: "",
      vin: "",
      startLocation: "",
      endLocation: "",
      distance: 0,
      startTime: "",
      endTime: "",
      stopsMade: 0,
      routeStatus: "Pending",
      driverId: "",
      fuelConsumption: 0,
      notes: "",
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
          <Plus className="mr-2 h-4 w-4" /> New Route Data
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add New Route Data"
            description="Fill the form fields below"
          />

          <Form {...form}>
            <form
              noValidate
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex-1 space-y-8 pt-5"
            >
              <section className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="routeId"
                    label="Route ID"
                    placeholder="Enter Route ID"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="vin"
                    label="VIN"
                    placeholder="Enter VIN"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="startLocation"
                    label="Start Location"
                    placeholder="Enter Start Location"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="endLocation"
                    label="End Location"
                    placeholder="Enter End Location"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="distance"
                    label="Distance (km)"
                    placeholder="Enter Distance"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="startTime"
                    label="Start Time"
                    placeholder="Select Start Time"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="endTime"
                    label="End Time"
                    placeholder="Select End Time"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="stopsMade"
                    label="Stops Made"
                    placeholder="Enter Stops Made"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="routeStatus"
                    label="Route Status"
                    placeholder="Enter Route Status"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverId"
                    label="Driver ID"
                    placeholder="Enter Driver ID"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="fuelConsumption"
                    label="Fuel Consumption (Litres)"
                    placeholder="Enter Fuel Consumption"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="notes"
                    label="Notes/Remarks"
                    placeholder="Enter Notes or Remarks"
                  />
                </div>

                <CustomDialogFooter
                  isPending={false}
                  onClose={() => setOpenDialog(false)}
                  onSubmit={form.handleSubmit(handleFormSubmit)}
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

export default RouteDataEntryForm;
