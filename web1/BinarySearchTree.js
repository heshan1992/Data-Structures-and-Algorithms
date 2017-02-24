/**
 * Created by heshan on 2017/2/21.
 */
function BinarySearchTree(){/*二叉查询树，左侧节点只允许插入比父节点小的值，右侧节点只允许插入比父节点大的值*/
    var Node=function(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
    var rootNode=null;
    var insertNode=function(root,node){
        if(node.key<root.key)
        {
            if(root.left==null)
                root.left=node;
            else{
                root=root.left;
                insertNode(root,node);
            }
        }
        else{
            if(root.right==null)
                root.right=node;
            else{
                root=root.right;
                insertNode(root,node);
            }
        }

    }
    this.insert=function(key){
         var node=new Node(key),current;
         if(rootNode==null)
         {
            rootNode=node;
         }
         else{
           insertNode(rootNode,node);
         }
    }
    this.inOrderTraverse=function(callback){
            inOrderTraverseNode(rootNode,callback);
    }
    var inOrderTraverseNode=function (node,callback) {
        if(node!=null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    }
    this.inPreOrderTraverse=function(callback){
        preOrderTraverseNode(rootNode,callback);
    }
    var preOrderTraverseNode=function(node,callback) {
        if (node != null)
        {
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback)
        }
    }
    this.inPostOrderTraverse=function(callback)
    {
        postOrderTraverseNode(rootNode,callback);
    }
    var postOrderTraverseNode=function(node,callback){
        if(node!=null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }
    this.min=function () {
        var node=rootNode;
        if(node==null) return null;
        while(node.left!=null)
            node=node.left;
        return node.key;
    }
    this.max=function () {
        var node=rootNode;
        if(node==null) return null;
        while(node.right!=null)
            node=node.right;
        return node.key;
    }
   this.find=function(key)
   {
       return search(rootNode,key);
   }
   var search=function (node,key) {
       if (node == null)return false;
       else
       {
           if (node.key < key)
               return search(node.right, key);
           else if (node.key > key)
               return search(node.left, key);
           else return true;
       }
   }
}
var  tree=new BinarySearchTree();
tree.insert(12);
tree.insert(19);
tree.insert(14);
tree.insert(11);
tree.insert(18);
tree.insert(13);
tree.insert(7);
tree.insert(15);
tree.insert(22);
tree.insert(17);
function printNode(value) {
    console.log(value)
}
/*
tree.inOrderTraverse(printNode);
tree.inPreOrderTraverse(printNode);
tree.inPostOrderTraverse(printNode);*/
console.log(tree.min());
console.log(tree.max());
console.log(tree.find(23))