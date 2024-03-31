import { serverAPI } from "@/serverTRPC/serverAPI";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import dummy from '../../../../../../public/exampleR/singleColumn.webp'

export default async function Software() {
  // var keys: keyof (typeof serverAPI.index.movie.latest)[0] ;
  var keys: string[] | undefined = undefined;

  // data access points
  // const data = (await serverAPI.tmdb.getTrendingMovies()).results;
  // console.log(data);

  const macLatest = await serverAPI.index.applications.mac.latest();
  const unixLatest = await serverAPI.index.applications.unix.latest();
  const windowsLatest = await serverAPI.index.applications.windows.latest();
  // const data = await serverAPI.tmdb.search({ movieName: "batman" });

  if (macLatest && macLatest.length > 0) {
    // console.log(data[0]["title"]);
    keys = Object.keys(macLatest[0]) as string[];
  }
  if (unixLatest && unixLatest.length > 0) {
    // console.log(data[0]["title"]);
    keys = Object.keys(unixLatest[0]) as string[];
  }
  if (windowsLatest && windowsLatest.length > 0) {
    // console.log(data[0]["title"]);
    keys = Object.keys(windowsLatest[0]) as string[];
  }

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="border rounded-md p-4">
        <h1 className="text-lg font-semibold">Mac Latest</h1>
        <Suspense fallback={"loading.."}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {macLatest &&
              macLatest.map((item, index) => (
                <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
            <Image className="object-cover" src={dummy} alt="" />
            <div className="break-words font-bold text-center mb-5">
            {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
            </div>
            <div>
              <strong>Publish Date:</strong> {item.pubDate}
            </div>
            <div>
              <strong>Categories:</strong>{item.category}              
            </div>
          </div>
              ))}
          </div>
        </Suspense>
      </div>

      <div className="border rounded-md p-4 mt-4">
        <h1 className="text-lg font-semibold">Unix Latest</h1>
        <Suspense fallback={"loading.."}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {unixLatest &&
              unixLatest.map((item, index) => (
                <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
            <Image className="object-cover" src={dummy} alt="" />
            <div className="break-words font-bold text-center mb-5">
            {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
            </div>
            <div>
              <strong>Publish Date:</strong> {item.pubDate}
            </div>
            <div>
              <strong>Categories:</strong>{item.category}              
            </div>
          </div>
              ))}
          </div>
        </Suspense>
      </div>

      <div className="border rounded-md p-4 mt-4">
        <h1 className="text-2xl font-semibold">Windows Latest</h1>
        <Suspense fallback={"loading.."}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {windowsLatest &&
              windowsLatest.map((item, index) => (
                <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
            <Image className="object-cover" src={dummy} alt="" />
            <div className="break-words font-bold text-center mb-5">
            {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
            </div>
            <div>
              <strong>Publish Date:</strong> {item.pubDate}
            </div>
            <div>
              <strong>Categories:</strong>{item.category}              
            </div>
          </div>
              ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
