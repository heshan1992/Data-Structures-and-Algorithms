/**
 * Created by heshan on 2017/2/23.
 */
function ArrayList() {
    var array=[];
    this.insert=function (key) {
        array.push(key);
    }
    this.toString=function () {
        return array.join(",")
    }
    var swap=function (i,j) {
        var item=array[i];
        array[i]=array[j];
        array[j]=item;
    }
    this.bubbleSort=function(){
        for(var i=0;i<array.length-1;i++)
        {
            for(var j=i+1;j<array.length;j++)
            {
               if(array[i]>array[j])
               {
                 swap(i,j);
               }
            }
        }
    }
   this.selectSort=function () {
        var indexMin;
        for(var i=0;i<array.length-1;i++)
        {
            indexMin=i;
            for(var j=i+1;j<array.length;j++)
            {
                if(array[j]<array[indexMin])
                {
                    indexMin=j;
                }
            }
         if(indexMin!=i)
         {
           swap(i,indexMin);
         }
        }
   }
   this.intersectSort=function(){
        var length=array.length;

        for(var i=1;i<length;i++)
        {
            var tem=i;
            for(var j=i-1;j>=0;j--)
            {
               if(array[tem]<array[j])
                   swap(tem,j);
                    tem--;
            }
        }
   }
   this.mergeSort=function()
   {
        array= mergeSortRec(array);
   }
   function mergeSortRec(arr) {
       var left=[],right=[];
       if(arr.length==1)
       {
           return arr;
       }
       else{
           left=arr.slice(0,Math.floor(arr.length/2));/*slice不会改变元素数组,返回的是新数组；splice会改变原数组,且其返回的是截取的字符串的长度，当没有截取则返回[]*/
           right=arr.slice(Math.floor(arr.length/2),arr.length);

       }
       return merge(mergeSortRec(left),mergeSortRec(right));

   }
   var merge=function(left,right)
    {      var result=[];
            if(left[left.length-1]<right[0])
            {
                result=result.concat(left).concat(right);
            }
            else if(left[0]>right[right.length-1])
            {
                result=result.concat(right).concat(left);
            }
            else{
                  for(var i=0;i<right.length;i++)
                  {
                      var j=0;
                      while (j<left.length&&left[j]<right[i])
                      {
                          j++;
                      }
                      left.splice(j,0,right[i]);
                  }
                  result=result.concat(left);
            }
          return result;
    }
    
    var parttiion=function (first,last,array) {
       var key=array[Math.floor((first+last)/2)];
        while(first<=last)
        {
            while(array[first]<key)
            {
                first++;
            }
            while(array[last]>key)
            {
                last--;
            }
            if(first<=last)
            {
                swap(first,last);
                first++;
                last--;
            }

        }
        return first;
    }
    this.fastSort=function() {
        quick(0, array.length - 1, array);

    }
   var quick=function (left,right,array) {
       var index;
       if(array.length>1)
       {
           index=parttiion(left,right,array);
           if(left<index-1)
           {
               parttiion(left,index,array);
           }
          if(index<right)
          {
              parttiion(index,right,array);
          }
       }
   }

   this.binarySearch=function(key){
       this.intersectSort();
       var high=array.length-1,low=0;

      while (low<=high)
      {
          var mid=Math.floor((low+high)/2);
          if(key==array[mid]){
              return mid;
          }
          else if(key>array[mid]){
               low=mid+1;
          }
          else{
              high=mid-1;
          }
      }
          return -1;
   }
}

function createArray(size) {
    var array=new ArrayList();
    for(var i=0;i<size;i++)
    {
      array.insert(Math.floor(Math.random()*100));
    }
    return array;
}
var array=createArray(5);
console.log(array.toString());
/*array.bubbleSort();*/
/*array.selectSort();*/
/*array.intersectSort();*/
/*array.mergeSort();*/
array.fastSort();
console.log(array.binarySearch("14"));
console.log(array.toString());

