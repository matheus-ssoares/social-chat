/*
  Warnings:

  - Added the required column `message` to the `chat_hub_messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chat_hub_messages" ADD COLUMN     "message" TEXT NOT NULL;
