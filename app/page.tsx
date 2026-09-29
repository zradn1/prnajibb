import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import MotionProvider from '@/components/motion/MotionProvider'
import Cabinet from '@/components/sections/Cabinet'
import Contact from '@/components/sections/Contact'
import Expertise from '@/components/sections/Expertise'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Journey from '@/components/sections/Journey'
import Profile from '@/components/sections/Profile'
import Testimonials from '@/components/sections/Testimonials'

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Intro />
        <Expertise />
        <Journey />
        <Profile />
        <Cabinet />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <MotionProvider />
    </>
  )
}
