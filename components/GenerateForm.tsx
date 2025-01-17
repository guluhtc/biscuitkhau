import { useState } from 'react';
import Image from 'next/image';
import { themeType, roomType, themes, rooms } from '../utils/dropdownTypes';
import { SparklesIcon, LockClosedIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function GenerateForm() {
  const [theme, setTheme] = useState<themeType>('Modern');
  const [roomType, setRoomType] = useState<roomType>('Living Room');
  const [renders, setRenders] = useState('1');
  const [colorTone, setColorTone] = useState('Coral');
  const [highQuality, setHighQuality] = useState(true);
  const [private_, setPrivate] = useState(true);
  const [watermark, setWatermark] = useState(true);

  return (
    <div className="w-full md:w-[400px] p-6 bg-white rounded-3xl border-2 border-purple-100">
      {/* Previous form fields remain the same */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Theme</label>
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as themeType)}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
          <div className="relative">
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value as roomType)}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
            >
              {rooms.map((room) => (
                <option key={room} value={room}>{room}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Renders</label>
          <div className="relative">
            <select
              value={renders}
              onChange={(e) => setRenders(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color Tone</label>
          <div className="relative">
            <select
              value={colorTone}
              onChange={(e) => setColorTone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="Coral">Coral</option>
              <option value="Warm">Warm</option>
              <option value="Cool">Cool</option>
              <option value="Neutral">Neutral</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">High Quality</span>
              <span className="text-xs text-white bg-purple-600 px-2 py-0.5 rounded-full">Pro</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highQuality}
                onChange={(e) => setHighQuality(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <LockClosedIcon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Private</span>
              <span className="text-xs text-white bg-purple-600 px-2 py-0.5 rounded-full">Pro</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={private_}
                onChange={(e) => setPrivate(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PhotoIcon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Watermark</span>
              <span className="text-xs text-white bg-purple-600 px-2 py-0.5 rounded-full">Pro</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={watermark}
                onChange={(e) => setWatermark(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 px-2">
            <div className="flex items-center gap-2">
              <span>Cost: 0 Credits</span>
              <Image
                src="https://i.postimg.cc/bwYkwdgj/lets-icons-dimond-alt-light.png"
                alt="Diamond icon"
                width={16}
                height={16}
              />
            </div>
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition font-medium">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}