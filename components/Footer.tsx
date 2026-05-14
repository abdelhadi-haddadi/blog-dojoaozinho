export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-neutral-200 bg-[#f7f7f7]">
            <div className="mx-auto max-w-6xl border-x border-neutral-200">

                {/* CONTENT */}
                <div className="grid grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-3">

                    {/* LEFT */}
                    <div className="space-y-10">
                        
                        {/* Newsletter */}
                        <div>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="h-14 w-full border border-neutral-300 bg-white px-4 text-sm outline-none"
                                />

                                <button className="h-14 border border-l-0 border-neutral-300 bg-white px-6 text-sm font-medium transition hover:bg-neutral-100">
                                    Stay updated
                                </button>
                            </div>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
                                By submitting this form, you agree to our terms.
                                You can opt-out anytime.
                            </p>
                        </div>

                        {/* Social */}
                        <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                            <a href="#" className="hover:text-black">
                                GitHub
                            </a>

                            <a href="#" className="hover:text-black">
                                X
                            </a>

                            <a href="#" className="hover:text-black">
                                YouTube
                            </a>

                            <a href="#" className="hover:text-black">
                                Discord
                            </a>
                        </div>

                        {/* Bottom */}
                        <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
                            <span>© 2026 Inspir</span>

                            <a href="#" className="hover:text-black">
                                Legal
                            </a>

                            <a href="#" className="hover:text-black">
                                Status
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                            {[
                                {
                                    title: "Products",
                                    links: ["Dashboard", "Analytics", "API"],
                                },
                                {
                                    title: "Resources",
                                    links: ["Blog", "Docs", "Learn"],
                                },
                                {
                                    title: "Company",
                                    links: ["Careers", "Community", "Contact"],
                                },
                                {
                                    title: "Social",
                                    links: ["GitHub", "Twitter", "Discord"],
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="space-y-5"
                                >
                                    <h3 className="text-sm font-semibold tracking-wide text-black">
                                        {item.title}
                                    </h3>

                                    <div className="space-y-4 text-sm text-neutral-600">
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

                {/* BRAND SECTION */}
                <div className="border-t border-neutral-200 px-6 py-16">
                    <h1 className="text-center text-[90px] font-black leading-none tracking-[-0.08em] text-orange-500/90 md:text-[160px]">
                        Inspir
                    </h1>
                </div>
            </div>
        </footer>
    );
}
