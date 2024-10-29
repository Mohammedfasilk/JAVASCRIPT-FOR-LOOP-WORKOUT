for(i=1;i<=3;i++){
    var text=""
    for(j=1;j<=5;j++){
        if((i==1 && j-4==0) || (i==2 && j-2==0) || (i==3 && j==5)){
            text+="  "
        }
        else if(j%2==0){
            text+="$ "
        }
        else{
             text+="* "
        }
    }
    console.log(text);
    
}