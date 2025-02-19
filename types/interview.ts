
export interface Interview{
    companyId:string,
    interviewName:string,
    interviewDescription:string
    status:string,
    schedule:string;
    link:string
}

export interface UpdateInterview{
    interviewId:string,
    interviewName:string,
    interviewDescription:string
    status:string,
    link:string
}