export default function Skill({ Icon, skill, color }) {
  return (
    <div
      className='rounded-lg p-1 border-2 flex flex-row justify-center items-center gap-1 w-fit cursor-default hover:scale-105 transition-all shadow-inner'
      style={{ backgroundColor: `${color}30`, borderColor: `${color}45` }}
    >
      <div className='p-1 rounded' style={{ backgroundColor: `${color}45` }}>
        {/* <img
          src={Icon}
          alt={skill + " Icon"}
          className='text-white h-5 w-5 object-contain'
        /> */}
        {/* <Icon /> */}
        {/* {typeof Icon === "string" ? (
          <img src={Icon} alt={skill} className='h-5 w-5' />
        ) : (
          <Icon className='h-5 w-5' style={{ color }} />
        )} */}
        {Icon}
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
