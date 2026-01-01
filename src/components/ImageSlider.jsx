import { useState } from "react";

function ImageSlider({ id, images = [] }) {
  const [current, setCurrent] = useState(images.length > 0 ? 0 : null);

  const scrollIntoView = (e, newValue) => {
    if (e) e.preventDefault();
    const element = document.getElementById(`${id}-slide-${newValue}`);
    if (element) {
      setCurrent(newValue);
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  function handleScroll(e) {
    const container = e.target;
    if (container.scrollLeft == 0) {
      setCurrent(0);
    } else {
      setCurrent(
        Math.round(
          container.scrollLeft / container.scrollWidth / (1 / images.length)
        )
      );
    }
  }

  return (
    <div id={id} className="ImageSlider">
      <div onScroll={handleScroll}>
        {images.map((src, i) => (
          <img
            key={i}
            id={`${id}-slide-${i}`}
            src={src}
            onClick={(e) =>
              scrollIntoView(e, current + 1 >= images.length ? 0 : current + 1)
            }
          />
        ))}
      </div>

      <div>
        {images.map((_, i) => (
          <a
            className={current == i ? "active" : ""}
            key={i}
            onClick={(e) => scrollIntoView(e, i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
