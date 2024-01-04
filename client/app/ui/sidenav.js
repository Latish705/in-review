
export default function Sidenav() {
    return (
        <div className="text-lg flex flex-col gap-6">
            <div className="">
                <span className="flex gap-1">
                    <img src="/icons/home.svg" alt='home'/>
                    <h2>Home</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src="/icons/search.svg" alt='explore'/>
                    <h2>Explore</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src="/icons/group.svg" alt="community"/>
                    <h2>Community</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src="/icons/notification.svg" alt="bell"/>
                    <h2>Notifications</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src='/icons/profile.svg' alt="user" />
                    <h2>Profile</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src="/icons/askQuestion.svg" alt="ask question"/>
                    <h2>Ask question</h2>
                </span>
            </div>

            <div>
                <span className="flex gap-1">
                    <img src="/icons/settings.svg" alt="settings icon"/>
                    <h2>Settings</h2>
                </span>
            </div>
        </div>
    )
}