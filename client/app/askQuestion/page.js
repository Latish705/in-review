import QuestionForm from '@/app/ui/questionForm';

export default function AskQuestion() {
    return (
        <div>
            <header className='mt-10 ml-10'>
                <h1 className="font-[700px] text-3xl">get Answers from Insiders</h1>
            </header>
            <div className='mt-20'>
                <QuestionForm/>
            </div>
        </div>
    )
}