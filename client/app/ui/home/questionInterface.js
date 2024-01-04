
export default function QuestionInterface({title, description, upvotes, downvotes, name, profilePicture}) {
    
    return (
        <section className="border-b cursor-pointer hover:bg-gray-50 pt-10">
            <header className="ml-1">
                <div>
                    <img src="" alt="" />
                    <div>{name}</div>
                </div>
            </header>

            <main className="mb-4 mx-2">
                <div>
                    <p className={`font-[700] text-xl`}>
                        {title}
                    </p>
                    <p>{description}</p>
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        More details
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

                    <div>
                        <input
                            className="bg-gray-200 text-black rounded-3xl p-2 px-3"
                            placeholder="your response..."
                        />
                    </div>
                </div>

                <div className="flex items-center">      {/* bookmark */}
                        <img src="/icons/bookmark.svg" alt="bookmark" />
                </div>
            </div>
        </section>
    )
}