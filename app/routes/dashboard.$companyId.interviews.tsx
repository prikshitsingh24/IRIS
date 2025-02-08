import { NavLink, redirect, useLoaderData } from "@remix-run/react";
import { fetchAllInterviewById } from "backend/dashboard/dashboard";
import { LoaderFunctionArgs } from "react-router";
import { InterviewDetails } from "types/dashboard";


export default function Interviews(){
    const interviews = useLoaderData<InterviewDetails[]>();
    return(
        <div className="w-full h-full mt-4">
             <div className="grid grid-cols-[0.5fr_1fr_2.5fr_1fr_4fr] mb-4 border-2 rounded-md p-2 border-black">
                    <div>
                        S.no
                    </div>
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
                <div className="grid grid-cols-[0.5fr_1fr_2.5fr_1fr_4fr] mb-4 border-2 rounded-md p-2 cursor-pointer hover:border-black" key={index}>
                    <div>
                        {index+1}
                    </div>
                    <div className="w-full">
                    {interview.interviewName}
                    </div>
                    <div className="w-full">
                        {interview.interviewDescription.length>40?interview.interviewDescription.slice(0,40):interview.interviewDescription}{interview.interviewDescription.length>40?'...':''}
                    </div>
                    <div className={`w-full ${interview.status=="Active"?'text-green-400':'text-red-400'}`}>
                        {interview.status}
                    </div>
                    <div className="w-full">
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