export default function AnswerInterface(answer, upvotes, downvotes, id) {
  const handleUpvote = (id) => {
    console.log(id);
  };

  const handleDownvote = (id) => {
    console.log(id);
  };

  return (
    <section className="border-b cursor-pointer hover:bg-gray-50 pt-10">
      <main className="mb-4 mx-2">
        <div>
          <p>{JSON.stringify(answer.answer)}</p>
          <span className="text-blue-500 cursor-pointer hover:underline"></span>
        </div>
      </main>

      <div className="border-t mx-4 flex gap-4 py-2">
        <div className="flex gap-5 items-center">
          {" "}
          {/* (upvote downvote) (response) */}
          <div className="flex gap-2">
            <span className="flex gap-1">
              <img src="/icons/upvote.svg" alt="up" />
              <button
                onClick={() => {
                  handleUpvote;
                }}
              >
                {JSON.stringify(upvotes.upvotes)}
              </button>
            </span>

            <span className="flex gap-1">
              <img src="/icons/downvote.svg" alt="down" />
              <button
                onClick={() => {
                  handleDownvote;
                }}
              >
                {JSON.stringify(downvotes)}
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
