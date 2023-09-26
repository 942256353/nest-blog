/*
  Warnings:

  - Added the required column `updatedAt` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `article_categoryId_fkey` ON `article`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
