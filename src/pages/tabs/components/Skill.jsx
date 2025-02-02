export default function Skill({ icon, skill, color }) {
  return (
    <div
      className='rounded-lg p-1 border-2 flex flex-row justify-center items-center gap-1 cursor-default hover:scale-105 transition-all shadow-inner'
      style={{ backgroundColor: `${color}30`, borderColor: `${color}45` }}
    >
      <div className='p-1 rounded' style={{ backgroundColor: `${color}45` }}>
        <img src={icon} className='text-white h-5 w-5 object-contain' />
      </div>
      <p
        className='text-neutral-300 truncate mx-1 font-semibold'
        style={{ color: `${color}` }}
      >
        {skill}
      </p>
    </div>
  );
}
