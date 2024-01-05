"use client";

import React from "react";
import AnswerInterface from "@/app/ui/home/answerInterface";
import QuestionInterface from "@/app/ui/home/questionInterface";
import { getResponses } from "@/app/lib/actions";
import { useParams, useSearchParams } from "next/navigation";

export default function ResponsesPage(request) {
  const params = useParams();
  const searchParams = useSearchParams();

  const questionId = params.id;

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const upvotes = searchParams.get("upvotes");
  const downvotes = searchParams.get("downvotes");
  const name = searchParams.get("name");
  console.log(upvotes);
  console.log(downvotes);

  const [answersArray, setAnswersArray] = React.useState([]);

  React.useEffect(() => {
    const fillAnswersArray = async (Id) => {
      const responseArray = await getResponses(Id);

      console.log(responseArray);
      setAnswersArray(responseArray);
    };
    fillAnswersArray(questionId);
  }, []);

  return (
    <div>
      <div>
        <QuestionInterface
          name="anonymous"
          title={title}
          description={description}
          upvotes={upvotes}
          downvotes={downvotes}
        />
      </div>
      {answersArray ? (
        answersArray.map((thisAnswer) => (
          <AnswerInterface
            key={thisAnswer.upvotes}
            answer={thisAnswer.answer}
            upvotes={thisAnswer.upvotes}
            downvotes={thisAnswer.downvotes}
            id={thisAnswer._id}
          />
        ))
      ) : (
        <div className="text-xl mt-10">
          <p className="font-bold">{"Hmm!"}</p>
          <p>{"This field is empty :/"}</p>
          <p>{"give response and help student :)"}</p>
        </div>
      )}
    </div>
  );
}
