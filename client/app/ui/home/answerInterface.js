

export default function AnswerInterface(answer, upvote, downvote) {
    return (
        <section>
            <article>
                <p>
                    {answer}
                </p>
            </article>

            <div>
                <span>
                    <img src="/icons/upvote.svg" alt="upvote"/>
                    <p>{upvote}</p>
                </span>
                <span>
                    <img src="/icons/downvote.svg" alt="downvote" />
                    <p>{downvote}</p>
                </span>
            </div>
        </section>
    )
}