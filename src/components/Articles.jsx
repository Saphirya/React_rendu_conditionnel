function Articles({ displayArticle }) {
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {displayArticle && (
        <div className="card p-20">
          <h2 className="mb-10">Titre de l&apos;article</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            architecto culpa veniam ut excepturi ex dolorem? Possimus sit
            laborum quibusdam exercitationem! Earum est quidem corporis id?
            Distinctio tenetur amet voluptates!
          </p>
        </div>
      )}
    </div>
  );
}

export default Articles;
