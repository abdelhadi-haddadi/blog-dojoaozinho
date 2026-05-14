import type { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do Blog do Joãozin.',
};

export default function PrivacyPage() {
  const updated = '14 de maio de 2026';

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
            Legal
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
          <p className="text-sm text-gray-500">Última atualização: {updated}</p>
        </header>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Informações que coletamos</h2>
            <p>
              Este blog pode coletar informações de uso anônimas por meio de cookies e tecnologias
              similares, incluindo dados de navegação, tipo de dispositivo e páginas visitadas.
              Não coletamos dados pessoais identificáveis sem seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Google AdSense e publicidade</h2>
            <p>
              Este site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies
              para personalizar anúncios com base em suas visitas anteriores a este e outros sites.
              Você pode desativar a personalização de anúncios em{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Configurações de anúncios do Google
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Google Analytics</h2>
            <p>
              Podemos utilizar o Google Analytics para entender como os visitantes interagem com
              o blog. Os dados coletados são anônimos e usados apenas para melhorar o conteúdo
              e a experiência do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
            <p>
              Usamos cookies de sessão e cookies persistentes para melhorar sua experiência.
              Você pode controlar o uso de cookies nas configurações do seu navegador. Recusar
              cookies pode limitar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Links externos</h2>
            <p>
              Este blog pode conter links para sites de terceiros. Não nos responsabilizamos
              pelas práticas de privacidade desses sites. Recomendamos que você leia as
              políticas de privacidade de qualquer site que visitar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Seus direitos</h2>
            <p>
              Você tem o direito de solicitar acesso, correção ou exclusão de quaisquer dados
              pessoais que possamos ter coletado. Para exercer esses direitos, entre em{' '}
              <Link href="/contact" className="text-red-600 hover:underline">
                contato
              </Link>{' '}
              conosco.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
              alterações significativas publicando a nova versão nesta página com a data de
              atualização revisada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contato</h2>
            <p>
              Para dúvidas sobre esta política, acesse nossa{' '}
              <Link href="/contact" className="text-red-600 hover:underline">
                página de contato
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
