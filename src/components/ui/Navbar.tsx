import { useLocation } from "react-router-dom";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Transition",
        href: "/transition",
    },
    {
        title: "Transform",
        href: "/transform",
    },
    {
        title: "Cube",
        href: "/cube",
    },
    {
        title: "Card3D",
        href: "/card3d",
    },
]

function Navbar() {
    const { pathname } = useLocation()
    return (
        <div>
            <nav className="bg-sky-900 p-4">
                <ul className="flex justify-center space-x-4">
                    {navItems.map((item) => (
                        <li key={item.title}
                            className={pathname === item.href ? "text-white font-bold" : "text-white hover:text-sky-400"}
                        >
                            <a href={item.href} className="text-white hover:text-sky-400">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
