import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { fetchCompanyById } from "backend/dashboard/dashboard";


export default function Dashboard(){
    const companyName = useLoaderData<any>();
    return(
        <div className="w-full grid grid-cols-[1fr_1440px_1fr] bg-bgColor1 h-screen overflow-hidden">
            <div></div>
            <div className="w-full pb-40">
                <div className="flex justify-start mt-5 text-lg text-textColorWhite">
                    Welcome <span className="text-textColorBlue ml-1">{companyName}</span>, automate your interview journey
                </div>
                <div className="mt-4 bg-bgColor3 h-[840px] rounded-lg p-2 shadow-md">
                    <div className="w-full h-full">
                        <div className="grid grid-cols-[4fr_0.4fr_0.4fr_0.4fr_1fr] gap-10 ">
                            <div><input type="text" className="input-field w-full bg-bgColor3 text-textColorWhite" placeholder="Search."/></div>
                            <div className="flex justify-end w-full">
                            <select className="border p-2 bg-bgColor3 text-textColorWhite outline-none border-gray-400 rounded-lg h-[40px]">
                                <option value="">Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="paused">Paused</option>
                            </select>
                            </div>
                            <div className="flex justify-end w-full">
                            <select className="border p-2 bg-bgColor3 text-textColorWhite outline-none border-gray-400 rounded-lg h-[40px]">
                                <option value="">Roles</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="paused">Paused</option>
                            </select>
                            </div>
                            <div className="w-full flex items-center">
                            <input type="date" name="schedule" className="ml-2 bg-bgColor3 border border-gray-400  p-[6px] rounded-lg text-textColorWhite outline-none" />
                            </div>
                            <div className="flex flex-row justify-end"><NavLink to="createInterview"><button className="primary-btn h-10 w-36">Create Interview</button></NavLink></div>
                        </div>
                        <div className="h-fit">
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