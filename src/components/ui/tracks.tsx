import { TracksProps } from "@/types";

const Tracks: React.FC<TracksProps> = ({ values }) => {
   return (
      <div className='flex justify-between w-full h-full absolute z-10 top-0 mix-blend-soft-light'>
         {values.map((v, i) => (
            <span
               className='h-4/6 my-auto border border-dashed border-white/80 last:opacity-0 first:opacity-0 '
               key={i}
               style={{
                  left: `${v}%`,
               }}
            />
         ))}
      </div>
   );
};

export default Tracks;
