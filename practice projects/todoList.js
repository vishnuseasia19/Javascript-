let todo = [];
let req = prompt('enter the request :)');

while (true) {
  if (req === 'quit') {
    console.log('quitting app');
    break;
  } 
  else if (req === 'list') {
    for (let task=0;task<todo.length;task++) {
      console.log(task +' : ',todo[task]);
    }
  } 
  else if (req === 'add') {
    let task = prompt('please enter the task you want to add');
    todo.push(task);
    console.log('task added');
  } 
  else {
    console.log('invalid request');
  }

  req = prompt('enter the request :)'); // ✅ reassignment
  // delete tast


}
