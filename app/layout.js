import "../scss/App.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Rellis Starlab",
  description: "Rellis Starlab: Virtual Production, XR, and Autonomous Vehicles at the TAMU Rellis Campus",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Header/>
      {children} 
      <Footer/>
      </body>
    </html>
  )
}
