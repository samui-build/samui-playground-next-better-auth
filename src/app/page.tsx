import React from 'react'

export default function Home() {
  const testItems = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    title: `Item ${i}`,
    description: `Description for item ${i}`,
  }))
  return (
    <div className="grid grid-cols-3 gap-[24px] p-2">
      {testItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-[8px]">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
