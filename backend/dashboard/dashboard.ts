import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function fetchCompanyById(companyId:string) {
    try{
        const company = await prisma.company.findUnique({
            where:{
                companyId:companyId
            }
        })
        return {status:"200",name:company?.companyName}
    }catch(error){
        return {status:"404",error:error}
    }
}


export async function fetchAllInterviewById(companyId:string){
    try{
        const allInterview = await prisma.interview.findMany({
            where:{
                companyId:companyId
            }
        })
        return {status:"200",data:allInterview}
    }catch(error){
        return {status:"404",error:error}
    }
}


export async function fetchInterviewById(interviewId:string){
    try{
        const interview = await prisma.interview.findUnique({
            where:{
                interviewId:interviewId
            },
            include:{
                candidates:true
            }
        })
        return {status:"200",data:interview}
    }catch(error){
        return {status:"404",error:error}
    }
}