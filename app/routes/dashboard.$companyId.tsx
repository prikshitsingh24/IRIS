import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { fetchCompanyById } from "backend/dashboard/dashboard";


export default function Dashboard(){
    const companyName = useLoaderData<any>();
    return(
        <div className="w-full grid grid-cols-[1fr_1440px_1fr] h-screen overflow-hidden">
            <div></div>
            <div className="w-full pb-20">
                <div className="flex justify-start mt-5 text-lg">
                    Welcome {companyName}, automate your interview journey
                </div>
                <div className="mt-4 border-2 h-full rounded-lg p-2">
                    <div className="w-full h-full">
                        <div className="flex flex-row justify-end">
                            <NavLink to="createInterview"><button className="primary-btn h-10 w-36">Create Interview</button></NavLink>
                        </div>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export async function loader({params}: LoaderFunctionArgs){
    const companyId = await params.companyId;
    if(companyId){
        const company = await fetchCompanyById(companyId);
        if (company.status=="200"){
            return company.name
        }
        if (company.status =="404"){
            return redirect("/")
        }
    }else{
        throw redirect("/");
    }
}