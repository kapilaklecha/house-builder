import Image from "next/image";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ImageComp from "@/components/imageGrid/ImageComp";
import ImageGird from "@/components/imageGrid/ImageGird";

export default function Home() {
  return (
    
    <Container>
      <HeroSection heading={'We create better space for you to live'} lastWord="play" desc="For over a decade, we've provided Khargone and Indore homeowners like you with high-end, custom renovations and additions." logo={true} />
    <div>
    
    <ImageGird className=" grid-cols-2">
      <ImageComp  text="Total flooring makeover" source="/house1.jpg"/>
      <ImageComp text="full house construction" source="/house2.jpg" />
      <ImageComp text="Total exterior build" source="/house3.jpg"/>
      <ImageComp text=" Moduler kitchen with all eminities" source="/house4.jpg"/>
    </ImageGird>

    </div>
    <div className=" my-12">
    <HeroSection heading={'Vison. Clearity. Result'} lastWord="play" desc="For over a decade, we've provided Khargone and Indore homeowners like you with high-end, custom renovations and additions." button={false}/>
    </div>
    </Container>
  );
}
