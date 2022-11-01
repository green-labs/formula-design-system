function managerEntries(entry = []) {
  return [...entry, require.resolve("./manager.tsx")]
}

module.exports = { managerEntries }
