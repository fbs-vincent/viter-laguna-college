import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const About = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                  Our Legacy
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      A Century of Excellence
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Since our founding in 1923, Laguna College has grown from
                      a small local school to a regional leader in education.
                      Our alumni network includes prominent business leaders,
                      educators, and public servants across Laguna and beyond.
                    </p>
                    <p className="text-gray-700">
                      The college was originally established to serve the
                      children of San Pablo's agricultural workers, and while
                      our programs have expanded, we remain committed to
                      accessibility and community service.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Campus Life
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our 5-hectare campus blends historic architecture with
                      modern facilities, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fully-equipped science laboratories</li>
                      <li>Comprehensive library with digital resources</li>
                      <li>Sports complex with Olympic-size pool</li>
                      <li>Performing arts theater</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-800 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Faculty</h3>
                    <p>
                      85% of our faculty hold advanced degrees, with many
                      recognized as leaders in their academic fields.
                    </p>
                  </div>
                  <div className="bg-blue-700 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Students</h3>
                    <p>
                      2,400+ students across all programs, with a 12:1
                      student-faculty ratio.
                    </p>
                  </div>
                  <div className="bg-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Alumni</h3>
                    <p>
                      15,000+ alumni worldwide, with an active alumni
                      association.
                    </p>
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

export default About;
