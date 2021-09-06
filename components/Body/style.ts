import styled from 'styled-components/native';

export const Box = styled.View`
  display: flex;
`

export const Title = styled.Text`
  color: #fff;

  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const Text = styled.Text`
  color: #fff;
  font-family: 'Roboto';

  width: 170px;
  margin: 10px 0;
  line-height: 20px;
`

export const Background = styled.ImageBackground`
  resize-mode: contain;
  height: 200px;

  padding-left: 16px;
  padding-top: 16px;
`

export const MenuBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0;
`
// b2b2b2

type Menu = 'timestamp' | 'activity' | '';

interface MenuItemProps {
  selected: boolean;
}

export const MenuItem = styled.Text<MenuItemProps>`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: ${({ selected }) => selected ? '#525252' : '#b2b2b2' };
  
  width: 130px;
  margin: 0 20px;
`;