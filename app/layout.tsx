import type {Metadata} from "next";import "./globals.css";import "./fix.css";import "./portal-pages.css";import "./deal-management.css";import "./member.css";import "./venue-management.css";import "./portal-entry.css";
export const metadata:Metadata={title:"MeetingDeal – Rätt möte. Rätt plats. Rätt pris.",description:"Handplockade konferens- och mötesdeals i Skandinavien."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sv"><body>{children}</body></html>}
