import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <LoadingSpinner
        size={50}
        title='Please wait while the starts align themselves . . .'
      />
    </div>
  );
}
