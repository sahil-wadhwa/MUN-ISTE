import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scheduleData = [
  {
    day: "Day 1 - Inauguration and Committee Kickoff",
    events: [
      { time: "09:00 AM – 11:00 AM", title: "Registration", description: "Arrival and registration of delegates." },
      { time: "11:00 AM – 12:00 PM", title: "Opening Ceremony", description: "Formal inauguration and welcome address." },
      { time: "12:00 PM – 1:00 PM", title: "Lunch", description: "Buffet lunch served at the dining hall." },
      { time: "1:00 PM – 4:00 PM", title: "Committee Session 1", description: "Initial committee proceedings and discussions." },
      { time: "4:00 PM – 4:45 PM", title: "High Tea", description: "Refreshments and informal networking." },
      { time: "4:45 PM – 7:00 PM", title: "Committee Session 2", description: "Continuation of committee deliberations." },
      { time: "7:00 PM – 8:00 PM", title: "Dinner and Dispersal", description: "Dinner followed by end of day wrap-up." }
    ]
  },
  {
    day: "Day 2 - Committee Deliberations and Socials",
    events: [
      { time: "7:30 AM – 9:00 AM", title: "Breakfast", description: "Morning meal served before sessions begin." },
      { time: "9:00 AM – 12:00 PM", title: "Committee Session 1", description: "Morning committee discussions and activities." },
      { time: "12:00 PM – 1:00 PM", title: "Lunch", description: "Buffet lunch and break period." },
      { time: "1:00 PM – 3:00 PM", title: "Committee Session 2", description: "Afternoon committee continuation." },
      { time: "3:00 PM – 5:00 PM", title: "Committee Session 3", description: "Final committee round for the day." },
      { time: "5:00 PM – 5:45 PM", title: "High Tea", description: "Evening refreshments." },
      { time: "5:45 PM – 8:00 PM", title: "Socials and Dinner", description: "Cultural and networking events with dinner." }
    ]
  },
  {
    day: "Day 3 - Closure and Awards",
    events: [
      { time: "8:00 AM – 9:30 AM", title: "Breakfast", description: "Start the day with a hearty breakfast." },
      { time: "10:00 AM – 12:30 PM", title: "Committee Session 1", description: "Final round of committee discussions." },
      { time: "12:30 PM – 1:30 PM", title: "Lunch", description: "Final lunch break before conclusion." },
      { time: "1:30 PM – 4:30 PM", title: "Committee Session 2", description: "Last committee deliberations and documentation." },
      { time: "4:30 PM – 5:15 PM", title: "High Tea", description: "Refreshments break before closing." },
      { time: "5:30 PM – 7:00 PM", title: "Closing Ceremony", description: "Concluding remarks, awards, and feedback." },
      { time: "7:00 PM – 8:00 PM", title: "Dinner and Dispersal", description: "Farewell dinner and departure." }
    ]
  }
];

// Updated to accept 'selected' prop
const IconCalendar = ({ selected }) => (
  <svg className={`w-5 h-5 ${selected ? "text-white" : "text-red-600"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleDayChange = (newDay) => {
    setDirection(newDay > activeDay ? 1 : -1);
    setActiveDay(newDay);
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir < 0 ? 100 : -100,
    }),
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-white via-red-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Conference Schedule</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-base max-w-xl mx-auto">
            A three-day experience with inspiring sessions, debates, and networking opportunities.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {scheduleData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => handleDayChange(idx)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-300 border
                ${activeDay === idx
                  ? "bg-red-600 text-white border-red-700"
                  : "bg-white text-red-600 border-red-200 hover:bg-red-50"}`}
            >
              <IconCalendar selected={activeDay === idx} />
              <span>{day.day.split(" - ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Schedule Events with Slide Animation */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeDay}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="border-l-4 border-red-200 pl-10 relative"
            >
              <div className="absolute top-0 bottom-0 left-[7px] w-1 bg-gradient-to-b from-red-400 to-red-600 animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-center text-red-600 mb-10 tracking-wide">
                {scheduleData[activeDay].day}
              </h3>
              {scheduleData[activeDay].events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-12 relative group"
                >
                  <span className="absolute -left-[19px] top-2 w-4 h-4 rounded-full bg-white border-4 border-red-600 group-hover:scale-110 transition-transform duration-300 shadow-md"></span>
                  <div className="bg-white backdrop-blur-md border border-red-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-red-700 tracking-tight">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                        <IconClock />
                        {event.time}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Download Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
