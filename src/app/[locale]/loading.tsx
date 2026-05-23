import { FixedBackdrop } from "@/components/layout/FixedBackdrop";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";

export default function Loading() {
  return (
    <>
      <FixedBackdrop />
      <div className='w-screen h-screen'>
        <LoadingSpinner size={50} />
      </div>
    </>
  );
}
