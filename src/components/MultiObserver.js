// MultipleObserver.js
import { useInView } from "react-intersection-observer";

const MultiObserver = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px 0px" });

  return (
    <div ref={ref} className={`${inView ? "fadeRight2" : ""}`}>
      {inView ? <span>{children}</span> : ""}
    </div>
  );
};

export default MultiObserver;
