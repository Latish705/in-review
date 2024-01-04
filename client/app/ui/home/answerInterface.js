

export default function AnswerInterface(answer, upvotes, downvotes) {
    return (
        <section className="border-b cursor-pointer hover:bg-gray-50 pt-10">

        <main className="mb-4 mx-2">
            <div>
                <p>{description}</p>
                <span className="text-blue-500 cursor-pointer hover:underline">
                </span>
            </div>
        </main>

        <div className="border-t mx-4 flex gap-4 py-2"> 
            <div className="flex gap-5 items-center"> {/* (upvote downvote) (response) */}
                <div className="flex gap-2">
                    <span className="flex gap-1">
                        <img src="/icons/upvote.svg" alt="up"/>
                        <p>{upvotes}</p>
                    </span>

                    <span className="flex gap-1">
                        <img src="/icons/downvote.svg" alt="down"/>
                        <p>{downvotes}</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}