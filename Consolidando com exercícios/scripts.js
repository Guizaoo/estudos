function getScore(score){
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal
}

const values = [101, -1, 0, 45, 60, 61, 75, 85, 95]
values.map(value => (
  console.log(getScore(value))
))
