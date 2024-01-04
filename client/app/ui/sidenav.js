
import Link from 'next/link';

export default function Sidenav() {
    return (
        <div className="text-lg flex flex-col gap-2">
            <div className="">
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg"> 
                    <img src="/icons/home.svg" alt='home'/>
                    <Link href="/home">Home</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src="/icons/search.svg" alt='explore'/>
                    <Link href="/explore">Explore</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src="/icons/group.svg" alt="community"/>
                    <Link href="/community">Community</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src="/icons/notification.svg" alt="bell"/>
                    <Link href="/home/notifications">Notifications</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src='/icons/profile.svg' alt="user" />
                    <Link href="/user/profile">Profile</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src="/icons/askQuestion.svg" alt="ask question"/>
                    <Link href="/askQuestion">Ask question</Link>
                </span>
            </div>

            <div>
                <span className="flex gap-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <img src="/icons/settings.svg" alt="settings icon"/>
                    <Link href="/settings">Settings</Link>
                </span>
            </div>
        </div>
    )
}