/**
 * Created by heshan on 2017/2/16.
 */
function Queue(){
     var item=[];
     this.enqueue=function(data){
         return item.push(data);
     }
     this.dequeue=function(){
         return item.shift();
     }
     this.front=function(){
         return item[0];
     }
     this.isEmpty=function(){
         return item.length==0;
     }
     this.size=function(){
         return item.length;
     }
     this.print=function(){
         console.log(item.toString());
    }
}
/*循环队列*/
/*击鼓传花游戏*/
function holo(nameList,num){
    var queue=new Queue();
    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }
    var failer="";
    while (queue.size()>1){
        for(var i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        failer=queue.dequeue();
        console.log("淘汰的人是："+failer);
    }
    return queue.dequeue();
}
var names=['John','jack','camila','ingrid','carl'];
var winner=holo(names,7);
console.log("最后胜利的认是："+winner);