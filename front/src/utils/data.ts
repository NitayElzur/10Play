// export const HOST = import.meta.env.DEV ? 'http://localhost:3000/data/' : import.meta.env.VITE_SERVER + '/data/'
const HOST = import.meta.env.VITE_SERVER + 'data/'
export const fetchAll = `${HOST}fetch-all`
export const fetchEntry = `${HOST}fetch`
export const send = `${HOST}send`