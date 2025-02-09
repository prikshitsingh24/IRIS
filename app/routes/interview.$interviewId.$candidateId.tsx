import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchInterviewById } from "backend/dashboard/dashboard";
import { fetchCandidateById } from "backend/interview/interview";



export default function Interview(){
    const details = useLoaderData<any>();

    return(
        <div className="grid grid-cols-[1fr_1280px_1fr] w-full h-screen overflow-hidden p-4">
            <div></div>
            <div className="w-full h-full border-2 rounded-lg  grid grid-rows-[2fr_4fr]">
                <div className="grid grid-cols-2 border-b-2">
                    <div className="border-r-2 p-2">
                        <div className="text-2xl">{details.interview.interviewName}</div>
                        <div className="mt-4">Description: <br />{details.interview.interviewDescription}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-[200px] border-2 w-[200px] mt-4"></div>
                        <div className="mt-2">{details.candidate.candidateName}</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export async function loader({params}:LoaderFunctionArgs){
    const interviewId = await params.interviewId;
    const candidateId = await params.candidateId;
    if(interviewId && candidateId){
        const interview = await fetchInterviewById(interviewId)
        const candidate = await fetchCandidateById(candidateId);
        return {interview:interview.data,candidate:candidate.data}
    }
    return redirect("/")
}

