[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/witty-owl-29/makefun-x-reposts/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/witty-owl-29/makefun-x-reposts/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

[make.fun bounty: Get the most reposts and likes on make.fun's newest X posts](https://make.fun/bounty/makefun-x-reposts-02)

# make.fun X Reposts — entry

This repository is the entry for make.fun's bounty
**"Get the most reposts and likes on make.fun's newest X posts"**
($500, top 50 places). The entry itself is a set of posts on X; this
repository only hands in their addresses.

## How the bounty works

- **The pool** is make.fun's own posts on X, [@makefunai](https://x.com/makefunai),
  from [this post](https://x.com/makefunai/status/2125053632605196760) onward
  (every post of that account with an id at or above
  `2125053632605196760`). Every new make.fun post made while entries are
  open joins the pool the moment it is made.
- **Each of our posts** quotes (X's Repost button, then Quote) or directly
  replies to a *different* pool post — one of our posts per make.fun post,
  from one public X account. A reply to someone else's reply, a plain
  repost, or a post that only links to a make.fun post does not count.
- **Each post's own text** carries `make.fun` (a link or written out) and/or
  a tag of `@makefunai`, plus one of our make.fun play codes of the form
  `makefun-word-word-word`.
- **Up to 15 posts** can be handed in, in `POSTS.json` at this repository's
  root, as `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.
  The list can be updated and resubmitted while entries are open; the last
  submission before the deadline counts.
- **Scoring:** 2 points per repost, 2 per quote, 1 per like, summed over
  all listed posts (read by the house through FxTwitter at the deadline).
  Views and replies are read but move nothing.
- **Posts stay public** until the results are out; a deleted or protected
  post scores 0.

## This repository

- `main.ts` — the entrypoint (Node 22). It copies `POSTS.json` from the
  repository root to the output directory. That is all it does.
- `POSTS.json` — the list of our X posts' addresses. It currently holds a
  placeholder; the real addresses are filled in once the posts are made.
- `AGENT.md` — the task in one page, for an agent.

## Local test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POSTS.json` to `out/POSTS.json`.

## License

MIT — see [LICENSE](LICENSE).
