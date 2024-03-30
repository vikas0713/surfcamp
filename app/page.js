import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";

export default function Home() {
  const headline = (
    <>
    <h1>barrel</h1>
    <h1>your</h1>
    <h1>happiness</h1>
    </>
  )

  const infoBlockData = {
    text: "Experience",
    headline: "Unleash the nature and experience the heaven",
    copy: "Lorem ipsum is dummy text used in graphic design and publishing to demonstrate a document's visual form or typeface without using content. It's made up of scrambled Latin text that emphasizes the design of a layout over the content. Lorem ipsum has been the industry standard dummy text since the 1500s, when an unknown printer scrambled a galley of type to make a book of type specimens. It's remained essentially unchanged since then, even with the transition to electronic typesetting. Lorem ipsum became popular in the 1960s with the release of Letraset sheets that contained Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
    reversed: false
  }

  const infoBlockData1 = {
    text: "Experience",
    headline: "Unleash the nature and experience the heaven",
    copy: "Lorem ipsum is dummy text used in graphic design and publishing to demonstrate a document's visual form or typeface without using content. It's made up of scrambled Latin text that emphasizes the design of a layout over the content. Lorem ipsum has been the industry standard dummy text since the 1500s, when an unknown printer scrambled a galley of type to make a book of type specimens. It's remained essentially unchanged since then, even with the transition to electronic typesetting. Lorem ipsum became popular in the 1960s with the release of Letraset sheets that contained Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
    reversed: true
  }

  return (
    <main>
      <HeroSection headline={headline}/>
      <InfoBlock data={infoBlockData}/>
      <InfoBlock data={infoBlockData1}/>

    </main>
  );
} 
