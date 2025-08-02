'use client';

import { useRouter } from 'next/navigation';
import DailyLovePage from '@/components/DailyLovePage';

export default function Page() {
  const router = useRouter();

  return <DailyLovePage onBack={() => router.push('/Romantic')} />;
}
