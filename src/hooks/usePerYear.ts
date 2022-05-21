import useSWR from 'swr'

import { RESAS_API_HOST, RESAS_API_GET_PER_YEAR } from '../const'


const nowYear = new Date().getFullYear()

const fetcher = ({url, prefs} : { url : string, prefs : any[] }) => {
  return Promise.all(prefs.map(({prefCode, prefName}) => fetch(`${url}?cityCode=-&prefCode=${prefCode}`, {
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
      }
    })
    .then(r => r.json()
                .then(({result}) => Promise.resolve({
                  prefName,
                  data : result
                          .data
                          .find(({label}) => label === '総人口')
                          .data
                          .filter(({year}) => year <= nowYear)
                }))
    )
  )) 
}

type Props = {
  prefs : any[]
}

export default function usePerYear({prefs} : Props) {
  const { data, error, mutate } = useSWR({
    url : RESAS_API_HOST + '/' + RESAS_API_GET_PER_YEAR,
    prefs
  }, fetcher)

  return {
    perYears : data
  }
}