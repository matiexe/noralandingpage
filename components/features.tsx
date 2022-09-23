import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Card from '../components/card'
import { features } from 'process';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={10}>
      <Heading mb={10}>Tratamientos</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      
        <Card/>
        <Card/>
        <Card/>
        
      </SimpleGrid>
    </Box>
  );
}

