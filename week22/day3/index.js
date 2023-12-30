// function reverse(str){
//     let result = []

//     // str = str.split('').reverse().join('')

//     // for (let i = 0; i < str.length; i++) {
//     //     result.unshift(str[i])
//     // }

//     // console.log(result.join(''))
//     console.log([...str].reverse().join(''))
// }


// reverse('Timbits Hi')


// reverse('ffeffe')


// function mergeSortedArrays(arr, arr2){
//     console.log([...arr, ...arr2].sort((a,b)=> a - b))

// }

// mergeSortedArrays([0,3,4,31], [3,4,6,30]);




// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
//     }
  
//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }


//     set(key, value){
//         let address = this._hash(key)
//         if (!this.data[address]){
//             this.data[address] = []
//         }
//         this.data[address].push([key,value])
//         return this.data
//     }


//     get(key){
//         let address = this._hash(key)
//         const currentBucket = this.data[address]
//         if (currentBucket) {
//         for(let i = 0; i < currentBucket.length; i++){
//             if(currentBucket[i][0] === key) {
//             return currentBucket[i][1]
//             }
//         }
//         }
//     return undefined;

//     }
//   }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   console.log(myHashTable.get('grapes'))
//   console.log(myHashTable.data)
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')
  


// let arr = [2,5,1,2,3,5,1,2,4]


// function finder(arr){
//     let buf = {}
    
//     for (let  i of arr){
//         if (buf[i]){
//             return i
//         }
//         buf[i] = i
//     }
//     // let buf = []
    
//     // for (let  i of arr){
//     //     if (buf.includes(i)){
//     //         return i
//     //     }
//     //     buf.push(i)
//     // }

//     return 'not found'
// }


// console.log(finder(arr))




class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const rec = {
        value,
        next: null
      }

      this.tail.next = rec
      this.tail = rec
      this.length++
      return this
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);

  console.log(myLinkedList)
  
  