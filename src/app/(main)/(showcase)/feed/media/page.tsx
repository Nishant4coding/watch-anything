import { serverAPI } from "@/serverTRPC/serverAPI";
import Link from "next/link";
import { Suspense } from "react";

import dummy from '../../../../../../public/exampleR/singleColumn.webp'
import Image from "next/image";
import { motion } from "framer-motion";

export default async function Media() {
  
  // var keys: keyof (typeof serverAPI.index.movie.latest)[0] ;
  var keys: string[] | undefined = undefined;

  // data access points
  // const data = (await serverAPI.tmdb.getTrendingMovies()).results;
  // console.log(data);

  
  const latestData = await serverAPI.index.movie.latest();
  const top100Data = await serverAPI.index.movie.top100();
  // const data = await serverAPI.tmdb.search({ movieName: "batman" });

  if (latestData && latestData.length > 0) {
    // console.log(data[0]["title"]);
    keys = Object.keys(latestData[0]) as string[];
  }
  if (top100Data && top100Data.length > 0) {
    // console.log(data[0]["title"]);
    keys = Object.keys(top100Data[0]) as string[];
  }
  // const { title, poster_path, overview, vote_average, onClick } = props;

  

  // const src = "https://image.tmdb.org/t/p/w200/" + poster_path

  return (
    <div className="flex flex-col justify-center w-full">
    <div className="border rounded-md p-4">
      <h1 className="text-2xl font-semibold">Latest Data</h1>
      <Suspense fallback={"loading.."}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {latestData &&
        latestData.map((item, index) => (
          // <motion.div
          // initial={{ y: 20, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, type: "spring" }}
          // exit={{ y: -20, opacity: 0 }}>
          <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
            <Image className="object-cover p-5" src={dummy} alt="" />
            <div className="break-words font-bold text-center mb-5">
            {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
            </div>
            <div>
              <strong>Date:</strong> {item.pubDate.length>20?item.pubDate.substring(0,16) :item.pubDate}
            </div><br />
            <div>
              <strong>Categories:</strong>{item.category}              
            </div>
          </div>
          // </motion.div>
        ))}
        </div>
      </Suspense>
    </div>

    <div className="border rounded-md p-4 mt-4">
      <h1 className="text-2xl font-semibold">Top 100 Data</h1>
      <Suspense fallback={"loading.."}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* {top100Data &&
            top100Data.map((item, index) => {
              return (
                <div key={index} className="border rounded-md p-4">
                  {keys &&
                    keys.map((key) => {
                      if (key === "torrent") {
                        return (
                          <div key={key}>
                            <strong>{key}</strong>:{" "}
                            <a href={item[key]["magnet"]} className="underline">
                              Magnet URL
                            </a>
                          </div>
                        );
                      }
                      if (key === "link") {
                        return (
                          <div key={key}>
                            <strong>{key}</strong>:{" "}
                            <div className="underline">{item[key]["magnet"]}
                              
                            </div>
                          </div>
                        );
                      }
                     
                      return (
                        <div key={key}>
                          <strong>{key}</strong>: {item[key]}
                        </div>
                      );
                    })}
                </div>
              );
            })} */}




{top100Data &&
        top100Data.map((item, index) => (
          <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
              <Image className="object-cover p-5" src={dummy} alt="" />
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
