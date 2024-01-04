
export default function TopBar() {
    return (
        <div className="flex bg-transparent">
            <div className="hover:bg-gray-200  py-3 text-center flex-1 cursor-pointer">For You</div>
            <div className="hover:bg-gray-200  py-3 text-center flex-1 cursor-pointer">General</div>
            <div className="hover:bg-gray-200  py-3 text-center flex-1 cursor-pointer">XYZ comm</div>
        </div>
    )
}