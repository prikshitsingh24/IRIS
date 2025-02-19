import { PrismaClient } from "@prisma/client";
import { LoginCredentails } from "types/auth";


const prisma = new PrismaClient()

export async function login(credentails: LoginCredentails){
    try{
        const company = await prisma.company.findMany({
            where:{
                companyEmail:credentails.companyEmail,
                companyPassword: credentails.companyPassword
            }
        })
        
        return {status:"200",id:company[0].companyId}
    }catch(error){
        return {status:"404",error:error}
    }
}

