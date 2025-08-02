'use client';

import { useRouter } from 'next/navigation';
import RomanticTribute from '@/components/RomanticTribute';

export default function Page() {
  const router = useRouter();

  return <RomanticTribute onBack={() => router.push('/')} />;
}
