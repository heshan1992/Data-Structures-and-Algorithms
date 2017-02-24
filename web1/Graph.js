/**
 * Created by heshan on 2017/2/22.
 */

function Dictionary(){
    item={};
    this.set=function(key,val){
        item[key]=val;
    }
    this.get=function(key)
    {
        if(item.hasOwnProperty(key))
            return item[key];
        else return undefined;/*对象中未定义的属性会返回undefined*/
    }
    this.remove=function(key)
    {
        if(item.hasOwnProperty(key))
        {
            delete item[key];
            return true;
        }

        else return false;
    }
    this.has=function(key)
    {
        return item.hasOwnProperty(key);
    }
    this.clear=function(){
        item={};
    }
    this.size=function(){
        return Object.keys(item).length;
    }
    this.values=function(){
        var result=[];
        for (key in item)
        {
            if(this.has(key))/*里面可能含有非子有属性*/
            {
                result.push(item[key]);
            }
            else continue;
        }
        /*下面的这种方式也可以
         var keys=Object.getOwnPropertyNames(item);
         for(key in keys)
         {
         result.push(item[key]);
         }*/
        return result;
    }
}

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


function  Graph(){
    var vertices=[];
    var adjList=new Dictionary();
    this.addVertex=function(v){
        vertices.push(v);
        adjList.set(v,[]);
    }
    this.addEdge=function(v,x)
    {
        adjList.get(v).push(x);
        adjList.get(x).push(v);
    }
    this.toString=function(){
        var str="";
         vertices.forEach(function(val,index){
             /*console.log(vertices[index],adjList.get(vertices[index]))*/
             str+=vertices[index]+" - >"+adjList.get(vertices[index]).join(" ")+"\n";
         })
        return str;
    }
    
    var initColor=function(){
        var color=[];
        vertices.map(function (val,index) {
            color[vertices[index]]="white";
        })
        return color;
    }

    this.bfs=function(v,callback)
    {
       var color=initColor();
       var queue=new Queue();
       queue.enqueue(v);
       while(!queue.isEmpty())/*控制循环结束条件*/
       {
           var u=queue.dequeue();
           var result=adjList.get(u);
           color[u]="gray";
           for(var i=0;i<result.length;i++)
           {
               if(color[result[i]]=="white")
               {
                   queue.enqueue(result[i]);
                   color[result[i]]="gray";
               }
           }
           color[u]="black";
           if(callback)
               callback(u);
       }
    }

    this.BFS=function (v) {
        var color=initColor();
        var queue=new Queue();
        var d=[],pred=[];
        queue.enqueue(v);
        for(var i=0;i<vertices.length;i++)
        {
            d[vertices[i]]=0;
            pred[vertices[i]]=null;
        }
        while(!queue.isEmpty())/*控制循环结束条件*/
        {
            var u=queue.dequeue();
            var result=adjList.get(u);
            color[u]="gray";
            for(var i=0;i<result.length;i++)
            {
                if(color[result[i]]=="white")
                {
                    d[result[i]]=d[u]+1;/*利用到前一个点的距离*/
                    d[result[i]]=d[u]+1;/*利用到前一个点的距离*/
                    pred[result[i]]=u;
                    queue.enqueue(result[i]);
                    color[result[i]]="gray";
                }

            }
            color[u]="black";
        }
        /*return {
            distance:d,
            predNode:pred
        }*/
        var firstNode=vertices[0];
        for(var i=1;i<vertices.length;i++)
        {
            var str="";
            var stack=[];
            var node=vertices[i];
            stack.push(vertices[i]);
           for(var j=1;j<=d[vertices[i]];j++)
           {
              stack.push(pred[node]);
              node=pred[node];
           }
           var length=stack.length;
          for(var k=0;k<length;k++)
          {
             str+=stack.pop()+" ->";
          }
          console.log(str.substr(0,str.lastIndexOf(" ")+1))
        }
    }
}

var graph=new Graph();
var myVertices=["A","B","C","D","E","F","G","H","I"];
for(var i=0;i<myVertices.length;i++)
{
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('E','I');
console.log(graph.toString());
var printNode=function(node){
    console.log(node);
}
graph.bfs("A",printNode);
graph.BFS("A");

