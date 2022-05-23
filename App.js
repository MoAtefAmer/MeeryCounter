import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
// 1. import `NativeBaseProvider` component
import {
  NativeBaseProvider,
  Text,
  Box,
  Image,
  Heading,
  HStack,
  VStack,
  Divider,
} from 'native-base';


export default function App() {
  // 2. Use at the root of your app
  const targetTime = moment('2023-03-01');

  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  const numberFontSize = '5xl';
  const textFontSize = 'sm';
  const textColor = 'white';
  const dividerProps = {
    bg: 'white',
    thickness: '2',
    mx: '2',
    orientation: 'vertical',
  };

  // const soldier = require('./assets/Soldier.jpg')
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <NativeBaseProvider>
      <Box marginBottom="10%" flex={1} bg='#fff' alignItems='center' justifyContent='center'>
        <Image source={require('./assets/Soldier.jpg')} alt='alt' size="xl"/>
        <Heading  style={{ marginBottom: '5%' }} size='2xl'>
          <Text fontSize='35'>Days Until Freedom...</Text>
        </Heading>
  
        <Box
          flex={1}
          alignItems='center'
          justifyContent='center'
          bg="#666627"
          py='4'
          px='3'
          borderRadius='5'
          rounded='md'
          width='95%'
          maxWidth='100%'
          maxHeight='20%'
        >
          <HStack space={1} justifyContent='space-between'>
            <Box>
              <VStack alignItems='center'>
                <Text color={textColor} fontSize={numberFontSize}>
                  {timeBetween.months()}
                </Text>
                <Text color={textColor} fontSize={textFontSize}>
                  Months
                </Text>
              </VStack>
            </Box>
            <Divider
              bg={dividerProps.bg}
              thickness={dividerProps.thickness}
              mx={dividerProps.mx}
              orientation={dividerProps.orientation}
            />
            <Box>
              <VStack alignItems='center'>
                <Text color={textColor} fontSize={numberFontSize}>
                  {timeBetween.days()}
                </Text>
                <Text color={textColor} fontSize={textFontSize}>
                  Days
                </Text>
              </VStack>
            </Box>
            <Divider
              bg={dividerProps.bg}
              thickness={dividerProps.thickness}
              mx={dividerProps.mx}
              orientation={dividerProps.orientation}
            />
            <Box>
              <VStack alignItems='center'>
                <Text color={textColor} fontSize={numberFontSize}>
                  {timeBetween.hours()}
                </Text>
                <Text color={textColor} fontSize={textFontSize}>
                  Hours
                </Text>
              </VStack>
            </Box>
            <Divider
              bg={dividerProps.bg}
              thickness={dividerProps.thickness}
              mx={dividerProps.mx}
              orientation={dividerProps.orientation}
            />
            <Box>
              <VStack alignItems='center'>
                <Text color={textColor} fontSize={numberFontSize}>
                  {timeBetween.minutes()}
                </Text>
                <Text color={textColor} fontSize={textFontSize}>
                  Minutes
                </Text>
              </VStack>
            </Box>
            <Divider
              bg={dividerProps.bg}
              thickness={dividerProps.thickness}
              mx={dividerProps.mx}
              orientation={dividerProps.orientation}
            />
            <Box>
              <VStack alignItems='center'>
                <Text color={textColor} fontSize={numberFontSize}>
                  {timeBetween.seconds()}
                </Text>
                <Text color={textColor} fontSize={textFontSize}>
                  Seconds
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>

      </Box>
    </NativeBaseProvider>
  );
}
