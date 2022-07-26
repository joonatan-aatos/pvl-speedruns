/*
  Warnings:

  - Made the column `categoryId` on table `Run` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Run` DROP FOREIGN KEY `Run_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Run` MODIFY `categoryId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Run` ADD CONSTRAINT `Run_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
