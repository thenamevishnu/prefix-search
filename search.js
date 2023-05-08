class Node{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
}

class MainClass{
    constructor(){
        this.root = new Node()
    }

    add(array){
        for(let elements of array){
            let currentNode = this.root
            for(let i=0;i<elements.length;i++){
                const letter = elements[i]
                if(!(letter in currentNode.child)){
                    currentNode.child[letter]=new Node()
                }
                currentNode=currentNode.child[letter]
            }
            currentNode.isEnd=true
        }
    }

    traverse(currentNode=this.root,prefix="",words=[]){
        if(currentNode.isEnd){
            words.push(prefix)
        }
        for(let child in currentNode.child){
            this.traverse(currentNode.child[child],prefix+child,words)
        }
        return words
    }

    getWordsStartWith(prefix){
        let currentNode=this.root
        for(let i=0;i<prefix.length;i++){
            const letter = prefix[i]
            if(!(letter.toUpperCase() in currentNode.child) && !(letter.toLowerCase() in currentNode.child)){
                return []
            }
            currentNode=currentNode.child[letter.toLowerCase()] ? currentNode.child[letter.toLowerCase()] : currentNode.child[letter.toUpperCase()]
        }
        return this.traverse(currentNode,prefix,[])
    }
}

const prefix = new MainClass()

module.exports = prefix