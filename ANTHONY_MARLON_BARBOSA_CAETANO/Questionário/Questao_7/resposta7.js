function TextView() {
  this.draw = function() {
    console.log("Desenhando TextView");
  };
}

function TextViewDecorator(textView) {
  this.textView = textView;

  this.draw = function() {
    this.textView.draw();
  };
}

function BorderDecorator(textView) {
  TextViewDecorator.call(this, textView);

  this.draw = function() {
    this.textView.draw();
    this.addBorder();
  };

  this.addBorder = function() {
    console.log("Adicionando borda na TextView");
  };
}

let simpleTextView = new TextView();
let borderedTextView = new BorderDecorator(simpleTextView);

borderedTextView.draw();
