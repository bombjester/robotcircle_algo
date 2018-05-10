var judgeCircle = function(moves) {
    var object = {U:0,
                 L:0,
                 R:0,
                 D:0}
    for (move in moves){
       
        if(moves[move] == "U"){
            object.U = object.U + 1;
        }
        if(moves[move] == "L"){
            object.L = object.L + 1;
        }
        if(moves[move] == "D"){
            object.D = object.D + 1;
        }
        if(moves[move] == "R"){
            object.R = object.R + 1;
        }
    }
    
    if(object.U == object.D && object.L == object.R){
        return true;
    }
    else{
        return false;
    }
};