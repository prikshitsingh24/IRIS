import { PrismaClient } from "@prisma/client"


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