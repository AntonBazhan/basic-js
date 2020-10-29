module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const totalTurns = Math.pow(2, disksNumber) - 1;
  const minTime = Math.floor((3600 / turnsSpeed) * totalTurns);
  return (obj = {
    turns: totalTurns,
    seconds: minTime,
  });
};
