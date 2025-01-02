import Article from "./Article.jsx";
function Articles({ displayArticle }) {
  let content = <div>Aucun article</div>;
  if (displayArticle) {
    content = <Article />;
  }

  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {content}
    </div>
  );
}

export default Articles;
