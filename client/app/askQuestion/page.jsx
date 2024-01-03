// {/**
//     port/askQuestion
// }

import React, { useState } from "react";

const askQuestion = () => {
  const [question, setQuestion] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question, organisation, descriptions);
  };

  return (
    <div className="w-screen flex items-center justify-center h-screen ">
      <form action="" onSubmit={handleSubmit} className="w-[500px]">
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
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
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
            value={descriptions}
            onChange={(e) => setDescriptions(e.target.value)}
          ></input>
        </div>
        <button
          className="text-white px-8 py-2 rounded-xl bg-black m-1"
          type="submit"
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default askQuestion;
