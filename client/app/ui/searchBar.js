
export default function SearchBar() {
    return (
        <div className="bg-gray-200 p-2 flex gap-2 w-[300px] rounded-3xl">
            <div>
                <img src="/icons/search.svg"/>
            </div>
            <input
                placeholder="search"
                className="bg-gray-200 outline-none"
            />
        </div>
    );
}
