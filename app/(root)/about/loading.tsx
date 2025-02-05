import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className="lg:min-h-screen">
        <div className="main-container space-y-10 lg:space-y-20">
            <div className="lg:grid lg:grid-cols-5 lg:gap-12 space-y-2 lg:space-y-0 lg:items-center">
                <Skeleton className="lg:col-span-2 w-full h-[300px] lg:h-[450px] rounded-2xl lg:rounded-[90px]"/>

                <div className="lg:col-span-3 flex flex-col lg:justify-center lg:items-center 
                    space-y-4 lg:space-y-10 lg:px-4 lg:py-6"
                >
                    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full space-y-4">
                    <Skeleton className="w-80 lg:w-full h-20 lg:h-[130px] rounded-md" />
                    <Skeleton className="w-64 lg:w-[430px] h-10 lg:h-[80px] rounded-md" />
                    </div>

                    <Skeleton className="w-full lg:w-[530px] h-10 lg:h-[80px] rounded-md" />
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