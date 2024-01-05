'use client'

import AnswerInterface from '@/app/ui/home/answerInterface';
import QuestionInterface from '@/app/ui/home/questionInterface';
import { useState, useEffect } from 'react';
export default function Profile() {

    const [userInfo, setUserInfo] = useState(userInformation);
    const [userQuestions, setUserQuestion] = useState(questionsByUser);
    const [userAnswers, setUserAnswers] = useState(answersByUser);

    return (
        <main>
            <header>
                <h1 >Your information</h1>
                <div>{userInfo.username}</div>
                <div>{userInfo.college}</div>
                <div>{userInfo.cgpa}</div>
            </header>

            <div>
                <div>
                    Your Questions
                </div>
                <div>
                    { userQuestions.map((question)=>{
                        <QuestionInterface
                            id={question._id}
                            title={question.question}
                            description={question.description}
                            upvotes={question.upvotes}
                            downvotes={question.downvotes}
                            name={question.user.name}
                            profilePicture=""
                        />
                    })
                    }
                </div>
            </div>

            <div>
                <div>
                    Your Responses
                </div>
                <div>
                    { userAnswers.map((thisAnswer) => {
                        <AnswerInterface 
                            key={thisAnswer.upvotes}
                            answer={thisAnswer.answer}
                            upvotes={thisAnswer.upvotes}
                            downvotes={thisAnswer.downvotes}
                            id={thisAnswer._id}
                        />
                    }) }
                </div>
            </div>
        </main>
    )
}