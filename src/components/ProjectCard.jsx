import ImageSlider from "./ImageSlider";

export default function ProjectCard({ title, description, images, id }) {
  return (
    <div className="card fadeIn">
      <div className="cardContent">
        <div>
          <p className="smallHeader centerText cardHeader">{title}</p>
          <p>{description}</p>
        </div>
        <div>
          <ImageSlider id={id} images={images} />
        </div>
      </div>
    </div>
  );
}
