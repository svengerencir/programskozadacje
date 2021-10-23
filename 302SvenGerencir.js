function ackermann(m,n){
    return (m==0)?n+1:((n==0)?ackermann(m-1,1):ackermann(m-1,ackermann(m,n-1)));
}
console.log(ackermann(0,1));
console.log(ackermann(1,2));
