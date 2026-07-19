"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/constants";

/**
 * Animated stats/social-proof bar. Client Component — CountUp needs
 * to run in the browser and react-intersection-observer triggers the
 * animation only once the section scrolls into view.
 */
export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  if (!STATS || STATS.length === 0) return null;

  return (
    <section ref={ref} className="border-y border-brand-border bg-cream py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-playfair text-display-xs text-gold-700 sm:text-display-sm">
              {inView ? (
                <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2} />
              ) : (
                0
              )}
              {stat.suffix}
            </p>
            <p className="mt-1 font-inter text-xs text-brand-gray sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
