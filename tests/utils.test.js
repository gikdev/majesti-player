import { expect, it, describe } from "vitest"
import {secondsTo24HourFormat as sf} from "@/utils"

describe("secondsTo24HourFormat", () => {
  const formUndef = "--:--:--"
  const formZero = "00:00:00"

  it("should return `--:--:--` if not good input", () => {
    expect(sf(null)).toBe(formUndef)
    expect(sf("lskdj")).toBe(formUndef)
    expect(sf(undefined)).toBe(formUndef)
    expect(sf("")).toBe(formUndef)
    expect(sf(["lakks"])).toBe(formUndef)
    expect(sf({})).toBe(formUndef)
  })
  
  it("should return '00:00:00' if falsy value", () => {
    expect(sf(0)).toBe(formZero)
  })

  it("should return correct values", () => {
    expect(sf(59)).toBe("00:00:59")
    expect(sf(30)).toBe("00:00:30")
    expect(sf(5)).toBe("00:00:05")
    expect(sf("5")).toBe("00:00:05")
  })

  it("should correctly realize s & m & h", () => {
    expect(sf(120)).toBe("00:02:00")
    expect(sf(121)).toBe("00:02:01")
    expect(sf(1 * 60 * 60 + 2 * 60 + 1)).toBe("01:02:01")
    expect(sf(359999)).toBe("99:59:59")
  })
})