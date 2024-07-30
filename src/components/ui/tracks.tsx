import { TracksProps } from "../../types";

const Tracks: React.FC<TracksProps> = ({ values }) => {
   return (
      <div className='tracksContainer'>
         {values.map((v, i) => (
            <span
               className='tracks'
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
