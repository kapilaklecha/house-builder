import Image from "next/image";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ImageComp from "@/components/imageGrid/ImageComp";
import ImageGird from "@/components/imageGrid/ImageGird";
import ImageComponentWithDesc from "@/components/imageGrid/ImageComponentWithDesc";
import Button from "@/components/Button";

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
    <div className=" flex ">
      <ImageComponentWithDesc source="/plan.jpg" heading="plan" desc="First, we'll listen, answer your questions, and advise on the overall project scope and budget."/>
    <ImageComponentWithDesc source="design.jpg" heading="Design" desc="Then, we'll explore what's possible together, and test our decisions to ensure cost alignment."/>
    <ImageComponentWithDesc source="/build.png" heading="Build" desc="Finally, we'll execute the plan, and make sure you're aware of progress every step of the way."/>
    </div>
     <div>
     <div className=" my-6 py-6 "><Button path='/work' text='See our work' className={'bg-primary text-white text-[24px] font-bold py-2 px-6 mx-auto  hover:bg-white hover:text-primary hover:border-primary hover:border'}/></div>
     </div>
  
    </Container>
  );
}
