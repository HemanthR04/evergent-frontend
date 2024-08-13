-- CreateTable
CREATE TABLE "UAT" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "acct_id" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "sales_method" TEXT NOT NULL,
    "SKU" TEXT NOT NULL,
    "Service_Stat" TEXT NOT NULL,
    "customer_category" TEXT NOT NULL,
    "auto_payment_method" TEXT NOT NULL,
    "lease_device" BOOLEAN NOT NULL,
    "acct_status" TEXT NOT NULL,
    "cycle" INTEGER NOT NULL,

    CONSTRAINT "UAT_pkey" PRIMARY KEY ("id")
);
