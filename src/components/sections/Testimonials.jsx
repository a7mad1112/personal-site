import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import TestimonialModal from "./components/TestimonialModal.jsx";
import { testimonials } from "../../data/testimonials.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  // SVG reveal on scroll
  const svgRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            io.unobserve(el); // run once
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const openModal = (t) => {
    setCurrent(t);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background SVG with draw animation */}
      <div
        ref={svgRef}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-50 w-full"
      >
        <svg
          className={`w-full h-auto svg-draw ${animate ? "animate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1440"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <defs>
            <mask id="SvgjsMask1021">
              <rect width="1440" height="560" fill="#ffffff" />
            </mask>

            <linearGradient
              id="orangegradient"
              x1="100%"
              y1="35%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#fb923c" offset="0%" />
              <stop stopColor="#f4280d" offset="100%" />
            </linearGradient>

            <linearGradient id="reverse" x1="0%" y1="0%" x2="100%" y2="35%">
              <stop stopColor="#fb923c" offset="0%" />
              <stop stopColor="#f4280d" offset="100%" />
            </linearGradient>

            <svg width="0" height="0" />
          </defs>

          <g mask='url("#SvgjsMask1021")' fill="none">
            <path
              d="M -246.75863442222962,481 C -150.76,405.6 41.24,101.2 233.24136557777038,104 C 425.24,106.8 521.24,474.8 713.2413655777704,495 C 905.24,515.2 1001.24,236.4 1193.2413655777705,205 C 1385.24,173.6 1623.89,327.4 1673.2413655777705,338 C 1722.59,348.6 1486.65,274 1440,258"
              stroke='url("#reverse")'
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            />
            <path
              d="M -438.64688211582086,146 C -342.65,184.6 -150.65,352.8 41.35311788417912,339 C 233.35,325.2 329.35,69 521.3531178841791,77 C 713.35,85 809.35,361.2 1001.3531178841791,379 C 1193.35,396.8 1393.62,142.8 1481.353117884179,166 C 1569.08,189.2 1448.27,429.2 1440,495"
              stroke='url("#orangegradient")'
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            />
            <path
              d="M -495.74313042685424,142 C -399.74,211.4 -207.74,464.4 -15.743130426854215,489 C 176.26,513.6 272.26,298.2 464.25686957314576,265 C 656.26,231.8 752.26,321 944.2568695731458,323 C 1136.26,325 1325.11,257.8 1424.2568695731459,275 C 1523.41,292.2 1436.85,382.2 1440,409"
              stroke='url("#reverse")'
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            />
            <path
              d="M -942.0468064005925,401 C -846.05,346.4 -654.05,145 -462.04680640059246,128 C -270.05,111 -174.05,308 17.95319359940754,316 C 209.95,324 305.95,146.6 497.95319359940754,168 C 689.95,189.4 789.54,424.8 977.9531935994075,423 C 1166.36,421.2 1347.59,211.8 1440,159"
              stroke='url("#orangegradient")'
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <SectionHeader
            title="Testimonials"
            subtitle="Here is what my clients say about me"
          />

          <div className="mt-10">
            <Swiper
              modules={[EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              spaceBetween={24}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              className="!pb-10"
            >
              {testimonials.map((it, i) => (
                <SwiperSlide key={i} className="!w-[360px]">
                  <TestimonialCard it={it} onOpen={() => openModal(it)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>

      <TestimonialModal open={open} onClose={closeModal} t={current} />

      {/* Local styles for the SVG draw animation */}
      <style>{`
        .svg-draw path {
          /* Because pathLength="1", we can use unit length 1 for clean control */
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 1.6s ease-out;
        }
        .svg-draw.animate path {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .svg-draw path {
            transition: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
