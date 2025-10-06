import { useRef, useState } from "react";
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

import AnimatedSvgLines from "../ui/AnimatedSvgLines.jsx";

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const sectionRef = useRef(null);

  const openModal = (t) => {
    setCurrent(t);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 bg-[#1a1a1a] overflow-hidden"
    >
      {/* background lines */}
      <AnimatedSvgLines observeRef={sectionRef} opacity={0.5} duration={1600} />

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
    </section>
  );
}
