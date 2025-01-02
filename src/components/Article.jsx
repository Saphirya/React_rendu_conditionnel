function Article({ title, content }) {
  return (
    <div className="card p-20">
      <h2 className="mb-10">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Article;
