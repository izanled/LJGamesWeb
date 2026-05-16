# 인디게임사 랜딩페이지

_Started 2026-05-16 09:20 UTC_

---

## User

나는 1인 인디 게임 회사의 대표이고, 우리 회사의 랜딩 페이지를 만들어야 합니다. 우리 게임은 주로 레트로, 픽셀 스타일입니다.
지금까지는 방치형 RPG, 타워디펜스 장르를 만들었고, 앞으로 캐쥬얼한 게임도 개발 예정입니다.
이러한 특징을 살린 1인 인디 게임 회사의 랜딩 페이지를 만들어주세요.
회사의 이름은 엘제이게임즈 입니다.
로고도 없으니, 이참에 로고 까지 만들어서 홈페이지에 적용했으면 합니다.
첨부한 스크린 샷은 실제 게임 스샷으로, 이 스샷이 홈페이지에 활용되었으면 합니다.

## Assistant

_[tool: questions_v2]_

랜딩 페이지 작업을 시작하기 전에 몇 가지 확인할게요. 디자인 시스템이 이미 준비되어 있어서 방향만 정하면 됩니다.

## User

Questions timed out; go with defaults

## Assistant

_[tool: list_files]_

_[tool: update_todos]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_files]_

_[tool: copy_files]_

I have what I need. Let me set up the project and start building.

_[tool: copy_starter_component]_

Let me copy the tweaks panel starter and start building.

_[tool: write_file]_

Now let me write the landing page. I'll build it in modular pieces.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

Now the entry HTML:

_[tool: write_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: save_screenshot]_

_[tool: fork_verifier_agent]_

엘제이게임즈 랜딩 페이지를 만들었습니다.

**구성한 섹션** (12개):
1. **헤더** — 로고 + 네비 + 한/영 토글 + Play 버튼 (스크롤 시 흐림 처리)
2. **히어로** — 큰 픽셀 슬로건 + 게임 스크린샷 콜라주 (마우스 패럴랙스 + 픽셀 별 깜빡임)
3. **마퀴** — 흐르는 픽셀 티커
4. **스튜디오 스탯** — 출시작 / 개발중 / 설립 / 본사
5. **한양 온라인 쇼케이스** — 다크 단청 톤, 4-피처 카드, 스크린샷 모자이크
6. **Gem TD 쇼케이스** — 어두운 보라 톤 + 6 보석 칩 + 6-스크린샷 폰 프레임 스트립
7. **Coming Next** — 캐주얼 신작 placeholder (진행도 38% 게이지, ??? 표시)
8. **About / 신념** — 다크 배경 큰 인용구 + 3 기둥 (픽셀 한 점까지 / 한 판만 더 / 플레이어의 시간)
9. **개발 일지** — 3 카드
10. **연락처 CTA** — 빨강 풀블리드 + 이메일/디스코드/X 버튼
11. **푸터** — 단청 밴드 + 4 컬럼

**로고는 세 가지 방향**으로 만들었고 Tweaks에서 바로 전환 가능합니다:
- **Gem** — 단면 깎은 보석에 LJ 인각 (Gem TD 정체성)
- **Mascot** — 갓 쓴 픽셀 무사 (한양 정체성)
- **Tile** — 단청 모서리가 들어간 픽셀 모노그램

**Tweaks 패널**에서 조정 가능:
- 표시 언어 (한국어/English) — 전체 페이지 카피 즉시 전환
- 로고 변형 3종
- 강조 색상 (단청 적/청/녹 + 아메시스트)
- 한지(밝게) / 먹(어둡게) 테마

**다음 단계 제안**: 실제 도메인/이메일이 정해지면 footer와 contact 섹션의 텍스트를 교체, 개발 일지 카드는 클릭 시 실제 글 페이지로 연결, App Store / Play Store 버튼에 실제 링크 연결.

## User

Verifier agent check completed

## Assistant

검증 완료되었습니다 ✓ 페이지 잘 작동합니다.

## User

Save this design as a PDF: 엘제이게임즈 랜딩 페이지.html

## Assistant

_[tool: write_file]_

_[tool: show_html]_

_[tool: open_for_print]_

프린트 창이 열렸을 거예요. 만약 팝업이 차단됐다면 [여기를 클릭](https://019e3016-04b8-7652-87d7-b6722bd3c345.claudeusercontent.com/v1/design/projects/019e3016-04b8-7652-87d7-b6722bd3c345/serve/%EC%97%98%EC%A0%9C%EC%9D%B4%EA%B2%8C%EC%9E%84%EC%A6%88%20%EB%9E%9C%EB%94%A9%20%ED%8E%98%EC%9D%B4%EC%A7%80-print.html?t=b36c75c5b3f44f2ee9b0d573cc68bcbbef54f19069bf135b03c1528d3f6a2f9f.a72fe1d7-84c7-4399-ad2d-ddd8458f8587.885362ef-b991-46d9-a88a-7b08cf4d01e0.1778928093&direct=1)서 열고 Cmd/Ctrl+P → PDF로 저장해 주세요.

