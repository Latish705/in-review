"use client";

import React from "react";
import AnswerInterface from "@/app/ui/home/answerInterface";
import { getResponses } from "@/app/lib/actions";
import { useParams } from "next/navigation";

export default function ResponsesPage() {
  const params = useParams();
  const questionId = params.id;
  const [answersArray, setAnswersArray] = React.useState([]);
  console.log(questionId);
  React.useEffect(() => {
    const fillAnswersArray = async (Id) => {
      const responseArray = await getResponses(Id);

      console.log(responseArray);
      setAnswersArray(responseArray);
    };

    fillAnswersArray(questionId);
    console.log(answersArray);
  }, []);

  return (
    <div>
      {answersArray &&
        answersArray.map((thisAnswer) => (
          <AnswerInterface
            key={thisAnswer.upvotes}
            answer={thisAnswer.answer}
            upvotes={thisAnswer.upvotes}
            downvotes={thisAnswer.downvotes}
            id={thisAnswer._id}
          />
        ))}
    </div>
  );
}
