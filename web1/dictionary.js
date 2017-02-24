/**
 * Created by heshan on 2017/2/19.
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
var dic=new Dictionary();
dic.set("name","jack");
dic.set("age","12");
dic.set("height","168cm");
console.log(dic.values());
console.log(dic.remove("height"),dic.values());
console.log(dic.get("name"),dic.get("hobby"));
