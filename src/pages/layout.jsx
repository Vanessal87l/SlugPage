import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav>
                <div className="flex gap-[65px] m-6">
                    <Link className="text-3xl text-gray-600" to="/"> BMW models</Link>
                    <Link className="text-2xl text-red-800" to="/contact">Contacts BMW</Link>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>

            <footer>
                <div className="flex items-center">
                    <h2>© BMW AG 2025</h2>
                </div>
            </footer>
        </div>
    );
}
