-- CreateTable
CREATE TABLE "UAT" (
    "id" INTEGER NOT NULL,
    "customer_id" VARCHAR(255),
    "acct_id" VARCHAR(255) NOT NULL,
    "product" VARCHAR(255),
    "sales_method" VARCHAR(255),
    "Acct_Type_Desc" VARCHAR(255),
    "SKU" VARCHAR(255),
    "Service_Stat" VARCHAR(255),
    "customer_category" VARCHAR(255),
    "credit_class" VARCHAR(255),
    "str_addr" VARCHAR(255),
    "city" VARCHAR(255),
    "state" VARCHAR(255),
    "zip_code" VARCHAR(255),
    "auto_payment_method" VARCHAR(255),
    "email" VARCHAR(255),
    "cell_phone" VARCHAR(255),
    "bre_start_dt" VARCHAR(255),
    "bre_end_dt" VARCHAR(255),
    "lease_device" VARCHAR(255),
    "acct_status" VARCHAR(255),
    "cycle" VARCHAR(255),

    CONSTRAINT "UAT_pkey" PRIMARY KEY ("id")
);
