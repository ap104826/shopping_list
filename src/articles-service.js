const ArticlesService = {
    getAllArticles(knex) {
          return knex.select('*').from('blogful_articles')
              },
insertArticle(knex, newArticle) {
     return Promise.resolve({})
    return knex
            .insert(newArticle)
               .into('blogful_articles')
               .returning('*')

}
}
module.exports = ArticlesService

