import React, { useState, useEffect, useMemo } from "react";
import { Pressable, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  ApplyBox,
  ApplyButton,
  ApplyText,
  Box,
  CalendarBox,
  ControlBox,
  ControlTitle,
  Close,
  DayCol,
  DayRow,
  DayTable,
  HeaderBox,
  HeaderTitle,
  ShadowBox,
  WeekDayItem,
  WeekDayList,
} from "./style";

import close from "../../assets/close.png";
import arrowRight from '../../assets/arrow-right.png';
import arrowLeft from '../../assets/arrow-left.png';

import {
  daysOfWeek,
  getMonth,
  beforeMonth,
  isFirstMonthOfTheYear,
  isLastMonthOfTheYear,
  afterMonth,
  getCalendarMonths
} from './Calendar';

export function Calendar() {
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(0);

  const daysOfMonth = useMemo(() => getCalendarMonths(month, year), [month, year]);
  const size = Math.ceil(daysOfMonth.length / 7);

  const weeks = Array(size)
    .fill(0)
    .map((_, i) => i)
    .map(w => daysOfMonth.slice(w*7, (w+1)*7));

  useEffect(() => {
    const d = new Date();

    setMonth(d.getMonth())
    setYear(d.getFullYear());
  }, [])

  function handleBackDate() {
    if (isFirstMonthOfTheYear(month)) {
      setYear(current => current-1);
    }

    setMonth(current => beforeMonth(current));
  }

  function handleNextDate() {
    if (isLastMonthOfTheYear(month)) {
      setYear(current => current+1);
    }

    setMonth(current => afterMonth(current));
  }

  return (
    <Box>
      <ShadowBox />
      {/* header */}
      <CalendarBox>
        <HeaderBox>
          <Close source={close} />
          <HeaderTitle>Calendar</HeaderTitle>
        </HeaderBox>

        <ControlBox>
          <Pressable onPress={handleBackDate}>
            <Image source={arrowLeft} />
          </Pressable>
          <ControlTitle>{ getMonth(month) } - { year }</ControlTitle>
          <Pressable onPress={handleNextDate}>
            <Image source={arrowRight} />
          </Pressable>
        </ControlBox>

        <WeekDayList>
          { daysOfWeek.map(d => <WeekDayItem key={d}>{d[0]}</WeekDayItem>) }
        </WeekDayList>

        <DayTable>
          { weeks.map((w, wi) => (
            <DayRow key={`row-${wi}`}>
              { w.map((d, di) => <DayCol key={`col-${di}`}>{d === 0 ? '' : d }</DayCol>) }
            </DayRow>
          )) }
        </DayTable>

        <ApplyBox>
          <ApplyButton onPress={() => {}}>
            <LinearGradient
              colors={['#4a54df', '#15d4d8']}
              locations={[0.04, 0.69]}
              start={[0, 0]}
              end={[1,1]}
              style={{ borderRadius: 50 }}
            >
              <ApplyText>
                Apply
              </ApplyText>
            </LinearGradient>
          </ApplyButton>
        </ApplyBox>
      </CalendarBox>
    </Box>
  );
}
