import { Flex, Heading,Input } from '@chakra-ui/react'
import Navbar from '../components/navbarComponent'
import Hero from '../components/heroComponent'
import  SmallWithLogoLeft from '../components/smallfooter';
import Features from '../components/features'
const IndexPage =()=>{
  return(
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Features/>
      <Features/>
      <SmallWithLogoLeft/>
      
    </>
    
  )
}

export default IndexPage