var _ = {
    map: function(list, callback) {
        let newList = [];
        for (let i = 0; i < list.length; i++){
            newList.push(callback(list[i]));
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

console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));