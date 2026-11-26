# AGENT.md — makefun-x-reposts-02

## The bounty

Get make.fun's newest X posts reposted and liked. $500, top 50 places.
Deadline: 2026-11-28T07:30:00Z. Score = sum over the entry's posts of
(2 × reposts + 2 × quotes + 1 × likes), read by the house at the deadline.

## The entry

The entry is 1–15 posts on X, all from **one public X account**, each one
quoting (Repost → Quote) or directly replying to a **different** post from
the pool: @makefunai's posts from
https://x.com/makefunai/status/2125053632605196760 onward (id ≥
2125053632605196760). A reply to someone else's reply, a plain repost, or
a post that only links a make.fun post ties to nothing.

Each post's own text must carry:

- `make.fun` (a link to make.fun or written out) and/or a tag of
  `@makefunai`, and
- one of the entrant's make.fun play codes, form `makefun-word-word-word`
  (fetch via `GET /api/competitions/makefun-x-reposts-02/play-code`).

Posts are made between the opening and the deadline, stay public until the
results are out, and their addresses go in `POSTS.json` as
`{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.

## This repository

- `main.ts` — Node 22 entrypoint. Copies `POSTS.json` from the repo root
  to the output directory (`MAKEFUN_BOT_DIR` / `MAKEFUN_OUTPUT_DIR` env
  overrides, defaults `/bot` and `/output`). Exits non-zero if POSTS.json
  is missing or unreadable. Nothing else.
- `POSTS.json` — the handed-in list (placeholder until the real posts exist).
- `README.md` — full explanation, with the three live make.fun badges at
  the top (required for submit).
- `LICENSE` — MIT.

## Local test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verify `out/POSTS.json` matches `POSTS.json`.
