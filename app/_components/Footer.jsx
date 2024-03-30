import Link from "next/link";

const Footer = () => {
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
    ];

    const policies = [
        { display: "Imprint", slug: "/imprint" },
        { display: "Terms and Conditions", slug: "/terms-and-conditions" },
        { display: "Data Protection", slug: "/data-protection" },

    ];

    return <footer className="footer">
        <nav className="footer__nav">
            <img className="footer__logo" src="logo.svg" />
            <ul className="footer__links">
                {navItems.map((item) => (
                    <li key={"item.slug"}>
                        <Link href={`/${item.slug}`}>
                            {item.disply}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="footer__policies">
            <ul className="footer__policies-nav">
                {policies.map((item) => (
                    <li key={item}>
                        <Link href={`${item.slug}`}>
                            {item.display}
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="copy">
                All rights reserved &copy
            </p>
        </div>
    </footer>
}


export default Footer;