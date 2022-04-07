export default function compareScore(score: number, ref: number, type: 'prova' | 'trabalho') {
  if (score < 0 || score > ref) {
    throw new Error(`Invalid score '${score}' for type '${type}'`);
  }
  return score;
}