import './globals.css';import Nav from '@/components/Nav';import Footer from '@/components/Footer';
export const metadata={title:'Sekar Nagaraj | AI, Cloud & Enterprise Quality Engineering',description:'Portfolio, projects, architecture notes, blogs and resume of Sekar Nagaraj.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<Footer/></body></html>}
