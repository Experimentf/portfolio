interface Props {
  size?: number;
}

export const LoadingSpinner = ({ size = 28 }: Props) => {
  return (
    <div className='w-full h-full'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        className='animate-[rotate_3s_linear_infinite]'
      >
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(0 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(45 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(90 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(135 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(180 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(225 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(270 50 50)'
        />
        <line
          x1='50'
          y1='10'
          x2='50'
          y2='30'
          stroke='cyan'
          strokeWidth='2'
          transform='rotate(315 50 50)'
        />
      </svg>
    </div>
  );
};
