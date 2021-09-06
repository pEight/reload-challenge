import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export const Box = styled.View`
  position: relative;

  top: -${0.4*HEIGHT}px;
`

export const ShadowBox = styled.View`
  height: ${0.4*HEIGHT}px;
  background-color: #000;
  opacity: 0.4;
`

export const CalendarBox = styled.View`
  height: ${0.7*HEIGHT}px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  position: relative;
  top: -10px;

  background-color: #fff;
`

export const HeaderBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 15px 20px;
`

export const Close = styled.Image`
  width: 14px;
  height: 14px;
`

export const HeaderTitle = styled.Text`
  margin-left: 22px;
  font-size: 18px;
  font-weight: 700;
  color: #525252;
`

export const ControlBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 5px 10px 0;
  padding-bottom: 20px;
  border-bottom-color: #bababa;
  border-bottom-width: 2px;
`;

export const ControlTitle = styled.Text`
  width: 270px;
  text-align: center;
  font-size: 18px;
  font-family: 'Roboto';
  color: #bababa;
`;

export const ApplyBox = styled.View`
  display: flex;
  align-items: center;
`

export const ApplyButton = styled.Pressable`
  width: ${0.85*WIDTH}px;
`

export const ApplyText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding: 12px;
`

export const WeekDayList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
`

export const WeekDayItem = styled.Text`
  font-size: 16px;
  color: #525252;
  font-weight: bold;
  text-align: center;

  width: 35px;
  margin: 0 10px;
`

export const DayTable = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 15px;
`

export const DayRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 8px 0;
`;

export const DayCol = styled(WeekDayItem)``;
