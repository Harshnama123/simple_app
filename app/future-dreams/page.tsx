'use client';

import { useRouter } from 'next/navigation';
import FutureDreamsPage from '@/components/FutureDreamsPage';

export default function Page() {
  const router = useRouter();

  return <FutureDreamsPage onBack={() => router.push('/')} />;
}