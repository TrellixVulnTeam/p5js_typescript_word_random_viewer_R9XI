import "./css/style.scss";
import p5, { Color } from "p5";
const sketch = (p: p5) => {
    const COLORS = {
        BACKGROUND: "white",
    };
    const greetings: string[] = ["Hello", "こんにちは", "你好", "Guten Morgen"];
    const greetings_length = greetings.length;
    let x = p.width;
    let y = p.height;
    const clearBackground = () => {
        p.background(COLORS.BACKGROUND);
    };
    p.setup = () => {
        p.createCanvas(600, 400, p.P2D);
        clearBackground();
        p.frameRate(5);
    };
    p.draw = () => {
        if (p.frameCount % 100 === 0) {
            clearBackground();
        }
        p.fill(p.random(255), p.random(255), p.random(255));
        p.textSize(p.random(5, 50));
        const greeting = greetings[p.floor(p.random(greetings_length))];
        p.text(greeting, p.random(p.width), p.random(p.height));
    };
    p.mousePressed = () => {};
    p.mouseDragged = () => {};
};
new p5(sketch);
