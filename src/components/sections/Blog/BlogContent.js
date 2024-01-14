import "./BlogContent.css";

const BlogContent = (props) => {
  const renderContents = props.content.map((e, i) => {
    return (
      <div key={i} className={"blog-content-content "}>
        {e}
      </div>
    );
  });
  const renderImgs = props.imgs.map((e, i) => {
    return (
      <div key={i} className={"container-blog-content-img"}>
        <img
          className="blog-content-img"
          src={e.src}
          alt={e.name}
          height={e.height}
          width={e.width}
        />
      </div>
    );
  });

  return (
    <div className={"blog-content " + props.className}>
      <div className={"blog-content-title "}>{props.title}</div>
      <div className="container-blog-content-content">
        <div className="blog-content-contents">{renderContents}</div>
        <div className="blog-content-imgs">{renderImgs}</div>
      </div>
    </div>
  );
};

export default BlogContent;
