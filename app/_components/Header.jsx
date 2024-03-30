"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {

    const path = usePathname();
    const navItems = [
        {
            disply: "the camp",
            slug: ""
        },
        {
            disply: "the experience",
            slug: "experience"
        },
        {
            disply: "the blog",
            slug: "blog"
        }
    ]

    return <header className={`header ${path === "/experience"? "header--light": ""}`}>
        <img className="header__logo" src="logo.svg"/>
        <ul className="header__nav">
            {navItems.map((item) => (
            <li key={item.slug}>
                <Link href={`/${item.slug}`}>{item.disply}</Link>
            </li>
            ))}
            
        </ul>
        <Link href="/events">
            <button className="btn--black btn--small">
                BOOK NOW
            </button>
        </Link>

    </header>
}


export default Header;