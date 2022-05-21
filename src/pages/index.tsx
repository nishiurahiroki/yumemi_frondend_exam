import { useState, Suspense } from 'react'

import PopulationGraph from '../components/PopulationGraph'

import Layout from "../components/layout"
import PrefCheckLists from "../components/PrefCheckLists"
import Loading from "../components/Loading"

import usePrefections from "../hooks/usePrefections"
import usePerYear from '../hooks/usePerYear'


export default function Index() {
  const [checkedPrefs, setCheckedPrefs] = useState<string[]>([])

  const {prefs} = usePrefections()
  const {perYears : graphData} = usePerYear({prefs : checkedPrefs})

  /** 都道府県チェックボックス押下時 **/
  const onChangeCheckLists = checked => {
    setCheckedPrefs(checked)
  }

  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <PrefCheckLists
          prefs={prefs}
          onChange={onChangeCheckLists}
        />
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <PopulationGraph data={graphData}/>
      </Suspense>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout title="トップ画面">{page}</Layout>
  )
}