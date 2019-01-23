/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding
* 2. Implicit Binding
* 3. NEW Object Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function defaultBinding() {
  console.log(`\"this\" refers to => \"${this.__proto__.constructor.name}\" Object`);
}

defaultBinding();

// code example for Window Binding

// Principle 2
function implicitBinding() {
  console.log(`Implicit Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const implicitObject = {
  "name": "implicitObject",
  "where_is_this": implicitBinding
}

implicitObject.where_is_this();

// code example for Implicit Binding

// Principle 3
function NewBindingConstructor(name) {
  this.name = name;
  console.log(`NEW Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const imANewObject = new NewBindingConstructor("imANewObject");

// code example for New Binding

// Principle 4

// code example for Explicit Binding
