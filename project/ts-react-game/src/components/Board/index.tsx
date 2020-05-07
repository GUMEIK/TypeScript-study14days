import React from 'react'
import { ChessType } from '../../types/enyns';
import ChessCom from '../Chees';
import './index.css'
interface IProps{
    chesses:ChessType[]
    isGameOver?:boolean
    onClick?:(index:number)=>void
}
const BoardCom:React.FC <IProps>=  function(props){
    // 普通断言
    // const isGameOver = props.isGameOver as boolean;
    // 非空断言
    const isGameOver = props.isGameOver!;
    const list = props.chesses.map((type,index)=>{
        return (
            <ChessCom type={type}  key={index}
            onClick={()=>{
                // console.log(index)
                if(props.onClick && !isGameOver){
                    props.onClick(index);
                }
            }}
            />
        )
    })
    return (
        <div className="board">
            {list}
        </div>
    )
}

BoardCom.defaultProps = {
    isGameOver:false
}
export default BoardCom;