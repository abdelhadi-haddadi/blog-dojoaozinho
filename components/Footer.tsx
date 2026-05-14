export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#f5f5f5]">
            {/* TOP CONTENT */}
            <div className="mx-auto max-w-6xl border-x border-neutral-300">
                <div className="grid grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-3">
                    
                    {/* LEFT */}
                    <div className="space-y-10">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="h-14 w-full border border-neutral-300 bg-transparent px-4 text-sm outline-none"
                            />

                            <button className="h-14 border border-l-0 border-neutral-300 px-6 text-sm font-medium">
                                Stay updated
                            </button>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-neutral-500">
                            By submitting this form, you agree to our
                            terms. You can opt-out anytime.
                        </p>

                        <div className="flex gap-6 text-neutral-600">
                            <a href="#">GitHub</a>
                            <a href="#">X</a>
                            <a href="#">YouTube</a>
                            <a href="#">Discord</a>
                        </div>

                        <div className="flex gap-6 text-sm text-neutral-500">
                            <span>© 2026 Inpsir</span>
                            <a href="#">Legal</a>
                            <a href="#">Status</a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                            {[
                                {
                                    title: "Products",
                                    links: [
                                        "Dashboard",
                                        "Analytics",
                                        "API",
                                    ],
                                },
                                {
                                    title: "Resources",
                                    links: [
                                        "Blog",
                                        "Docs",
                                        "Learn",
                                    ],
                                },
                                {
                                    title: "Company",
                                    links: [
                                        "Careers",
                                        "Community",
                                        "Contact",
                                    ],
                                },
                                {
                                    title: "Social",
                                    links: [
                                        "GitHub",
                                        "Twitter",
                                        "Discord",
                                    ],
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="space-y-5"
                                >
                                    <h3 className="font-semibold">
                                        {item.title}
                                    </h3>

                                    <div className="space-y-4 text-neutral-600">
                                        {item.links.map((link) => (
                                            <a
                                                key={link}
                                                href="#"
                                                className="block transition hover:text-black"
                                            >
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BIG EMPTY SPACE */}
                <div className="h-[500px] border-t border-neutral-300" />
            </div>

            {/* HUGE TEXT */}
            <div className="pointer-events-none absolute bottom-[-180px] left-1/2 -translate-x-1/2 select-none">
                <h1 className="text-[340px] font-black leading-none tracking-[-0.08em] text-orange-600">
                    Inpsir
                </h1>
            </div>
        </footer>
    );
}
