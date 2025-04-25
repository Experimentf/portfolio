import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";

export default function Loading() {
  return (
    <div className='w-screen h-screen'>
      <LoadingSpinner size={50} />
    </div>
  );
}
