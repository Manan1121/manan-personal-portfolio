'use client'

// TabsSection.tsx
import React, { useState } from 'react';
import AboutTab from './TabComponents/AboutTab';
import CourseworkTab from './TabComponents/CourseworkTab';
import SkillsTab from './TabComponents/SkillsTab';

type TabComponentsType = {
  [key: string]: JSX.Element;
};

const tabComponents: TabComponentsType = {
  about: <AboutTab />,
  skills: <SkillsTab />,
  coursework: <CourseworkTab />,

};

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  return (
      <div className="flex items-center mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          {/* Tab buttons */}
          <div className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-black overflow-hidden shadow-2xl shadow-black transition">
            {Object.keys(tabComponents).map((tab, idx) => (
              <button
                key={tab}
                tabIndex={0}
                className={`relative block h-10 px-6 rounded-full focus:outline-none focus:ring ${
                  activeTab === tab ? 'bg-white text-black' : 'text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>
          {/* Tab content */}
          <div className="mt-6 relative rounded-3xl bg-gray-100 p-6">
            {tabComponents[activeTab]}
          </div>
        </div>
      </div>
  );
};

export default TabsSection;
