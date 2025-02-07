import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "IRIS" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return(
    <div className="w-full h-full overflow-hidden">
      <div className="flex flex-row mt-28 justify-center">
        <span className="text-9xl text-textColor ">IRIS</span>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <a href="signUp" className="mr-28">
        <button className="primary-btn h-10 w-20">Sign up</button>
        </a>
        <a href="login">
        <button className="secondary-btn h-10 w-20">Login</button>
        </a>
      </div>
    </div>
  )
}

