import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { getCompanyAndInterviewById, registerCandidateById, updateCandidateCountById } from "backend/portal/portal";
import { useContext, useEffect, useState} from "react";
import { DefaultEventsMap } from "socket.io";
import { Socket } from "socket.io-client";
import { Candidate } from "types/portal";
import { connect } from "~/ws.client";
import { wsContext } from "~/ws.context";



export default function Portal(){
  const details = useLoaderData<any>();
  const candidateId = useActionData<any>();
  let [socket, setSocket] =
  useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    let connection:any = connect();
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, []);

  const handleSubmitClick=async ()=>{
    if(socket){
      socket.emit("register",details.interviews[0].interviewId)
    }
  }
  

  if (details.interviews[0].status == "Cancel" || details.interviews[0].status == "Scheduled"){
      return(
          <div className="w-full h-screen overflow-hidden">
            <div className="flex justify-center items-center h-full text-3xl"> <span className="text-red-500 mr-2">OOPS!</span>Application doesnot exist or is not active any more</div>
          </div>
      )
  }

  if (details.interviews[0].status == "Active"){
        return(
          <div className="w-full h-screen overflow-hidden">
            {candidateId && (
              <div className="fixed w-full h-full flex justify-center items-center backdrop-blur-sm">
                <div className="w-72 h-40 shadow-lg rounded-md p-2">
                  You have successfully registered for the interview in {details.companyName}
                </div>
              </div>
            )}
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
                <Form method="post">
                <div className="mt-5 border-t-2 grid grid-cols-2 pt-4 gap-20">
                    <div className="w-full">
                      <input type="text" name="candidateName" className="input-field w-full" placeholder="Name"/>
                    </div>
                    <div className="w-full">
                      <input type="text" name="candidateEmail" className="input-field w-full" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="mt-5">
                  <div >
                      <input type="number" name="candidateNumber" className="input-field w-64" placeholder="Phone number"/>
                    </div>
                  </div>
                  <div className="mt-4">
                    <input type="text" hidden name="interviewId" value={details.interviews[0].interviewId} />
                    <input type="text" hidden name="companyName" value={details.companyName} />
                  <button className="primary-btn w-28 h-10" onClick={handleSubmitClick}>Submit</button>
                  </div>
                </Form>
              </div>
              <div></div>
            </div>
          </div>
      )
  }
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


export async function action({request,params}:ActionFunctionArgs){
  const companyId = await params.companyId;
  const interviewName = await params.interviewName;
  const formData = await request.formData();
  const formObject = Object.fromEntries(formData);
  const candidateName = formObject['candidateName'] as string;
  const candidateEmail = formObject['candidateEmail'] as string;
  const candidateNumber = formObject["candidateNumber"] as string;
  const interviewId = formObject["interviewId"] as string;
  const companyName = formObject["companyName"] as string;

  const candidate: Candidate = {
    candidateName,
    candidateEmail,
    candidateNumber
  };

  const isCandidate = await registerCandidateById(candidate,interviewId,companyName);

  if (isCandidate.status =="200" && companyId && interviewName){
    await updateCandidateCountById(companyId,interviewName);
    return isCandidate.data;
  }

  if (isCandidate.status =="404"){
    return false;
  }
  return null
}