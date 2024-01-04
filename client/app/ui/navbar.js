'use client'

import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center px-10 py-8 text-white ">
            <span>In-Review</span>

            <div className="flex gap-5">
                <Link href="/home">
                    <span>Home</span>
                </Link>

                <Link href="/about">
                    <span>About</span>
                </Link>

                <Link href="/Login">
                    <span>Login</span>
                </Link>
                
                <Link href="/signup">
                    <span>Signup</span>
                </Link>
            </div>
        </div>
    )
}