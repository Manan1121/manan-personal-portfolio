'use client'

import React from 'react'
import AboutTab from './TabComponents/AboutTab'
import { useState } from 'react'
import { act } from 'react-dom/test-utils'

type TabComponentsType = {
  [key: string]: () => JSX.Element; // Or React.FC if you prefer
}

const tabComponents: TabComponentsType = {
    about: () => <AboutTab />
}

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  const ActiveTabContent = tabComponents[activeTab]
  return (
    <div className='flex flex-col items-center'>
      <div className='flex-row justify-center'>
      {Object.keys(tabComponents).map((tab) => (
        <button key={tab} className={` border-b-2 px-6 px-2 rounded-sm font-semibold mx-1 text-2xl  hover:text-red-600 ${activeTab === tab ? 'border-black text-black' : 'bg-white text-black border border-black'} border `}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>

        

        
      ))}
      </div>
      <div className="p-4 border rounded-lg w-3/4 border-black">
        <ActiveTabContent />
      </div>
    </div>
    
  )
}

export default TabsSection