import React from "react"

const shapes = [
  { className: "bg-blue-400", size: 60, top: "10%", left: "5%", duration: "8s" },
  { className: "bg-orange-400", size: 40, top: "30%", left: "80%", duration: "12s" },
  { className: "bg-blue-200", size: 30, top: "60%", left: "15%", duration: "10s" },
  { className: "bg-orange-200", size: 50, top: "75%", left: "60%", duration: "14s" },
  { className: "bg-blue-300", size: 35, top: "50%", left: "40%", duration: "9s" },
]

export default function FlyingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-60 blur-lg ${shape.className}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            animation: `fly${i} ${shape.duration} linear infinite alternate`,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes fly0 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes fly1 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(60px) scale(0.9); }
        }
        @keyframes fly2 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.2); }
        }
        @keyframes fly3 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(50px) scale(0.8); }
        }
        @keyframes fly4 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-35px) scale(1.15); }
        }
      `}</style>
    </div>
  )
} 