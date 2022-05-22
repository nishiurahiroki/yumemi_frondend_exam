import useSWR from "swr"

import { RESAS_API_HOST, RESAS_API_GET_PREFECTURES } from '../const'

const fetcher = (url : string) => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
  }
})
.then(res => res.json())

export default function usePrefections(fallbackData) {
  const { data, error, mutate } = useSWR(RESAS_API_HOST + '/' + RESAS_API_GET_PREFECTURES, fetcher, { suspense: true, fallbackData })

  return {
    prefs : data?.result,
    error,
    mutate
  }
}