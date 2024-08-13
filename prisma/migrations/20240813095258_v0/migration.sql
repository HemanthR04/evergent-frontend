/*
  Warnings:

  - You are about to drop the column `Acct_Role_Desc` on the `UAT` table. All the data in the column will be lost.
  - You are about to drop the column `acct_role_id` on the `UAT` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UAT" DROP COLUMN "Acct_Role_Desc",
DROP COLUMN "acct_role_id";
