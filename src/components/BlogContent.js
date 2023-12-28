const BlogContent = (props) => {
  const renderContents = props.content.map((e, i) => {
    return (
      <div key={i} className={"blog-content-content " + props.className}>
        {e}
      </div>
    );
  });

  return (
    <div className={"blog-content " + props.className}>
      <div className={"blog-content-title " + props.className}>
        {props.title}
      </div>
      {renderContents}
    </div>
  );
};

export default BlogContent;
