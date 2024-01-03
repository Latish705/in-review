
import Navbar from '@/app/ui/navbar.js'

export default function Home() {

  return (
    <main>
      <header className='relative top-0'>
        <nav className='absolute'>
          <Navbar/>
        </nav>

        <div className="relative top-0 left-0 -z-10">
          <img src="/images/hero.png" alt="university image" className="w-screen"/>
        </div>
    
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mx-auto text-center">
          <h1>A place to get authenticate college reviews and insight.</h1>
          <p>An initiative by the students for the students</p>
        </div>
      </header>
      
      {/* illustration part */}
      <section>
        <div>
          <img src='/images/illustration.jpg' alt="frustration student animation" />
        </div>

        <div>
          <h2>We know</h2>
          <p>how it feels when trying to find the right college for yourself, what's the college life is like? What the placement scenario? Are teachers strict? and so many other question the answers to which can only be answered by the college students, but where to find them? dont worry we got you convered.</p>
        </div>
      </section>

      <section>
        <div>
          <h2>Why In-Review</h2>
          <p>100+ registered users, we help you get the most authenticate feedback of colleges.</p>
        </div>

        <div>
          <span>arrow</span>
          <p>we bring authenticity, by making sure that your queries related to the course are answered only by the people currently pursuing them</p>
          <span>arrow</span>
        </div>
      </section>

      <section>
        <h2>We have users from</h2>
        <div>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
          <span> XYZ... </span>
        </div>
      </section>

    </main>
  )
}
