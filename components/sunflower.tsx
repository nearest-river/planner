import { CSSProperties } from "react";
import "./sunflower.css";



export default function Sunflower({ width, height, top, bottom, left, right, animation_delay }: SunflowerProps) {
  const style: CSSProperties={
    width,
    height,
    top,
    bottom,
    left,
    right,
    animationDelay: typeof animation_delay=="string"?animation_delay:`${animation_delay}s`,
  };


  return (
    <svg className="sunflower-top" style={style} viewBox="0 0 400 400">
      <defs>
        <circle id="petal" cx="200" cy="100" r="60"/>
      </defs>
      <g fill="gold">
        <use href="#petal"/>
        <use href="#petal" transform="rotate(72 200 200)"/>
        <use href="#petal" transform="rotate(144 200 200)"/>
        <use href="#petal" transform="rotate(216 200 200)"/>
        <use href="#petal" transform="rotate(288 200 200)"/>
      </g>
      <circle cx="200" cy="200" r="65" fill="#78350f"/>
    </svg>
  );
}


/* <>
      <svg className="sunflower-top" style={style} viewBox="0 0 100 100">
        <g fill="#fbbf24">
          <circle cx="50" cy="30" r="12" />
          <circle cx="70" cy="45" r="12" />
          <circle cx="65" cy="70" r="12" />
          <circle cx="35" cy="70" r="12" />
          <circle cx="30" cy="45" r="12" />
        </g>
        <circle cx="50" cy="50" r="16" fill="#78350f" />
      </svg>
    </>
        <path
          d="M50 66 Q 40 85 25 80"
          stroke="#6ee7b7"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 66 Q 60 85 75 80"
          stroke="#6ee7b7"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
*/

export interface SunflowerProps {
  width: string|number;
  height: string|number;
  top?: string|number;
  bottom?: string|number;
  left?: string|number;
  right?: string|number;
  /** assumes seconds if number */
  animation_delay: string|number;
}



