import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Contact = () => {
  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@lagunacollege.edu.ph",
      phone: "(049) 562-8077 loc. 101",
      hours: "Mon-Fri, 8:00 AM - 5:00 PM",
    },
    {
      name: "Registrar's Office",
      email: "registrar@lagunacollege.edu.ph",
      phone: "(049) 562-8077 loc. 102",
      hours: "Mon-Fri, 8:00 AM - 5:00 PM",
    },
    {
      name: "Student Affairs",
      email: "studentlife@lagunacollege.edu.ph",
      phone: "(049) 562-8077 loc. 201",
      hours: "Mon-Fri, 8:00 AM - 5:00 PM",
    },
    {
      name: "Accounting Office",
      email: "accounting@lagunacollege.edu.ph",
      phone: "(049) 562-8077 loc. 103",
      hours: "Mon-Fri, 9:00 AM - 4:00 PM",
    },
  ];
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 mt-[74px]">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                  We'd Love to Hear From You
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                        Main Campus
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-700 mt-1 mr-3"
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
                          <p className="text-gray-700">
                            Paseo de Escudero cor. Zulueta St.,
                            <br />
                            San Pablo City, Laguna 4000,
                            <br />
                            Philippines
                          </p>
                        </div>

                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-700 mr-3"
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
                          <p className="text-gray-700">
                            Main: (049) 562-8077 / 78
                          </p>
                        </div>

                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-700 mr-3"
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
                          <p className="text-gray-700">
                            info@lagunacollege.edu.ph
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Department Contacts
                    </h3>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4"
                        >
                          <h4 className="font-semibold text-blue-800">
                            {dept.name}
                          </h4>
                          <p className="text-gray-700 text-sm mt-1">
                            {dept.email}
                          </p>
                          <p className="text-gray-700 text-sm">{dept.phone}</p>
                          <p className="text-gray-500 text-xs mt-1">
                            {dept.hours}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                        Send Us a Message
                      </h3>

                      <form className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-gray-700 mb-1"
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Juan Dela Cruz"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-gray-700 mb-1"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-gray-700 mb-1"
                            >
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="0912 345 6789"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="department"
                            className="block text-gray-700 mb-1"
                          >
                            Department *
                          </label>
                          <select
                            id="department"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          >
                            <option value="">Select department</option>
                            <option value="admissions">Admissions</option>
                            <option value="registrar">Registrar</option>
                            <option value="student_affairs">
                              Student Affairs
                            </option>
                            <option value="academics">Academics</option>
                            <option value="accounting">Accounting</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-gray-700 mb-1"
                          >
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Regarding..."
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-gray-700 mb-1"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message here..."
                            required
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition font-medium"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Emergency Contact:
                        </span>{" "}
                        For urgent matters outside office hours, please call our
                        hotline at{" "}
                        <span className="text-blue-800">(049) 562-8099</span>
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

export default Contact;
