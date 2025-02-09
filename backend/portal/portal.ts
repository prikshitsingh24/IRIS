import { PrismaClient } from "@prisma/client"
import { Candidate } from "types/portal";
import nodemailer from 'nodemailer';


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD
    }
  });

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



export async function registerCandidateById(candidate:Candidate,interviewId:string,companyName:string){
    try{
        const registeredCandidate = await prisma.candidate.create({
            data:{
                candidateName:candidate.candidateName,
                candidateNumber:candidate.candidateNumber,
                candidateEmail:candidate.candidateEmail,
                interviewStatus: "false",
                score:"0",
                interviewId:interviewId
            }
        });
        const interviewLink = `http://localhost:5173/interview/${interviewId}/${registeredCandidate.candidateId}`
        var mailOptions = {
            from: process.env.MAIL,
            to: registeredCandidate.candidateEmail,
            subject: 'Interview Invitation from ' + companyName,
            text: 'The link for your interview process:\n' + interviewLink
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        return {status:"200"}
    }catch(error){
        return {status:"404",error:error}
    }
}