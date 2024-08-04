import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
   return (
      <div className='flex flex-col space-y-3'>
         <div className='flex items-center'>
            <Skeleton className='h-6 w-20 rounded-l-md rounded-r-none opacity-50' />
            <Skeleton className='h-6 w-full rounded-none' />
            <Skeleton className='h-6 w-20 rounded-r-md rounded-l-none opacity-50' />
         </div>
         <div className='flex justify-between !mt-4'>
            <Skeleton className='h-10 w-20' />
            <Skeleton className='h-10 w-20' />
         </div>
      </div>
   );
}
