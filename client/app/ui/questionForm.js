"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { writeResponse } from "../lib/actions";
import { askUserQuestion } from "../lib/actions";

const askQuestion = () => {
  const router = useRouter();

  const [question, setQuestion] = React.useState({
    title: "",
    organization: "",
    description: "",
    hashtags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // action for question submission
    // if question submitted successfully then navigate to home page
    // give a message alert of question getting submited successfully
    const response = await askUserQuestion(question);
    console.log(question);
    alert("question submitted successfully!");
    // router.push("/home");
  };

  return (
    <div className="flex items-center justify-center ">
      <form action="" className="w-[500px]">
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter your question to ask anonymous"
            id="title"
            name="title"
            onChange={handleChange}
            value={question.title}
          ></input>
          <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        </div>
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="organisation"
          >
            Organisation
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter the organisation"
            id="organization"
            name="organization"
            value={question.organization}
            onChange={handleChange}
          ></input>
        </div>
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Tell us descriptions about your"
            id="description"
            name="description"
            onChange={handleChange}
            value={question.description}
          ></input>
        </div>
        <div className="my-4">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="hashtags"
          >
            hashtags
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Write some related #hashtags"
            id="hashtags"
            name="hashtags"
            onChange={handleChange}
            value={question.hashtags}
          ></input>
        </div>
        <button
          type="submit"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleSubmit}
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default askQuestion;
