console.log(hello);
var hello = 'world';
//prediction #1: undefined

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//prediction #2: magnet

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//prediction #3: super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//prediction #4: chicken
//               half-chicken

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//prediction #5: error function mean needs to be defined before it is invoke 

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//prediction#6: undefined
//              rock
//              r&b
//              disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//prediction#7: san jose
//              seattle
//              burbank
//              san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//prediction#8: dojo = {name:"Chicago",
//                      students:65,
//                      hiring:true}
//              error