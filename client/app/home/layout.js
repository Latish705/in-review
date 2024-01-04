import Sidenav from "../ui/sidenav";
import TopBar from "../ui/home/topBar";

export default function Layout ({ children }) {
    return (
        <div>
            <div>
                <Sidenav/>
            </div>
            <div>
                <div><TopBar/></div>
                {children}
            </div>
        </div>
    )
}