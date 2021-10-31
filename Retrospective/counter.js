function createCounter(initialValue) {
    return {
        startValue: initialValue || 0,
        value: initialValue || 0,
        showValue() {
            return this.value;
        },
        increment(value) {
            const temp = value || 1;
            this.value += temp;
            return this;
        },
        decrement(value) {
            const temp = value || 1;
            this.value -= temp;
            return this;
        },
        discard() {
            this.value = this.startValue;
            return this;
        }
    }
}