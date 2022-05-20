import {useId} from 'react'

type Props = {
  prefectures : any[],
  onChange : (checkedList : any[]) => void
}

export default function PrefecturesCheckList(props : Props) {
  const id: string = useId()

  return (
    <div>
      <div>都道府県</div>
      <br/>
      {props.prefectures.map(prefecture => (
        <div>
          <input type="checkbox" id={id}/>
          <label htmlFor={id}>{prefecture.name}</label>
        </div>
      ))}
    </div>
  )
}