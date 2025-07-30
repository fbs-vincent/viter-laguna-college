import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Home = () => {
  // Sample banner images (replace with your actual image URLs)
  const banners = [
    "./image/banner1-1.jpg",
    "./image/banner2-2.jpg",
    "./image/banner3-3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAndResumeAutoPlay();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    pauseAndResumeAutoPlay();
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    pauseAndResumeAutoPlay();
  };

  const pauseAndResumeAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNext();
    if (touchStart - touchEnd < -50) goToPrev();
  };

  // Auto-advance slides
  React.useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            {/* Hero Section */}

            <section
              id="home"
              className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[300px] sm:min-h-[400px] overflow-hidden"
            >
              {/* Slides */}
              <div
                className="relative h-full w-full mt-[74px] bg-cover bg-center"
                style={{ backgroundImage: `url(${banners[0]})` }}
              >
                {banners.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      zIndex: index === currentSlide ? 2 : 1,
                    }}
                  >
                    {/* Responsive aspect ratio container */}
                    <div className="w-full h-full aspect-[16/9] md:aspect-[21/9] mx-auto">
                      <img
                        src={banner}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"} // Optimize loading
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner Text Overlay - Left Side */}
              <div className="absolute inset-0 z-10 flex items-center justify-center lg:justify-start">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-start">
                  <div className="max-w-lg text-center lg:text-left">
                    {/* Semi-transparent background */}
                    {/* <div className="bg-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg"> */}
                    <div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg md:w-[553px]">
                        Celebrating a Century of Academic Excellence
                      </h1>
                      <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-md">
                        Scientia, Patria, Libertas
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                          Enroll Now
                        </button> */}
                        <button className="bg-white hover:bg-blue-700 hover:text-white text-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                          Enroll Now
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                          Courses
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation arrows (hidden on touch devices) */}
              <button
                onClick={goToPrev}
                className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition z-20"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition z-20"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Touch swipe area (for mobile) */}
              <div
                className="sm:hidden absolute inset-0 z-5"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              ></div>

              {/* Dots indicator (larger on mobile) */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                      index === currentSlide
                        ? "bg-white w-6 sm:w-4"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* About Us */}
            <section id="about" className="py-20 bg-white">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
                  About Laguna College
                </h2>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                  {/* History Section */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/485281484_1188806013031344_1448173718206119822_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHKp1qpxKlWUopnx_0irNp4TKCPA681yfVMoI8DrzXJ9fZfqP-G-eXHOpcSJve4sbfgZB5_t-iooZLgG3cYXG5y&_nc_ohc=YAfanrwD_sMQ7kNvwG5Islx&_nc_oc=AdmPtgCbv6cZndapOKpWIyJVBukgwamgzXY5MiZ1g10Fj9XsnXhGKkWGJ-u780MdReY&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=kuWC8dBbzotcjt84cf3hCg&oh=00_AfTSy1k4S9BgO4WpB89tqKo8TGd_kAY6Ghl0iPGdalkOiw&oe=688E08C3"
                        alt="Historical building of Laguna College"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                        Our History
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Founded in 1923, Laguna College has been a pillar of
                        education in San Pablo City for nearly a century. Our
                        institution was established with the vision of providing
                        quality education to the youth of Laguna.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        As we approach our centennial celebration, we continue
                        to uphold the traditions of excellence that have defined
                        our institution for generations.
                      </p>
                    </div>
                  </div>

                  {/* Mission & Vision Section */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Students graduating with vision of future"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                        Mission & Vision
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Our mission is to develop competent and ethical
                        individuals who will contribute to nation-building
                        through the values of "Scientia, Patria, Libertas"
                        (Knowledge, Country, Liberty).
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We envision Laguna College as a premier educational
                        institution that produces graduates who excel in their
                        chosen fields while maintaining strong moral character.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-blue-800 text-white p-8 md:p-10 rounded-lg text-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                    Accreditation
                  </h3>

                  {/* Accreditation Logos - Responsive Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 my-8 md:my-10 px-4">
                    {/* PACU-COA Logo */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full p-1 flex items-center justify-center shadow-md">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYnNHwqHIboC-YUqgU213l_odbEwqqn57EA&s"
                          alt="PACU-COA Accreditation"
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-xs sm:text-sm mt-3 opacity-90">
                        PACU-COA
                      </span>
                    </div>

                    {/* CHED Logo */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full p-1 flex items-center justify-center shadow-md">
                        <img
                          src="https://chedro3.ched.gov.ph/wp-content/uploads/2022/11/CHED-LOGO_orig.png"
                          alt="CHED Recognition"
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-xs sm:text-sm mt-3 opacity-90">
                        CHED
                      </span>
                    </div>

                    {/* ISO Certification */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full p-1 flex items-center justify-center shadow-md">
                        <img
                          src="https://media.istockphoto.com/id/942287864/vector/iso-9001-2015-label-certification-new-version.jpg?s=612x612&w=0&k=20&c=BNxlzWbGc3v4GbNRSwqPrSpXQmabbjVLpxPXGMhvOaQ="
                          alt="ISO Certification"
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-xs sm:text-sm mt-3 opacity-90">
                        ISO 9001
                      </span>
                    </div>

                    {/* Quality Assurance */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full p-1 flex items-center justify-center shadow-md">
                        <img
                          src="https://www.pngarts.com/files/1/Quality-Assurance-PNG-Image-Background.png"
                          alt="Quality Assurance"
                          className="w-full h-full object-contain rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-xs sm:text-sm mt-3 opacity-90">
                        Quality
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 md:mt-8 text-sm sm:text-base px-4 sm:px-6 leading-relaxed">
                    Laguna College holds PACU-COA Level II re-accreditation for
                    programs including Liberal Arts, Education, and Commerce,
                    ensuring the quality of our academic offerings. Our
                    institution is also recognized by national and international
                    accrediting bodies.
                  </p>
                </div>
              </div>
            </section>

            {/* Academics */}
            <section id="academics" className="py-20 bg-blue-50">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
                  Academic Programs
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {/* Kindergarten */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Happy kindergarten children playing with blocks"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Kindergarten
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Play-based learning program developing early literacy,
                        numeracy, and social skills in a nurturing environment.
                      </p>
                    </div>
                  </div>

                  {/* Elementary */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Elementary students reading books in classroom"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Elementary
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Strong foundation in core subjects while nurturing
                        creativity and character development.
                      </p>
                    </div>
                  </div>

                  {/* Junior High */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Junior high students working on science experiment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Junior High School
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Balanced academic program with exploratory tracks in
                        STEM, arts, and leadership.
                      </p>
                    </div>
                  </div>

                  {/* Senior High */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Senior high students in graduation gowns"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Senior High School
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Specialized strands in STEM, ABM, HUMSS, and TVL with
                        industry immersion.
                      </p>
                    </div>
                  </div>

                  {/* College */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="College students collaborating in library"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          College
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Bachelor's degrees in Business, Education, Computer
                        Science, and Healthcare fields.
                      </p>
                    </div>
                  </div>

                  {/* Graduate School */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 bg-blue-50 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Graduate students receiving diplomas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Graduate School
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Advanced degrees for professionals with flexible
                        schedules and research opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Admissions */}
            <section id="admissions" className="py-20 bg-white">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
                  Admissions
                </h2>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-6xl mx-auto">
                  {/* Left Column - Content */}
                  <div className="lg:w-1/2 bg-blue-50 p-10 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                      Application Process
                    </h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                      <li className="leading-relaxed">
                        Submit completed application form with required
                        documents
                      </li>
                      <li className="leading-relaxed">
                        Take the entrance examination (for certain programs)
                      </li>
                      <li className="leading-relaxed">
                        Attend an interview with the admissions committee
                      </li>
                      <li className="leading-relaxed">
                        Receive acceptance notification
                      </li>
                      <li className="leading-relaxed">
                        Complete enrollment requirements
                      </li>
                    </ol>

                    <div className="mt-8 bg-blue-100 p-6 rounded">
                      <h4 className="font-semibold text-blue-800 mb-4">
                        Requirements:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Form 138 (Report Card) for incoming freshmen</li>
                        <li>Certificate of Good Moral Character</li>
                        <li>2x2 ID photos</li>
                        <li>PSA Birth Certificate</li>
                      </ul>
                    </div>

                    <div className="mt-8 text-center">
                      <a
                        href="#contact"
                        className="inline-block bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition"
                      >
                        Contact Admissions
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="lg:w-1/2 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Students on campus discussing admissions"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* News & Events */}
            <section id="news" className="py-20 bg-blue-50">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
                  News & Events
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {/* Science Fair */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Students presenting science projects"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                        Upcoming
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">
                        Science Fair 2023
                      </h3>
                      <p className="text-gray-600 mb-4">October 15-17, 2023</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Annual science fair showcasing student projects and
                        innovations in STEM fields.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:underline flex items-center font-medium"
                      >
                        Read more <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Sports Festival */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Students playing basketball during sports fest"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                        Recent
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">
                        Sports Festival
                      </h3>
                      <p className="text-gray-600 mb-4">
                        September 28-30, 2023
                      </p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Intramurals featuring basketball, volleyball, badminton,
                        and other sports competitions.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:underline flex items-center font-medium"
                      >
                        Read more <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Enrollment */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Students registering for classes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                        Announcement
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">
                        Enrollment Schedule
                      </h3>
                      <p className="text-gray-600 mb-4">SY 2023-2024</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Enrollment for the next school year begins May 15, 2023.
                        Early registrants receive discounts.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:underline flex items-center font-medium"
                      >
                        See full schedule <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-white">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
                  Contact Us
                </h2>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                      Get in Touch
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mt-1 mr-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-gray-700 leading-relaxed">
                          Paseo de Escudero cor. Zulueta St.,
                          <br />
                          San Pablo City, Laguna,
                          <br />
                          Philippines
                        </p>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <p className="text-gray-700">(049) 562-8077 / 78</p>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-4 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="text-gray-700 leading-relaxed">
                          <p>General Inquiries: info@lagunacollege.edu.ph</p>
                          <p>Registrar: registrar@lagunacollege.edu.ph</p>
                          <p>Basic Education: basiced@lagunacollege.edu.ph</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 h-64 bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123789.45678901234!2d121.3278!3d14.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA0JzAwLjIiTiAxMjHCsDE5JzQwLjEiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Laguna College Location"
                      ></iframe>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                      Send Us a Message
                    </h3>

                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="department"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Department
                        </label>
                        <select
                          id="department"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select department</option>
                          <option value="admissions">Admissions</option>
                          <option value="registrar">Registrar</option>
                          <option value="basiced">Basic Education</option>
                          <option value="college">College</option>
                          <option value="accounting">Accounting</option>
                          <option value="guidance">Guidance</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Your Inquiry
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
