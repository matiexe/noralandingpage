import { Flex, Heading,Input } from '@chakra-ui/react'
import Navbar from '../components/navbarComponent'
import Hero from '../components/heroComponent'
import  SmallWithLogoLeft from '../components/smallFooter';
import Features from '../components/features'
import WspButton from '../components/wspButton';
const IndexPage =()=>{
  return(
    <>
      <Hero/>
      <Features titulo='Tratamientos'/>
      <Features
        show='1' 
        cardImage='url(https://lh3.googleusercontent.com/ZIs5oFXxQCqSLaIDxoCj-mYd36itYe_AR3otOAbhA4JjmKVUyU-BWWAohniWHtrxfhEHyIYsLzB962hSRAYCBnRrCGAEkeGeWCaDEGanJJVjKLhIGtZjbtRpWni38U7Aok9PVI3Y)'
        colorT='white'
        titulo='Promociones' 
        bkgcolor='#E9B8C5'
        bkgImage='url(https://images.pexels.com/photos/3673941/pexels-photo-3673941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'  
      />
        
      <Features titulo='Conocenos'/>
      <SmallWithLogoLeft/>
      <WspButton/>
      
    </>
    
  )
}

export default IndexPage