export function sortScores(scores) {
    return [...scores].sort((first, second) => first.time - second.time);
}