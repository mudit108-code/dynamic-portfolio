import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import CategoryList from './components/CategoryList';

function App() {
  const articles = [
    { id: 1, title: 'Breaking News 1', category: 'Politics' },
    { id: 2, title: 'Health Tips', category: 'Health' },
    { id: 3, title: 'Technology Trends', category: 'Technology' },
    // Add more articles as needed
  ];

  const categories = ['All', 'Politics', 'Health', 'Technology'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Newspaper Portfolio</h1>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ArticleList articles={filteredArticles} />
    </div>
  );
}

export default App;
