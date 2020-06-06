class Game{
    constructor(){}

    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
}