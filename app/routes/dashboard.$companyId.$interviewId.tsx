import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { fetchInterviewById } from "backend/dashboard/dashboard";
import { updateInterview } from "backend/dashboard/interview";
import { LoaderFunctionArgs } from "react-router";
import { Candidate } from "types/dashboard";
import { UpdateInterview } from "types/interview";

export default function Interview(){
    const interview = useLoaderData<any>();
    console.log(interview.createdAt)
        return (
            <div className="w-full h-full mt-4">
                <div className="text-3xl  text-textColorWhite">
                    {interview.interviewName}
                </div>
                <div className="mt-2 w-full  text-textColorWhite ">
                    {interview.interviewDescription}
                </div>
                <div className="mt-2  text-textColorWhite">
                    Status: <span className={`${interview.status=="Active"?'text-green-500 ':interview.status=="Scheduled"?'text-yellow-500 ':'text-red-500'}`}>{interview.status}</span>
                </div>
                <div className="mt-2  text-textColorWhite">
                    Created On: {interview.createdAt.toISOString().split('T')[0]}
                </div>
                <div className="mt-2  text-textColorWhite">
                    Link: <a href={interview.link} target="_blank"><span className="text-blue-400">{interview.link}</span></a>
                </div>
                <div className="mt-10 text-xl  text-textColorWhite">
                    Candidates
                </div>
                <div className="grid grid-cols-[1fr_3fr_4fr_3fr_2fr] mb-4 border rounded-md p-2 border-gray-500 cursor-pointer  text-textColorWhite mt-2">
                        <div>
                            S.no
                        </div>
                        <div>
                            Name
                        </div>
                        <div>
                            Email
                        </div>
                        <div>
                            Interview Status
                        </div>
                        <div>
                            Score
                        </div>
                </div>
                {interview.candidates.map((candidate:Candidate,index:any)=>(
                    <div className="grid grid-cols-[1fr_3fr_4fr_3fr_2fr] mb-4 border rounded-md p-2 cursor-pointer border-gray-500 text-textColorWhite mt-2">
                       <div>
                           {index+1}
                       </div>
                       <div>
                           {candidate.candidateName}
                       </div>
                       <div>
                           {candidate.candidateEmail}
                       </div>
                       <div>
                           {candidate.interviewStatus}
                       </div>
                       <div>
                           {candidate.score}
                       </div>
                    </div>
                ))}
            </div>
        )
    
}


export async function loader({params}:LoaderFunctionArgs){
    const interviewId = await params.interviewId;
    if(interviewId){
        const interview = await fetchInterviewById(interviewId)
        return interview.data
    }
    return redirect("/")
}

export async function action({request,params}:ActionFunctionArgs){
    const formData = await request.formData();
    const companyId = await params.companyId;
    const interviewId = await params.interviewId;
    const formObject = Object.fromEntries(formData);
    if (companyId && interviewId) {
        const interviewName = formObject['interviewName'] as string;
        const interviewDescription = formObject['interviewDescription'] as string;
        const status = formObject["status"] as string || "Inactive";
        const link = `http://localhost:5173/portal/${companyId}/${interviewName}`
      
        const interview: UpdateInterview = {
            interviewId,
            interviewName,
            interviewDescription,
            status,
            link

        };
      
        const isInterviewUpdated = await updateInterview(interview);
    
        if(isInterviewUpdated?.status == "200"){
            return redirect(`/dashboard/${companyId}/interviews`)
        }
    
        if (isInterviewUpdated?.status == "404"){
            console.log(isInterviewUpdated.error)
            return
        }
    }
    return redirect(`/`) 
}