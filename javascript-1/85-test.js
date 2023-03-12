

function test(code) {
  switch (code) {
    case "A":
      return 'AC'
    case "B":
      return 'AB'
    case "C":
      return 'CD'
    default:
      return 'ABCD'
  }
}


const CODE_MAP = {
  'A': 'AC',
  'B': 'AB',
  'C': 'CD'
}

function test(code) {
  if (!CODE_MAP[code]) return 'ABCD'
  return CODE_MAP[code]
}