import { useState } from 'react'

import Layout from "../components/layout"
import PrefCheckLists from "../components/PrefCheckLists"
import Loading from "../components/Loading"

import usePrefections from "../hooks/usePrefections"



export default function Index() {
  const {prefs} = usePrefections()

  const onChangeCheckLists = checkedList => {

  }

  return (
    <div>
      {
        prefs ? (
          <PrefCheckLists
            prefs={prefs}
            onChange={onChangeCheckLists}
          />
        ) : <Loading/>
      }

    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout title="トップ画面">{page}</Layout>
  )
}