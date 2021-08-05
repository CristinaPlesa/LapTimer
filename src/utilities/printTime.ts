const clockStringify = (digits:number): string => {
  if (digits < 10) {
    return `0${digits}`
  } else {
    return `${digits}`
  }
}

const msToClockString = (ms: number):string => {
  const centiseconds = (ms % 1000) / 10
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor(ms / 60000)

  const centiDisplay = clockStringify(centiseconds)
  const secDisplay = clockStringify(seconds)
  const minDisplay = clockStringify(minutes)

  return `${minDisplay}:${secDisplay}:${centiDisplay}`
}

export { msToClockString }