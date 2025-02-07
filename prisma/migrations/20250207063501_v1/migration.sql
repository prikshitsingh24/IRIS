-- CreateTable
CREATE TABLE "Company" (
    "companyId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "companyPassword" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "Interview" (
    "interviewId" TEXT NOT NULL,
    "interviewName" TEXT NOT NULL,
    "interviewDescription" TEXT NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("interviewId")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "candidateId" TEXT NOT NULL,
    "candidateName" TEXT NOT NULL,
    "candidateEmail" TEXT NOT NULL,
    "candidateNumber" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("candidateId")
);

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("interviewId") ON DELETE RESTRICT ON UPDATE CASCADE;
