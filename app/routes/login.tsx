import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { login } from "backend/auth/login";
import { LoginCredentails } from "types/auth";


export default function Login(){
    return (
        <div className="w-full h-screen bg-bgColor1">
        <div className="flex flex-row justify-center h-full items-center">
            <div className="flex flex-col bg-bgColor3 h-[400px] rounded-lg p-8 shadow-lg">
            <div className="text-md text-textColorWhite mt-2 text-2xl flex justify-center">Welcome <span className="text-textColorBlue ml-2">back</span></div>
            <Form method="post" className="mt-8">
                <div className="flex flex-col space-y-5">
                <div>
                <div className="text-white text-[13px] ml-1">Company Email</div>
                <input type="email" name="companyEmail" className="border-2 text-white border-gray-400 bg-bgColor3 outline-none rounded-lg pl-2 h-10" placeholder="Company Email" required/>
                </div>
                <div>
                <div className="text-white text-[13px] ml-1">Password</div>
                <input type="password" name="companyPassword" className="border-2 text-white border-gray-400 bg-bgColor3 outline-none rounded-lg pl-2 h-10" placeholder="Password" required/>
                </div>
                <div></div>
                <button className="auth-btn">Login</button>
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
    const companyEmail = formObject['companyEmail'] as string;
    const companyPassword = formObject['companyPassword'] as string;
  
    const credentials: LoginCredentails = {
      companyEmail,
      companyPassword
    };
  
    const isCompanyAdded = await login(credentials);

    if (isCompanyAdded.status == "200"){
        return redirect(`/dashboard/${isCompanyAdded.id}/interviews`)
        
    }

    if (isCompanyAdded.status == "404"){
        console.log(isCompanyAdded.error)
        return null
    }

}

