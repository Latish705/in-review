'use client';

import React from 'react';
import AnswerInterface from "@/app/ui/home/answerInterface";
import { getResponses } from "@/app/lib/actions";

export default function ResponsesPage(params) {
    
    const questionId = params.id;
    const [answersArray, setAnswersArray] = React.useState([]);

    React.useEffect(()=>{
        const fillAnswersArray = async (Id) => {
            const responseArray = await getResponses(Id);
            console.log(responseArray);
            setAnswersArray(responseArray);
        }

        fillAnswersArray();
    },[])

    return (
        <div>
            {
                answersArray &&
                answersArray.map((thisAnswer) => (
                    <AnswerInterface
                        answer={thisAnswer.answer}
                        upvotes={thisAnswer.answer}
                        downvotes={thisAnswer.answer}
                    />
                ))
            }
        </div>
    )
}