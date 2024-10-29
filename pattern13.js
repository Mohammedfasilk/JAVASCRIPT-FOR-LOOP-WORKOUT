for(i=1;i<=4;i++){
    var text = ""
    for(j=4;j>=i;j--){
        text+=" "
    }
    for(k=1;k<=i;k++){
        text+="* "
    }
    console.log(text);
}