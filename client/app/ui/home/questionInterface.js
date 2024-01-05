import Link from "next/link";
import React from "react";
import {
  upvoteQuestion,
  downVoteQuestion,
  writeResponse,
} from "@/app/lib/actions";
import { useState } from "react";

export default function QuestionInterface({
  title,
  id,
  description,
  upvotes,
  downvotes,
  name,
  profilePicture,
}) {
  const [userResponse, setUserResponse] = useState("");
  //   const writeResponse = async (id) => {
  //     const response = await writeResponse(id);
  //   };

  const [upvotesState, setUpvoteState] = React.useState(upvotes);
  const [downvotesState, setDownvotesState] = React.useState(downvotes);

  const handleKeyPress = async (event) => {
    console.log(id, userResponse);
    if (event.key === "Enter") {
      const response = await writeResponse(id, userResponse);
      console.log(response);
      console.log("Enter key pressed");
      // You can call a function or set a state, etc.
    }
  };

  const handleUpvote = async (event) => {
    event.preventDefault();
    const responseOfUpvote = await upvoteQuestion(id);
    console.log(responseOfUpvote);
    setUpvoteState(responseOfUpvote);
  };
  const handleDownvote = async (event) => {
    event.preventDefault();
    const responseOfDownvote = await downVoteQuestion(id);
    setDownvotesState(responseOfDownvote);
  };

  return (
    <section className="border-b cursor-pointer hover:bg-gray-50 pt-10">
      <Link href={`/home/${id}/details/?upvotes=${upvotes}&downvotes=${downvotes}&title=${title}&description=${description}&name=${name}`}>
        <header className="ml-1">
          <div>
            <img src="" alt="" />
            <div>{name}</div>
          </div>
        </header>

        <main className="mb-4 mx-2">
          <div>
            <p className={`font-[700] text-xl`}>{title}</p>
            <p>{description}</p>
            <span className="text-blue-500 cursor-pointer hover:underline">
              See Responses
            </span>
          </div>
        </main>
      </Link>
      <div className="border-t mx-4 flex gap-4 py-2">
        <div className="flex gap-5 items-center">
          {" "}
          {/* (upvote downvote) (response) */}
          <div className="flex gap-2">
            <span className="flex gap-1" onClick={handleUpvote}>
              <img src="/icons/upvote.svg" alt="up" />
              <p>{upvotesState}</p>
            </span>

            <span className="flex gap-1" onClick={handleDownvote}>
              <img src="/icons/downvote.svg" alt="down" />
              <p>{downvotesState}</p>
            </span>
          </div>
          <div>
            <input
              className="bg-gray-200 text-black rounded-3xl p-2 px-3"
              placeholder="your response..."
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>

        <div className="flex items-center">
          {" "}
          {/* bookmark */}
          <img src="/icons/bookmark.svg" alt="bookmark" />
        </div>
      </div>
    </section>
  );
}
