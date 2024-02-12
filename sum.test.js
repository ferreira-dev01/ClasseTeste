import sum from "./sum.js";
import val_in from "./Testes.js";


val_in(sum(1,2)).out_expected(3).coment('test sum');

val_in(sum(1,2)).out_expected('3').coment('test sum');