import '../style/main.css';
import _ from 'lodash';
import template from '../template/main.hbs';

console.log(_.isEqual(1,2));
console.log('Smile!');
console.log('template', template({name:'Smile'}));

var obj = {
  field1: 111,
  someFn () {
    console.log('someFn');
  }
}
obj.someFn();
