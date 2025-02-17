import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { createInterview } from "backend/dashboard/interview";
import { Interview } from "types/interview";

export default function CreateInterview(){
    return (
        <div className="w-full h-full mt-4">
            <div className="text-lg text-textColorWhite">Create Your Interview</div>
            <Form method="post" className="mt-5">
                <div className="flex flex-col space-y-8">
                    <input type="text" name="interviewName" className="input-field w-1/2 bg-bgColor3 text-textColorWhite" placeholder="Name" />
                    <input type="text" name="interviewDescription"  className="input-field bg-bgColor3 text-textColorWhite" placeholder="Description"/>
                </div>
                <div className="flex flex-col items-start mt-4">
                <div className="w-full h-full flex flex-row items-center">
                        <div className="mr-2  text-textColorWhite">Interview status: </div>
                        <input type="checkbox" name="status" className="checkBox" value="Active"/>
                </div>
                <button className="secondary-btn h-10 w-36 mt-5">Create</button>
                </div>
            </Form>
        </div>
    )
}

export async function action({request,params}:ActionFunctionArgs){
    const formData = await request.formData();
    const companyId = await params.companyId;
    const formObject = Object.fromEntries(formData);
    if (companyId) {
        const interviewName = formObject['interviewName'] as string;
        const interviewDescription = formObject['interviewDescription'] as string;
        const status = formObject["status"] as string || "Inactive";
        const link = `http://localhost:5173/portal/${companyId}/${interviewName}`
      
        const interview: Interview = {
            companyId,
            interviewName,
            interviewDescription,
            status,
            link

        };
      
        const isInterviewAdded = await createInterview(interview);
    
        if(isInterviewAdded?.status == "200"){
            return redirect(`/dashboard/${companyId}/interviews`)
        }
    
        if (isInterviewAdded?.status == "404"){
            console.log(isInterviewAdded.error)
            return
        }
    }
    return redirect(`/`)
}