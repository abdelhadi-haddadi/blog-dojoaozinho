import type { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça o Blog do Joãozin — um blog sobre tecnologia, Linux, programação e desenvolvimento web.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </Link>

        <header className="mb-10 pb-8 border-b border-gray-200">
          <span className="inline-block text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
            Sobre
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog do Joãozin</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Um espaço dedicado a tecnologia, Linux, programação e desenvolvimento web.
          </p>
        </header>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            Olá! Sou o Joãozin, desenvolvedor e entusiasta de tecnologia open-source. Este blog nasceu
            da vontade de compartilhar o que aprendo no dia a dia — desde configurações de ambiente
            Linux até tutoriais de React, Docker e muito mais.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">O que você encontra aqui</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tutoriais práticos de Linux (Arch, Pop!_OS, Ubuntu)</li>
            <li>Guias de configuração de ambiente de desenvolvimento</li>
            <li>Artigos sobre React Native e desenvolvimento mobile</li>
            <li>Dicas de Docker e containers</li>
            <li>Curiosidades e opiniões sobre o mundo tech</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contato</h2>
          <p>
            Tem alguma dúvida, sugestão ou quer trocar uma ideia? Entre em{' '}
            <Link href="/contact" className="text-red-600 hover:underline">
              contato
            </Link>
            . Respondo sempre que possível!
          </p>
        </div>
      </main>
    </div>
  );
}
