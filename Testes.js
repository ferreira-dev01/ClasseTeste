
class Testes {

  constructor() {

    this.cont_passed = 0;
    this.cont_erro = 0;

  }

  teste_in(in_) {

    this.input = in_;

    return this;

  }


  out_expected(out_) {

    this.out = out_;

    return this;

  }


 // In this function, the test is carried out and the test print is performed
  coment(str) {

    if (this.input === this.out) {

      this.cont_passed++;
      this.passed(str);

    } else {

      this.cont_erro++;
      this.erro(str);

    }

  }


  erro(coment) {


    if (this.cont_erro > 0) {

      const erro1 = "color:white; background: red; font-size: 15px; ";

      console.log("%c\n E R R O = " + this.cont_erro, erro1);


      if(this.input==this.out){

        console.log("val_in(" + this.input +")"+ " out_expected(" + this.out+")"+" DIFFERENT DATA TYPES");

      } else{

        console.log("val_in(" + this.input +")"+ " out_expected(" + this.out+")");

      }

      if (coment.length > 2) { console.log(coment); }

    }


  }


  passed(coment) {

    if (this.cont_passed > 0) {

      const pass1 = "color:white; background: green; font-size: 15px; ";

      console.log("%c\n P A S S E D = " + this.cont_passed, pass1);

      console.log("val_in(" + this.input +")"+ " out_expected(" + this.out+")");

      if (coment.length > 2) { console.log(coment); }


    }


  }


}



let cont_global = 0;

let test;


export default function val_in(in_) {


  if (cont_global < 1) {

  test = new Testes();

  }

  cont_global++;

  test.teste_in(in_);

  return test;

}