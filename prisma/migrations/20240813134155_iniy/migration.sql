/*
  Warnings:

  - The primary key for the `UAT` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UAT" DROP CONSTRAINT "UAT_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "UAT_pkey" PRIMARY KEY ("id");
