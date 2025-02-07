import { Form } from "@remix-run/react";


export default function SignUp(){
    return(
        <div className="w-full h-screen">
            <div className="flex flex-row justify-center h-full items-center">
                <div className="flex flex-col border-2 border-gray-400 rounded-lg p-8 shadow-lg">
                <div className="flex flex-row justify-center text-xl">Welcome to IRIS</div>
                <Form className="mt-10">
                    <div className="flex flex-col space-y-5">
                    <input type="text" className="input-field" placeholder="Company Name" required/>
                    <input type="email" className="input-field" placeholder="Company Email" required/>
                    <input type="password" className="input-field" placeholder="Password" required/>
                    </div>
                    <div className="flex flex-row justify-center mt-8">
                        <button className="signUp-btn">Sign up</button>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    )
}