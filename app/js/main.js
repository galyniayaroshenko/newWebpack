import '../style/main.css';
import _ from 'lodash';

console.log(_.isEqual(1,2));
console.log('Smile');

var obj = {
  field1: 111,
  someFn () {
    console.log('someFn');
  }
}
obj.someFn();
