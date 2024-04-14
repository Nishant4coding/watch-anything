// import { serverAPI } from '@/serverTRPC/serverAPI';
// import Image from 'next/image';
// import React, { Suspense } from 'react'
// import dummy from '../../../../../../../public/exampleR/twoColumn.webp'
// export default async function MovieSlug() {



//   var keys: string[] | undefined = undefined;

 
//       const moviesData = await serverAPI.tmdb.getTrendingMovies();

//       if (moviesData && moviesData.length > 0) {
//         // console.log(data[0]["title"]);
//         keys = Object.keys(moviesData[0]) as string[];
//       }
  
    
//   return (
//     <div>
//     <div className="flex flex-col justify-center w-full">
//       <div className="border rounded-md p-4">
//         {/* <h1 className="text-lg font-semibold">{category === 'movies' ? 'Trending Movies' : 'Trending TV Shows'}</h1> */}
//         <Suspense fallback={"loading.."}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
//             {moviesData &&
//               moviesData.map((item: { poster_path: any; title: any; name: any; release_date: any; first_air_date: any; vote_average: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
//                 <div key={index} className="border rounded-md p-4 hover:transform hover:scale-105 transition-transform">
//                   <Image className="object-cover" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} width={500} height={750} />
//                   <div className="break-words font-bold text-center mb-5">
//                     {item.title || item.name}
//                   </div>
//                   <div>
//                     <strong>Release Date:</strong> {item.release_date || item.first_air_date}
//                   </div>
//                   <div>
//                     <strong>Rating:</strong> {item.vote_average}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   </div>
//   )
// }
