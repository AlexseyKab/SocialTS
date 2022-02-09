import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogsItem.module.css'


export type DialogsItemProps ={
    name: string
    id: number
}

const DialogsItem = (props: DialogsItemProps) => {
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItem;