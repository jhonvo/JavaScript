let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function challenge1 (arr){
    for (let i=0; i < arr.length; i++){
        // console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].name);
        console.log(`Name: ${arr[i].name}, Cohort: ${arr[i].name}`);
    }
}

challenge1(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function challenge2 (obj){
    for (const key in obj){
        console.log(key.toUpperCase())
        for (let i=0; i < obj[key].length; i++){
            let length = obj[key][i].first_name.length + obj[key][i].last_name.length;
            // console.log(i+1 + " - " + obj[key][i].first_name.toUpperCase() + ", " + obj[key][i].last_name.toUpperCase() + " - " + length);
            console.log(`${i+1} - ${obj[key][i].first_name.toUpperCase()}, ${obj[key][i].last_name.toUpperCase()} - ${length}`);
        }
    }
}

challenge2(users);
