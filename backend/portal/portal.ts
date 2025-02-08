import { PrismaClient } from "@prisma/client"
import { Candidate } from "types/portal";


const prisma = new PrismaClient()

export async function getCompanyAndInterviewById(companyId:string,interviewName:string){
    try{
        const interview = await prisma.company.findUnique({
            where: {
                companyId: companyId,
            },
            select: {
                companyName: true,
                interviews: {
                    where: {
                        interviewName: interviewName,
                    },
                },
            },
        });
        return {status:"200",data:interview}
    }catch(error){
        return {status:"404",error:error}
    }
}



export async function registerCandidateById(candidate:Candidate,interviewId:string){
    try{
        await prisma.candidate.create({
            data:{
                candidateName:candidate.candidateName,
                candidateNumber:candidate.candidateNumber,
                candidateEmail:candidate.candidateEmail,
                interviewId:interviewId
            }
        })
        return {status:"200"}
    }catch(error){
        return {status:"404",error:error}
    }
}