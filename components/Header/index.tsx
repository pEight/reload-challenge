import React from 'react';
import { Image } from 'react-native';

import user from '../../assets/user.jpg';
import logo from '../../assets/logo.png';
import chatIcon from '../../assets/chat_icon.png'

import { Box, UserImage, LogoImage } from './style';

export function Header() {

  return (
    <Box>
      <UserImage source={user} />
      <LogoImage source={logo} />
      <Image source={require('../../assets/chat_icon.png')} />
    </Box>
  );
}