import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function fetchCandidateById(candidateId:string){
    try{
        const candidate = await prisma.candidate.findUnique({
            where:{
                candidateId:candidateId
            }
        })
        return {status:"200",data:candidate}
    }catch(error){
        return {status:"404"}
    }
}