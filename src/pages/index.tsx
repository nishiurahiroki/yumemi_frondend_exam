import Layout from "../components/layout"

export default function Index() {
  return (
    <div>
      hoge!!!!
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout title="トップ画面">{page}</Layout>
  )
}