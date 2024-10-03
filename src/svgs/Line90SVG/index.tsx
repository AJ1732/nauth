import { IconProps } from "@/types/icons";

const Line90SVG: React.FC<IconProps> = ({
  className,
  fillColor = "#DBDBDB",
}) => {
  return (
    <svg
      width="314"
      height="244"
      viewBox="0 0 314 244"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M314 243L228.628 243C206.537 243 188.628 225.091 188.628 203L188.628 41C188.628 18.9086 170.72 1.00001 148.628 1.00001L1.52492e-06 1.00001"
        stroke={fillColor}
        strokeWidth="2"
      />
    </svg>
  );
};
export default Line90SVG;
