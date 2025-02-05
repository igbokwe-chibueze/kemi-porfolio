import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className=" lg:min-h-screen">
        <div className="py-8 lg:py-12 space-y-1">
            <div className="space-y-8 lg:space-y-20">
                <Skeleton className="w-full h-[220px] lg:h-[600px]"/>

                <div className=" main-container space-y-8 lg:space-y-20">
                    <Skeleton className="w-full h-10 lg:h-[130px] rounded-md" />

                    <div className=" space-y-4 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-40">
                        <div className="lg:col-span-2 w-44 lg:w-auto">
                            <Skeleton className="w-full h-12 lg:h-[130px] rounded-full" />
                        </div>

                        <div className="lg:col-span-5 space-y-8 lg:space-y-14">
                            <div className="space-y-1">
                                <Skeleton className="w-full h-4 lg:h-[80px] rounded-md" />
                                <Skeleton className="w-3/4 h-4 lg:h-[80px] rounded-md" />
                                <Skeleton className="w-1/2 h-4 lg:h-[80px] rounded-md" />
                            </div>

                            <Skeleton className="w-full h-40 lg:h-[200px] rounded-md" />
                        </div>
                    </div>

                    <Skeleton className="w-1/2 h-10 lg:h-[130px] rounded-md" />

                    <div className="space-y-20">
                        <div className="space-y-10 lg:space-y-32">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="space-y-4 lg:space-y-8"
                                >
                                    <Skeleton className="w-full h-[220px] lg:h-[600px]" />
                                    <div className="px-4 space-y-3 lg:space-y-5">
                                        {Array.from({ length: 3 }).map((_, index) => (
                                            <div 
                                                key={index} 
                                                className="flex justify-start items-center space-x-2 lg:space-x-4"
                                            >
                                                <Skeleton className="w-4 lg:w-16 h-4 lg:h-16 rounded-full" />
                                                <Skeleton className="w-full h-4 lg:h-[80px] rounded-md" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default loading