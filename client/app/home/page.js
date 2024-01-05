"use client";
import React from "react";
import QuestionInterface from "../ui/home/questionInterface";
import { getQuestion } from "@/app/lib/actions";

export default function Home() {
  const [questionsArray, setQuestions] = React.useState([]);
  const collegeId = "6596df24d9194c31336a784a";

  React.useEffect(() => {
    const fillQuestion = async (collegeId) => {
      const questions = await getQuestion("6596df24d9194c31336a784a");
      console.log(questions);
      setQuestions(questions.questions);
    };
    console.log(questionsArray);
    fillQuestion(collegeId);
  }, []);

  return (
    <div className="flex flex-col">
      {questionsArray &&
        questionsArray.map((question) => {
          return (
            <QuestionInterface
              id={question._id}
              title={question.question}
              description={question.description}
              upvotes={question.upvotes}
              downvotes={question.downvotes}
              name={question.user.name}
              profilePicture=""
            />
          );
        })
      }
    </div>
  );
}
