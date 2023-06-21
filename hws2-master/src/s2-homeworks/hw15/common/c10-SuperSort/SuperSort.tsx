import React from 'react'
import downImg from "../../asserts/images/down.png"
import upImg from "../../asserts/images/up.png"
import noneImg from "../../asserts/images/noneIcon.png"
// добавить в проект иконки и импортировать

const downIcon = downImg
const upIcon = upImg
const noneIcon = noneImg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
    if(sort === down) {
        return up
    } else if(sort === up) {
        return ''
    } else {
        return down
    }

    // if (sort === '') return down
    // if (sort === down) return up
    // else return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon} /!*а это убрать*!/*/}
            <img src={icon} id={id + '-icon-' + sort} style={{width: '11px', height: '9px'}}/>
        </span>
    )
}

export default SuperSort
