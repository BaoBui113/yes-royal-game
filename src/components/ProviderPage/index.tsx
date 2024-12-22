'use client';
import { useAuth } from '@/lib/context/AuthContext';
import React from 'react';

export default function ProviderPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { statusModal } = useAuth();
  return (
    <section
      className={`relative ${
        statusModal === 'sidebar' || statusModal === 'sidebarAuth'
          ? 'overflow-hidden h-screen'
          : ''
      }`}
    >
      {children}
    </section>
  );
}
