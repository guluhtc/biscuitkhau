import React from 'react';

interface GenerateHeaderProps {
  credits?: number;
}

export default function GenerateHeader({ credits = 0 }: GenerateHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Generate your <span className="text-purple-600">dream</span> room
      </h1>
      <p className="text-gray-600">
        You have <span className="font-semibold">{credits} credits</span> left
      </p>
    </div>
  );
}