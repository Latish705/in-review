
export default function ListCard(listItems) {
    const items = listItems.map((item) => {
        return(
            <div className="flex justify-center items-center p-2 cursor-pointer hover:bg-gray-300">
                {item}
            </div>
        )
    })

    return (
        {items}
    )
}