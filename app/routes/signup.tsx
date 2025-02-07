import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { signUp } from "backend/auth/signUp";
import { SignUpCredentials } from "types/auth";


export default function SignUp(){
    return(
        <div className="w-full h-screen">
            <div className="flex flex-row justify-center h-full items-center">
                <div className="flex flex-col border-2 border-gray-400 rounded-lg p-8 shadow-lg">
                <div className="flex flex-row justify-center text-xl font-bold">Welcome to IRIS,</div>
                <Form method="post" className="mt-10">
                    <div className="flex flex-col space-y-5">
                    <input type="text" name="companyName" className="input-field" placeholder="Company Name" required/>
                    <input type="email" name="companyEmail" className="input-field" placeholder="Company Email" required/>
                    <input type="password" name="companyPassword" className="input-field" placeholder="Password" required/>
                    <button className="auth-btn">Sign up</button>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    )
}


export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const formObject = Object.fromEntries(formData);
    console.log(formData)
    const companyName = formObject['companyName'] as string;
    const companyEmail = formObject['companyEmail'] as string;
    const companyPassword = formObject['companyPassword'] as string;
  
    const credentials: SignUpCredentials = {
      companyName,
      companyEmail,
      companyPassword
    };
  
    const isCompanyAdded = await signUp(credentials);

    if (isCompanyAdded.status == "200"){
        return redirect(`/dashboard/${isCompanyAdded.id}`)
        
    }

    if (isCompanyAdded.status == "404"){
        console.log(isCompanyAdded.error)
    }

  }