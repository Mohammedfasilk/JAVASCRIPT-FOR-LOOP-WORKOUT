for(i=1;i<=4;i++){
    var text = ""
    for(j=1;j<=i;j++){
        if(i%2==0){
            text += "$ "
        }
        else{
            text += "* "
        }
    }
    console.log(text);
    
}