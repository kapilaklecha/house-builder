import Container from '@/components/Container'
import HeroSection from '@/components/HeroSection'
import ImageComp from '@/components/imageGrid/ImageComp'
import ImageGird from '@/components/imageGrid/ImageGird'
import React from 'react'

const page = () => {
  return (
    <Container>
     <div>
        <HeroSection heading='Functionally beautiful home renovations ' lastWord='additions' desc='Expertly crafted with meticulous care and attention to detail.' logo={true} button={false}/>
     </div>
     <div>
        <ImageGird className=' grid-cols-3 max-lg:grid-cols-1 '>
            <ImageComp source='/house1.jpg' text='Build interior'/>
            <ImageComp source='/house2.jpg' text='Build full interior and exterior'/>
            <ImageComp source='/house3.jpg' text='Build full interior and exterior'/>
            <ImageComp source='/house4.jpg' text='Build interior'/>
            <ImageComp source='/house5.jpg' text='Build interior'/>
            <ImageComp source='/house6.jpg' text='Build interior'/>
            
        </ImageGird>
     </div>
    </Container>
  )
}

export default page