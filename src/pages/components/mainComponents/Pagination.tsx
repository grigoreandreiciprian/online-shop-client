import React from "react";
import Data from "../../../Api";
import { useState, useEffect } from "react";

const Pagination = () => {
  // const Api = new Data();
  // const [pageCount, setPageCount] = useState(0);
  // const paginateProducts = async () => {
  //   const prods = await Api.paginateProducts(3, 1);
  //   setPageCount(prods.pages);
  // };
  // useEffect(() => {
  //   paginateProducts();
  //   console.log(pageCount);
  // }, []);
  return;
  // <div className="paginationBox">
  //   <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  //     {/* <button onClick={paginateProducts}>Test</button> */}
  //     <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
  //       <div>
  //         <nav
  //           className="isolate inline-flex -space-x-px rounded-md shadow-sm"
  //           aria-label="Pagination"
  //         >
  //           {pages.length > 0 ? (
  //             //@ts-ignore
  //             pages.map((e) => {
  //               return (
  //                 <p
  //                   aria-current="page"
  //                   className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
  //                   key={e.number}
  //                   onClick={() => {
  //                     paginateProducts(e.number);
  //                   }}
  //                 >
  //                   {e.number}
  //                 </p>
  //               );
  //             })
  //           ) : (
  //             <></>
  //           )}
  //         </nav>
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export default Pagination;
