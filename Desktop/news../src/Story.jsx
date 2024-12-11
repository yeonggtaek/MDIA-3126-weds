import PropTypes from "prop-types";

export const Story = ({
  title,
  image,
  link,
  author,
  description,
  pubDate,
  onDelete,
}) => {
  return (
    <li className="story-container">
      <span className="story-delete" onClick={() => onDelete(link)}>
        x
      </span>
        <article className="story-article">
          <div>
            <a className="story-title" href={link}>
              <h3>{title}</h3>
            </a>
            <p className="story-description">{description}</p>
            <p className="story-byline">
              By <span className="story-author">{author}</span>
            </p>
          </div>
          <div className="story-image">
            <img
              alt={title}
              src={image || "https://placehold.co/600x400?text=News+Story"}
            />
          </div>
        </article>
        <div className="story">
        <div className="story-pub-date">
          <span className="">{pubDate.split(" ")[0]}</span>
        </div>
      </div>
    </li>
  );
};

Story.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  pubDate: PropTypes.string,
  onDelete: PropTypes.func,
};
