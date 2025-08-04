// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...
const enabledSettings = Object.entries(settings)
  .filter(([key, value]) => value === true)
  .map(([key]) => `${key}: true`);

const countTrue = enabledSettings.length;
const filteredEntries = Object.entries(settings).filter(([key, value]) => value === true);
const filteredSettings = Object.fromEntries(filteredEntries);

document.getElementById("enabled_list").textContent = enabledSettings.join("  ");
document.getElementById("true_count").textContent = `Enabled settings count: ${countTrue}`;
document.getElementById("filtered_object").textContent = JSON.stringify(filteredSettings, null, 2);