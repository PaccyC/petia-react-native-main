import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Calendar = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 66 67"
    fill="none"
    {...props}
  >
    <Path
      d="M52.2585 11.1885H13.7921C10.7572 11.1885 8.29688 13.6488 8.29688 16.6837V55.1501C8.29688 58.185 10.7572 60.6453 13.7921 60.6453H52.2585C55.2934 60.6453 57.7537 58.185 57.7537 55.1501V16.6837C57.7537 13.6488 55.2934 11.1885 52.2585 11.1885Z"
      stroke="#F59245"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29688 27.6738H57.7537"
      stroke="#F59245"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M44.0166 5.69043V16.6808"
      stroke="#F59245"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.0332 5.69043V16.6808"
      stroke="#F59245"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Calendar;
