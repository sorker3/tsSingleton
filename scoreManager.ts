import score from './score';

export default class scoreManager {
    private static _instance: scoreManager = new scoreManager();
    private _score: any;

    private constructor() {}

    public init() {
        this._score = score.getInstance();
    }

    public increase() {
        this._score.count++;
    }

    public static getInstance() {
        return scoreManager._instance;
    }
}