import { describe, expect, test } from "vitest";
import { sortScores } from "../src/utils/scoreUtils";

describe("Score sorting", () => {
    test("sorts scores from fastest to slowest", () => {
        const scores = [
            { name: "Player One", time: 300 },
            { name: "Player Two", time: 200 },
            { name: "Player Three", time: 250 }
        ];

        const result = sortScores(scores);

        expect(result[0].time).toBe(200);
        expect(result[1].time).toBe(250);
        expect(result[2].time).toBe(300);
    });

    test("keeps one score unchanged", () => {
        const scores = [
            { name: "Player One", time: 245 }
        ];

        const result = sortScores(scores);

        expect(result[0].time).toBe(245);
    });
});