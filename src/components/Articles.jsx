import { Fragment } from "react";

function Articles() {
  const articles = [
    {
      title: "Titre de l'article 1",
      content: "contenu 1",
      published: true,
    },
    {
      title: "Titre de l'article 2",
      content: "contenu 2",
      published: true,
    },
    {
      title: "Titre de l'article 3",
      content: "contenu 3",
      published: false,
    },
  ];
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((article) => (
        <Fragment key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </Fragment>
      ))}
    </div>
  );
}

export default Articles;
