import { NavLink, redirect, useLoaderData } from "@remix-run/react";
import { fetchAllInterviewById } from "backend/dashboard/dashboard";
import { LoaderFunctionArgs } from "react-router";
import { InterviewDetails } from "types/dashboard";


export default function Interviews(){
    const interviews = useLoaderData<InterviewDetails[]>();
    return(
        <div className="w-full h-full mt-4">
             <div className="grid grid-cols-4 mb-4">
                    <div>
                        Name
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        Status
                    </div>
                    <div>
                        Link
                    </div>
            </div>
            {interviews.map((interview,index)=>(
                <div className="grid grid-cols-4 mb-4" key={index}>
                    <div>
                    {interview.interviewName}
                    </div>
                    <div>
                        {interview.interviewDescription}
                    </div>
                    <div>
                        {interview.status}
                    </div>
                    <div>
                        <a href={interview.link} className="text-blue-400" target="_blank">{interview.link}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export async function loader({params}:LoaderFunctionArgs){
    const companyId = await params.companyId;
    if (companyId) {
        const interviews = await fetchAllInterviewById(companyId);
        return interviews.data;
    }
    return redirect("/")
}