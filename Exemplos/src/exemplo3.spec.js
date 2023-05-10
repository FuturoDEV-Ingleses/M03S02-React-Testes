function transformTime(seconds) {
  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds % 60;
  if (minutes < 60) {
    return `${minutes}m ${restSeconds}s`;
  }

  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;
  return `${hours}h ${restMinutes}m ${restSeconds}s`;
}

describe("Exercicio 03", () => {
  it("should return '30s' when receiving 30 ", () => {
    const seconds = 30;
    const result = transformTime(seconds);
    expect(result).toBe("30s");
  });

  it("should return '5m 50s' when receiving 350 ", () => {
    const seconds = 350;
    const result = transformTime(seconds);
    expect(result).toBe("5m 50s");
  });

  it("should return '1h 2m 5s' when receiving 3725 ", () => {
    const seconds = 3725;
    const result = transformTime(seconds);
    expect(result).toBe("1h 2m 5s");
  });
});
