/*
  Warnings:

  - Made the column `userName` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "userName" SET NOT NULL;
