import Link from "next/link";

const HeroSection = ({imgSrc, headline, theme = "orange"}) => {
return <section className="hero">
    <div className="hero__background">
        <img src={imgSrc || "hero.jpg"} alt="" />
    </div>
    <div className={`hero__headline hero__headline--${theme}`}>
        {headline || "Headline missing"}
    </div>
    <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/book-now">
            BOOK NOW
        </Link>
    </button>
    </section>;
}

export default HeroSection;