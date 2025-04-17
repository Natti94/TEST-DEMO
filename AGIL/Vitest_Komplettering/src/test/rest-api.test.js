import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from "vitest";
import * as tokenService from "../lib/tokenService";
import { fetch } from "whatwg-fetch";

describe("GET-tester för tokenService", () => {
    const mockToken = "test-jwt-token";

    beforeAll(() => {
        tokenService.setToken(mockToken);

        if (!globalThis.fetch) {
            globalThis.fetch = fetch;
        }
    });

    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("ska hämta token med rätt ID och JWT-token i header", async () => {
        const fakeId = "abc123";
        const mockResponse = { id: fakeId, name: "Test Token" };

        fetch.mockResolvedValueOnce({
            json: () => Promise.resolve(mockResponse),
        });

        const result = await tokenService.readToken(fakeId);

        expect(fetch).toHaveBeenCalledWith(
            `https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token/${fakeId}`,
            expect.objectContaining({
                method: "GET",
                headers: expect.objectContaining({
                    Authorization: `Bearer ${mockToken}`,
                }),
            })
        );

        expect(result).toEqual(mockResponse);
    });
});
