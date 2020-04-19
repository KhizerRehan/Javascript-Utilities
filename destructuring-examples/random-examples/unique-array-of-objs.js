(function(){
    const array = [{
        name: 'Joe',
        age: 17
      },
      {
        name: 'Bob',
        age: 17
      },
      {
        name: 'Tom',
        age: 25
      },
      {
        name: 'John',
        age: 22
      },
      {
        name: 'Jane',
        age: 20
      },
    ];
    
    const distinctAges = [...new Set(array.map(a => a.age))];
    
    console.log(distinctAges)
}());