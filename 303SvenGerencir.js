function ackermann(m,n){
    return (m==0)?n+1:((n==0)?ackermann(m-1,1):ackermann(m-1,ackermann(m,n-1)));
}

console.log(ackermann(0, 5)) // → 6
console.log(ackermann(5, 0)) // → 65533
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 6