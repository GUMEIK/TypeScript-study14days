import { ChessType } from "../../types/enyns";
import React from "react";
import './index.css'
interface IProps {
    type:ChessType
    onClick?:()=>void
}
export default function ChessCom({type,onClick}:IProps){
    let chess = null;
    if(type === ChessType.red){
        chess = <div className="red chess-item"></div>
    }else if(type === ChessType.black){
        chess = <div className="black chess-item"></div>
    }
    return (
        <div className="chess"
        onClick={()=>{
            if(type === ChessType.none && onClick){
                onClick();
            }
        }}
        >
            {chess}
        </div>
    )
}