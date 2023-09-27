-- DropIndex
DROP INDEX `article_categoryId_fkey` ON `article`;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
