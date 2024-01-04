'use client'

export default function Navbar() {
    return(
        <div className="flex justify-between items-center px-10 py-8 text-white ">
            <span>In-Review</span>

            <div className="flex gap-5">
                <span>Home</span>
                <span>About</span>
                <span>Login</span>
                <span>Signup</span>
            </div>
        </div>
    )
}