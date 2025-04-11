function calculateGrade(score: number): number {
    if (score >= 90) {
        return score > 90 ? "A" : "B";
    } else if (score >= 80) {
        return score > 80 ? "C" : "D";
    } else if (score >= 70) {
        return score > 70 ? "E" : "F";
    }
}

console.log(calculateGrade(105));
