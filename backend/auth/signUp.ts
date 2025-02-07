import { PrismaClient } from "@prisma/client";
import { SignUpCredentials } from "types/auth";


const prisma = new PrismaClient()

export async function signUp(credentails: SignUpCredentials){
    try{
        const isCompanyExist = await prisma.company.findMany({
            where:{
                companyEmail: credentails.companyEmail,
            }
        })

        if (isCompanyExist) {
            return {status:"404",error:"Company already exists with this id"}
        }

        const company = await prisma.company.create({
            data:{
                companyName: credentails.companyName,
                companyEmail: credentails.companyEmail,
                companyPassword: credentails.companyPassword
            }
        })

        return {status:"200",id:company.companyId}

    }catch(error){
        return {status:"404",error:error}
    }
}