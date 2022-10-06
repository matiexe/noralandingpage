import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Card from '../components/card'


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
    <Box p={10} id='Tratamientos' backgroundColor={props.bkgcolor} backgroundImage={props.bkgImage} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
      <Heading mb={10} color={props.colorT}>{props.titulo}</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Card
        image={props.cardImage}
        tratamiento ='Tratamiento Corporales' 
        // titulo='Tratamientos reductores' 
        descripcion='
         Los tratamientos tratamientos corporales reductores 
         y reafirmantes son tratamientos de estética corporal  que buscan reducir el volumen y la grasa localizada de algunas zonas del cuerpo
        
        '/>
        <Card
        image={props.cardImage}
        tratamiento ='Tratamiento Faciales' 
        // titulo='Tratamientos tensor corporal' 
        descripcion='
        Aplicamos las mejores técnicas y equipamiento de estética no invasiva. Siempre realizamos un diagnóstico previo para identificar la aplicación mas adecuada a la afección.'
        />
        <Card
        image={props.cardImage}
        tratamiento ='Aparatologia Estetica' 
        // titulo='Tratamientos tensor corporal' 
        descripcion='
        Empleamos los mejores equipos y las últimas tecnologías mas avanzadas. Esto nos permite abarcar todas las áreas del cuerpo y sus problemáticas, brindando a nuestros clienes el mejor tratamiento.'
        
        /> 
      </SimpleGrid>
    </Box>
  );
}

