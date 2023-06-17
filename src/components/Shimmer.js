const Shimmer = () =>{
    return(
        <div className="flex flex-wrap" data-testid = "Shimmer">
            {Array(15)
            .fill("")
            .map((e, index) =>
            <div key={index} className=" border bg-shimmer-background shadow w-80 h-[400px]">
                <div className="animate-pulse">
                    <img  className="w-64 h-52" />
                </div>
                <div className="animate-pulse">
                    <h2 className="bg-Hover-shimmer h-10 w-72"></h2>
                    <span className="w-28 bg-Hover-shimmer"></span>
                </div>
                <div className="animate-pulse">
                    <span className="border w-10 h-5 bg-Hover-shimmer "></span>
                    <span className="px-2"></span>
                    <span className="h-5 w-14 bg-Hover-shimmer"></span>
                    <span className="px-2"></span>
                    <span className="h-5 w-24 bg-Hover-shimmer"></span>
                </div>
            </div>
            )}

        </div>
        // <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        //     <div class="animate-pulse flex space-x-4">
        //         <div class="rounded-full bg-slate-700 h-10 w-10"></div>
        //         <div class="flex-1 space-y-6 py-1">
        //         <div class="h-2 bg-slate-700 rounded"></div>
        //         <div class="space-y-3">
        //             <div class="grid grid-cols-3 gap-4">
        //             <div class="h-2 bg-slate-700 rounded col-span-2"></div>
        //             <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        //             </div>
        //             <div class="h-2 bg-slate-700 rounded"></div>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        )
}

export default Shimmer