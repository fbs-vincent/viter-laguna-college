import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Events = () => {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Centennial Lecture Series",
      date: "November 15, 2023",
      description:
        "Renowned educators discuss the future of learning in our 100th anniversary lecture series.",
      type: "academic",
    },
    {
      id: 2,
      title: "LC Alumni Homecoming",
      date: "December 2-3, 2023",
      description:
        "Annual gathering of graduates from all batches. Golden jubilee celebration for Class of 1973.",
      type: "social",
    },
    {
      id: 3,
      title: "STEM Innovation Fair",
      date: "January 20-22, 2024",
      description:
        "Student projects showcasing technological solutions to community problems.",
      type: "academic",
    },
  ];

  const recentNews = [
    {
      id: 1,
      title: "LC Ranked Top 10 in Region",
      date: "October 5, 2023",
      description:
        "Recognized for academic excellence and graduate employability in recent survey.",
      type: "achievement",
    },
    {
      id: 2,
      title: "New Scholarship Program Launched",
      date: "September 18, 2023",
      description:
        "20 full scholarships available for STEM students from low-income families.",
      type: "announcement",
    },
  ];
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="font-sans text-gray-800">
            <Header />
            <section className="py-16 bg-blue-50">
              <div className="container mx-auto px-4 mt-[74px]">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                  Campus Happenings
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Upcoming Events */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6 pb-2 border-b border-blue-200">
                      Upcoming Events
                    </h3>
                    <div className="space-y-6">
                      {upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="bg-white p-6 rounded-lg shadow-md"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                event.type === "academic"
                                  ? "bg-blue-100 text-blue-800"
                                  : event.type === "social"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {event.type === "academic"
                                ? "Academic"
                                : event.type === "social"
                                ? "Social"
                                : "Other"}
                            </span>
                            <span className="text-gray-500">{event.date}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {event.title}
                          </h4>
                          <p className="text-gray-700 mb-4">
                            {event.description}
                          </p>
                          <button className="text-blue-600 hover:underline flex items-center">
                            Learn more
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* News & Announcements */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6 pb-2 border-b border-blue-200">
                      Latest News
                    </h3>
                    <div className="space-y-6">
                      {recentNews.map((news) => (
                        <div
                          key={news.id}
                          className="bg-white p-6 rounded-lg shadow-md"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {news.type === "achievement"
                                ? "Achievement"
                                : "Announcement"}
                            </span>
                            <span className="text-gray-500">{news.date}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {news.title}
                          </h4>
                          <p className="text-gray-700 mb-4">
                            {news.description}
                          </p>
                          <button className="text-blue-600 hover:underline flex items-center">
                            Read story
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Calendar */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-blue-700 mb-4">
                        Academic Calendar
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>Semester Begins</span>
                          <span className="font-medium">June 5, 2024</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Midterm Exams</span>
                          <span className="font-medium">
                            August 14-18, 2024
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Final Exams</span>
                          <span className="font-medium">
                            October 23-27, 2024
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Graduation</span>
                          <span className="font-medium">March 28, 2025</span>
                        </li>
                      </ul>
                      <button className="mt-4 text-blue-600 hover:underline flex items-center">
                        View full calendar
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
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

export default Events;
