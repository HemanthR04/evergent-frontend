"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { custom, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { productTypes, salesMethod, accountStaus ,SKU ,serviceStatus , customerCategory ,paymentMethod,billCycleDate} from "@/lib/data/data";
import { PrismaClient } from "@prisma/client";
import { getBAN } from "@/actions/customerDetails.action";
import { useState } from "react";

const prisma = new PrismaClient();

interface CustomerDetails {
  customer_id: String;
  product: String;
  sales_method: String;
  acct_status: String,
  SKU: String,
  Service_Stat: String,
  customer_category: String,
  auto_payment_method: String,
  cycle: String

}

const formSchema = z.object({
  environment: z.string(),
  product: z.string(),
  sales_method: z.string(),
  acct_status: z.string(),
  SKU: z.string(),
  Service_Stat: z.string(),
  customer_category: z.string(),
  auto_payment_method: z.string(),
  cycle: z.string(),
});

const Filterdata = () => {
  const [details, SetDetails] = useState<CustomerDetails[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      environment: "",
      product: "",
      sales_method: "",
      acct_status: "",
      SKU: "",
      Service_Stat: "",
      customer_category: "",
      auto_payment_method: "",
      cycle: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await getBAN(values);
    if (response.status === "success") {
      //@ts-ignore
      SetDetails(response.data);
    }
  }
  return (
    <>
      <div className="flex items-start justify-start">
        <div className="flex">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-start justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="environment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Environment</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px] ">
                        <SelectValue placeholder="Select Environment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uat">UAT</SelectItem>
                        <SelectItem value="preprod">Preprod</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Cohort" />
                      </SelectTrigger>
                      <SelectContent>
                        {productTypes.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sales_method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sales Method</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Sales Method" />
                      </SelectTrigger>
                      <SelectContent>
                        {salesMethod.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acct_status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Status</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Account Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {accountStaus.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="SKU"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select SKU" />
                      </SelectTrigger>
                      <SelectContent>
                        {SKU.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Service_Stat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Status</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Service Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceStatus.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customer_category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Category</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Customer Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {customerCategory.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="auto_payment_method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select Payment Method" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethod.map((opts, i) => (
                          <SelectItem key={i} value={opts.value}>
                            {opts.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              /><FormField
              control={form.control}
              name="cycle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bill Cycle Date</FormLabel>
                  <Select
                    onValueChange={(value: any) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger className="w-[380px]">
                      <SelectValue placeholder="Select BCD" />
                    </SelectTrigger>
                    <SelectContent>
                      {billCycleDate.map((opts, i) => (
                        <SelectItem key={i} value={opts.value}>
                          {opts.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div className="p-2 border-[1px] w-[1000px] mx-4 rounded-md">
          <Table>
            <TableCaption>A list of Customer Details</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Customer_ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Sales Method</TableHead>
                <TableHead>Account Status</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>cycle</TableHead>
                <TableHead>Service_Stat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.map((customer, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {customer.customer_id}
                  </TableCell>
                  <TableCell>{customer.product}</TableCell>
                  <TableCell>{customer.sales_method}</TableCell>
                  <TableCell>{customer.acct_status}</TableCell>
                  <TableCell>{customer.SKU}</TableCell>
                  <TableCell>{customer.cycle}</TableCell>
                  <TableCell>{customer.Service_Stat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Filterdata;
