'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: 'true' | 'false') => {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

        <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
          Usamos cookies para melhorar sua experiência e exibir anúncios relevantes.
          Ao continuar, você concorda com nossa{' '}
          <Link
            href="/privacy"
            className="font-medium underline underline-offset-4 hover:text-black"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => handleConsent('false')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
          >
            Recusar
          </button>

          <button
            onClick={() => handleConsent('true')}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
