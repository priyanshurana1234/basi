let rows=5
for(let i=1;i<=rows;i++){
  let star=''
  for(let j=0;j<=rows-1-i;j++){
    star +=' '
  }
  for(let j=0;j<i;j++){
    star +='* '
  }
  console.log(star)
}