import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchInterviewById } from "backend/dashboard/dashboard";
import { fetchCandidateById } from "backend/interview/interview";
import { useEffect, useRef } from "react";



export default function Interview(){
    const details = useLoaderData<any>();

    const videoRef = useRef<any>(null);

    useEffect(() => {
        const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
            videoRef.current.srcObject = stream; // Set the video stream to the video element
            }
        } catch (err) {
            console.error("Error accessing webcam: ", err);
        }
        };

        startWebcam();

        return () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track:any) => track.stop()); 
        }
        };
    }, []);

    return(
        <div className="grid grid-cols-[1fr_1280px_1fr] w-full h-screen overflow-hidden p-4 ">
            <div></div>
            <div className="w-full h-full border-2 rounded-lg grid grid-rows-[2fr_4fr] relative">
                <div className="grid grid-cols-2 border-b-2">
                    <div className="border-r-2 p-2">
                        <div className="text-2xl">{details.interview.interviewName}</div>
                        <div className="mt-4">Description: <br />{details.interview.interviewDescription}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-[200px] border-2 w-[200px] mt-4 rounded-lg">
                        <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full rounded-lg object-cover"
                        ></video>
                        </div>
                        <div className="mt-2">{details.candidate.candidateName}</div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="absolute bottom-2 w-full">
                    <div className="flex items-center gap-2 mt-4">
                        <div className='rounded-lg w-full h-12 flex flex-row justify-between border-2 border-foreground ml-2'>
                        <input
                            type="text"
                            placeholder="Write your answer..."
                            className="flex-1 p-3 outline:none rounded-lg bg-background focus:outline-none focus:border-blue-500 "
                        />
                        <button
                            type="button"
                            className={`mr-2 mt-1 mb-1 p-2 rounded-full hover:bg-gray-300`}
                        >
                        <img src={"/micIcon.png"} alt="searchIcon" width={20} height={20}></img>
                        </button>
                        </div>
                        <button
                            type="submit"
                            className={`p-2 rounded-xl h-12 w-28 hover:scale-105 transition-transform bg-green-500 mr-2`}
                            aria-label="Send Message"
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export async function loader({params}:LoaderFunctionArgs){
    const interviewId = await params.interviewId;
    const candidateId = await params.candidateId;
    if(interviewId && candidateId){
        const interview = await fetchInterviewById(interviewId)
        const candidate = await fetchCandidateById(candidateId);
        return {interview:interview.data,candidate:candidate.data}
    }
    return redirect("/")
}

