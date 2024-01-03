// {/**
//     port/askQuestion
// }

import React from "react";

const askQuestion = () => {
  return (
    <div className="w-screen flex items-center justify-center h-screen ">
      <form action="" className="w-[500px]">
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Question
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter your question to ask anonymous"
            id="name"
          ></input>
          <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        </div>
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Organisation
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter the organisation"
            id="name"
          ></input>
        </div>
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            descriptions
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Tell us descriptions about your"
            id="name"
          ></input>
        </div>
        <button className="text-white px-8 py-2 rounded-xl bg-black m-1">
          Ask
        </button>
      </form>
    </div>
  );
};

export default askQuestion;
