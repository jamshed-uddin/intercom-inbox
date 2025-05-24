const timeDiff = (timestamp: string): string => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now.getTime() - past.getTime();

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffMinutes < 60) {
    return `${diffMinutes === 0 ? 1 : diffMinutes} min${
      diffMinutes > 1 ? "s" : ""
    }`;
  } else if (diffHours < 24) {
    return `${diffHours} hr${diffHours > 1 ? "s" : ""}`;
  } else {
    return past.toLocaleDateString("en-GB");
  }
};
export default timeDiff;
