var _ = {
    map: function(list, callback) {
        let newList = [];
        if (Array.isArray(list)){
            for (let i = 0; i < list.length; i++){
                newList.push(callback(list[i]));
            }
        }
        else{
            for (let key in list) {
                newList.push(callback(list[key]));
            }
        }
        return newList;
    },

    reduce: function(list, callback, memo) { 
        let _memo;
        if (memo === undefined){
            _memo = list[0];
        } else {
            _memo = memo;
        }
        for (let i = 0; i < list.length; i++){
            _memo = (callback(_memo,list[i]));
        }
        return _memo;
    },


    find: function(list, callback) { 
        let result;
        for (let i = 0; i < list.length; i++){
            if (callback(list[i])){
                return list[i];
            } else {
                result = false;
            }
        }
        return result;
    },


    filter: function(list, callback) { 
        let result = []
        for (let i = 0; i < list.length; i++){
            if (callback(list[i])){
                result.push(list[i]);
            }
        }
        return result;
    },

    reject: function(list, callback) { 
        let result = []
        for (let i = 0; i < list.length; i++){
            if (! callback(list[i])){
                result.push(list[i]);
            }
        }
        return result;
    }
}
 // you just created a library with 5 methods!

console.log(_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));