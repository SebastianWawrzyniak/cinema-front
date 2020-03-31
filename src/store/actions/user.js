import { createActions } from 'reduxsauce'

const { Creators: UserActions, Types: UserTypes } = createActions(
  {
    login: ['user'],
    logout: []
  },
  { prefix: '@user/' }
)

export { UserActions, UserTypes }