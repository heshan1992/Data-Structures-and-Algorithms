/**
 * Created by heshan on 2017/2/20.
 */
function  HashTableLine() {
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
        while(item[position]!==undefined) {
            position++;
        }
        item[position] = new valPair(key,value);
        console.log("the position of " + key + ": " + position);
    }
    this.remove=function(key){
        var position =loseLoseHash(key);
        while(item[position]!==undefined)
        {
            if(item[position].key==key)
            {
                item[position]=undefined;
                return true;
            }
            position++;
        }
        return false;

    }
    this.get=function(key){
        var position= loseLoseHash(key);
       while(item[position]!==undefined)
       {
           if(item[position].key==key)
           {
               return item[position].val;
           }
           position++;
       }
       return undefined;
    }
}
var hash=new HashTableLine();
hash.put("name","jack");
hash.put("age",12);
hash.put("aeg",13);
hash.put("gae",14);
hash.put("gea",15);
hash.put("eag",13);
hash.put("ega",13);
hash.put("Ana","hello");
hash.put("Donnie","hi")
console.log(hash.get("name"));
console.log(hash.remove("name"))
console.log(hash.get("Ana"));