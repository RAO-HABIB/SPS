import React from 'react';

import Image from 'next/image';
import { phases } from "@/lib/intership-data";

export default function ProgressivePhases() {
  return (
    <div 
      id="phases" 
      className="bg-cover w-full flex justify-center items-center py-12"
      style={{ backgroundImage: 'url("https://kikimodev.com/static/media/bgheader.5609055ae782da0be362.webp")' }}
    >
      <div className="w-full bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <div className="w-11/12 max-w-7xl mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 drop-shadow-sm">
            Progressive Phases of Internship
          </h2>

          <div>
            <div className="flex flex-wrap items-stretch py-2 justify-center text-gray-800">
              
             
              {phases.map((phase, idx) => (
                <div key={idx} className="flex flex-col md:w-1/2 xl:w-1/2 p-4">
                  <div className="bg-white shadow-md rounded-3xl p-4 border border-gray-100 h-full">
                    <div className="flex-none lg:flex h-full">
                      
                      <div className="h-48 w-full lg:h-auto lg:w-2/5 lg:mb-0 mb-3 shrink-0">
                        <img 
                          src={phase.image} 
                          alt={phase.title} 
                          className="w-full h-full object-cover rounded-2xl" 
                        />
                      </div>
                      
                      <div className="flex-auto lg:ml-4 flex flex-col justify-between py-2">
                        <div>
                          <div className="flex flex-wrap items-center">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium">
                              {phase.id}
                            </div>
                            <h3 className="flex-auto text-lg font-bold text-gray-900 mt-1">
                              {phase.title}
                            </h3>
                          </div>
                          
                          <div className="flex py-3 text-sm text-gray-600">
                            <p className="leading-relaxed pr-2">{phase.desc}</p>
                          </div>
                        </div>

                        <div className="flex space-x-3 text-sm font-medium mt-2">
                          <span className="mb-2 md:mb-0 bg-white px-4 py-1.5 shadow-sm tracking-wider border border-gray-200 text-gray-600 rounded-full inline-block">
                            #{phase.title.replace(/[^a-zA-Z0-9]/g, '')}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}