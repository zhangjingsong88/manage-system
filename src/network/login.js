import { request } from './request'

export function login(account, pass) {
  return request({
    methods: 'post',
    url: '/login',
    params: {
      account,
      pass,
    },
  })
}
