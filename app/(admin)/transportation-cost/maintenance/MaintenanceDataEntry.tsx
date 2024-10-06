import { maintenanceRecordSchema } from '@/lib/validation';
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CustomDialogHeader } from '@/components/CustomDialogHeader';
import { CustomDialogFooter } from '@/components/CustomDialogFooter';
import CustomFormField from '@/components/CustomFormField';
import { FormFieldType } from '@/components/forms/LoginForm';
import { Form } from '@/components/ui/form';



const MaintenanceDataEntry = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleFormSubmit = async() => {
        // handle form submission here
        console.log(form.getValues());
        // Reset form
        form.reset();
        // Close dialog
        setOpenDialog(false);
        toast.success("Fuel purchase entry added successfully")
    }
    
    const form = useForm<z.infer<typeof maintenanceRecordSchema>>({
        resolver: zodResolver(maintenanceRecordSchema),
        defaultValues: {
            vin: "",
            date: ``,
            driverName: "",
            maintenanceType: "",
            partsReplacedServiced: "",
            costOfMaintenance: 0,
            serviceProvider: "",
            serviceLocation: "",
            nextScheduledMaintenance: "",
            notesRemarks: "",
            descriptionOfWorkDone: "",
            technicianName: ""
        },
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
          <Plus className="mr-2 h-4 w-4" /> Add Staff
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new Staff Member"
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
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="date"
                    label="Date"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="vin"
                    label="Vehicle Identification No."
                    placeholder="vin"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverName"
                    label="Driver's Name"
                    placeholder="name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="maintenanceType"
                    label="Maintenance Type"
                    placeholder="eg. oil change"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="partsReplacedServiced"
                    label="Parts Replaced"
                    placeholder="eg. wind shield changed"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="costOfMaintenance"
                    label="Cost of Maintenance(GHS)"
                    placeholder="0"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="service Provider"
                    label="Service Provider"
                    placeholder="Vision Mechanic Services"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="serviceLocation"
                    label="Service Location"
                    placeholder="eg. Kotei"
                    />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="technicianName"
                    label="Technician Name"
                    placeholder="eg. Jamel"
                  />


                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="technicianName"
                    label="Technician Name"
                    placeholder="eg. Jamel"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="technicianName"
                    label="Technician Name"
                    placeholder="eg. Jamel"
                  />


                  <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="descriptionOfWorkDone"
                    label="Description of Work Done"
                    placeholder="eg. Windshield replaced with new aluminum"
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
}

export default MaintenanceDataEntry
