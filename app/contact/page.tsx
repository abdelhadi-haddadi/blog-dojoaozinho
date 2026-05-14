import type { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import { ArrowLeft, Mail, Github, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o Blog do Joãozin.',
};

export default function ContactPage() {
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
            Contato
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fale comigo</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tem alguma sugestão, dúvida ou só quer trocar uma ideia? Estou aqui.
          </p>
        </header>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:contato@blogdojoaozin.com"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
              <div>
                <p className="text-sm font-medium text-gray-900">E-mail</p>
                <p className="text-xs text-gray-500">contato@blogdojoaozin.com</p>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <Github className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
              <div>
                <p className="text-sm font-medium text-gray-900">GitHub</p>
                <p className="text-xs text-gray-500">@joaozin</p>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <Twitter className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
              <div>
                <p className="text-sm font-medium text-gray-900">Twitter / X</p>
                <p className="text-xs text-gray-500">@joaozin</p>
              </div>
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Respondo sempre que posso</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Geralmente respondo e-mails em até 2–3 dias úteis. Para dúvidas sobre artigos,
              prefira abrir uma issue no GitHub do projeto correspondente.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
