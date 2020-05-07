import React, { Component } from 'react'
import { ChessType, GameStatus } from '../../types/enyns'
import BoardCom from '../Board'
interface IState{
    chesses:ChessType[]
    gameStatus:GameStatus
    nextChess:ChessType.red | ChessType.black
}
export default class GameCom extends Component <{},IState>{
    state:IState = {
        chesses:[],
        gameStatus:GameStatus.gaming,
        nextChess:ChessType.red
    }
    componentDidMount(){
        this.init();
    }
    // 初始化
    init(){
        const arr:ChessType[] = [];
        for(let i = 0;i < 9;i++){
            arr.push(ChessType.none)
        }
        this.setState({
            chesses:arr,
            gameStatus:GameStatus.gaming,
            nextChess:ChessType.red
        })

    }
    /**
     * 处理棋子的点击事件
     * @param i 
     */
    handleChessClick(i:number){
        const chesses:ChessType[] = [...this.state.chesses];
        chesses[i] = this.state.nextChess;
        this.setState(preState=>({
            chesses,
            nextChess:preState.nextChess === ChessType.red ? ChessType.black:ChessType.red,
            // gameStatus:this.getStatus(chesses,i)
        }))
    }
    // getStatus(chesses:ChessType[],index:number):GameStatus{
        // １．判断是否有一方获得胜利
        // const horMin = Math.floor((index/3)*3);
        // if(chesses[horMin] === chesses[horMin + 1] && ){

        // }
        // ２．判断是否平局

        // ３．游戏正在进行
    // }
    render() {
        return (
            <div className="game">
                <BoardCom  
                chesses={this.state.chesses}
                isGameOver={this.state.gameStatus !== GameStatus.gaming}
                onClick={this.handleChessClick.bind(this)}
                />
            </div>
        )
    }
}
