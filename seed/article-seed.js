const db = require('../config/database')
const Article = require('../models/Article')

// let newArticle = new Article({
//     title: 'title test',
//     description: 'description test'
// })

// newArticle.save( (err)=> {
//     if(!err) {
//         console.log('record was added')
//     } else{
//         console.log("err")
//     }
// })

// const seedArticle = async () => {
//     const newArticle = new Article({
//       title: 'title test',
//       description: 'description test'
//     });
//     try {
//       await newArticle.save();
//       console.log('record was added');
//     }
//     catch(err) {
//       console.log('err')
//     }
// }
// seedArticle()

let newArticles = [
  new Article({
      title: 'beach cleaning at 11',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  }),
  new Article({
      title: 'beach cleaning at 22',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  }),
  new Article({
      title: 'beach cleaning at 33',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  })
]

newArticles.forEach( (article)=> {
  article.save( (err)=> {
      if (err) {
          console.log(err)
      }
  })
})

