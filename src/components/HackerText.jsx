import { useEffect, useRef } from "react";

function HackerText({ textContent }) {
  const textRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    let hovering = false;
    function HandleMouseEnter() {
      hovering = true;
      const interval = setInterval(() => {
        if (!hovering) clearInterval(interval);
        text.innerHTML = textContent
          .split("")
          .map(() => {
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      }, 30);
    }
    function HandleMouseLeave() {
      hovering = false;
      let iterations = 0;
      const interval = setInterval(() => {
        if (hovering) clearInterval(interval);
        text.innerHTML = textContent
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return letter;
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        iterations += 1 / 3;
      }, 30);
    }

    function initialRun() {
      return new Promise((resolve) => {
        let iterations = 0;
        const interval = setInterval(() => {
          if (iterations >= textContent.length) {
            clearInterval(interval);
            resolve();
          }
          text.innerHTML = textContent
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return letter;
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          iterations += 1 / 5;
        }, 30);
      });
    }

    (async () => {
      await initialRun();
    })();

    text.addEventListener("mouseenter", HandleMouseEnter);
    text.addEventListener("mouseleave", HandleMouseLeave);
    return () => {
      text.removeEventListener("mouseenter", HandleMouseEnter);
      text.removeEventListener("mouseleave", HandleMouseLeave);
    };
  }, [textContent]);

  return <p ref={textRef}>{textContent}</p>;
}

export default HackerText;
