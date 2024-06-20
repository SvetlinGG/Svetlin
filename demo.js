function solve(text, example) {
  
    //let input = document.getElementById('text').value;
    let newArr = [];
    for ( let item of text){
      let fullText = item.split(' ');

      newArr.push(fullText)
    }
    console.log(newArr.join(''));
  }
solve('this is an example', 'Camel Case')