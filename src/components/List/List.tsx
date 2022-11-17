import { FC } from "react"
import styled from "styled-components"
export interface ListProps {
  data: any[]
}

const Li = styled.li`
  list-style: none;
  //border: 1px solid black;
  max-width: 200px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }
`

const List: FC<ListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((elem: any, index: number) => {
        const humanIndex = index + 1 // to start at 1, not at 0 as usually
        return (
          <Li key={index}>
            {humanIndex}) {elem}
          </Li>
        )
      })}
    </ul>
  )
}

export default List
