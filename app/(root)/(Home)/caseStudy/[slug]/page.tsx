
type PageParams = {
    slug: string;
  };

const page = async ({ params }: { params:  Promise<PageParams> }) => {
  const resolvedParams = await params; // Await the promise
  console.log("See the params ", resolvedParams);

  const { slug } = resolvedParams; // Access 'slug' from the resolved params

  return (
    <div className=" lg:min-h-screen">
        <div className=" main-container">
            <h1 className="header-one">
                See {slug}
            </h1>
        </div>
    </div>
  )
}

export default page