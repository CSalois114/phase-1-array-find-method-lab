function superbowlWin(records) {
  const result = records.find(record => record.result === "W");
  return result && result.year
}