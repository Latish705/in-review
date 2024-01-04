import Sidenav from "../ui/sidenav";
import TopBar from "../ui/home/topBar";
import SearchBar from "../ui/searchBar";

export default function Layout ({ children }) {
    return (
        <div className="flex justify-center overflow-hidden h-screen gap-8">
            <div className="p-4 my-4 ">
                <Sidenav/>
            </div>

            <main className="pt-0 border-l border-r min-w-[600px] max-w-[600px] relative">
                <div className="bg-slate-50">
                    <TopBar/>
                </div>

                <div className="overflow-y-auto h-full pb-44 ml-6 mr-2">
                    {children}
                </div>
            </main>
            
            <div className="my-4">
                <SearchBar/>
            </div>
        </div>
    )
}