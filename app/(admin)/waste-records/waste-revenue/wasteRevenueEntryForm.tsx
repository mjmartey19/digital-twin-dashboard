import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { wasteRevenueSchema } from "@/lib/validation"; // Import the schema
import { z } from "zod";

// Data Entry Form Component
const WasteRevenueEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const collectionTypes = ["Regular", "On Demand"];

  const handleFormSubmit = async () => {
    console.log(form.getValues());
    form.reset();
    setOpenDialog(false);
    toast.success("Waste revenue entry added successfully");
  };

  const form = useForm<z.infer<typeof wasteRevenueSchema>>({
    resolver: zodResolver(wasteRevenueSchema),
    defaultValues: {
      vin: "",
      date: "",
      totalBinsCollected: 0,
      wasteCollectionType: "",
      revenuePerBin: 0,
      totalRevenue: 0,
      driverName: "",
      collectionType: "Regular",
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
          <Plus className="mr-2 h-4 w-4" /> Add Waste Revenue
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new Waste Revenue Entry"
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
                    label="Vehicle Identification No. (VIN)"
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
                    name="totalBinsCollected"
                    label="Total Bins Collected"
                    placeholder="Enter total bins collected"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="wasteCollectionType"
                    label="Waste Collection Type"
                    placeholder="Select collection type"
                    options={collectionTypes.map((type) => ({
                      value: type,
                      label: type,
                    }))}
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="revenuePerBin"
                    label="Revenue Per Bin"
                    placeholder="Enter revenue per bin"
                    type="number"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="totalRevenue"
                    label="Total Revenue"
                    placeholder="Enter total revenue"
                    type="number"
                    readOnly
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverName"
                    label="Driver Name"
                    placeholder="Enter driver's name"
                  />
                </div>
              </section>

              <CustomDialogFooter
                isPending={false}
                onClose={() => setOpenDialog(false)}
                onSubmit={() => handleFormSubmit}
                submitLabel="Submit"
                closeLabel="Cancel"
              />
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default WasteRevenueEntryForm;
