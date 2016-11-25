export const URL = 'http://hidiana.cn/'

export const checkLocalUser = (params) => {
  let user = sessionStorage.getItem('sgUser')
  if (user) {
    user = JSON.parse(user)
    if (user.roles === 'vip') return true
  }
  return false
};

export const saveLocalUser = (user) => {
  if (user) {
    sessionStorage.setItem('sgUser', JSON.stringify(user))
  }
};

export const clearLocalUser = () => {
  sessionStorage.setItem('sgUser', null)
};

export const getLocalUser = () => {
  let user = sessionStorage.getItem('sgUser')
  if (user) {
    return JSON.parse(user)
  }
  return false
};

