"use server";

import { prisma } from "../lib/db";
import { UAT } from "@prisma/client";
import z from "zod";


const GetCustomerDetails = z.object({
  environment: z.string().optional(),
  product: z.string().optional(),
  sales_method: z.string().optional(),
  acct_status: z.string().optional(),
  SKU: z.string().optional(),
  Service_Stat: z.string().optional(),
  customer_category: z.string().optional(),
  auto_payment_method: z.string().optional(),
  cycle: z.string().optional(),

});

type GetCustomerDetails = z.infer<typeof GetCustomerDetails>;

export const getBAN = async (data: GetCustomerDetails) => {
  

  const { environment, product, sales_method , acct_status,SKU,Service_Stat,customer_category,auto_payment_method,cycle } = data;

  try {

    const details = await prisma.uAT.findMany({
      where: {
       ...(product && { product: product } ),
       ...(sales_method && { sales_method: sales_method } ),
       ...(acct_status && { acct_status: acct_status } ),
       ...(SKU && { SKU: SKU } ),
       ...(Service_Stat && { Service_Stat: Service_Stat } ),
       ...(customer_category && { customer_category: customer_category } ),
       ...(auto_payment_method && { auto_payment_method: auto_payment_method } ),
       ...(cycle && { cycle: cycle } ),
       
      },
      
        take: 100,
      
    });

   

    return { status: "success", data: details };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Internal Server Error" };
  }
};