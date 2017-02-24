/**
 * Created by heshan on 2017/2/17.
 */
/*模拟链表中最重要的是存放地址指针的地方是直接存放的对象的引用，利用对象直接赋值就是赋值的对象的引用*/
function LinkList(){
     function Node(element,next) {
         this.ele=element;
         this.next=null;
     }
     this.length=0;
    var head=null;
    /*在链表的最后添加元素*/
    this.append=function(element){
        var node=new Node(element),current;
        if(head==null)
        {
            head=node;
        }
        else{
            current=head;
            while(current.next)
            {
                current=current.next;
            }
            current.next=node;
        }
        this.length++;
    }
    /*删除链表中指定位置的元素，链表在存储空间上是不连续的但是结构是连续的,删除元素后等待JS的垃圾回收机制将删除元素回收*/
this.delete=function(position){
        if(position>-1&&position<this.length){/*验证位置的有效性*/
            var current=head,index=0,previous;
            if(position==0)
            {
                head=current.next;
            }
            else
            {
                while(index++<position)
                {
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            this.length--;
            return current.ele;
        }
        else{
            return null;
        }
      }
    this.size=function(){
      return this.length;
    }
   this.insert=function(position,element){
        var current=head,index=0,previous;
        var node=new Node(element);
        if(position==0)
        {
            node.next=current;
            head=node;
        }
        else
        {
            while(index++<position)
            {
                previous=current;
                current=current.next;
            }
            previous.next=node;
            node.next=current;

        }
       this.length++;
   }
   this.remove=function (element) {
       return this.delete(this.indexOf(element));
   }
   this.toString=function(){
      var Str="",current=head;
      while(current)
      {
          Str+=current.ele+',';
          current=current.next;
      }
      return Str.substring(0,Str.length-1)
   }
   this.indexOf=function (element) {
       var current=head,index=-1;
       while(current)
       {
           index++;
           if(current.ele==element)
           {
               return index;
           }

           current=current.next;
       }
           return -1;
   }
   this.isEmpty=function(){
       return this.length==0;
   }
   this.getHead=function(){
       return head;
   }
}
var linkList=new LinkList();
linkList.append(14);
linkList.append(15);
linkList.append(16);
linkList.append(17);
linkList.insert(2,19);
console.log(linkList.length);
console.log(linkList.delete(2));
console.log(linkList.toString());
console.log(linkList.indexOf(14));
console.log(linkList.indexOf(0));
console.log(linkList.getHead());
console.log(linkList.isEmpty());



