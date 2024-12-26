function mincost(arr)
{ 
//write your code here
    let sum=0;
    let cost=0;
    arr=arr.sort();
    arr.forEach((element,i) => {
        sum=sum+element
        if(i>0)
        cost +=sum;
    });
return cost;  
}

module.exports=mincost;
