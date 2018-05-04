import score from './score';

export default class scoreManager {
    private static _instance: scoreManager;
    private _score: any;

    private constructor() {}

    public init() {
        this._score = score.getInstance();
    }

    public increase() {
        this._score.count++;
    }

    public static getInstance() {
        if (scoreManager._instance) {
            scoreManager._instance = new scoreManager();
        }
        return scoreManager._instance;
    }
}