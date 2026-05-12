export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-right cyan orb */}
      <div
        className="orb animate-[orb-float-1_22s_ease-in-out_infinite]"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,212,232,0.07) 0%, transparent 65%)",
          top: -200,
          right: -200,
        }}
      />
      {/* Bottom-left softer orb */}
      <div
        className="orb animate-[orb-float-2_28s_ease-in-out_infinite]"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,212,232,0.045) 0%, transparent 65%)",
          bottom: "15%",
          left: -150,
        }}
      />
      {/* Center-right purple accent orb */}
      <div
        className="orb animate-[orb-float-3_18s_ease-in-out_infinite]"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(120,80,255,0.035) 0%, transparent 70%)",
          top: "45%",
          right: "20%",
        }}
      />
    </div>
  );
}
