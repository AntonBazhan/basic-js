module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .filter((e) => typeof e === "string")
    .map((e) => e.trim())
    .map((e) => e[0].toUpperCase())
    .sort()
    .join("");
};
