# SnoozyTalk Lexicon

English vocabulary data used by the [SnoozyTalk](https://snoozytalk.com) app, published under
**[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**.
It is derived from six CC BY-SA 4.0 word lists (see [Sources](#sources-and-attribution)),
so the derived data is shared under the same license, as that license requires.

한국어 안내는 [아래](#한국어-안내)에 있습니다.

## What is in this repository

| File | Contents |
|---|---|
| `lexiconData.ts` | 8,776 headwords. For each: level band (A1–C2), rank, OpenSubtitles-based frequency per million (`ospm`), part-of-speech tags, flags (NGSL / BSL membership, multi-word expression, watchlist, stopword, phrasal verb, gradable) and topic domains. This is the TypeScript module exactly as bundled in the app (`LEXICON_VERSION` 0.2, id hash `05fbeeeb67c8`). |
| `glossData.ts` | 7,300 Korean glosses, each with one English example sentence. Also exactly as bundled. |
| `suggestPoolData.ts` | The app's word-suggestion pool: 6,094 headwords, each with a CEFR level (when learners usually start using the word in speech), a priority from 1 to 5, its source list, and `business` / `academic` tags from the TSL, BSL and NAWL. Also exactly as bundled. |
| `data/lexicon.json`, `data/glosses.json`, `data/suggest-pool.json` | The same data as plain JSON, one record per line, produced by `scripts/export-json.ts`. |
| `LICENSE` | Full text of CC BY-SA 4.0. |

In `lexiconData.ts`, levels are frequency-rank bands derived from the source lists, not CEFR judgements; the
suggestion pool's levels are CEFR judgements (see [Changes](#changes-made-to-the-sources)).
The app's own source code is **not** in this repository and is not covered by this license. Neither are the
industry term lists (medical, finance, tech, marketing) that the app also uses: SnoozyLab wrote them itself, they
are not derived from the lists below, and they are kept in a separate file of the app.

## Sources and attribution

| Source | Authors | License | Used for |
|---|---|---|---|
| [New General Service List 1.2 (NGSL)](https://www.newgeneralservicelist.com/new-general-service-list) | Charles Browne, Brent Culligan & Joseph Phillips | CC BY-SA 4.0 | Headwords and ranks for the A1–B2 bands, inflection checks, `ngsl` flag |
| [Business Service List 1.2 (BSL)](https://www.newgeneralservicelist.com/business-service-list) | Charles Browne & Brent Culligan | CC BY-SA 4.0 | `bsl` flag, business recommendation pool |
| [NGSL Graded Reader Edition (NGSL-GR)](https://www.newgeneralservicelist.com/ngsl-graded-reader) | Charles Browne & Brent Culligan | CC BY-SA 4.0 | Candidate words for the suggestion pool (general reading vocabulary) |
| [TOEIC Service List 1.2 (TSL)](https://www.newgeneralservicelist.com/toeic-service-list) | Charles Browne & Brent Culligan | CC BY-SA 4.0 | Candidate words for the suggestion pool, `business` tag |
| [New Academic Word List 1.2 (NAWL)](https://www.newgeneralservicelist.com/new-academic-word-list) | Charles Browne, Brent Culligan & Joseph Phillips | CC BY-SA 4.0 | Candidate words for the suggestion pool, `academic` tag |
| [FrequencyWords 2018, `en_50k`](https://github.com/hermitdave/FrequencyWords) (built from [OpenSubtitles2018](https://opus.nlpl.eu/OpenSubtitles2018.php) via OPUS) | Hermit Dave | CC BY-SA 4.0 (content); code MIT | Frequency per million (`ospm`), headwords and ranks for the C1–C2 bands |

Citations suggested by the NGSL Project:

- Browne, C., Culligan, B., & Phillips, J. (2013). *The New General Service List.* Retrieved from http://www.newgeneralservicelist.com
- Browne, C., & Culligan, B. (2013). *The Business Service List.* Retrieved from http://www.newgeneralservicelist.com
- Browne, C., & Culligan, B. (2024). *The New General Service List - Graded Reader Edition.* Retrieved from http://www.newgeneralservicelist.com
- Browne, C., & Culligan, B. (2013). *The TOEIC Service List.* Retrieved from http://www.newgeneralservicelist.com
- Browne, C., Culligan, B. (2013). *The New Academic Word List.* Retrieved from http://www.newgeneralservicelist.com

## Changes made to the sources

CC BY-SA 4.0 asks adapters to say what they changed. We:

- merged the three lists into one headword set, normalised spelling and lemmas, and removed entries that are noise in subtitle data;
- assigned level bands from rank, and added part-of-speech tags, flags and topic domains;
- computed `ospm` from the FrequencyWords counts;
- wrote the Korean glosses and example sentences (generated with Claude and checked; a few written by hand). These are new material and are released under the same CC BY-SA 4.0 terms;
- (v0.2) built the suggestion pool: candidate words from the lists above were judged with Claude for whether to suggest them, their CEFR level and a priority; names, slang, offensive and sensitive words were left out, as were low-priority words from the subtitle list and the three new lists. Headwords from the new lists that the lexicon lacked were added to it at their pool level.

Nothing from BNC2014 or any other corpus with a restricted license is included.

## How to reuse

You may copy, redistribute and adapt this data, including commercially, if you

1. credit the sources above and this repository,
2. link to the CC BY-SA 4.0 license,
3. say what you changed, and
4. release any adapted data under CC BY-SA 4.0 as well.

A short attribution line that satisfies (1) and (2):

> SnoozyTalk Lexicon by SnoozyLab Inc. (https://github.com/snoozylab/snoozytalk-lexicon), based on NGSL 1.2, BSL 1.2, NGSL-GR, TSL 1.2 and NAWL 1.2 by Browne, Culligan & Phillips and FrequencyWords 2018 by Hermit Dave. CC BY-SA 4.0.

## Versions

Tagged releases match the `LEXICON_VERSION` constant in `lexiconData.ts` (`lexicon.ts` in v0.1).

- **v0.2** (2026-11-12): the suggestion pool (`suggestPoolData.ts`); NGSL-GR, TSL and NAWL as sources; 8,776 headwords; 7,300 glosses. Files renamed to match the app (`lexicon.ts` → `lexiconData.ts`, `glosses.ts` → `glossData.ts`).
- **v0.1** (2026-11-09): 8,338 headwords and 3,520 glosses.
 The id hash in the file header
identifies the headword set independently of ordering, so you can tell whether two versions share
the same vocabulary.

Questions: support@snoozytalk.com

---

## 한국어 안내

SnoozyTalk 앱에 들어 있는 영어 어휘 데이터입니다. 표제어 8,776개의 레벨 띠·순위·빈도·품사·플래그를 담은 `lexiconData.ts`,
한국어 뜻·영어 예문 7,300개를 담은 `glossData.ts`, 추천 단어 풀 6,094개(CEFR 레벨·우선순위·출처·business/academic 표시)를 담은
`suggestPoolData.ts`를 앱 번들과 똑같은 내용으로 올렸고, 같은 내용을 JSON으로도 넣었습니다. 앱이 함께 쓰는 업종 용어 목록(의료·금융·테크·마케팅)은
스누지랩이 직접 만든 것으로 아래 목록에서 나온 것이 아니라 이 저장소와 라이선스에 포함되지 않습니다.

이 데이터는 NGSL 1.2, BSL 1.2, NGSL-GR, TSL 1.2, NAWL 1.2, FrequencyWords 2018이라는 CC BY-SA 4.0 목록 여섯 개를 바탕으로 만든 파생물이라
같은 조건, 즉 CC BY-SA 4.0으로 공개합니다. 상업적 이용을 포함해 자유롭게 쓸 수 있고, 출처 표시와 라이선스 링크,
바꾼 내용 표시, 파생물의 동일 조건 공개만 지키면 됩니다. 앱의 소스 코드는 이 저장소와 라이선스에 포함되지 않습니다.
