
export interface CompanyDetails {
    companyName: string
    companyEmail: string
}

export interface InterviewDetails {
    interviewId:string,
    interviewName:string,
    interviewDescription:string,
    status:string,
    schedule:string,
    link:string,
    noOfCandidates:number
}

export interface Candidate{
    candidateName:string,
    candidateEmail:string,
    candidateNumber:string,
    interviewStatus:string,
    score:string
}