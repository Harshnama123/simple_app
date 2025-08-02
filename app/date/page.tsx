'use client';

import { useRouter } from 'next/navigation';
import FirstDatePage from '@/components/FirstDatePage';

export default function Page() {
  const router = useRouter();

  return <FirstDatePage onBack={() => router.push('/Romantic')} />;
}
