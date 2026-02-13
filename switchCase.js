let color='red';
switch (color)
{
    case 'red':
        console.log('stop');
        break;
    case 'green':
        console.log('go');

}

let quarter = parseInt(prompt('enter the number between (1-4) : '));
switch(quarter){
    case 1 : 
      alert('month - january , febuaray, march ');
     break;
    case 2 :
        alert('months- april, may, june ');
        break;
    case 3 :
        alert('months- july, august, september');
        break;
    case 4 : 
        alert('months - october,november, december ');
        break;
    default :
        alert('invalid input ! .....')

}
