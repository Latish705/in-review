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

      <section>
        <div>
          
        </div>
      </section>


    </main>
  )
}
