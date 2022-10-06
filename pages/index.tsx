import { Flex, Heading,Input } from '@chakra-ui/react'
import Navbar from '../components/navbarComponent'
import Hero from '../components/heroComponent'
import  SmallWithLogoLeft from '../components/smallFooter';
import Features from '../components/features'
import Section from '../components/section'
import { url } from 'inspector';
import Card from '../components/card'
const IndexPage =()=>{
  return(
    <>
      <Hero/>
      <Features titulo='Tratamientos'/>
      <Features 
        cardImage='url(https://lh3.googleusercontent.com/ZIs5oFXxQCqSLaIDxoCj-mYd36itYe_AR3otOAbhA4JjmKVUyU-BWWAohniWHtrxfhEHyIYsLzB962hSRAYCBnRrCGAEkeGeWCaDEGanJJVjKLhIGtZjbtRpWni38U7Aok9PVI3Y)'
        colorT='white'
        titulo='Promociones' 
        bkgcolor='#E9B8C5'
        bkgImage='url(https://images.pexels.com/photos/3673941/pexels-photo-3673941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'  
      />
        
      <Features titulo='Conocenos'/>
      <SmallWithLogoLeft/>
      
    </>
    
  )
}

export default IndexPage