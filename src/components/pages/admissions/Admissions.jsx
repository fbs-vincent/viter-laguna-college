import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Admissions = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 mt-[74px]">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                  Begin Your Journey
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Why Choose Laguna College?
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>
                          Affordable tuition with multiple scholarship options
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Personalized academic advising</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Strong industry connections for internships</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-700 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Vibrant student life with 30+ organizations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Key Dates
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Application Period
                        </h4>
                        <p className="text-gray-700">
                          October 1 - March 31 (for next academic year)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Entrance Exams
                        </h4>
                        <p className="text-gray-700">
                          Monthly from November to April
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Early Decision
                        </h4>
                        <p className="text-gray-700">
                          Apply by January 15 for priority consideration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 text-white p-8 rounded-lg max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Ready to Apply?
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">1. Complete Form</h4>
                      <p className="text-blue-100 text-sm">
                        Download application from our website
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">
                        2. Submit Documents
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Transcripts, recommendations, etc.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">
                        3. Schedule Interview
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Final step before acceptance
                      </p>
                    </div>
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

export default Admissions;
