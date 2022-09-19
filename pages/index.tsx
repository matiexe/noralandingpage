import { Flex, Heading,Input } from '@chakra-ui/react'
import Navbar from '../components/navbarComponent'
import Hero from '../components/heroComponent'
import  SmallWithLogoLeft from '../components/smallfooter'
const IndexPage =()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <SmallWithLogoLeft/>
    </div>
    
  )
}

export default IndexPage