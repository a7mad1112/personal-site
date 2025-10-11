import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Lottie from "lottie-react";

/**
 * LottieOnce - Reusable Lottie wrapper
 *
 * Props:
 * - animationData: Object (required) — بيانات اللوتّي
 * - size: Number | String = 96       — قياس الأيقونة (px أو Tailwind عبر className)
 * - className: String                — كلاس إضافي (مثلاً "h-24 w-24")
 * - style: Object                    — ستايل إضافي (inline)
 * - once: Boolean = true             — شغّل مرة واحدة فقط
 * - loop: Boolean = false            — إعادة تشغيل (في حال once=false)
 * - trigger: "inview" | "immediate" | "hover" | "manual" = "inview"
 *      - inview: يشغّل عند دخول العنصر ضمن المشاهدة (IntersectionObserver)
 *      - immediate: يشغّل فوراً (على الماونت)
 *      - hover: يشغّل عند التحويم (mouseenter)
 *      - manual: لا يشغّل تلقائياً — استخدم الدوال المعروضة عبر الـ ref
 * - threshold: Number = 0.3          — نسبة الظهور قبل التشغيل (inview)
 * - rootMargin: String = "0px"       — هامش المراقبة (inview)
 * - onComplete: Function             — Callback عند اكتمال التشغيل
 *
 * Exposed controls via ref:
 * - play(), pause(), stop(), setSpeed(speed)
 */
const LottieOnce = forwardRef(
  (
    {
      animationData,
      size = 96,
      className,
      style,
      once = true,
      loop = false,
      trigger = "inview",
      threshold = 0.3,
      rootMargin = "0px",
      ...rest
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const lottieRef = useRef(null);
    const [played, setPlayed] = useState(false);

    useImperativeHandle(ref, () => ({
      play: () => lottieRef.current?.play?.(),
      pause: () => lottieRef.current?.pause?.(),
      stop: () => lottieRef.current?.stop?.(),
      setSpeed: (speed = 1) => lottieRef.current?.setSpeed?.(speed),
    }));

    const playOnceGuarded = () => {
      if (once && played) return;
      lottieRef.current?.stop?.();
      lottieRef.current?.play?.();
      if (once) setPlayed(true);
    };

    useEffect(() => {
      if (trigger !== "immediate") return;
      if (typeof window === "undefined") return;
      playOnceGuarded();
    }, [trigger, once, played]);

    useEffect(() => {
      if (trigger !== "inview") return;
      const el = containerRef.current;
      if (!el || typeof window === "undefined" || (once && played)) return;

      if (!("IntersectionObserver" in window)) {
        playOnceGuarded();
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playOnceGuarded();
            if (once) observer.unobserve(el);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [trigger, threshold, rootMargin, once, played]);

    useEffect(() => {
      if (trigger !== "hover") return;
      const el = containerRef.current;
      if (!el || typeof window === "undefined") return;

      const onEnter = () => playOnceGuarded();
      el.addEventListener("mouseenter", onEnter);
      return () => el.removeEventListener("mouseenter", onEnter);
    }, [trigger, once, played]);

    const handleComplete = () => {};

    const finalClassName = className ?? undefined;

    const finalStyle = className
      ? style
      : { width: size, height: size, ...style };

    return (
      <div
        ref={containerRef}
        className="inline-flex items-center justify-center"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={!once && loop}
          autoplay={false}
          className={finalClassName}
          style={finalStyle}
          onComplete={handleComplete}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          {...rest}
        />
      </div>
    );
  }
);

export default LottieOnce;
