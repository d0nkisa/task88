import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.init();
        this.emit(Application.events.READY);
    }

    init() {
        const article = document.querySelector('.article');
        article.addEventListener('click', event => {
            anime({
                targets: article,
                elasticity: 400,
                translateY: 10,
                duration: 550,
                direction: 'alternate',
                loop: true,
                easing: 'spring(1, 80, 10, 0)',
            })
        });
    }
}