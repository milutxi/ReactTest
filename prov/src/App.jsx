import { useState } from 'react'

const articles = [
  {
    title: 'Article 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada velit. Nulla vel facilisis magna. Nullam pharetra sem vel neque faucibus iaculis.'
  },
  {
    title: 'Article 2',
    content: 'Praesent eget turpis vitae nulla posuere accumsan. In non mauris non quam volutpat congue euismod at est.'
  },
  {
    title: 'Article 3',
    content: 'Vivamus vestibulum nisl et mauris commodo, vel tempor velit aliquet. Aliquam erat volutpat. Nullam euismod euismod justo, vel congue sapien tincidunt vitae.'
  },
];

const Article = ({ title, content }) => (
  <>
    <h2>{title}</h2>
    <p>{content}</p>
  </>
);

const ArticleList = ({ articles, currentPage }) => {
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  return (
    <>
      {articles.slice(startIndex, endIndex).map((article, index) => (
        <Article
          key={startIndex + index}
          title={article.title}
          content={article.content}
        />
      ))}
    </>
  );
};

const Pagination = ({ currentPage, setCurrentPage, numberOfPages }) => (
  <>
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Prev
    </button>
    <span>{currentPage} / {numberOfPages}</span>
    <button
      disabled={currentPage === numberOfPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </>
);

const ArticleListWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(articles.length / 3);
  return (
    <>
      <ArticleList articles={articles} currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </>
  );
};

export default App
