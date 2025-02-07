import { Form } from "@remix-run/react";


export default function Login(){
    return (
        <div className="w-full h-screen">
        <div className="flex flex-row justify-center h-full items-center">
            <div className="flex flex-col border-2 border-gray-400 rounded-lg p-8 shadow-lg">
            <div className="flex flex-row justify-center text-xl font-bold">Welcome to IRIS,</div>
            <Form method="post" className="mt-10">
                <div className="flex flex-col space-y-5">
                <input type="email" name="companyEmail" className="input-field" placeholder="Company Email" required/>
                <input type="password" name="companyPassword" className="input-field" placeholder="Password" required/>
                <button className="auth-btn">Login</button>
                </div>
            </Form>
            </div>
        </div>
    </div>
    )
}

