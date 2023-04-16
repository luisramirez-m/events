import { HTMLAttributes } from 'react';

export interface IIcon extends HTMLAttributes<HTMLOrSVGElement> {
  height?: number;
  width?: number;
}

const IconCalendarToday = ({ height = 32, width = 32 }: IIcon) => (
  <svg
    data-testid="icon-calendar-today"
    fill="currentColor"
    height={height}
    viewBox="0 96 960 960"
    width={width}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M186.666 976q-27 0-46.833-19.833T120 909.334V309.333q0-27 19.833-46.833 19.833-19.834 46.833-19.834h56.667v-32.999q0-14.334 9.967-24Q263.267 176 278 176q15.017 0 25.175 9.967 10.158 9.966 10.158 24.7v31.999h333.334v-32.999q0-14.334 9.966-24Q666.6 176 681.333 176q15.017 0 25.175 9.967 10.159 9.966 10.159 24.7v31.999h56.667q27 0 46.833 19.834Q840 282.333 840 309.333v600.001q0 27-19.833 46.833T773.334 976H186.666Zm0-66.666h586.668V489.333H186.666v420.001Zm0-486.667h586.668V309.333H186.666v113.334Zm0 0V309.333v113.334Z"
      fill="currentColor"
    />
  </svg>
);

export default IconCalendarToday;
