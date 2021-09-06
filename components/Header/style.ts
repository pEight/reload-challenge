import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin: 10px 0;

  width: ${Dimensions.get("window").width}px;
`;

export const UserImage = styled.Image`
  height: 40px;
  width: 40px;

  border-radius: 50;
`;

export const LogoImage = styled.Image`
  width: 120px;

  resize-mode: contain;
`