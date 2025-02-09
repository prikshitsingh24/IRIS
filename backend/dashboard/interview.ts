import { PrismaClient } from "@prisma/client"
import { Interview, UpdateInterview } from "types/interview"

const prisma = new PrismaClient()

export async function createInterview(interview:Interview){
    try{
        await prisma.interview.create({
            data:{
                interviewName:interview.interviewName,
                interviewDescription: interview.interviewDescription,
                companyId:interview.companyId,
                status:interview.status,
                link:interview.link
            }
        })
        return {status:"200"}
    }catch(error){
        return {status:"404",error:error}
    }
}

export async function updateInterview(interview:UpdateInterview){
    try{
        await prisma.interview.update({
            where:{
                interviewId:interview.interviewId
            },
            data:{
                interviewName:interview.interviewName,
                interviewDescription: interview.interviewDescription,
                status:interview.status,
                link:interview.link
            }
        })
        return {status:"200"}
    }catch(error){
        return {status:"404",error:error}
    }
}