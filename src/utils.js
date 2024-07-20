/** Converts all numbers to Persian numbers(e.g. ۱۲۳۴) */
function persianifyNumbers(input) {
  const isNumber = typeof input === "number"
  const isString = typeof input === "string"
  const isEmptyString = !input.length
  if (isEmptyString || (!isNumber && !isString)) return null

  return input
    .toString()
    .replaceAll("0", "۰")
    .replaceAll("1", "۱")
    .replaceAll("2", "۲")
    .replaceAll("3", "۳")
    .replaceAll("4", "۴")
    .replaceAll("5", "۵")
    .replaceAll("6", "۶")
    .replaceAll("7", "۷")
    .replaceAll("8", "۸")
    .replaceAll("9", "۹")
}

/** Converts `seconds` to `hh:mm:ss` format string (e.g. 121 => `00:02:01`) */
function secondsTo24HourFormat(seconds) {
  const itsNan = isNaN(Number(seconds))
  const itsEmptyStr = typeof seconds === "string" && !seconds.length
  const isntStrOrNum = typeof seconds !== "number" && typeof seconds !== "string"

  if (itsNan || itsEmptyStr || isntStrOrNum) return "--:--:--"

  const A_MINUTE_IN_SECONDS = 60
  const AN_HOUR_IN_SECONDS = 60 * 60

  const h = Math.floor(seconds / AN_HOUR_IN_SECONDS)
  const m = Math.floor((seconds - (h * AN_HOUR_IN_SECONDS)) / A_MINUTE_IN_SECONDS)
  const s = Math.floor((seconds - (m * A_MINUTE_IN_SECONDS) - (h * AN_HOUR_IN_SECONDS)))

  const zerofy = i => i < 10 ? `0${i}` : i

  return `${zerofy(h)}:${zerofy(m)}:${zerofy(s)}`
}

export { persianifyNumbers, secondsTo24HourFormat }
