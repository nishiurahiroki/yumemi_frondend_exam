import { RESAS_API_HOST, RESAS_API_GET_PREFECTURES } from '../const'


export function getPrefections() {
  const url : string = RESAS_API_HOST + '/' + RESAS_API_GET_PREFECTURES
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
    }
  }).then(res => res.json())
}