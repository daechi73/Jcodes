import "./BlogContent.css";

const BlogContent = (props) => {
  const renderContents = props.content.map((e, i) => {
    return (
      <div key={i} className={"blog-content-content "}>
        {e}
      </div>
    );
  });

  return (
    <div className={"blog-content " + props.className}>
      <div className={"blog-content-title "}>{props.title}</div>
      <div className="container-blog-content-content">{renderContents}</div>
    </div>
  );
};

export default BlogContent;
