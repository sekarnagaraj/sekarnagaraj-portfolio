import Link from 'next/link'
const links=['About','Projects','Architecture','Blogs','Resume','Learning','Contact']
export default function Nav(){return <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"><nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between"><Link href="/" className="font-bold text-xl tracking-tight">sekarnagaraj</Link><div className="hidden md:flex gap-6 text-sm">{links.map(l=><Link className="navlink" key={l} href={`/${l.toLowerCase()}`}>{l}</Link>)}</div></nav></header>}
