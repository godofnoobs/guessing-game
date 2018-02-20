class GuessingGame {
    constructor(name) {
        this.name = name;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
        var sum = this.max+this.min;
        this.current = (sum%2) ? (sum+1)/2 : sum/2;
        return this.current;
    }

    lower() {
        this.setRange(this.min, this.current);
    }

    greater() {
        this.setRange(this.current, this.max);
    }
}

module.exports = GuessingGame;
