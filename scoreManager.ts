import score from './score';

export default class scoreManager {
    private static _instance: scoreManager;
    private _score: any;
    public count: number = 0;

    private constructor() {}

    public init(count: number) {
        this._score = score.getInstance();
        this.count = this._score.count;
    }

    public increase() {
        this.count++
    }

    public static getInstance() {
        if (scoreManager._instance) {
            scoreManager._instance = new scoreManager();
        }
        return scoreManager._instance;
    }
}