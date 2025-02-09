/*
  Warnings:

  - A unique constraint covering the columns `[interviewName]` on the table `Interview` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `interviewStatus` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "interviewStatus" TEXT NOT NULL,
ADD COLUMN     "score" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Interview_interviewName_key" ON "Interview"("interviewName");
