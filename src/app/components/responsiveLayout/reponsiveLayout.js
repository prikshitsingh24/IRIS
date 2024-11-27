export default function ResponsiveLayout({children}){
    return(
        <div className="w-full bg-background overflow-y-hidden text-foreground h-screen overflow-x-hidden grid grid-cols-[0_1fr_0] screen-1280:grid-cols-[1fr_1280px_1fr] screen-1920:grid-cols-[1fr_1920px_1fr] screen-2560:grid-cols-[1fr_2560px_1fr] ">
        <div></div>
        {children}
        <div></div>
        </div>
    )
}