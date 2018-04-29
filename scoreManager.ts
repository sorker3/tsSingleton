import score from './score';

export default class scoreManager {
    private static _instance: scoreManager;
    private _score: score = score.getInstance();

    private constructor() {}

    public increase() {
        this._score.count++
    }

    public static getInstance() {
        if (!scoreManager._instance) {
            scoreManager._instance = new scoreManager();
        }
        return scoreManager._instance;
    }
}