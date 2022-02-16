import { createClient } from 'newt-client-js'

export const state = () => ({
  app: null,
  articles: [],
  total: 0,
  categories: [],
})

export const getters = {
  app: (state) => state.app,
  articles: (state) => state.articles,
  total: (state) => state.total,
  categories: (state) => state.categories,
}

export const mutations = {
  setApp(state, app) {
    state.app = app
  },
  setArticles(state, articles) {
    state.articles = articles
  },
  setTotal(state, total) {
    state.total = total
  },
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchApp({ commit }, { projectUid, token, apiType, appUid }) {
    try {
      const client = createClient({
        projectUid,
        token,
        apiType,
      })
      const app = await client.getApp({
        appUid,
      })
      commit('setApp', app)
    } catch (err) {
      // console.error(err)
    }
  },
  async fetchArticles(
    { commit },
    {
      projectUid,
      articleModelUid,
      token,
      apiType,
      appUid,
      pageLimit,
      search,
      category,
      page,
      query,
    }
  ) {
    try {
      const client = createClient({
        projectUid,
        token,
        apiType,
      })
      const _query = {
        ...(query || {}),
      }
      if (search) {
        _query.or = [
          {
            title: {
              match: search,
            },
          },
          {
            body: {
              match: search,
            },
          },
        ]
      }
      if (category) {
        _query.categories = category
      }
      const _page = page || 1
      const _limit = pageLimit || 10
      const _skip = (_page - 1) * _limit

      const { items, total } = await client.getContents({
        appUid,
        modelUid: articleModelUid,
        query: {
          depth: 2,
          limit: _limit,
          skip: _skip,
          ..._query,
        },
      })
      commit('setArticles', items)
      commit('setTotal', total)
    } catch (err) {
      // console.error(err)
    }
  },
  async fetchCategories(
    { commit },
    { projectUid, categoryModelUid, token, apiType, appUid }
  ) {
    try {
      const client = createClient({
        projectUid,
        token,
        apiType,
      })
      const { items } = await client.getContents({
        appUid,
        modelUid: categoryModelUid,
        query: {
          depth: 1,
          order: ['sortOrder'],
          select: ['_id', 'name'],
          limit: 1000,
        },
      })
      commit('setCategories', items)
    } catch (err) {
      // console.error(err)
    }
  },
}
