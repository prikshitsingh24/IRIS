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