export default function WeeklyStreak() {

  const days=[
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
  ];

  return(

<div className="bg-zinc-900 rounded-3xl p-6 mt-6 border border-zinc-800">

<h2 className="text-2xl font-bold">
🔥 Weekly Streak
</h2>

<div className="flex justify-between mt-6">

{days.map((day,index)=>(

<div
key={index}
className={`w-10 h-10 rounded-full flex items-center justify-center

${index<5
?"bg-indigo-600"
:"bg-zinc-700"}

`}
>

{day}

</div>

))}

</div>

</div>

  )

}