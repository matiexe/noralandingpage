import { Flex, Heading,Input } from '@chakra-ui/react'
import Navbar from '../components/navbarComponent'
import Hero from '../components/heroComponent'
import  SmallWithLogoLeft from '../components/smallFooter';
import Features from '../components/features'
const IndexPage =()=>{
  return(
    <>
      <Hero/>
      <Features titulo='Tratamientos'/>
      <Features titulo='Promociones' bkgcolor='#E9B8C5'/>
         
      <Features/>
      <Features titulo='Conocenos'/>
      <SmallWithLogoLeft/>
      
    </>
    
  )
}

export default IndexPage