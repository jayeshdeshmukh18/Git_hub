let reverse=0;
    let remender=0;
    let num2=n;
    while(n<0){
       remender=n%10;
       reverse=reverse*10+remender;
       n=parseInt(n/10);
    }
    if(num2==reverse){
     console.log("Yes");

    }else{
      console.log("No");
    }