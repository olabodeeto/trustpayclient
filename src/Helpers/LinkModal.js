import React from "react";
import { Copy, Network } from "akar-icons";

export default function LinkModal({ content }) {
  return (
    <div
      className="w-11/12 sm:w-10/12 md:w-5/12 m-auto
     bg-white p-4 rounded-lg h-96"
    >
      <h1 className="text-center text-28 sm:text-3xl text-gray-400">
        Link created successfully!
      </h1>

      <div className="mt-20 w-full">
        <p
          className="text-sm max-w-full break-words p-2
         bg-blue-100 rounded-lg text-indigo-400"
        >
          {content}
        </p>
        <div className="mt-20 flex gap-10 justify-center">
          <Copy size={20} />
          <Network size={20} />
        </div>
      </div>
    </div>
  );
}
