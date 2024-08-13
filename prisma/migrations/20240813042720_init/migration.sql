/*
  Warnings:

  - Changed the type of `lease_device` on the `UAT` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UAT" DROP COLUMN "lease_device",
ADD COLUMN     "lease_device" INTEGER NOT NULL;
