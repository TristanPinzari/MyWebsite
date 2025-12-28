import { useState } from "react";

function ImageSlider({ id, images = [] }) {
  const [current, setCurrent] = useState(
    images.length > 0 ? `${id}-slide-0` : null
  );
  const scrollIntoView = (e, slideId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(slideId);
    if (element) {
      setCurrent(slideId);
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <div id={id} className="ImageSlider">
      <div>
        {images.map((src, i) => (
          <img key={i} id={`${id}-slide-${i}`} src={src} />
        ))}
      </div>

      <div>
        {images.map((_, i) => (
          <a
            className={current == `${id}-slide-${i}` ? "active" : ""}
            key={i}
            onClick={(e) => scrollIntoView(e, `${id}-slide-${i}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
