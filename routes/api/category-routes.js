const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log('Read all Categories')
  Category
    .findAll({
      include: [Product]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log('Read Category by ID')
  Category
    .findOne({
      where: { id: req.params.id },
      include: [Product]
    })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this ID.'});
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(error);
      res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
  // create a new category
  console.log('Create Category');
  Category
    .create(req.body)
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log('Update Category by ID');
  Category
    .update(req.body, {
      where: { id: req.params.id }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this ID' });
        return;
      }
      res.json({ message: 'Category updated successfully.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log('Delete Category by ID');
  Category
    .destroy({
      where: { id: req.params.id }
    })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this ID.'});
        return;
      }
      res.json({ message: 'Category deleted successfully.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
