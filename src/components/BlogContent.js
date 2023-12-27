const BlogContent = (props) => {
  return (
    <div className={"blog-content " + props.className}>
      <div className={"blog-content-title " + props.className}>
        {props.title}
      </div>
      <div className={"blog-content-content " + props.className}>
        {props.content}
      </div>
    </div>
  );
};

export default BlogContent;
