import { ChevronLeft, Quote, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Jones is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Isaac James",
    role: "CTO, Tech Innovators Inc.",
    avatar: "",
  },
  {
    quote:
      "Working with Jones was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Destiny Okpe",
    role: "Product Manager, Digital Solutions",
    avatar: "",
  },
  {
    quote:
      "Jones's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Kameel Audu",
    role: "Engineering Lead, StartUp Labs",
    avatar: "",
  },
  {
    quote:
      "Not only is Jones technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "Miracle ",
    role: "CEO, Innovation Hub",
    avatar: "",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className=" absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {" "}
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {" "}
            Kind words from{" "}
            <span className=" font-serif italic font-normal text-white">
              {" "}
              amazing people.{" "}
            </span>
          </h2>
        </div>
        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                {" "}
                <Quote className="w-6 h-5 text-primary-foreground" />
              </div>
              <blockquote
                className="text-xl md:text-2xl font-medium
               leading-relaxed mb-8 pt-4"
              >
                {testimonials[activeIdx].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                {/* <img
                  src={
                    testimonials[activeIdx].avatar ||
                    testimonials[activeIdx].author.map((word) => [
                      word[0],
                      word.slice(-1),
                    ])
                  }
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                /> */}

                {testimonials[activeIdx].avatar ? (
                  <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                ) : (
                  <div className=" text-center avatar-fallback w-12 text-sm font-bold rounded-full p-3 glass hover:bg-primary/10 hover:text-primary transition-all ">
                    {testimonials[activeIdx].author
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
                <div className="">
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  {/* <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={previous}
                className=" rounded-full p-3 glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className=" flex gap-2 ">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 transition-all rounded-full duration-300 ${idx === activeIdx ? "w-8 bg-primary" : " bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="rounded-full p-3 glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
