const CircularProgressbar = ({
  percent = 50,
  size = 3,
  strokeWidth = 0.25,
}) => {
  const radius = size / 2 - strokeWidth;
  const c = 2 * radius * Math.PI;
  return (
    <div>
      <svg className="" width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          fill="none"
          stroke="green"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${c}vw`}
          strokeDashoffset={`${c - (percent / 100) * c}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: 'center' }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize={'1.2vw'}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressbar;
