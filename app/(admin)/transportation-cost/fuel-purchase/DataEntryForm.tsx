"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { fuelingFormSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { SelectItem } from "@/components/ui/select";


const DataEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const paymentMethods = ["Cash", "Credit Card"]
  
  const handleFormSubmit = async() => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Fuel purchase entry added successfully")
  } 

  const form = useForm<z.infer<typeof fuelingFormSchema>>({
    resolver: zodResolver(fuelingFormSchema),
    defaultValues: {
      vin: "",
      driverName: "",
      fuelPurchasedLitres: 0,
      fuelCostGHS: 0,
      fuelStationName: "",
      paymentMethod: "",
      noteRemark: "",
    }
  })

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
          <Plus className="mr-2 h-4 w-4" /> Buy Fuel
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Fuel Purchase Entry"
            description="Fill the form feilds below"
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
                    label="Vehicle Identification Number"
                    placeholder="Enter VIN"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverName"
                    label="Driver Name"
                    placeholder="Enter Driver Name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="fuelPurchasedLitres"
                    label="Fuel Purchased (Litres)"
                    placeholder="0"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="fuelCostGHS"
                    label="Fuel Cost (GHS)"
                    placeholder="Enter Cost"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="fuelStationName"
                    label="Fuel Station Name"
                    placeholder="fuel station name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="paymentMethod"
                    label="Payment Method"
                    placeholder="select"
                  >
                    {paymentMethods.map((method, i) => (
                      <SelectItem key={i} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </CustomFormField>
                  <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="noteRemark"
                    label="Note Remark"
                    placeholder="a short remark"
                    className="col-span-2"
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

export default DataEntryForm;
