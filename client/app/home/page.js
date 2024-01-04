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
              id={question._Id}
              title={question.question}
              description={question.description}
              upvotes={question.upvotes}
              downvotes={question.downvotes}
              name={question.user.name}
              profilePicture=""
            />
          );
        })}
      <QuestionInterface
        id={2}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={5}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={4}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={3}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={2}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
      <QuestionInterface
        id={1}
        title="This is question title"
        description="this is the description of the question that means we describe it here "
        upvotes={4}
        downvotes={10}
        name="Burly Cat"
        profilePicture={""}
      />
    </div>
  );
}
