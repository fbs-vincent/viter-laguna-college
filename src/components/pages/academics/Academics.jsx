import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Academics = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            <section className="py-16 bg-blue-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                  Learning Pathways
                </h2>

                <div className="mb-12 max-w-3xl mx-auto text-center">
                  <p className="text-lg text-gray-700">
                    Our academic programs combine rigorous coursework with
                    practical experience, preparing students for success in
                    higher education and professional careers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Kindergarten */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Kindergarten students playing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">K</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Kindergarten
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Play-based learning focused on social, emotional, and
                        early academic development.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Language and literacy readiness</li>
                        <li>• Basic numeracy skills</li>
                        <li>• Creative expression through arts</li>
                      </ul>
                    </div>
                  </div>

                  {/* Elementary */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Elementary students learning"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">1-6</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Elementary Education
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Foundational program emphasizing literacy, numeracy, and
                        character development.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Specialized reading programs</li>
                        <li>• STEM introduction</li>
                        <li>• Arts integration</li>
                      </ul>
                    </div>
                  </div>

                  {/* Junior High */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Junior High students in science lab"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">7-10</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Junior High
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Comprehensive curriculum with exploratory tracks in
                        technology and arts.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced math and science</li>
                        <li>• Career exploration</li>
                        <li>• Leadership development</li>
                      </ul>
                    </div>
                  </div>

                  {/* Senior High */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Senior High graduation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">11-12</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Senior High
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Specialized strands aligned with industry needs and
                        college preparedness.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• STEM</li>
                        <li>• ABM (Accountancy, Business, Management)</li>
                        <li>• HUMSS (Humanities and Social Sciences)</li>
                      </ul>
                    </div>
                  </div>

                  {/* College */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="College students discussing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">UG</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Undergraduate
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Bachelor's degrees with internship opportunities and
                        industry partnerships.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Business Administration</li>
                        <li>• Education</li>
                        <li>• Computer Science</li>
                      </ul>
                    </div>
                  </div>

                  {/* Graduate */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                    <div className="h-40 bg-blue-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Graduate students studying"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">G</span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                        Graduate Studies
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">
                        Advanced programs for working professionals with
                        flexible schedules.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Master in Business Administration</li>
                        <li>• Master in Education</li>
                        <li>• Doctor of Education</li>
                      </ul>
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

export default Academics;
