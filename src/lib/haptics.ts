export const triggerHaptic = () => {
  if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
    try {
      window.navigator.vibrate(50);
    } catch (e) {
      // Ignore errors for devices/browsers that don't support vibrate
    }
  }
};
