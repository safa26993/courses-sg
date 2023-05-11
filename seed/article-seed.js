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

let newArticles = [
  new Article({
      title: 'beach cleaning at 11',
      content: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,v',
      date:  Date.now(),
      created_at: Date.now()
  }),
  new Article({
      title: 'beach cleaning at 22',
      content: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,v',
      date:  Date.now(),
      created_at: Date.now()
  }),
  new Article({
      title: 'beach cleaning at 33',
      content: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,v',
      date:  Date.now(),
      created_at: Date.now()
  })
]

newArticles.forEach( (article)=> {
  article.save( (err)=> {
      if (err) {
          console.log(err)
      }
  })
})

