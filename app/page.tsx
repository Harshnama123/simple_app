'use client';

import { useRouter } from 'next/navigation';
import Envelope from './components/Envelope';

export default function Home() {
  const router = useRouter();

  return (
    <Envelope onOpen={() => router.push('/Romantic')} />
  );
}
