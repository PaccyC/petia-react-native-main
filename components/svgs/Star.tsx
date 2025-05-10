import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Star = (props) => (
  <Svg
    width={64}
    height={61}
    viewBox="0 0 64 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M32.2031 4.49609L40.6932 21.6961L59.6791 24.4712L45.9411 37.852L49.1833 56.7555L32.2031 47.8258L15.2229 56.7555L18.4651 37.852L4.72705 24.4712L23.713 21.6961L32.2031 4.49609Z"
      stroke="#F8B683"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Star;
