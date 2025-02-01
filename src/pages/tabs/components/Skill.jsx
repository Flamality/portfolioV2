export default function Skill({ icon, skill, color }) {
  return (
    <div
      className='rounded-lg p-2 flex flex-row justify-center items-center gap-3'
      style={{ backgroundColor: `${color}25` }} // Adds transparency (15% opacity)
    >
      <img src={icon} className='text-white h-5 w-5 object-contain' />
      <p className='text-neutral-300'>{skill}</p>
    </div>
  );
}
