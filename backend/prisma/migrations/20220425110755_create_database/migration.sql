-- CreateTable
CREATE TABLE `Category` (
    `categoryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Run` (
    `runId` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NULL,
    `runnerName` VARCHAR(191) NOT NULL,
    `videoLink` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `time` INTEGER NOT NULL,
    `days` INTEGER NOT NULL,

    PRIMARY KEY (`runId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Run` ADD CONSTRAINT `Run_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE SET NULL ON UPDATE CASCADE;
