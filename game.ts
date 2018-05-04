import score from './score';

export default class game {
    private _score: any;

    constructor() {
        this._score = score.getInstance();

        for (let i = 0; i <= 20; i++) {
            this._score.Manager.increase();
            console.log(this._score.count);
        }
    }
}