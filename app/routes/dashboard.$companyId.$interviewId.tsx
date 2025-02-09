import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { fetchInterviewById } from "backend/dashboard/dashboard";
import { updateInterview } from "backend/dashboard/interview";
import { LoaderFunctionArgs } from "react-router";
import { Candidate } from "types/dashboard";
import { UpdateInterview } from "types/interview";

export default function Interview(){
    const interview = useLoaderData<any>();
    
    if (interview.status == "Inactive"){
        return (
            <div className="w-full h-full mt-4">
               <div className="text-lg">Update Your Interview</div>
                <Form method="post" className="mt-5">
                    <div className="flex flex-col space-y-8">
                        <input type="text" name="interviewName" className="input-field w-1/2" placeholder="Name" defaultValue={interview.interviewName}/>
                        <input type="text" name="interviewDescription"  className="input-field" placeholder="Description" defaultValue={interview.interviewDescription}/>
                    </div>
                    <div className="flex flex-col items-start mt-4">
                    <div className="w-full h-full flex flex-row items-center">
                        <div className="mr-2">Interview status: </div>
                        <input type="checkbox" name="status" className="checkBox" value="Active" defaultChecked={false}/>
                    </div>
                    <button className="secondary-btn h-10 w-36 mt-5">Update</button>
                    </div>
                </Form>
            </div>
        )
    }

    if (interview.status == "Active") {
        return (
            <div className="w-full h-full mt-4">
                <div className="text-3xl">
                    {interview.interviewName}
                </div>
                <div className="mt-2 w-full ">
                    {interview.interviewDescription}
                </div>
                <div className="mt-2">
                    Status: {interview.status}
                </div>
                <div className="mt-2">
                    Link: <a href={interview.link} target="_blank"><span className="text-blue-400">{interview.link}</span></a>
                </div>
                <div className="mt-10 text-xl">
                    Candidates
                </div>
                <div className="grid grid-cols-[1fr_3fr_4fr_3fr_2fr] mb-4 border-2 rounded-md p-2 border-black mt-2">
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
                    <div className="grid grid-cols-[1fr_3fr_4fr_3fr_2fr] mb-4 border-2 rounded-md p-2 cursor-pointer hover:border-black mt-2">
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