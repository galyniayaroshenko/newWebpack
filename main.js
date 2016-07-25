import _ from 'lodash';
import template from './main.hbs';

console.log('template', template({name: 'Webpack'}));

console.log(_.isEqual(1,2));

var obj = {
  field1: 111,
  someFn () {
    console.log('someFn');
  }
}
obj.someFn();
