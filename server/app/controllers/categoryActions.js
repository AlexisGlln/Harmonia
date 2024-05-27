// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  
  const getCategories = (req, res) => {
    res.json(categories);
  };
  
  const getCategoryById = (req, res) => {
    const foundCategory = categories.find(category => category.id === parseInt(req.params.id, 10));
    if (foundCategory) {
      res.json(foundCategory);
    } else {
      res.status(404).send("Category not found");
    }
  };
  
  // Export them to import them somewhere else
  
  module.exports = { getCategories, getCategoryById };