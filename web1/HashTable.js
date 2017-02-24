/**
 * Created by heshan on 2017/2/19.
 */
function  HashTable() {
    item =[];
   var  loseLoseHash=function (key) {
        var address=0;
        for(var i=0;i<key.length;i++)
        {
            address+=key.charCodeAt(i);/*获取字母的ASCII码*/
        }
        return address%37;/*将数字变小*/
    }
    var valPair=function(key,value){
       this.key=key;
       this.val=value;
    }
    this.put=function (key,value) {
        var position=loseLoseHash(key);
        if(item[position]===undefined)
        {
          item[position]=new LinkList();/*分离链接*/
        }
        item[position].append(new valPair(key,value));
        console.log("the position of "+key+": "+position);
    }
    this.remove=function(key){
        var position =loseLoseHash(key);
        if(item[position]!==undefined)/*首先判断对应的元素是否存在*/
        {
            var current=item[position].getHead();
            while (current.next)
            {
                if(current.ele.key==key)
                {
                    item[position].remove(current.ele)
                    if(item[position].isEmpty())
                    {
                        item[position]=undefined;
                    }
                    return true;
                }
                current=current.next;
            }
            if(current.ele.key===key)
            {
                item[position].remove(current.ele);
                if(item[position].isEmpty())
                {
                    item[position]=undefined;
                }
                return true;
            }
        }
        return false;
    }
    this.get=function(key){
        var position= loseLoseHash(key);
        if(item[position]!==undefined){
            var current=item[position].getHead();
            while(current.next)
            {
                if(current.ele.key==key)
                    return current.ele.val;
                else current=current.next;
            }
            if(current.ele.key==key)
                return current.ele.val;
        }
       else return undefined;

    }
}
/*链表*/
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
    this.remove=function (element) {
        console.log(this.indexOf(element))
        return this.delete(this.indexOf(element));
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
    this.getHead=function(){/*提供链表必须的接口，通过head向下进行遍历*/
        return head;
    }
}
var hashTable=new HashTable();
hashTable.put("name","jack");
hashTable.put("age","12");
hashTable.put("Ana","hello");
hashTable.put("Donnie","hi")
console.log(hashTable.get("name"));
console.log(hashTable.remove("name"))
console.log(hashTable.get("name"));