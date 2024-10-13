import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from "zod";
import { SelectItem } from '@radix-ui/react-select';
import { Plus } from 'lucide-react';
import { CustomDialogFooter } from '@/components/CustomDialogFooter';
import { CustomDialogHeader } from '@/components/CustomDialogHeader';
import CustomFormField from '@/components/CustomFormField';
import { FormFieldType } from '@/components/forms/LoginForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { insuranceSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';

const InsuranceEntryForm = () => {
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

  const form = useForm<z.infer<typeof insuranceSchema>>({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
        vin: "",
        insuranceProvider: "",
        policyNumber: "",
        coverageDetails: "",
        coverageStartDate: "",
        premiumAmount: 0,
        paymentFrequency: "",
        paymentDate: "",
        deductible: 0,
        insuranceType: "",
        coverageEndDate: "",
        notesRemarks: "",
        renewalDate: "",
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
          <Plus className="mr-2 h-4 w-4" /> Add Insurance
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new insurance entry"
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
                    label="VIN"
                    placeholder="vehicle indentification number"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="insuranceProvider"
                    label="Inusurance Provider"
                    placeholder="eg: vanguard"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="policyNumber"
                    label="Policy Number"
                    placeholder="eg: 17jk23-9ad"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="coverageStartDate"
                    label="Coverage Start Date"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="coverageEndDate"
                    label="Coverage End Date"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="premiumAmount"
                    label="Premium Amount"
                    placeholder="GHC: 100"
                  />

                    <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="paymentFrequency"
                    label="Payment Frequency"
                    placeholder="high"
                  />

                    <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="paymentDate"
                    label="Payment Date"
                    placeholder="YYYY-MM-DD"
                  />
                  
                  <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="deductible"
                  label="Deductible"
                  placeholder="GHC 10"
                />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="coverageDetails"
                        label="Coverage Details"
                        placeholder="coverageDetails...."
                    />
                
                    <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="renewalDate"
                    label="Renewal Date"
                    placeholder="YYYY-MM-DD"
                    />
                    
                    <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="notesRemarks"
                    label="Notes Remarks"
                    placeholder="some remarks.."
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
  )
}

export default InsuranceEntryForm
