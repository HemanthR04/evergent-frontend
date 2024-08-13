/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UAT` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Acct_Role_Desc` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Acct_Type_Desc` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acct_role_id` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bre_start_dt` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cell_phone` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credit_class` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `str_addr` to the `UAT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `UAT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UAT" ADD COLUMN     "Acct_Role_Desc" TEXT NOT NULL,
ADD COLUMN     "Acct_Type_Desc" TEXT NOT NULL,
ADD COLUMN     "acct_role_id" INTEGER NOT NULL,
ADD COLUMN     "bre_end_dt" TIMESTAMP(3),
ADD COLUMN     "bre_start_dt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cell_phone" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "credit_class" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "str_addr" TEXT NOT NULL,
ADD COLUMN     "zip_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UAT_email_key" ON "UAT"("email");
