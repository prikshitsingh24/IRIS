import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCompanyAndInterviewById } from "backend/portal/portal";



export default function Portal(){
  const details = useLoaderData<any>();
    return(
        <div className="w-full h-screen overflow-hidden">
          <div className="grid grid-cols-[1fr_980px_1fr] h-full pt-10 pb-10">
            <div></div>
            <div className="w-full h-full p-4 border-2 rounded-md">
                <div className="text-xl">Welcome, <br /> please provide the essential details</div>
                <br />
                <div className="flex flex-col space-y-3">
                <div><span className="font-bold">Company Name:</span> {details.companyName}</div>
                <div><span className="font-bold">Interview Name:</span> {details.interviews[0].interviewName}</div>
                <div><span className="font-bold">Interview Description:</span> {details.interviews[0].interviewDescription}</div>
                </div>
                <div className="mt-4 border-t-2">
                  
                </div>
            </div>
            <div></div>
          </div>
        </div>
    )
}


export async function loader({params}:LoaderFunctionArgs){
  const companyId = await params.companyId;
  const interviewName = await params.interviewName;

  if (companyId && interviewName) {
    const details = await getCompanyAndInterviewById(companyId,interviewName);
    if (details.status=="200"){
      return details.data;
    }

    if (details.status=="404"){
      console.log(details.error)
      return 
    }
  }
}