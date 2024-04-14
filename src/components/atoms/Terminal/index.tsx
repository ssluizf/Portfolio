type TerminalProps = {
  skills: string[]
}

export default function Terminal({ skills }: TerminalProps) {
  return (
    <div className="w-full sm:w-4/5 md:w-full lg:w-3/4 xl:w-1/2 rounded-xl">
      <div className="flex items-center px-4 space-x-2 bg-white bg-opacity-20 h-6 md:h-8 rounded-t-xl">
        <div className="bg-white w-2 h-2 md:w-3 md:h-3 rounded-full"></div>
        <div className="bg-green w-2 h-2 md:w-3 md:h-3 rounded-full"></div>
        <div className="bg-dark-green w-2 h-2 md:w-3 md:h-3 rounded-full"></div>
      </div>
      <div className="bg-dark-gray h-96 p-6 md:p-8 space-y-4 rounded-xl">
        {skills.map((label, index) => (
          <p
            key={`skill-${index}`}
            className="w-min whitespace-nowrap text-white hover:text-green cursor-pointer select-none"
          >
            <span className="text-xl md:text-3xl">{"> "}</span>
            <span className="text-lg md:text-2xl">{label}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
