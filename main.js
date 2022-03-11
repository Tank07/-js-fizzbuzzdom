for (let i = 1; i <= 100; i++){
    console.log( i );
    if( i % 3 == 0 && i % 5 == 0 ){
      console.log("è divisibile per 3 e 5")
      document.getElementById("contenitoreNumeri").innerHTML += `
      <div class="col text-center fs-2 p-3">
        <div class="py-5 bg-success">FizzBuzz</div>
      </div>`;      
    } else if ( i % 3 == 0 ) {
      console.log("è divisibile per 3")
      document.getElementById("contenitoreNumeri").innerHTML += `
      <div class="col text-center fs-2 p-3">
        <div class="py-5 bg-warning">Fizz</div>
      </div>`;
  } else if (i % 5 == 0 ) {
    console.log("è divisibile per 5")
    document.getElementById("contenitoreNumeri").innerHTML += `
      <div class="col text-center fs-2 p-3">
        <div class="py-5 bg-danger">Buzz</div>
      </div>`;   
    } else {
      console.log("non è divisibile per i precedenti")
      document.getElementById("contenitoreNumeri").innerHTML += `
        <div class="col text-center fs-2 p-3">
          <div class="py-5 bg-primary">${i}</div>
        </div>`;   
      }
}
