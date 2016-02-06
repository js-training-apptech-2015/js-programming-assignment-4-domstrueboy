define(['dep1.file.js', 'widgets/dep2.file.js'], function(dep1, dep2) {
    function add(x, y) {
    	console.log('Bugabugabuga!');
        return Number(x) + Number(y);
    }

    console.log('Hey!');

    var foo = dep1();
    var bar = dep2();

    console.log(foo, bar);

    return add();
});
