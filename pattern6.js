for(i=1;i<=5;i++){
    var text = ""
    for(j=1;j<=i;j++){
        if(j%2==0){
            text += "$ "
        }
        else{
            text += "* "
        }
    }
    console.log(text);
    
}