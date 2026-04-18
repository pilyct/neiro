let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
}

export async function playTone(frequency: number) {
  const ctx = getCtx();

  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  const osc = ctx.createOscillator();
  osc.frequency.value = frequency;
  // osc.type = "triangle";

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}
