let n="naman"
let bag ="";
for(let i=n.length;i>=0;i--) {
    bag+=n[i]
}
if(n==bag) {
    console.log("palindrom")
}
else{
    console.log("not a palindrom")
}