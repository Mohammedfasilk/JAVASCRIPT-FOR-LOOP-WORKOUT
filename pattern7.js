for(i=1;i<=4;i++){
    var text = ""
    for(j=1;j<=i;j++){
        if(i==1){
            text += "* "
        }
        else if(i==2){
            text += "$ "
        }
        else if(i==3){
            text += "/ "
        }
        else{
            text += "? "
        }
    }
    console.log(text);
    
}