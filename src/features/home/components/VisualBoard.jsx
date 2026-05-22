import { motion } from "framer-motion";

export function VisualBoard() {
  return (
    <div className="visual-board" aria-label="Превью учебной дизайн-среды">
      <motion.div
        className="board-top"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Portfolio Sprint</span>
        <strong>26 weeks</strong>
      </motion.div>
      <div className="poster poster-one">
        <span>Brand</span>
        <b>01</b>
      </div>
      <div className="poster poster-two">
        <span>UX Flow</span>
        <b>02</b>
      </div>
      <div className="mini-grid">
        {["AI", "SMM", "Logo", "Type", "Motion"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
