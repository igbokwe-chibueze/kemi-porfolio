import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <div className=" lg:min-h-screen">
      <div className=" main-container space-y-10 lg:space-y-20">
        <Skeleton className="ml-auto w-64 lg:w-[830px] h-20 lg:h-[130px] px-4 lg:px-10 rounded-full" />

        <div className="space-y-8">
          <Skeleton className="w-72 lg:w-full h-10 lg:h-[130px] rounded-md" />

          <div className="space-y-1">
            <Skeleton className="w-64 lg:w-[830px] h-4 lg:h-[80px] rounded-md" />
            <Skeleton className="w-64 lg:w-[830px] h-4 lg:h-[80px] rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="w-full h-40 lg:h-[500px] rounded-md" />
          <Skeleton className="w-full h-40 lg:h-[500px] rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default loading