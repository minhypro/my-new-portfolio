const now = new Date()
const dayOne = new Date('2020-08-01')

// Calculate the difference in milliseconds
const differenceInMilliseconds = now.getTime() - dayOne.getTime()

// Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
const millisecondsPerDay = 24 * 60 * 60 * 1000
const differenceInDays = differenceInMilliseconds / millisecondsPerDay

// Convert days to years (1 year ≈ 365.25 days to account for leap years)
const daysPerYear = 365.25
export const differenceInYears = Math.round(differenceInDays / daysPerYear)
