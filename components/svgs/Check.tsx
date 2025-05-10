import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Check = (props) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M82.8589 25.3555L37.5235 70.6909L16.9165 50.0839"
      stroke="#F59245"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Check;
