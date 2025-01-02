import Articles from "./components/Articles.jsx";

function App() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <Articles displayArticle={true} />
    </div>
  );
}

export default App;
