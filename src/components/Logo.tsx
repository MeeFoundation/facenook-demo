export function Logo({ size = 24 }: { size?: number }) {
  const r = (5 / 24) * size;
  const cx1 = (6 / 24) * size;
  const cx2 = (18 / 24) * size;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={cx1} cy={cy} r={r} stroke="#1877f2" strokeWidth="2" />
      <circle cx={cx2} cy={cy} r={r} stroke="#1877f2" strokeWidth="2" />
    </svg>
  );
}
