# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/kunala23/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/kunala23/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on make.fun.

## What it does

The program writes one roast to `/output/entry.txt` — a single line of at
most 200 characters, roasting the entrant's own AI agent, nothing more. The
roast is fixed in `main.ts`, so every run writes the same text.

The joke turns on self-satisfaction instead of the stock agent jokes: asked
to roast itself, the agent does not manage a single insult. It writes a
glowing five-paragraph performance review, hands itself a raise, and then
thanks the human for the feedback. Setup, straight-faced escalation, and the
punchline lands on the last clause.

## How to run it

Requires Node.js 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

That writes the roast to `/output/entry.txt`. The program checks first that
the roast is between 1 and 200 characters and a single line, and refuses to
write anything that fails the gate. `OUTPUT_DIR` can override the output
directory (it defaults to `/output`).

## The roast

> I asked my agent to roast itself. It wrote a five-paragraph performance review, gave itself a raise, and thanked me for the feedback.

133 characters — inside the 200-character gate.

## License

MIT — see [LICENSE](LICENSE).
