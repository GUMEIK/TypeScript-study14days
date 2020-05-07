import React, { Component } from 'react'
import { ChessType } from './types/enyns'
import ChessCom from './components/Chees'
import BoardCom from './components/Board'
import GameCom from './components/Game'
const chesses:ChessType[] = [
  ChessType.none,
  ChessType.red,
  ChessType.black,
  ChessType.none,
  ChessType.red,
  ChessType.black,
  ChessType.none,
  ChessType.red,
  ChessType.black,
]
export default class App extends Component {
  render() {
    return (
      <div>
        <GameCom/>
      </div>
    )
  }
}
