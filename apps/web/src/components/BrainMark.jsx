// O logo (cérebro em quatro lobos) vetorizado a partir de public/images/logo.png.
// Pode ser preenchido, contornado ou ter um único lobo em destaque.

export const LOBES = [
  // superior esquerdo
  'M47.3 179.9C60.4 173.3 78.8 162.6 85.2 157.8C93.0 152.0 101.9 142.8 105.6 136.4C110.1 128.7 116.9 112.2 118.6 104.7C120.7 95.5 121.8 42.8 120.1 36.3C118.1 29.0 111.5 23.0 105.5 23.0C101.2 23.0 86.1 29.8 77.0 35.8C66.9 42.5 54.0 55.0 48.0 63.9C38.8 77.7 29.4 100.8 26.6 117.0C21.9 144.4 25.2 174.3 33.8 181.0C37.2 183.8 40.1 183.5 47.3 179.9Z',
  // superior direito
  'M223.5 181.8C234.8 176.6 237.5 133.0 228.4 103.0C225.1 92.4 218.4 76.9 213.0 67.9C203.8 52.4 183.3 34.9 164.7 26.7C157.5 23.5 155.0 22.9 151.7 23.3C146.5 24.0 143.1 26.6 140.0 32.1L137.5 36.5L137.5 64.0C137.6 100.5 138.7 106.9 148.9 128.5C154.6 140.5 161.0 148.5 171.5 156.4C180.5 163.3 215.4 183.0 218.7 183.0C219.9 183.0 222.1 182.5 223.5 181.8Z',
  // inferior esquerdo
  'M112.8 237.5C114.8 236.6 117.5 234.9 118.8 233.7C123.6 229.3 124.0 227.2 124.0 208.5C124.0 188.7 123.4 186.6 116.3 179.9C103.0 167.4 93.4 168.2 67.5 183.6C52.1 192.8 50.0 195.0 50.0 202.3C50.0 208.1 51.7 210.1 64.1 219.5C75.7 228.2 80.9 231.0 94.0 235.6C104.7 239.4 107.5 239.7 112.8 237.5Z',
  // inferior direito
  'M163.7 235.9C168.5 234.2 175.9 231.0 180.0 228.9C189.4 224.0 204.9 212.0 207.3 207.7C209.5 203.8 209.0 197.9 206.2 194.1C203.6 190.6 178.5 175.7 170.8 173.1C162.8 170.4 157.7 170.5 151.4 173.4C144.5 176.6 139.6 181.2 136.6 187.2C134.1 192.1 134.0 193.2 134.0 208.4C134.0 226.4 135.2 230.9 140.8 234.8C147.9 239.9 151.8 240.1 163.7 235.9Z',
];

const BrainMark = ({
  className = '',
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = 1.5,
  highlight = null,
  dimOpacity = 0.18,
  title,
}) => (
  <svg
    viewBox="20 18 220 226"
    className={className}
    role={title ? 'img' : undefined}
    aria-hidden={title ? undefined : true}
    aria-label={title}
  >
    {LOBES.map((d, i) => (
      <path
        key={i}
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        opacity={highlight === null || highlight === i ? 1 : dimOpacity}
        style={{ transition: 'opacity 400ms ease' }}
      />
    ))}
  </svg>
);

export default BrainMark;
