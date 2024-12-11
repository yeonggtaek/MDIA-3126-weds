import { useState } from "react";
import news_feed from "./sample_news_stories.json";
import { Story } from "./Story";

function App() {
  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results);

  const haldlerDelete = (link) => {
    setStories((prev) => prev.filter((story) => story.link !== link));
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div>
        <ul>
          {stories.map((story) => (
            <Story
              key={story.link}
              title={story.title}
              image={story.image_url}
              link={story.link}
              author={story.creator}
              description={story.description}
              pubDate={story.pubDate}
              onDelete={haldlerDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
