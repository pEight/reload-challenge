import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Box, Title, Text, Background, MenuBox, MenuItem } from './style';

import { Calendar } from '../Calendar';


import bodyImage from '../../assets/ilustration_lifestyle.png';

type Menu = 'timestamp' | 'activity' | '';

export function Body() {
  const [menu, setMenu] = useState<Menu>('');

  const [fontLoaded] = useFonts({
    'Roboto': require('../../fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../fonts/Roboto-Italic.ttf')
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <Box>
      <Background
        source={bodyImage}
      >
        <Title>Lifestyle</Title>

        <Text>Get a holistic view of your activities to enhance your wellbeing and benefit from even more accurate recommendations.</Text>
      </Background>

      <MenuBox>
        <MenuItem
          selected={menu === 'timestamp'}
          onPress={() => setMenu('timestamp')}
        >
          Timestamp feed
        </MenuItem>

        <MenuItem
          selected={menu === 'activity'}
          onPress={() => setMenu('activity')}
        >
          Activity feed
        </MenuItem>
      </MenuBox>


      <Calendar />
    </Box>
  )
}