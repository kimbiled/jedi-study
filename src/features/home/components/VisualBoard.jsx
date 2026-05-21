import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function VisualBoard() {
  return (
    <div className="visual-board" aria-label="Превью учебной дизайн-среды">
      <motion.div
        className="board-top"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Portfolio Sprint</span>
        <strong>24 weeks</strong>
      </motion.div>
      <div className="poster poster-one">
        <span>Brand</span>
        <b>01</b>
      </div>
      <div className="poster poster-two">
        <span>UX Flow</span>
        <b>02</b>
      </div>
      <motion.div
        className="orbit-card"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} />
        AI tools
      </motion.div>
      <div className="mini-grid">
        {["Figma", "Brief", "Review", "Client"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
