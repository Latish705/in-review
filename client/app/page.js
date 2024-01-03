import { karma, inter } from './layout';
import Navbar from '@/app/ui/navbar.js';
import CollegeList from '@/app/ui/collegeList';
import Footer from '@/app/ui/footer';

export default function Home() {

  return (
    <main className="bg-slate-100">
      <header className='relative top-0'>
        <nav className='absolute'>
          <Navbar/>
        </nav>

        <div className="relative top-0 left-0">
          <img src="/images/hero.png" alt="university image" className="w-screen"/>
        </div>
    
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center z-10">
          <h1 className='text-white font-bold text-5xl leading-snug'>A place to get authenticate college reviews and insight.</h1>
          <p className={`${karma.className} text-2xl mt-10 text-white`}>An initiative by the students for the students</p>
        </div>
      </header>

      <section className='bg-red-200 my-16 max-w-[1000px] mx-auto'> {/* line divider */}
        <div className='svg-line flex h-0.5 w-full relative bg-blue-200'></div>
      </section>
      
      {/* illustration part */}
      <section className='flex justify-center'>
        <div className='flex justify-center gap-12 max-w-[980px] items-center'>
          <div className='relative cover'>
            <img src='/images/illustration.jpg' alt="frustration student animation" className='max-w-[450px]'/>
          </div>

          <div>
            <h2 className='text-[30px]'>We know</h2>
            <p className={`text-[18px] mt-6 ${inter.className}`}>how it feels when trying to find the right college for yourself, what's the college life is like? What the placement scenario? Are teachers strict? and so many other question the answers to which can only be answered by the college students, but where to find them? dont worry we got you convered.</p>
          </div>
        </div>
      </section>

      <section className='bg-gray-300 py-24 text-center'>
        <div className='flex flex-col gap-16'>
          <div>
            <h2 className={` text-5xl`}>Why In-Review</h2>
            <p className={`${inter.className} text-gray-700 text-lg mt-4`}>100+ registered users, we help you get the most authenticate feedback of colleges.</p>
          </div>

          <div className='flex items-center justify-center'>
            <span className='hover:bg-gray-800 hover:fill-white p-2 rounded-full svg-icon'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              className="fill: inherit ;transform: ;msFilter:; svg-icon cursor-pointer"
            >
              <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
            </svg>
            </span>
            <p className='max-w-[355px]'>we bring authenticity, by making sure that your queries related to the course are answered only by the people currently pursuing them</p>
            <span className='hover:bg-gray-800 hover:fill-white p-2 rounded-full svg-icon cursor-pointer'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                className="fill: inherit;transform: ;msFilter:; svg-icon"
              >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section className='py-24 mx-44 flex flex-col gap-12'>
        <h2 className='text-5xl'>We have users from</h2>

        <div className=' overflow-scroll'>
            <CollegeList/>
        </div>
      </section>

      <section>
        <Footer/>
      </section>

    </main>
  )
}
