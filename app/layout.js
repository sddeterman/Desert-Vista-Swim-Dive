import "./globals.css";
import SiteHeader from "./components/SiteHeader";
export const metadata={title:"Desert Vista Swim & Dive | Home of the Thunder",description:"Desert Vista High School Swim & Dive team site."};
export default function RootLayout({children}){return <html lang="en"><body><SiteHeader/>{children}<footer><strong>DESERT VISTA SWIM & DIVE</strong><span>Home of the Thunder</span><a href="/contact">Contact</a><a href="https://www.instagram.com/dvthunderswimdive/">@dvthunderswimdive</a></footer></body></html>}