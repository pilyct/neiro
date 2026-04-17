const ctx = new AudioContext();

export async function playTone(frequency: number) {
  if (ctx.state === "suspended") {
    await ctx.resume();
  } // for mobile

  const osc = ctx.createOscillator();
  osc.frequency.value = frequency;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}
