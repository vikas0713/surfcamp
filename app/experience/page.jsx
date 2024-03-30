import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";
import fetchJsonData from "../api.utils";

export default async function Home() {

  const data = await fetchJsonData();
  const headline = (
    <>
    <h1>barrel</h1>
    <h1>your</h1>
    <h1>happiness</h1>
    </>
  )


  return (
    <main>
      <HeroSection headline={headline} theme="orange"/>
      {data.map((item)=> {return <InfoBlock data={item}/>})}
      
    </main>
  )
} 
