// 打印扑克牌
// 花色约束
type Color = "红桃"|"黑桃"|"方块"|"梅花";
// 每张牌的约束
type NormalCard = {
    // 花色
    color:Color,
    // 大小
    mark:number
}
// 一副牌
type Deck = NormalCard[];
function createDeck():Deck{
    const deck:Deck = [];
    for(let i = 1;i <= 13;i++){
        deck.push({
            mark:i,
            color:"方块"
        })
        deck.push({
            mark:i,
            color:"梅花"
        })
        deck.push({
            mark:i,
            color:"红桃"
        })
        deck.push({
            mark:i,
            color:"黑桃"
        })
        
    }
    return deck;
}

function printDeck(deck:Deck){
    deck.forEach(ele=>{
        let str = ele.color;
        if(ele.mark<=10){
            str += ele.mark;
        }else if(ele.mark ===12){
            str += "Q"
        }else if(ele.mark ===13){
            str += "K"
        }else if(ele.mark === 11){
            str += 'J'
        }
        console.log(str);
    })
}

const deck = createDeck();
printDeck(deck);