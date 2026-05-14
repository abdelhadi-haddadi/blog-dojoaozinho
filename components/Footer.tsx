export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#f5f5f5] py-8">
            {/* TOP CONTENT */}
            <div className="mx-auto max-w-6xl border-x border-neutral-300">
                <div className="grid grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-3">

                    {/* LEFT */}
                    <div className="space-y-10">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Endereço de e-mail"
                                className="h-14 w-full border border-neutral-300 bg-transparent px-4 text-sm outline-none"
                            />
                            <button className="h-14 border border-l-0 border-neutral-300 px-6 text-sm font-medium whitespace-nowrap">
                                Inscrever-se
                            </button>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-neutral-700">
                            Ao enviar este formulário, você concorda com nossos{' '}
                            <a href="/privacy" className="underline hover:text-black">
                                termos de privacidade
                            </a>
                            . Você pode cancelar a qualquer momento.
                        </p>

                        <div className="flex gap-6 text-neutral-600">
                            <a href="#" className="hover:text-black transition-colors">GitHub</a>
                            <a href="#" className="hover:text-black transition-colors">X</a>
                            <a href="#" className="hover:text-black transition-colors">YouTube</a>
                            <a href="#" className="hover:text-black transition-colors">Discord</a>
                        </div>

                        <div className="flex gap-6 text-sm text-neutral-700">
                            <span>© {new Date().getFullYear()} Blog do Joãozin</span>
                            <a href="/privacy" className="hover:text-black transition-colors">Privacidade</a>
                            <a href="/contact" className="hover:text-black transition-colors">Contato</a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                            {[
                                {
                                    title: "Blog",
                                    links: [
                                        { label: "Início", href: "/" },
                                        { label: "Artigos", href: "/" },
                                        { label: "Sobre", href: "/about" },
                                    ],
                                },
                                {
                                    title: "Tópicos",
                                    links: [
                                        { label: "Linux", href: "/" },
                                        { label: "React", href: "/" },
                                        { label: "Docker", href: "/" },
                                    ],
                                },
                                {
                                    title: "Sobre",
                                    links: [
                                        { label: "Quem sou eu", href: "/about" },
                                        { label: "Contato", href: "/contact" },
                                        { label: "Privacidade", href: "/privacy" },
                                    ],
                                },
                                {
                                    title: "Redes",
                                    links: [
                                        { label: "GitHub", href: "#" },
                                        { label: "Twitter", href: "#" },
                                        { label: "Discord", href: "#" },
                                    ],
                                },
                            ].map((item) => (
                                <div key={item.title} className="space-y-5">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <div className="space-y-4 text-neutral-600">
                                        {item.links.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                className="block transition hover:text-black"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DECORATIVE SPACE — reduced from 500px */}
                <div className="h-48 border-t border-neutral-300" />
            </div>

            {/* HUGE TEXT */}
            <div className="pointer-events-none absolute bottom-[-20px] left-1/2 -translate-x-1/2 select-none">
                <h1 className="text-[200px] sm:text-[280px] lg:text-[340px] font-black leading-none tracking-[-0.08em] text-orange-600">
                    Joãozin
                </h1>
            </div>
        </footer>
    );
}
