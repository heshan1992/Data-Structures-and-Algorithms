/**
 * Created by heshan on 2017/2/17.
 */
/*模拟链表中最重要的是存放地址指针的地方是直接存放的对象的引用，利用对象直接赋值就是赋值的对象的引用*/
function DoublyLinkList(){
    function Node(element,next) {
        this.ele=element;
        this.next=null;
        this.pre=null;
    }
    this.length=0;
    var head=null;
    var tail=null;/*双向链表可以两个方向进行查找故要定义tail*/
    /*在链表的最后添加元素*/
    this.append=function(element){
        var node=new Node(element),current;
        if(head==null)
        {
            head=node;
            tail=node;
        }
        else{
           current=tail;
           current.next=node;
           tail=node;
           tail.pre=current;
        }
        this.length++;
    }
    /*删除链表中指定位置的元素，链表在存储空间上是不连续的但是结构是连续的,删除元素后等待JS的垃圾回收机制将删除元素回收*/
    this.delete=function(position){
        if(position>-1&&position<this.length){/*验证位置的有效性*/
            var current=head,index=0,previous,next;
            while(index++<position) {
                previous = current;
                current = current.next;
            }
            if(position==this.length-1)
            {
                previous.next=null;
                tail=previous;
            }
            else{
                next=current.next;
                previous.next=next;
                next.pre=previous;
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
            if(!head)
            {
                head=node;
                tail=node;
            }
            else{
                node.next=current;
                current.pre=node;
                head=node;
            }
        }
        else
        {
            while(index++<position)
            {
                previous=current;
                current=current.next;
            }
            previous.next=node;
            node.pre=previous;
            node.next=current;
            current.pre=node;

        }
        this.length++;
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
            if(current.ele==element)
            {
                return index;
            }
            index++;
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
    this.getTail=function(){
        return tail;
    }
}
var linkList=new DoublyLinkList();
linkList.append(14);
linkList.append(15);
linkList.insert(0,13);
linkList.insert(2,16);
console.log(linkList.toString());
console.log(linkList.size());
console.log(linkList.delete(2));
console.log(linkList.delete(2));
console.log(linkList.toString());





