import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "IRIS" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return(
    <div className="overflow-y-scroll h-screen w-full">
    <div className="bg-bgColor1 w-full">
      <div className="w-full h-full grid grid-cols-[1fr_1680px_1fr] bg-bgColor1">
      <div className="fixed left-0 right-0 bg-bgColor1 grid grid-cols-[1fr_1680px_1fr] h-14 z-50 shadow-md">
        <div ></div>
        <div className="flex flex-row h-full w-full items-center justify-between">
          <div className="text-textColorBlue text-2xl font-bold">IRIS</div>
          <div className="flex flex-row mr-2 space-x-6 items-center">
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">Home</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">Features</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">How It Works</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">Benefits</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">Pricing</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">FAQ</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm">Contact</div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm"><a href="login">Login</a></div>
            <div className="text-textColorWhite hover:text-textColorBlue cursor-pointer text-sm"><a href="signUp">Sign up</a></div>
          </div>
        </div>
        <div></div>
      </div>
    <div></div>
    <div className="bg-bgColor1 grid grid-rows-2 gap-80">
    <div className="flex flex-row mt-28 items-center justify-between">
        <div>
          <span className="text-5xl text-textColorWhite">Transform Your <span className="text-textColorBlue">Interview</span> <br /> <span className="text-textColorBlue">Process</span> with AI</span>
          <div className="mt-4 text-textColorWhite">Streamline your hiring process with our intelligent AI-powered interview platform. Save time, reduce <br /> bias, and find the best candidates.</div>
          <div className="flex flex-row mt-10">
          <a href="signUp" className="mr-14">
          <button className="primary-btn h-14 w-32">Get Started</button>
          </a>
          <a href="login">
          <button className="secondary-btn h-14 w-32">Learn More</button>
          </a>
        </div>
        </div>
        <div className="w-1/2 rounded-xl bg-textColorBlue h-[400px] "></div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-7xl text-textColorWhite">
          Revolutionize Your <br /> <span className="text-textColorBlue">Hiring Process</span> with AI
          <div className="text-lg mt-4">IRIS leverages advanced AI technology to streamline your interview process, making it <br />faster, smarter, and more efficient than ever before</div>
        </div>
        <div className="w-1/2 rounded-xl bg-bgColor3 h-[300px] "></div>
      </div>

      </div>
      <div></div>
      </div>
    </div>
    <div className="bg-bgColor2 w-full pb-20">
      <div className="w-full h-full grid grid-cols-[1fr_1680px_1fr] bg-bgColor2">
        <div></div>
        <div className="mt-20">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-textColorGray">Powerful Features for Smart Hiring</div>
              <div className="text-lg mt-4 text-textColorGray">Transform your recruitment process with our AI-powered tools</div>
              </div>
          </div>
          <div className="grid grid-cols-3 gap-10 w-full mt-10">
            <div className="rounded-lg shadow-md hover:shadow-lg h-56 p-4">
              <div className="bg-textColorBlue h-20 w-20 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">AI-Powered Analysis</div>
              <div className="text-textColorGray text-sm mt-4">Advanced algorithm evaluate candidate's response, providing<br />unbiased and comprehensive assessment</div>
            </div>
            <div className="rounded-lg shadow-md hover:shadow-lg h-56 p-4">
              <div className="bg-textColorBlue h-20 w-20 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">Smart Scheduling</div>
              <div className="text-textColorGray text-sm mt-4">Automate interview scheduling with smart calendar intergration<br />and time zone management</div>
            </div>
            <div className="rounded-lg shadow-md hover:shadow-lg h-56 p-4">
              <div className="bg-textColorBlue h-20 w-20 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">Analytic Dashboard</div>
              <div className="text-textColorGray text-sm mt-4">Comprehensive insights and analytics to track your hiring<br />process and make data-driven decisions.</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className="bg-bgColor1 w-full pb-20">
    <div className="w-full h-full grid grid-cols-[1fr_1680px_1fr] bg-bgColor1">
      <div></div>
      <div className="w-full h-full mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl text-textColorWhite font-bold">How IRIS Works</div>
          <div className="text-lg text-textColorWhite mt-2">Simple steps to transform your interview process</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14 space-x-1">
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">1</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">2</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">3</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">4</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-2 space-x-1">
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Create Interview
            <div className="text-sm text-center">Set up your interview parameters and questions <br /> using AI templates</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Invite Candidate
            <div className="text-sm text-center">Send automated invitation and schedule interview</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            AI Assessments
            <div className="text-sm text-center">Let our AI analyze response and generic insights</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Review Results
            <div className="text-sm text-center">Get comprehensive reports and make informed<br />decisions.</div>
          </div>
        </div>
        <div className="mt-28 flex flex-row justify-between items-center h-40 w-1/2 p-4 rounded-lg bg-bgColor3">
          <div className="text-textColorWhite text-2xl">
            Ready to Get Started ?
            <div className="mt-2 text-sm">Transform your hiring process today with IRIS</div>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="h-14 flex justify-center items-center w-36 p-2 text-textColorWhite text-lg rounded-lg bg-primary">Start Free Trial</div>
            <div className="h-14 flex justify-center items-center w-40 p-2 text-lg rounded-lg border-2 border-primary text-primary">Schedule Demo</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </div>
    <div className="bg-bgColor2 w-full pb-20">
      <div className="w-full h-full grid grid-cols-[1fr_1680px_1fr] bg-bgColor2">
        <div></div>
        <div className="mt-20">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-textColorGray">Benefits of Using IRIS</div>
              <div className="text-lg mt-4 text-textColorGray">Discovery why leading companies choose our AI-powered interview platform</div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-10 w-full mt-10">
            <div className="rounded-lg shadow-md flex flex-row items-center hover:shadow-lg space-x-5 h-20 p-4">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Save Time and Resources
                <div className="text-textColorGray text-sm font-medium">Reduce interview time by 60% with automated scheduling and AI-powered assessments</div>
              </div> 
            </div>
            <div className="rounded-lg shadow-md hover:shadow-lg h-20 p-4 space-x-5 flex flex-row items-center">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Data-Driven Insights
                <div className="text-textColorGray text-sm font-medium">Make informed decisions with comprehensive analytics and reporting</div>
              </div>
            </div>
            <div className="rounded-lg shadow-md hover:shadow-lg h-20 p-4 space-x-5 flex flex-row items-center">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Unbiased Evaluation
                <div className="text-textColorGray text-sm font-medium">Ensure fair assessment with AI-driven analysis of candidate responses</div>
              </div>
            </div>
            <div className="rounded-lg shadow-md flex flex-row items-center hover:shadow-lg space-x-5 h-20 p-4">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Scalable Solution
                <div className="text-textColorGray text-sm font-medium">Handle multiple interviews simultaneously with ease and consistency</div>
              </div> 
            </div>
            <div className="rounded-lg shadow-md flex flex-row items-center hover:shadow-lg space-x-5 h-20 p-4">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Increased Efficiency
                <div className="text-textColorGray text-sm font-medium">Streamline your hiring process with automated workflows and instant feedback</div>
              </div> 
            </div>
            <div className="rounded-lg shadow-md flex flex-row items-center hover:shadow-lg space-x-5 h-20 p-4">
              <div className="bg-textColorBlue h-14 w-14 rounded-md mb-5"></div>
              <div className="text-textColorGray text-lg font-bold">
                Secure Platform
                <div className="text-textColorGray text-sm font-medium">Enterprise-grade security for your sensitive interview data</div>
              </div> 
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20">
            <div className="flex justify-center items-center bg-primary text-lg  rounded-lg text-textColorWhite p-4 ">Start Transforming Your Hiring Process</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className="bg-bgColor1 w-full pb-20">
    <div className="w-full h-full grid grid-cols-[1fr_1680px_1fr] bg-bgColor1">
      <div></div>
      <div className="w-full h-full mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl text-textColorWhite font-bold">Simple, Transparent Pricing</div>
          <div className="text-lg text-textColorWhite mt-2">Choose the plan that best fits your needs</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14 space-x-1">
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">1</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">2</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">3</div>
          <div className="h-1 w-80 bg-primary"></div>
          <div className="w-20 h-20 rounded-full bg-primary text-textColorWhite flex justify-center items-center text-lg">4</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-2 space-x-1">
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Create Interview
            <div className="text-sm text-center">Set up your interview parameters and questions <br /> using AI templates</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Invite Candidate
            <div className="text-sm text-center">Send automated invitation and schedule interview</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            AI Assessments
            <div className="text-sm text-center">Let our AI analyze response and generic insights</div>
          </div>
          <div className="w-20"></div>
          <div className="text-lg flex flex-col items-center text-textColorWhite">
            Review Results
            <div className="text-sm text-center">Get comprehensive reports and make informed<br />decisions.</div>
          </div>
        </div>
        <div className="mt-28 flex flex-row justify-between items-center h-40 w-1/2 p-4 rounded-lg bg-bgColor3">
          <div className="text-textColorWhite text-2xl">
            Ready to Get Started ?
            <div className="mt-2 text-sm">Transform your hiring process today with IRIS</div>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="h-14 flex justify-center items-center w-36 p-2 text-textColorWhite text-lg rounded-lg bg-primary">Start Free Trial</div>
            <div className="h-14 flex justify-center items-center w-40 p-2 text-lg rounded-lg border-2 border-primary text-primary">Schedule Demo</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </div>
    </div>
  )
}

