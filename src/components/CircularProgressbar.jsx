const CircularProgressbar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor = 'green',
}) => {
  const radius = size / 2 - strokeWidth;
  const c = 2 * radius * Math.PI;

  // Kiểm tra nếu percent là NaN, thay bằng 0 nếu có lỗi
  const validPercent = isNaN(percent) ? 0 : percent;

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
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${c}vw`}
          strokeDashoffset={`${c - (validPercent / 100) * c}vw`}
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
          {validPercent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressbar;
