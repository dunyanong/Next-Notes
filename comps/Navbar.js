import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>Blog List</h1>
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/directors/">Directors</Link>
            </nav>
        </div>
    );
}
 
export default Navbar;