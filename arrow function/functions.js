 //arrow function

  const sayMyName = () => {
     console.log('Guilherme')
 }

 sayMyName()

/*
     Function() contructor

     * expressão new
     *  criar um novo objeto
     *  this keyword 
*/

 function Person(name) {
          this.name = name
          this.walk = function() {
                return this.name + " está andando"
          }

          } const Guilherme = new Person ("Guilherme")
 console.log(Guilherme)
 console.log(Guilherme.walk())



