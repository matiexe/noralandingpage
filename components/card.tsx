import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function blogPostWithImage(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'479px'}
        w={'479'}
        bgImg={props.image}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        boxShadow={'2xl'}
        borderRadius={'10'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'260px'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
         
        </Box>
        <Stack>
          <Box
            border={'solid'}
            borderRadius={'100'}
            padding={'1'}
            color={'white'}
            w={'250px'}
          >
            <Text
              color={'white'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
              >
              {props.tratamiento}
            </Text>
          </Box>
            
          
          <Heading
            color={'white'}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.titulo}
          </Heading>
          <Text color={'white'}>
         {props.descripcion}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'md'}>
            <Link href={'#'}>
              <Text color={'pink.800'} fontWeight={800}>Ver Mas</Text>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}