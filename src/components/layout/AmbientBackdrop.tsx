interface Props {
  withGrid?: boolean;
  className?: string;
}

export const AmbientBackdrop = ({ withGrid = true, className }: Props) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div className='absolute top-[18%] left-[10%] w-[420px] h-[420px] rounded-full bg-primary/20 blur-[110px] mix-blend-screen opacity-60' />
      <div className='absolute bottom-[8%] right-[12%] w-[520px] h-[520px] rounded-full bg-secondary/15 blur-[130px] mix-blend-screen opacity-55' />
      <div className='absolute top-[55%] left-[55%] w-[300px] h-[300px] rounded-full bg-primary-fixed-dim/10 blur-[120px] mix-blend-screen opacity-40' />
      {withGrid && <div className='absolute inset-0 bg-void-grid opacity-25' />}
    </div>
  );
};
