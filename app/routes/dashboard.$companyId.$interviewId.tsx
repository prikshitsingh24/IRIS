import { redirect, useLoaderData } from "@remix-run/react";
import { fetchInterviewById } from "backend/dashboard/dashboard";
import { LoaderFunctionArgs } from "react-router";
import { Candidate } from "types/dashboard";



export default function Interview(){
    const interview = useLoaderData<any>();
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
                        Marks
                    </div>
            </div>
            {interview.candidates.map((candidate:Candidate,index:any)=>(
                <div className="grid grid-cols-[1fr_3fr_4fr_3fr_2fr] mb-4 border-2 rounded-md p-2 cursor-pointer hover:border-black mt-2">
                   <div>
                       {index}
                   </div>
                   <div>
                       {candidate.candidateName}
                   </div>
                   <div>
                       {candidate.candidateEmail}
                   </div>
                   <div>
                       Interview Status
                   </div>
                   <div>
                       Marks
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