-- DropIndex
DROP INDEX `article_categoryId_fkey` ON `article`;

-- AlterTable
ALTER TABLE `article` MODIFY `thumb` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
