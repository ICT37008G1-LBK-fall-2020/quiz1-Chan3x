

// davaleba 1  mwkrividan udidesis dabruneba

var arr = [ 1, 2 , 3 , 4 , 5 , 6 , -1]

var students1 = [{id:1, name:'saxeli', gpa: 3}, {id:2, name:'saxeli', gpa: 3.5},{id:3, name:'saxeli', gpa: 2}]
var students2 = [{id:1, name:'saxeli', gpa: 2}, {id:2, name:'saxeli', gpa: 3.5},{id:3, name:'saxeli', gpa: 5}]

function getMaxNumber(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length - 1 ; i++) {
        if(max < arr[i+1]) {
            max = arr[i+1]
        }
    }
    return max
}


function getMaxNumber (arr) {
    return Math.max(...arr)
}

// davaleba 2 dadebiti ricxvebis sashualo

function getPositiveNumbersAverage(arr) {
    var pN = []    // dadebiti ricxvebis masivi
    var total = 0    // dadebiti ricxvebis jami
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pN[pN.length] = arr[i]
            total += arr[i]
        }
    }
    return total/pN.length
}

// davaleba 3 

function getTopStudents(arr1, arr2){

        var arr = [...arr1, ...arr2]   // studentebis arrays gaertianeba
        var gpa = []  // yvelas gpa
        var sorted = []  // dalagebuli gpa zrdadobit

        for (var i = 0 ; i < arr.length; i++) {
            gpa[i] = arr[i].gpa
        }

        sorted = gpa.sort(function(a, b) { return a - b })

        return sorted.slice(1).slice(-5)  // abrunebs mwkrivshi bolo 5 s
        
}
