'use client';

import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  backgroundColor = 'bg-gray-900',
  children
}) => {
  return (
    <div className={`p-6 md:p-8 rounded-xl ${backgroundColor} text-white`}>
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-400">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default FeatureCard;
