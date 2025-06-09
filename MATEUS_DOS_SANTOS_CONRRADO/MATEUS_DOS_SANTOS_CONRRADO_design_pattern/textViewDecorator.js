class TextView {
  draw() {
    console.log("Desenhando o conteúdo do texto.");
  }
}

class TextViewDecorator {
  constructor(textView) {
    this.textView = textView;
  }

  draw() {
    this.textView.draw();
  }
}

class BorderedTextView extends TextViewDecorator {
  draw() {
    super.draw(); 
    this.drawBorder(); 
  }

  drawBorder() {
    console.log("Adicionando borda ao TextView.");
  }
}


const textView = new TextView();
const borderedTextView = new BorderedTextView(textView);

borderedTextView.draw();
