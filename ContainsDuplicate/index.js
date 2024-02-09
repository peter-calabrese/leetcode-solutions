const containsDuplicate = (nums) =>{
    const map = new Map();

    for (const num of nums){
        if (map.has(num)){
            return true
        }
        map.set(num)
    }
    return false
}

const res = containsDuplicate([1,2,3,4])
console.log(res)