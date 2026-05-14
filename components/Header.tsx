import Link from 'next/link';
import SearchBar from './SearchBar';
import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import { Github, Twitter, Instagram, Menu } from 'lucide-react';

export default function Header() {
  const posts = getAllPosts();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Artigos', href: '/' },
    { label: 'Linux', href: '/' },
    { label: 'Android', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Contato', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">

      {/* TOP BAR */}
      <div className="hidden border-b border-neutral-100 lg:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6">

          {/* LEFT */}
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Trending
            </span>
            <p className="truncate text-sm text-neutral-500">
              React Native + Docker no Pop!_OS • Ambiente Mobile Profissional
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 text-neutral-500">
            <a href="#" aria-label="GitHub">
              <Github size={16} className="cursor-pointer transition hover:text-black" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={16} className="cursor-pointer transition hover:text-black" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={16} className="cursor-pointer transition hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between gap-6">

          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative">
              <Image
                src="/LGO.avif"
                width={48}
                height={48}
                unoptimized
                alt="Logo do Blog do Joãozin"
                className="rounded-2xl border border-neutral-200 shadow-sm transition duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-neutral-900 transition group-hover:text-orange-500">
                Blog do Joãozin
              </h1>
              <p className="hidden text-xs tracking-wide text-neutral-500 sm:block">
                MODERN TECH & LINUX BLOG
              </p>
            </div>
          </Link>

          {/* CENTER NAV */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-neutral-600 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SearchBar posts={posts} />
            </div>

            <Link
              href="/about"
              className="hidden rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 lg:block"
            >
              Sobre mim
            </Link>

            {/* MOBILE MENU — aria-label for accessibility */}
            <button
              className="rounded-xl border border-neutral-200 p-2 transition hover:bg-neutral-100 lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="hidden border-t border-neutral-100 lg:block">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span>
              {new Date().toLocaleDateString('pt-BR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>Leitura rápida</span>
            <span>React • Linux • Docker</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <p className="text-sm text-neutral-500">Artigos atualizados regularmente</p>
          </div>
        </div>
      </div>
    </header>
  );
}
