function Articles() {
  const articles = [
    {
      title: "Titre de l'article",
      content: "contenu 1",
    },
    {
      title: "Titre de l'article",
      content: "contenu 2",
    },
    {
      title: "Titre de l'article",
      content: "contenu 3",
    },
  ];
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((article) => (
        <div key={article.title} className="mb-20">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
