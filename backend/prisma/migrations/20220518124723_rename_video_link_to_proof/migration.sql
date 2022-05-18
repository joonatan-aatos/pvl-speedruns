/*
  Warnings:

  - You are about to drop the column `videoLink` on the `Run` table. All the data in the column will be lost.
  - Added the required column `proof` to the `Run` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Run` DROP COLUMN `videoLink`,
    ADD COLUMN `proof` VARCHAR(191) NOT NULL;
