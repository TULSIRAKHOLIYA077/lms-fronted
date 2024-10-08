import HomeLayout from "../Layouts/HomeLayout";
import tree from '../assets/tree.jpg';
import CarouselSlide from "../Components/CarouselSlide";
import { celebraties } from "../Constants/CelebratyData";



function AboutUs(){
  // const celebraties = [
  //   {
  //     title: 'Nelson Mandela',
  //     description: "Education is the most powerful tool you can use to change the world",
  //     image : nelsonMandela,
  //     slideNumber: 1
  //   },
  //   {
  //     title: 'APJ Abdul Kalam',
  //     description: "If you want to shine like a sun, first burn like a sun",
  //     image : abdulKalam,
  //     slideNumber: 2
  //   },
  //   {
  //     title: 'Einstein',
  //     description: "Life is like riding a bicycle. To keep your balance, you must keep moving",
  //     image : einstein,
  //     slideNumber: 3
  //   },
  //   {
  //     title: 'Steve Jobs',
  //     description: "You can't just ask customers what they want and then try to give that to them",
  //     image : steveJobs,
  //     slideNumber: 4
  //   },
  //   {
  //     title: 'Bill Gates',
  //     description: "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
  //     image : billGates,
  //     slideNumber: 5
  //   }
  // ]

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the world. We are providing the platform for the aspiring teachers and students to share skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
            </p>
          </section>

          <div className="w-1/2">
            <img id="test1" style={{
              filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
            }} className="drop-shadow-2xl" src={tree} alt="" />

          </div>
        </div>
        <div className="carousel w-1/2 my-16 m-auto">
            {celebraties && celebraties.map(celebraty => (<CarouselSlide {...celebraty} key={celebraty.slideNumber} totalSlides={celebraties.length}/>))}
          
          {/* <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] m-auto">
              <img
                src={nelsonMandela} className="w-40 rounded-full bordre-2 border-gray-400" />
              <p className="text-xl text-gray-200">
                "Education is the most powerful tool you can use to change the world"
              </p> 
              <h3 className="text-2xl font-semobold text-center">Nelson Mandela</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] m-auto">
              <img
                src={abdulKalam} className="w-40 rounded-full bordre-2 border-gray-400" />
              <p className="text-xl text-gray-200">
                "If you want to shine like a sun, first burn like a sun"
              </p> 
              <h3 className="text-2xl font-semobold text-center">APJ Abdul Kalam</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] m-auto">
              <img
                src={einstein} className="w-40 rounded-full bordre-2 border-gray-400" />
              <p className="text-xl text-gray-200">
                "Life is like riding a bicycle. To keep your balance, you must keep moving"
              </p> 
              <h3 className="text-2xl font-semobold text-center">Einstein</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] m-auto">
              <img
                src={steveJobs} className="w-40 rounded-full bordre-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              "You can't just ask customers what they want and then try to give that to them"
            </p> 
            <h3 className="text-2xl font-semobold text-center">Steve Jobs</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] m-auto">
              <img
                src={billGates} className="w-40 rounded-full  bordre-2 border-gray-400" />
              <p className="text-xl text-gray-200">
              "Success is a lousy teacher. It seduces smart people into thinking they can't lose"
            </p> 
            <h3 className="text-2xl font-semobold text-center">Bill Gates</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </HomeLayout>
  )
}

export default AboutUs;