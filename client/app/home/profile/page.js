"use client";

import { getUserData } from "@/app/lib/actions";
import AnswerInterface from "@/app/ui/home/answerInterface";
import QuestionInterface from "@/app/ui/home/questionInterface";
import { useState, useEffect } from "react";
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    college: "",
    cgpa: "",
  });
  const [userQuestions, setUserQuestion] = useState([]);

  useEffect(() => {
    const fillUserInfo = async () => {
      const data = await getUserData();
      console.log(data.userQuestions);
      setUserInfo(() => ({
        username: data.user.username,
        college: data.user.college.name,
        cgpa: data.user.cgpa,
      }));

      setUserQuestion(data.userQuestions);
    };
    fillUserInfo();
  }, []);
  return (
    <main>
      <header>
        <h1 className="text-[40px]">Your information</h1>
        <div>{userInfo.username}</div>
        <div>{userInfo.college}</div>
        <div>
          <strong>CGPA: </strong>
          {userInfo.cgpa}
        </div>
      </header>

      <div>
        <div className="text-[40px]">Your Questions</div>
        <div>
          {userQuestions &&
            userQuestions.map((question) => {
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
            })}
        </div>
      </div>
    </main>
  );
}
