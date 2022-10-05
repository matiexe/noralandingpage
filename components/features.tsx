import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Card from '../components/card'
import { features } from 'process';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  section:string;
  bkgcolor:string;
}

const Feature = (props) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        backgroundColor={'#E9B8C5'}
        mb={1}>
      </Flex>
      <Text fontWeight={600}></Text>
      <Text color={'gray.600'}></Text>
    </Stack>
  );
};

export default function SimpleThreeColumns(props) {
  console.log(props)
  return (
    <Box p={10} id='Tratamientos' backgroundColor={props.bkgcolor}>
      <Heading mb={10}>{props.titulo}</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Card 
        tratamiento ='Tratamiento no invasivo' 
        titulo='Tratamientos reductores' 
        descripcion='
         Los tratamientos tratamientos corporales reductores 
         y reafirmantes son tratamientos de estética corporal  que buscan reducir el volumen y la grasa localizada de algunas zonas del cuerpo
        
        '/>
        <Card
        tratamiento ='Tratamiento no invasivo' 
        titulo='Tratamientos tensor corporal' 
        descripcion='
         Los tratamientos tratamientos corporales reductores 
         y reafirmantes son tratamientos de estética corporal  que buscan reducir el volumen y la grasa localizada de algunas zonas del cuerpo
        '
        />
        <Card/> 
      </SimpleGrid>
    </Box>
  );
}

