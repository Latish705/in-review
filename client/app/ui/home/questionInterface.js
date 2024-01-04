import Link from "next/link";
import { questionUpvote, questionDownvote } from '@/app/lib/actions'

export default function QuestionInterface({title, id, description, upvotes, downvotes, name, profilePicture}) {

    const handleUpvote = async (id) => {
        const responseOfUpvote = await questionUpvote (id)
        upvotes++;
    }
    const handleDownvote = async (id) => {
        const responseOfDownvote = await questionDownvote(id);
        downvotes++;
    }
    
    return (
        <section className="border-b cursor-pointer hover:bg-gray-50 pt-10">
            <Link href={`/home/${id}/details`}>
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
                        See Responses
                    </span>
                </div>
            </main>
            </Link>
            <div className="border-t mx-4 flex gap-4 py-2"> 
                <div className="flex gap-5 items-center"> {/* (upvote downvote) (response) */}
                    <div className="flex gap-2">
                        <button 
                            className="flex gap-1"
                            onClick={()=>{handleUpvote(id)}}
                        >
                            <img src="/icons/upvote.svg" alt="up"/>
                            <p>{upvotes}</p>
                        </button>

                        <button 
                            className="flex gap-1"
                            onClick={()=>{handleDownvote(id)}}
                        >
                            <img src="/icons/downvote.svg" alt="down"/>
                            <p>{downvotes}</p>
                        </button>
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