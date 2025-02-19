import { NavLink, redirect, useLoaderData } from "@remix-run/react";
import { fetchAllInterviewById } from "backend/dashboard/dashboard";
import { LoaderFunctionArgs } from "react-router";
import { InterviewDetails } from "types/dashboard";


export default function Interviews(){
    const interviews = useLoaderData<InterviewDetails[] | any>();
    return(
        <div className="w-full h-[760px] overflow-y-scroll grid grid-cols-3 gap-4 mt-4">
            {interviews.data.map((interview:InterviewDetails,index:number)=>(
                    <div className="border h-56 border-gray-500 mb-4 rounded-md p-2 cursor-pointer  text-textColorWhite" key={index}>
                    <div className="w-full text-2xl flex flex-row justify-between">
                    <div>{interview.interviewName}</div>
                    <div className={`${interview.status=="Active"?'text-green-500 flex justify-center items-center rounded-full pl-2 pr-2 bg-green-900':interview.status=="Scheduled"?'text-yellow-500 flex justify-center items-center rounded-full pl-2 pr-2 bg-yellow-900':'text-red-500 flex justify-center items-center rounded-full pl-2 pr-2 bg-red-900'} text-sm `}>
                        {interview.status}
                    </div>
                    </div>
                    <div className="w-full text-sm mt-4">
                    Date: {interview.schedule}
                    </div>
                    <div className="w-full text-sm mt-4">
                    Description: {interview.interviewDescription.length>40?interview.interviewDescription.slice(0,40):interview.interviewDescription}{interview.interviewDescription.length>40?'...':''}
                    </div>
                    <div className="w-full text-sm mt-4">
                    Candidates: 3
                    </div>
                    <NavLink to={`/dashboard/${interviews.id}/${interview.interviewId}`}>
                    <div className="flex flex-row justify-center mt-6">
                        <div className="border border-btnColorBlue text-btnColorBlue hover:bg-blue-950 w-full flex justify-center items-center p-2 rounded-md">View Candidates</div>
                    </div>
                    </NavLink>
                    
                </div>
            ))}
        </div>
    )
}

export async function loader({params}:LoaderFunctionArgs){
    const companyId = await params.companyId;
    if (companyId) {
        const interviews = await fetchAllInterviewById(companyId);
        return {id:companyId,data:interviews.data};
    }
    return redirect("/")
}