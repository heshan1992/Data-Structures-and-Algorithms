/**
 * Created by heshan on 2017/2/19.
 */
function Set(){
    var item={},length=0;
    this.has=function(value){
       return item.hasOwnProperty(value);
    }
    this.add=function(value){
        if(!item[value])
        {
            item[value]=value;
            return true;
        }
        return false;

    }
    this.remove=function(value){
        if(this.has(value))
        {
            delete item[value];
            return true;
        }
       return false;
    }
    this.clear=function(){
        item={};
    }
    this.size=function(){
      return Object.keys(item).length;
    }
    this.values=function(){
        /* return Object.keys(item)*//*两种方式都可以因为属性名和值是相同的，获取的是所有自生可枚举的属性名*/
       return Object.getOwnPropertyNames(item)/*获取所有自生属性名称*/;
    }
    this.union=function(setB){
        var set=new Set();
        var values=this.values();
        for(key in values)
        {
            set.add(values[key]);
        }
        values=setB.values();
        for(key in values)
        {
            if(set.has(values[key]))
                continue;
            else set.add(values[key]);
        }
        return set.values();
    }

    this.intersection=function(setB){
        var set=new Set();
        var values=this.values();
        for(key in values)
        {
            if(setB.has(values[key]))
                set.add(values[key]);
            else continue
        }
        return set.values();
    }
  this .diffrent=function(setB){
        var set=new Set();
        var values=this.values();
        for(key in values)
        {
            if(setB.has(values[key]))
              continue;
            else set.add(values[key]);

        }
        return set.values();
  }
  this.subset=function(setB){
      if(this.size()>setB.size())
          return false;
      else{
          var values=this.values();
          for(key in values)
          {
              if(!setB.has(values[key]))
                  return false;
          }
      }
      return true;
  }
}
var setA=new Set();
setA.add(1);
setA.add(2);
setA.add(3);
var setB=new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);

console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.diffrent(setB));
console.log(setA.subset(setB));

