
function PriorityQueue(){
    var item=[];
    var PriEle=function(ele,pri){
        this.ele=ele;
        this.pri=pri;
    }
    this.enqueue=function(element,priority){
        element=new PriEle(element,priority);
        console.log(element);
        if(this.isEmpty()){
            item.push(element);
        }
        else{
            var add=false;
            console.log(this.size());
           for(var i=0;i<this.size();i++)
           {
               console.log(element.pri,item[i].pri)
               if(element.pri<item[i].pri)
               {
                   item.splice(i,0,element);
                   add=true;
                   break;
               }
           }
           if(!add){
               item.push(element);
           }
        }
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
var queue=new PriorityQueue();
queue.enqueue('json',1);
queue.enqueue('helo',2);
queue.enqueue('lplp',1);
