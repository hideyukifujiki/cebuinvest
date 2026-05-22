/**
 * Guide 記事システム（Next.js 完結版）。
 * 将来 CMS（Sanity / Contentful / MicroCMS）に切り替える際は、
 * このファイルの fetchArticles / fetchArticle を差し替えれば良い設計。
 */

export type PillarKey = "study" | "live" | "work" | "invest" | "areas";

export type GuideCategory = {
  slug: string;
  name: string;
  pillar: PillarKey;
  description: string;
  gradient: string;
};

export const guideCategories: GuideCategory[] = [
  // Study
  { slug: "short-term", name: "短期留学", pillar: "study", description: "1〜4 週間の短期集中英語に関する記事。", gradient: "from-navy-900 to-sky-500" },
  { slug: "working-adults", name: "社会人留学", pillar: "study", description: "退職・休職・有給留学のリアル。キャリア接続まで。", gradient: "from-navy-900 to-navy-700" },
  { slug: "family", name: "親子留学", pillar: "study", description: "家族で行くセブ留学の選び方・滞在・費用。", gradient: "from-palm-500 to-sky-500" },
  { slug: "kids-english", name: "子どもの英語教育", pillar: "study", description: "サマースクール・インター校・教育移住。", gradient: "from-sky-500 to-palm-500" },
  { slug: "career-english", name: "キャリア英語", pillar: "study", description: "IELTS、TOEFL、TOEIC、ビジネス英語。", gradient: "from-navy-700 to-sun-500" },
  { slug: "schools", name: "英語学校", pillar: "study", description: "セブ島の主要英語学校を中立比較。", gradient: "from-sky-500 to-navy-700" },
  // Live
  { slug: "cost-of-living", name: "生活費", pillar: "live", description: "セブ島の生活費を実額で比較。", gradient: "from-palm-500 to-teal-400" },
  { slug: "housing", name: "住まい", pillar: "live", description: "コンドミニアム・賃貸・短期滞在の住まい選び。", gradient: "from-sky-500 to-palm-500" },
  { slug: "healthcare", name: "医療", pillar: "live", description: "病院・保険・緊急時の対応をまとめたガイド。", gradient: "from-sky-500 to-teal-400" },
  { slug: "safety", name: "治安", pillar: "live", description: "エリア別・時間帯別・対象別の治安と安全対策。", gradient: "from-teal-400 to-navy-700" },
  { slug: "education", name: "教育", pillar: "live", description: "インター校・現地校・サマースクール・補習校。", gradient: "from-palm-500 to-sky-500" },
  { slug: "relocation", name: "移住", pillar: "live", description: "セブ島移住の準備・実行・定着。", gradient: "from-palm-500 to-sky-500" },
  { slug: "retirement", name: "リタイアメント", pillar: "live", description: "SRRV、人生後半のセブ生活。", gradient: "from-teal-400 to-sun-500" },
  // Work
  { slug: "remote", name: "リモートワーク", pillar: "work", description: "日本の仕事をセブから続けるリモートワーカー向け。", gradient: "from-teal-400 to-sky-500" },
  { slug: "digital-nomad", name: "デジタルノマド", pillar: "work", description: "ノマド向け回線・コワーキング・滞在ガイド。", gradient: "from-teal-400 to-navy-900" },
  { slug: "local-jobs", name: "現地就職", pillar: "work", description: "9G ビザ、日系企業・BPO・観光業の求人と給与。", gradient: "from-navy-900 to-sky-500" },
  { slug: "startup", name: "起業", pillar: "work", description: "セブで現地法人を作る・事業を作る。", gradient: "from-navy-700 to-teal-400" },
  { slug: "bpo", name: "BPO・採用", pillar: "work", description: "オフショア展開・採用のリアル。", gradient: "from-teal-400 to-sun-500" },
  // Invest
  { slug: "education-invest", name: "教育投資", pillar: "invest", description: "子の英語教育・海外経験を投資として見る。", gradient: "from-sun-500 to-palm-500" },
  { slug: "english-invest", name: "英語投資", pillar: "invest", description: "大人の英語投資をキャリアリターンで考える。", gradient: "from-navy-700 to-sky-500" },
  { slug: "family-future", name: "家族の未来", pillar: "invest", description: "家族で海外経験を作る投資の価値。", gradient: "from-palm-500 to-sun-500" },
  { slug: "long-term-stay", name: "長期滞在投資", pillar: "invest", description: "セブを将来の拠点にする準備。", gradient: "from-sky-500 to-teal-400" },
  { slug: "business-invest", name: "ビジネス投資", pillar: "invest", description: "セブを事業拠点・オフショアハブにする。", gradient: "from-navy-700 to-sun-500" },
  { slug: "real-estate", name: "不動産", pillar: "invest", description: "セブ島不動産の冷静な情報整理。", gradient: "from-navy-900 to-sun-500" },
];

export function getCategory(slug: string): GuideCategory | undefined {
  return guideCategories.find((c) => c.slug === slug);
}

export function getCategoriesByPillar(pillar: PillarKey): GuideCategory[] {
  return guideCategories.filter((c) => c.pillar === pillar);
}

// ----------------------------------------------------------------------
// Articles
// ----------------------------------------------------------------------

export type GuideArticle = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  categorySlug: string;
  /** 関連エリア slug 配列 */
  areaSlugs?: string[];
  /** カバー画像のグラデーション（CMS 移行時は image に置換） */
  gradient: string;
  /** 読了目安（分） */
  readingMinutes: number;
  /** 著者表示名 */
  author: string;
};

export const guideArticles: GuideArticle[] = [
  // COST OF LIVING
  { slug: "cebu-living-cost-3-patterns", title: "セブ島移住、月の生活費を「単身/家族/家族＋子1人」で比較してみた", excerpt: "セブ島移住にかかる月の生活費を、単身、夫婦2人、夫婦＋子ども1人の3パターンで比較。家賃、食費、光熱費、交通費、教育費、医療費まで、2026年時点の現実的な予算感を解説します。", publishedAt: "2026.05.15", categorySlug: "cost-of-living", areaSlugs: ["it-park", "lahug", "banilad", "mactan"], gradient: "from-palm-500 to-teal-400", readingMinutes: 17, author: "セブ犬/編集長" },

  // SHORT-TERM
  { slug: "1-week-cebu-study-realistic", title: "1週間のセブ留学で、英語はどこまで変わるか", excerpt: "1週間で英語は完成しない。でも「英語への距離感」は確実に変わる。初日のショックから3日目の変化、初心者・中級者・親子で得られるもの、帰国後の続け方まで、過度な期待をせず最大化するためのリアル。", publishedAt: "2026.05.09", categorySlug: "short-term", areaSlugs: ["lahug", "it-park"], gradient: "from-navy-900 to-sky-500", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "short-term-summer-2-weeks", title: "夏休み2週間プランの組み方｜社会人向け", excerpt: "夏休み2週間で何を目指すべきか。ゴール設計、10日間のスケジュール、事前学習、授業構成、週末の使い方、体調管理、帰国後の継続まで、社会人がムダなく成果を出すための実践的なプランニング。", publishedAt: "2026.05.10", categorySlug: "short-term", areaSlugs: ["lahug", "it-park"], gradient: "from-sky-500 to-teal-400", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "short-term-packing-essentials", title: "セブ短期留学の持ち物リスト2026", excerpt: "セブ短期留学は「持ちすぎない準備」が大切。書類・電子機器・薬・衣類・日用品をカテゴリ別に整理し、1週間／2週間／4週間それぞれの目安、機内持ち込みと預け荷物の振り分け、現地で買えるもの・買えないものまで全網羅したチェックリスト。", publishedAt: "2026.05.11", categorySlug: "short-term", gradient: "from-teal-400 to-navy-700", readingMinutes: 16, author: "セブ犬/編集長" },

  // WORKING ADULTS
  { slug: "remote-work-and-study", title: "リモートワークしながら社会人留学する方法", excerpt: "ITパークで働きながら学ぶハイブリッド型。仕事量の設計、時間割、滞在先、Wi-Fi二重化、目的別の英語学習設計まで実務目線で整理。", publishedAt: "2026.04.28", categorySlug: "working-adults", areaSlugs: ["it-park"], gradient: "from-navy-700 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "toeic-100-up-1month", title: "TOEIC 1ヶ月で100点上げた人の学習スケジュール", excerpt: "模試で弱点把握→1週目は形式理解→2週目は単語と文法→3週目は実戦演習→4週目は復習と本番調整。1ヶ月100点アップを狙うための現実的なスケジュールと、Part別の優先順位を整理。", publishedAt: "2026.04.10", categorySlug: "working-adults", gradient: "from-sky-500 to-navy-900", readingMinutes: 17, author: "セブ犬/編集長" },

  // FAMILY
  { slug: "cebu-family-study-cost-2026", title: "セブ島親子留学の費用、本当のところはいくら？2026年版の現地レポート", excerpt: "親1人・子ども1人で2週間45〜90万円、4週間70〜135万円。学校費だけでは見えない航空券・現地費・週末費まで含めた現実的な総額を整理。", publishedAt: "2026.05.10", categorySlug: "family", areaSlugs: ["lahug", "banilad"], gradient: "from-palm-500 to-sky-500", readingMinutes: 14, author: "セブ犬/編集長" },
  { slug: "family-study-where-to-stay", title: "親子留学、住まいはコンドミニアムかホテルか", excerpt: "セブ島親子留学で家族向け滞在を考えるなら、現実的な選択肢はコンドミニアムかホテル。短期・中期・長期で何が変わるか、家族構成別の選び方を整理。", publishedAt: "2026.04.30", categorySlug: "family", areaSlugs: ["mabolo", "banilad"], gradient: "from-sky-500 to-palm-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "family-school-with-kids-3-5", title: "3〜5歳の子と行ける親子留学校", excerpt: "未就学児向けプログラムを整理。", publishedAt: "2026.04.15", categorySlug: "family", gradient: "from-palm-500 to-teal-400", readingMinutes: 6, author: "セブ犬/編集長" },

  // KIDS ENGLISH
  { slug: "summer-school-cebu-2026", title: "セブ島サマースクール2026のおすすめ", excerpt: "年齢別の選び方と申込タイミング。", publishedAt: "2026.05.05", categorySlug: "kids-english", areaSlugs: ["banilad", "lahug"], gradient: "from-sky-500 to-palm-500", readingMinutes: 8, author: "セブ犬/編集長" },
  { slug: "kids-only-cebu-study", title: "子どもだけのセブ留学、何歳から可能か", excerpt: "ガーディアン契約、寮、付き添いビザの整理。", publishedAt: "2026.04.05", categorySlug: "kids-english", gradient: "from-palm-500 to-sky-500", readingMinutes: 6, author: "セブ犬/編集長" },

  // CAREER ENGLISH
  { slug: "lahug-family-study-life", title: "ラホグで親子留学する生活導線｜住まい・学校・スーパー・週末", excerpt: "ラホグ・JYスクエア周辺で親子留学する場合の住まい、通学ルート、スーパー、クリニック、カフェ、週末の過ごし方を生活者目線で整理。", publishedAt: "2026.05.01", categorySlug: "family", areaSlugs: ["lahug"], gradient: "from-navy-700 to-sun-500", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "toefl-vs-ielts-cebu", title: "TOEFL と IELTS、セブで対策するならどっち？", excerpt: "目的別に判断軸を整理。", publishedAt: "2026.04.18", categorySlug: "career-english", gradient: "from-sun-500 to-navy-700", readingMinutes: 7, author: "セブ犬/編集長" },
  { slug: "business-english-cebu", title: "ビジネス英語特化校、どう選ぶか", excerpt: "プレゼン・会議・交渉に必要なカリキュラム。", publishedAt: "2026.04.02", categorySlug: "career-english", areaSlugs: ["it-park"], gradient: "from-navy-700 to-sky-500", readingMinutes: 8, author: "セブ犬/編集長" },

  // SCHOOLS
  { slug: "cebu-schools-area-guide", title: "セブ島の英語学校、エリア別の選び方", excerpt: "セブシティ／ITパーク／ラホグ／マクタン。生活環境ごとの違い。", publishedAt: "2026.05.06", categorySlug: "schools", areaSlugs: ["lahug", "it-park", "mactan"], gradient: "from-sky-500 to-navy-700", readingMinutes: 8, author: "セブ犬/編集長" },
  { slug: "cebu-schools-3d-academy-detail", title: "3D ACADEMY 編集チームの解説と利用者の声", excerpt: "セブシティ中規模・多国籍校の特徴と向く人。", publishedAt: "2026.04.25", categorySlug: "schools", areaSlugs: ["lahug"], gradient: "from-navy-900 to-sky-500", readingMinutes: 9, author: "セブ犬/編集長" },
  { slug: "cebu-schools-genius-english", title: "Genius English のリゾート型留学とは", excerpt: "マクタン中規模校の特徴と向く人。", publishedAt: "2026.04.12", categorySlug: "schools", areaSlugs: ["mactan"], gradient: "from-teal-400 to-sky-500", readingMinutes: 8, author: "セブ犬/編集長" },

  // HOUSING（追加）
  { slug: "cebu-condo-vs-rental", title: "セブのコンドと一般賃貸、どっちが得？", excerpt: "家賃だけで比べると判断を間違える。コンドと一般賃貸を、家具・光熱費・交通・安全性・修理対応・契約期間まで含めて比較。短期はコンド、長期は一般賃貸が現実解になりやすい理由を整理。", publishedAt: "2026.05.07", categorySlug: "housing", areaSlugs: ["it-park", "business-park", "banilad", "mabolo", "lahug"], gradient: "from-sky-500 to-palm-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "cebu-housing-contract-checklist", title: "セブ賃貸契約のチェックリスト10項目", excerpt: "家賃の内訳・デポジット返金条件・途中解約・家具備品・光熱費・修理負担・退去ルール・建物ルール・周辺環境・契約相手まで。口頭説明に頼らず契約書ベースで確認するための10項目を、英語表現の対訳付きで整理。", publishedAt: "2026.05.12", categorySlug: "housing", areaSlugs: ["it-park", "business-park", "banilad", "mabolo", "lahug"], gradient: "from-palm-500 to-teal-400", readingMinutes: 16, author: "セブ犬/編集長" },
  { slug: "cebu-family-housing-areas", title: "家族で住む向きエリア4選と物件タイプ", excerpt: "バニラッド／マボロ／ラホグ／タリサイ・ミングラニラ方面の4エリアを、家族構成・通学・通勤・買い物・医療・予算の観点で比較。コンド／タウンハウス／戸建て／サービスアパートメントの物件タイプ別の向き不向きと、エリア別おすすめ早見表まで整理。", publishedAt: "2026.05.13", categorySlug: "housing", areaSlugs: ["banilad", "mabolo", "lahug"], gradient: "from-navy-700 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "family-area-compare", title: "家族で住むなら？バニラッド・マボロ・ラホグの徹底比較", excerpt: "家族でセブ島に住むときの定番エリア、バニラッド・マボロ・ラホグを生活目線で徹底比較。学校・買い物・病院・治安・家賃・週末の過ごし方まで、家族像別の向き不向きを整理。", publishedAt: "2026.05.02", categorySlug: "housing", areaSlugs: ["banilad", "mabolo", "lahug"], gradient: "from-sky-500 to-palm-500", readingMinutes: 18, author: "セブ犬/編集長" },

  // HEALTHCARE
  { slug: "cebu-hospital-comparison-2026", title: "セブ島の主要私立病院3院を徹底比較", excerpt: "Chong Hua / Cebu Doctors' University Hospital / Perpetual Succour Hospital を、立地・規模・強み・向いている人で比較。緊急時・日常診療・親子留学・住むエリア別の使い分けと、受診前の準備物まで実用的に整理。", publishedAt: "2026.05.14", categorySlug: "healthcare", areaSlugs: ["cebu-city", "business-park", "lahug", "it-park", "banilad"], gradient: "from-sky-500 to-teal-400", readingMinutes: 16, author: "セブ犬/編集長" },
  { slug: "cebu-insurance-short-vs-long", title: "短期と長期、セブで必要な医療保険の違い", excerpt: "短期は「旅行中のトラブル対策」、長期は「海外生活の医療設計」。海外旅行保険・カード付帯保険・国際医療保険の使い分け、キャッシュレス診療・緊急搬送・持病・歯科の扱い、親子留学とシニア長期滞在で見るべき条件まで整理。", publishedAt: "2026.05.15", categorySlug: "healthcare", gradient: "from-teal-400 to-navy-700", readingMinutes: 16, author: "セブ犬/編集長" },
  { slug: "cebu-pediatric-care-guide", title: "セブで子どもを病院に連れて行く前に｜親が準備すべきこと", excerpt: "クリニックか救急外来かの判断、行きやすい病院のリストアップ、症状を英語で伝えるメモ、保険・支払い・持ち物、Grabか救急車かの判断、受診後の確認まで。親子留学・教育移住の家族が事前に整えておきたい医療準備を全網羅。", publishedAt: "2026.05.16", categorySlug: "healthcare", areaSlugs: ["banilad", "business-park", "lahug", "mactan"], gradient: "from-palm-500 to-sky-500", readingMinutes: 17, author: "セブ犬/編集長" },

  // SAFETY
  { slug: "cebu-safety-by-area-2026", title: "セブ島のエリア別治安マップ2026｜家族・留学生・長期滞在者が知っておきたい地域別の見方", excerpt: "ITパーク・アヤラ・バニラッド・マボロ・ラホグ・SM・コロン・カルボン・マクタン・タリサイの10エリアを治安レベル A〜D で評価。親子留学・単身留学・長期滞在それぞれに向くエリア、夜間の行動ルール、軽犯罪対策まで網羅。", publishedAt: "2026.05.17", categorySlug: "safety", areaSlugs: ["cebu-city", "business-park", "banilad", "it-park", "lahug", "mabolo", "mactan"], gradient: "from-teal-400 to-navy-700", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "cebu-safety-night-rules", title: "セブの夜、これだけ守れば安全という5ルール", excerpt: "夜は徒歩移動しない／Grabを基本にする／スマホと財布を外で見せない／行く場所を選ぶ／飲みすぎず知らない人について行かない。親子留学・初めての滞在でも守れる、夜のセブ島を安心して楽しむための実践ルール。", publishedAt: "2026.04.22", categorySlug: "safety", areaSlugs: ["it-park", "business-park", "cebu-city"], gradient: "from-navy-900 to-teal-400", readingMinutes: 14, author: "セブ犬/編集長" },
  { slug: "cebu-grab-vs-taxi", title: "セブで Grab とタクシー、使い分けの正解", excerpt: "基本はGrab、近距離・昼間・乗り場が整った場所ならタクシー。空港・夜・子ども連れ・病院はGrab、慣れたら昼間の短距離はタクシー。料金だけで判断しないための場面別使い分けと注意点を整理。", publishedAt: "2026.04.08", categorySlug: "safety", areaSlugs: ["it-park", "business-park", "mactan"], gradient: "from-sky-500 to-navy-900", readingMinutes: 15, author: "セブ犬/編集長" },

  // EDUCATION（暮らし側）
  { slug: "cebu-international-schools-3", title: "セブ島の主要インター3校、入学までの完全ガイド", excerpt: "Cebu International School (CIS) / Singapore School Cebu (SSC) / BRIGHT Academy の3校を比較。教育方針、入学までの8ステップ、必要書類、英語準備、家庭タイプ別の向き不向き、日本からの出願スケジュールまで、移住前に整えるべき情報を完全網羅。", publishedAt: "2026.05.03", categorySlug: "education", areaSlugs: ["banilad", "lahug", "mabolo"], gradient: "from-palm-500 to-sky-500", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "cebu-japanese-supplementary-school", title: "セブ島の日本語補習校事情と申込み方法", excerpt: "セブ島に全日制日本人学校はない。土曜の補習授業校で日本の国語・算数を学ぶ「教科書クラス」と「日本語クラス」、対象年齢・申込み・面接・見学、家庭学習とインター校との両立まで、英語と日本語を分けて設計するためのガイド。", publishedAt: "2026.04.20", categorySlug: "education", areaSlugs: ["banilad", "lahug"], gradient: "from-sky-500 to-palm-500", readingMinutes: 15, author: "セブ犬/編集長" },
  { slug: "cebu-education-cost-yearly", title: "セブで子の教育にかかる年間コスト全体像", excerpt: "ローカル私立校 10〜25万ペソ／中価格帯 15〜40万ペソ／国際系 30〜80万ペソ／本格インター 60〜150万ペソ以上。授業料以外の入学金・施設費・英語サポート・日本語教育・送迎まで含めた「初年度総額」と「2年目以降」を分けて整理する考え方。", publishedAt: "2026.04.10", categorySlug: "education", areaSlugs: ["banilad", "lahug", "mabolo"], gradient: "from-navy-700 to-palm-500", readingMinutes: 16, author: "セブ犬/編集長" },

  // RETIREMENT
  { slug: "cebu-srrv-vs-long-stay-visa", title: "セブ島のリタイアメント、SRRVと長期滞在ビザの違いを整理", excerpt: "SRRVと観光ビザ延長型の長期滞在、どちらを選ぶか。リタイアメント生活を前提に、滞在の安定性・初期費用・手続き・向いている人を整理。まず試してから制度を選ぶ現実的なステップまで解説。", publishedAt: "2026.05.04", categorySlug: "retirement", areaSlugs: ["banilad", "lahug", "mactan", "mabolo"], gradient: "from-teal-400 to-sun-500", readingMinutes: 17, author: "セブ犬/編集長" },

  // DIGITAL NOMAD
  { slug: "it-park-coworking-compare", title: "ITパークで働くデジタルノマド向け、回線・コワーキング徹底比較", excerpt: "セブ島ITパークでリモートワークするための回線・モバイル・カフェ・コワーキングの選び方を、仕事スタイル別に徹底比較。回線の二重化、コンドミニアム選び、コワーキング比較まで。", publishedAt: "2026.04.26", categorySlug: "digital-nomad", areaSlugs: ["it-park"], gradient: "from-teal-400 to-navy-900", readingMinutes: 18, author: "セブ犬/編集長" },

  // REMOTE
  { slug: "remote-work-cebu-visa-2026", title: "リモートワーカーがセブ島で使えるビザ最新版", excerpt: "短期滞在型／中期滞在型／デジタルノマド型の3パターンで整理。ビザ免除入国・観光延長・Digital Nomad Visa・9(g)・SRRV のどれを選ぶべきかを、収入源・滞在期間・家族構成・現地就労との違いから判断するための実務ガイド。", publishedAt: "2026.05.09", categorySlug: "remote", areaSlugs: ["it-park", "business-park", "lahug", "mactan"], gradient: "from-teal-400 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "remote-internet-redundancy", title: "セブで回線を二重化する具体的な方法", excerpt: "PLDT・Globe・Converge・Starlink・モバイル・コワーキング・UPSをどう組み合わせるか。「速い回線」より「止まらない構成」。固定Fiber＋別会社モバイル＋電源対策を基本に、家族向け／リモートワーカー向けの実用的な5パターンを解説。", publishedAt: "2026.04.26", categorySlug: "remote", areaSlugs: ["it-park", "business-park", "banilad", "mactan"], gradient: "from-sky-500 to-teal-400", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "remote-tax-and-insurance", title: "リモートワーカーが知っておきたい税金と保険", excerpt: "住民票・居住者判定・海外転出届・国民健康保険・国民年金・PhilHealth・民間医療保険・カード付帯保険・所得補償。日本側とフィリピン側の論点を、会社員・フリーランス・家族帯同のケース別に整理。自由に働くための「守りの設計」。", publishedAt: "2026.04.12", categorySlug: "remote", areaSlugs: ["it-park", "business-park", "banilad"], gradient: "from-navy-700 to-teal-400", readingMinutes: 19, author: "セブ犬/編集長" },

  // LOCAL JOBS
  { slug: "local-job-9g-visa-process", title: "9Gビザ取得の流れと必要書類", excerpt: "9Gビザは特定の雇用主に紐づく就労ビザ。AEP→BI申請→ACR I-Cardまでの7ステップ、本人側と会社側の必要書類、日本発給と現地切替の違い、家族帯同・更新・退職時のダウングレードまで実務目線で整理。", publishedAt: "2026.05.05", categorySlug: "local-jobs", areaSlugs: ["it-park", "business-park", "cebu-city"], gradient: "from-navy-900 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "local-job-salary-market", title: "セブの日本人求人と給与水準2026", excerpt: "日本語CS / バイリンガル事務 / 通訳・翻訳 / 旅行・観光 / 英語学校 / 営業・マーケ / IT・管理職、8職種の月給目安（25,000〜200,000ペソ）。gross/net、ビザサポート、夜勤、勤務地、生活費とのバランスまで含めて求人を見るための実務ガイド。", publishedAt: "2026.04.22", categorySlug: "local-jobs", areaSlugs: ["business-park", "it-park", "mabolo", "mactan"], gradient: "from-sky-500 to-navy-700", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "local-job-jobstreet-tips", title: "JobStreet で良い求人を見極める6つのコツ", excerpt: "給与と業務内容のバランス／Job Descriptionの具体性／会社レビュー／福利厚生とビザサポート／勤務時間とシフト／成長性。求人票の表面ではなく中身を見るための6視点と、面接で聞くべき10の質問。", publishedAt: "2026.04.08", categorySlug: "local-jobs", areaSlugs: ["it-park", "business-park", "mabolo", "mandaue"], gradient: "from-navy-700 to-sky-500", readingMinutes: 14, author: "セブ犬/編集長" },
  { slug: "it-park-work-options-jp", title: "ITパークで働く日本人の選択肢｜日系BPO・現地法人・リモート", excerpt: "セブITパークで働く日本人の主な3つの道。日系BPO・現地法人就職・リモートワークそれぞれの給与水準、ビザ、生活費、長期キャリアパスを比較。", publishedAt: "2026.05.08", categorySlug: "local-jobs", areaSlugs: ["it-park"], gradient: "from-navy-900 to-navy-700", readingMinutes: 19, author: "セブ犬/編集長" },

  // STARTUP
  { slug: "cebu-startup-incorporation-flow", title: "セブで法人を設立するまでの流れ｜SEC登録からBIRまで", excerpt: "SEC eSPARCでの法人登録 → バランガイクリアランス → Mayor's Permit → BIR登録 → 帳簿・インボイス・SSS/PhilHealth/Pag-IBIGまで6ステップ。住所選び、外資規制、フィリピン人パートナー、会計士確保まで、設立後に詰まらないための実務ガイド。", publishedAt: "2026.05.06", categorySlug: "startup", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-navy-700 to-teal-400", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "cebu-startup-entity-type", title: "セブ起業の法人形態｜SEC・Sole Prop・Branch・RO の選び方", excerpt: "SEC法人／個人事業主／支店／駐在員事務所の4形態を、売上発生地・契約主体・スタッフ雇用・親会社リスク・将来拡大の5つの質問で整理。「安く始める」より「後で困らない形」を選ぶための判断軸。", publishedAt: "2026.04.23", categorySlug: "startup", areaSlugs: ["it-park", "business-park"], gradient: "from-sun-500 to-navy-700", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "cebu-startup-negative-list-2026", title: "フィリピン外資規制 Negative List の読み方2026", excerpt: "List A と List B、No foreign equity / 25% / 30% / 40% の意味、小売の払込資本金2,500万ペソ基準、教育・不動産・IT・コンサルの実務論点、Anti-Dummy Law。会社設立前の「地図」として読むための手順。", publishedAt: "2026.04.09", categorySlug: "startup", areaSlugs: ["it-park", "business-park", "mandaue", "cebu-city"], gradient: "from-navy-900 to-sun-500", readingMinutes: 18, author: "セブ犬/編集長" },

  // BPO
  { slug: "bpo-from-scratch-cebu", title: "ゼロからセブで BPO 拠点を立ち上げる手順", excerpt: "事業モデル選定→法人形態→SEC/BIR/LGU→PEZA/BOI→オフィス→回線二重化→採用→マニュアル→品質管理→情報セキュリティ→契約・SLAまで、5〜10名で型を作り20〜50名に拡張するための18ステップ。最初の90日の使い方も。", publishedAt: "2026.05.07", categorySlug: "bpo", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-teal-400 to-sun-500", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "bpo-salary-and-benefits", title: "セブ BPO の給与・福利厚生パッケージ設計", excerpt: "職種別月給レンジ（CSR ₱20-35K、QA/TL ₱35-60K、Manager ₱70-130K）、13th Month/SSS/PhilHealth/Night Differential、Basic+Allowance+Incentive+Benefits+Careerの5要素、コスト/標準/高品質の3パッケージ例。「安く雇う」より「辞めない設計」で考える。", publishedAt: "2026.04.24", categorySlug: "bpo", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-sun-500 to-teal-400", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "bpo-cultural-management", title: "BPO 運営で日本流が失敗する5つの理由", excerpt: "暗黙の了解・細かすぎるマニュアル・日本人管理者の過干渉・減点主義・スピード/責任感の押し付け。5つの典型的な失敗パターンと、「日本品質をセブの現場で再現可能な形に翻訳する」ための運営設計の基本方針。", publishedAt: "2026.04.06", categorySlug: "bpo", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-navy-900 to-teal-400", readingMinutes: 17, author: "セブ犬/編集長" },

  // EDUCATION INVEST
  { slug: "education-invest-roi", title: "子の英語教育投資、10年後のリターンをどう測るか", excerpt: "進学・キャリア・情報格差・自己肯定感・親子対話の5つのリターンと、10年後に測るべき5つの指標。テストスコアではなく「子どもの未来の選択肢」で英語教育を評価する考え方と、継続設計の重要性。", publishedAt: "2026.05.06", categorySlug: "education-invest", areaSlugs: ["banilad", "lahug", "mabolo"], gradient: "from-sun-500 to-palm-500", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "education-invest-stages", title: "段階的に投資する：サマー → 学期 → 長期就学", excerpt: "サマーで海外適性、1学期で学校生活との相性、長期就学で進路設計。3段階で投資判断を分けて、子どもの反応・家族の生活・費用対効果を見ながら次のステージへ進む現実的なロードマップ。年齢別の目的とセブを入口にする意味も。", publishedAt: "2026.04.21", categorySlug: "education-invest", areaSlugs: ["banilad", "lahug", "mactan"], gradient: "from-palm-500 to-sun-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "education-invest-budget", title: "教育投資の家計設計とリスク管理", excerpt: "固定/変動/大型の3層で年間教育費を把握、上限を先に決め、生活防衛資金は削らない。為替・子どもの適性・親のキャリアリスクに備え、撤退ラインを設定する。「一発勝負にしない」教育投資の家計設計と段階的判断。", publishedAt: "2026.04.07", categorySlug: "education-invest", areaSlugs: ["banilad", "lahug", "mactan"], gradient: "from-sky-500 to-palm-500", readingMinutes: 18, author: "セブ犬/編集長" },

  // ENGLISH INVEST
  { slug: "english-invest-roi-career", title: "英語投資の ROI をキャリアで測る方法", excerpt: "応募できる求人数・年収レンジ・仕事内容・海外選択肢・情報アクセス力の5指標で英語投資を測る。短期/中期/長期のリターン分け、実績化の重要性、子どもの英語投資への応用まで。「回収」より「選択肢の拡大」で考える。", publishedAt: "2026.05.04", categorySlug: "english-invest", areaSlugs: ["it-park", "business-park", "lahug"], gradient: "from-navy-700 to-sky-500", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "english-invest-3month-plan", title: "3ヶ月で英語投資を最大化する設計", excerpt: "1ヶ月目は診断と設計、2ヶ月目は実践量、3ヶ月目はキャリア・留学・教育方針への接続。社会人/親子留学/子どもの教育、それぞれの3ヶ月モデルと、後で見える5つの指標、お金をかけるべき部分の判断軸。", publishedAt: "2026.04.18", categorySlug: "english-invest", areaSlugs: ["it-park", "lahug", "business-park"], gradient: "from-sky-500 to-teal-400", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "english-invest-resign-or-not", title: "退職してまで英語投資する価値はあるか", excerpt: "判断軸 5 つと、選んだ人の事例。", publishedAt: "2026.04.02", categorySlug: "english-invest", gradient: "from-teal-400 to-navy-700", readingMinutes: 11, author: "セブ犬/編集長" },

  // FAMILY FUTURE
  { slug: "family-future-step-by-step", title: "家族でセブを試す、段階的なステップ", excerpt: "家族旅行 → 1週間親子留学 → 2週間〜1ヶ月滞在 → サマープログラム → 1学期就学 → 長期移住。6段階で家族のセブ適性を見極める進め方と、子ども・親・家計・目的の4つの判断軸。", publishedAt: "2026.05.02", categorySlug: "family-future", areaSlugs: ["banilad", "lahug", "mabolo", "mactan"], gradient: "from-palm-500 to-sun-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "family-future-dual-career", title: "夫婦のキャリアを両立しながら家族で海外滞在", excerpt: "「片方のキャリアだけを前提にする」失敗を避けるための4パターン。リモートワーク・役割分担・キャリアチェンジ・段階的滞在。直接費用だけでなく機会費用も含めて家族全体の投資として設計する考え方。", publishedAt: "2026.04.16", categorySlug: "family-future", areaSlugs: ["it-park", "business-park", "banilad", "lahug"], gradient: "from-sky-500 to-palm-500", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "family-future-kids-friends", title: "子どもの友達関係・学校継続のリスクと対策", excerpt: "帰国時の接続を意識した滞在設計。", publishedAt: "2026.04.03", categorySlug: "family-future", gradient: "from-sun-500 to-sky-500", readingMinutes: 8, author: "セブ犬/編集長" },

  // LONG TERM STAY
  { slug: "long-stay-srrv-2026", title: "SRRV 取得の最新動向と判断軸 2026", excerpt: "2025年9月の新ガイドライン（40歳以上対象）、年齢別預託金（15,000〜50,000USD）、必要書類、家族帯同、メリット・デメリット。「取得できるか」ではなく「本当に必要か」で考えるための7つの判断軸と段階的取得ステップ。", publishedAt: "2026.05.05", categorySlug: "long-term-stay", areaSlugs: ["mactan", "banilad", "it-park", "lahug"], gradient: "from-sky-500 to-teal-400", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "long-stay-two-base-life", title: "日本とセブの二拠点生活、現実的な設計", excerpt: "5つの滞在比率パターン、目的別エリア選び、住居・仕事・教育・医療・税金・家計・荷物を含めた総合設計。「セブは安い」だけでは見えない日本側の固定費まで合算する考え方と、2週間→1ヶ月→3ヶ月の段階的テスト法。", publishedAt: "2026.04.20", categorySlug: "long-term-stay", areaSlugs: ["it-park", "lahug", "banilad", "mabolo", "mactan", "business-park"], gradient: "from-teal-400 to-navy-700", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "long-stay-condo-or-rental", title: "長期滞在、コンド購入と長期賃貸の判断軸", excerpt: "滞在期間／総額比較／為替／家族構成／建物管理／出口戦略／資金余力／交渉余地の8つの判断軸。「家賃がもったいないから買う」ではなく、家族長期滞在・リタイア・投資目的それぞれに対する現実解。「最初は賃貸、確信が持てたら購入」が最も失敗しにくい。", publishedAt: "2026.04.05", categorySlug: "long-term-stay", areaSlugs: ["business-park", "it-park", "banilad", "mactan", "mandaue"], gradient: "from-navy-700 to-sky-500", readingMinutes: 21, author: "セブ犬/編集長" },

  // BUSINESS INVEST
  { slug: "business-invest-test-to-scale", title: "テスト導入から本格展開へ、5名から30名のスケール術", excerpt: "5→10→15→20→30名の5フェーズで拡大する実践ロードマップ。最初の5名は「将来30名体制の原型」。業務切り出し、マニュアル改善、リーダー育成、品質管理、離職前提設計、日本側の指示改善まで、スケール時に失敗しないための判断軸を網羅。", publishedAt: "2026.05.03", categorySlug: "business-invest", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-navy-700 to-sun-500", readingMinutes: 23, author: "セブ犬/編集長" },
  { slug: "business-invest-foreign-equity", title: "業種別の外国人持株比率と最低資本金", excerpt: "外資100%可能業種でも国内市場向けはUS$200,000、小売は2,500万ペソ、複数店舗は1店舗1,000万ペソ。BPO・小売・飲食・不動産・教育・広告(30%)・人材紹介(25%)・建設(40%)・メディア・警備の業種別目安表と、名義借りを避ける合法的ストラクチャー設計。", publishedAt: "2026.04.17", categorySlug: "business-invest", areaSlugs: ["it-park", "business-park", "mandaue"], gradient: "from-sun-500 to-navy-700", readingMinutes: 21, author: "セブ犬/編集長" },
  { slug: "business-invest-exit-strategy", title: "セブ事業投資の撤退戦略を最初に決める", excerpt: "完全撤退・縮小・売却・パートナー譲渡・資産保有の5つの出口、累積損失・期間・月次赤字・KPIの4基準、事業タイプ別撤退戦略、契約書に入れるべき5条項。「出口がある投資は判断が速くなる」ための実務ガイド。", publishedAt: "2026.04.04", categorySlug: "business-invest", areaSlugs: ["it-park", "business-park", "mandaue", "mactan"], gradient: "from-navy-900 to-sun-500", readingMinutes: 21, author: "セブ犬/編集長" },

  // REAL ESTATE
  { slug: "cebu-real-estate-2026", title: "セブ島の不動産は今買い時か？冷静に見るリスクと前提条件", excerpt: "セブ島不動産の「買い時」を冷静に整理。長期保有・現地利用・現金余力・エリア選別の4条件と、供給増・為替・現地管理・法制度の4リスクから判断軸を解説。煽らない不動産の話。", publishedAt: "2026.04.29", categorySlug: "real-estate", areaSlugs: ["it-park", "business-park", "banilad", "mactan"], gradient: "from-navy-900 to-sun-500", readingMinutes: 16, author: "セブ犬/編集長" },

  // MOALBOAL（島エリア・週末トリップ／ノマド）
  { slug: "moalboal-weekend-trip", title: "モアルボアル週末トリップ完全ガイド｜セブシティから2泊3日", excerpt: "イワシトルネード、カワサン滝、ホワイトビーチ、ダイビング。セブシティから車で約3時間のモアルボアルを、週末で満喫するモデルプランと注意点。", publishedAt: "2026.05.01", categorySlug: "safety", areaSlugs: ["moalboal"], gradient: "from-teal-400 to-sky-500", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "moalboal-nomad-stay", title: "モアルボアルでデジタルノマド｜海と仕事を両立する1〜4週間", excerpt: "海近くの宿、コワーキング、Wi-Fi状況、停電・回線対策。モアルボアルを拠点にリモートワークする場合の現実的な滞在設計。", publishedAt: "2026.04.18", categorySlug: "digital-nomad", areaSlugs: ["moalboal"], gradient: "from-sky-500 to-palm-500", readingMinutes: 14, author: "セブ犬/編集長" },
  { slug: "moalboal-from-cebu-access", title: "セブシティからモアルボアルへ｜バス・Grab・私設バンの行き方", excerpt: "South Bus Terminal発のバス、Grab、私設バン、レンタカー。料金、所要時間、安全性、子連れ・荷物多めの場合の選び方を比較。", publishedAt: "2026.04.03", categorySlug: "safety", areaSlugs: ["moalboal"], gradient: "from-navy-700 to-teal-400", readingMinutes: 10, author: "セブ犬/編集長" },

  // OSLOB（島エリア・観光・日帰り）
  { slug: "oslob-whaleshark-guide", title: "オスロブでジンベエザメと泳ぐ前に読むガイド", excerpt: "アクセス、料金、ベストシーズン、装備、ジンベエザメ観光の賛否、安全に楽しむための注意点。倫理面の議論も含めた中立的なまとめ。", publishedAt: "2026.05.02", categorySlug: "safety", areaSlugs: ["oslob"], gradient: "from-sky-500 to-navy-900", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "oslob-day-trip-plan", title: "オスロブ日帰りプラン｜セブシティ発で1日に詰め込む", excerpt: "早朝出発、ジンベエザメ、ツマログ滝、スミロン島の組み合わせ。所要時間、移動手段、コスト、子連れの場合の注意点。", publishedAt: "2026.04.19", categorySlug: "safety", areaSlugs: ["oslob"], gradient: "from-teal-400 to-navy-900", readingMinutes: 11, author: "セブ犬/編集長" },
  { slug: "oslob-stay-overnight", title: "オスロブで1泊するなら知っておきたいこと｜宿・食事・安全", excerpt: "ジンベエザメは早朝が空いている。日帰りより1泊の方が現実的なケース、宿の選び方、食事、医療、夜の過ごし方まで実用的に整理。", publishedAt: "2026.04.05", categorySlug: "safety", areaSlugs: ["oslob"], gradient: "from-palm-500 to-sky-500", readingMinutes: 10, author: "セブ犬/編集長" },

  // BANTAYAN（島エリア・週末リゾート／長期滞在）
  { slug: "bantayan-weekend-getaway", title: "バンタヤン島週末リトリート｜白砂とゆったり時間を求めて", excerpt: "セブ島北部からフェリーでアクセスする静かな島。週末2泊3日の過ごし方、ビーチ、宿、食事、家族・カップル別のモデルプラン。", publishedAt: "2026.05.03", categorySlug: "safety", areaSlugs: ["bantayan"], gradient: "from-sun-500 to-teal-400", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "bantayan-access-stay", title: "バンタヤン島へのアクセスと宿選び｜セブ市内から半日かけて行く価値", excerpt: "Hagnaya港までの陸路、フェリースケジュール、Santa Fe到着後の移動、宿のランクと予算感。「行きにくいからこそ静か」な島の魅力。", publishedAt: "2026.04.20", categorySlug: "safety", areaSlugs: ["bantayan"], gradient: "from-sky-500 to-sun-500", readingMinutes: 11, author: "セブ犬/編集長" },
  { slug: "bantayan-long-stay-feasibility", title: "バンタヤン島で長期滞在は可能か｜静かに暮らす選択肢", excerpt: "ネット環境、医療、買い物、ビザ、生活費、孤独感。リモートワーカーや早期リタイア層が「島でゆっくり暮らす」を試す場合の現実的な検討材料。", publishedAt: "2026.04.06", categorySlug: "long-term-stay", areaSlugs: ["bantayan"], gradient: "from-teal-400 to-sun-500", readingMinutes: 13, author: "セブ犬/編集長" },

  // CEBU CITY（都市・住居型・各エリア特化）
  { slug: "cebu-city-living-cost-monthly", title: "セブシティ中心部で1ヶ月暮らす実額レポート", excerpt: "Fuente・Capitol・Ramos周辺で実際にコンドミニアム生活を1ヶ月続けた場合の家賃・食費・交通費・通信費・娯楽費。日本人単身のリアルな月額。", publishedAt: "2026.05.10", categorySlug: "cost-of-living", areaSlugs: ["cebu-city"], gradient: "from-navy-700 to-sky-500", readingMinutes: 19, author: "セブ犬/編集長" },
  { slug: "cebu-city-condo-areas-compare", title: "セブシティのコンドミニアム集積エリア徹底比較｜Capitol・Fuente・Ramos・Banawa", excerpt: "セブ市内の代表的なコンド集積エリア4つを、家賃水準・治安・買い物・通勤・交通渋滞・住みやすさで比較。日本人向けに住むエリアの選び方を解説。", publishedAt: "2026.04.27", categorySlug: "housing", areaSlugs: ["cebu-city"], gradient: "from-sky-500 to-navy-700", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "cebu-city-getting-around", title: "セブシティ初心者の移動ガイド｜Grab・タクシー・ジプニーの使い分け", excerpt: "セブシティ中心部の移動手段、所要時間、料金感、夜間の安全、子連れでの移動。観光客では見えにくい「住む人の移動」を整理。", publishedAt: "2026.04.13", categorySlug: "safety", areaSlugs: ["cebu-city"], gradient: "from-teal-400 to-navy-900", readingMinutes: 16, author: "セブ犬/編集長" },

  // IT PARK（特化）
  { slug: "it-park-condo-detailed-compare", title: "ITパーク周辺コンドミニアム徹底比較｜Avida・Calyx・Solinea・The Padgett", excerpt: "ITパーク内・徒歩圏内の主要コンド5棟を、家賃・広さ・設備・管理状態・住人層・通勤動線で比較。リモートワーカー・単身・カップル向け。", publishedAt: "2026.05.11", categorySlug: "housing", areaSlugs: ["it-park"], gradient: "from-sky-500 to-navy-700", readingMinutes: 24, author: "セブ犬/編集長" },
  { slug: "it-park-remote-worker-day", title: "ITパーク勤務リモートワーカーの1日｜カフェ・コワーキング・夜食事情", excerpt: "朝のコーヒー、昼の打ち合わせ、午後のカフェ作業、夕方のジム、夜の食事。ITパークで日本企業の仕事を続ける人のリアルな1日。", publishedAt: "2026.04.28", categorySlug: "remote", areaSlugs: ["it-park"], gradient: "from-teal-400 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "it-park-english-schools-3", title: "ITパーク周辺の英語学校3選｜働きながら通える夜・週末プラン", excerpt: "ITパーク勤務者や在住者がアフター5や週末に通える英語学校を3校紹介。料金、レッスン時間、特徴、通学のしやすさで比較。", publishedAt: "2026.04.14", categorySlug: "schools", areaSlugs: ["it-park"], gradient: "from-navy-900 to-sky-500", readingMinutes: 10, author: "セブ犬/編集長" },

  // BUSINESS PARK（特化）
  { slug: "business-park-family-housing", title: "セブビジネスパーク周辺の家族向けコンドミニアム", excerpt: "Ayala至近で家族で住める2BR・3BRコンドミニアム。学校、買い物、病院へのアクセスと、家賃帯ごとの選び方。", publishedAt: "2026.05.09", categorySlug: "housing", areaSlugs: ["business-park"], gradient: "from-navy-700 to-sky-500", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "business-park-expat-life", title: "ビジネスパーク勤務の駐在員ライフ｜住む・食べる・週末", excerpt: "ビジネスパーク勤務の日本人駐在員はどう暮らしているか。住居選び、外食、ジム、通勤、子どもの学校、週末の過ごし方を実例で。", publishedAt: "2026.04.26", categorySlug: "local-jobs", areaSlugs: ["business-park"], gradient: "from-navy-900 to-navy-700", readingMinutes: 22, author: "セブ犬/編集長" },
  { slug: "business-park-small-office-startup", title: "ビジネスパークでスモール起業｜オフィス物件と業種選び", excerpt: "ビジネスパーク内のサービスオフィス、コワーキング、Grade Aオフィスの選択肢。小規模で立ち上げる場合の業種、賃料、ライセンス、注意点。", publishedAt: "2026.04.12", categorySlug: "startup", areaSlugs: ["business-park"], gradient: "from-sky-500 to-navy-900", readingMinutes: 24, author: "セブ犬/編集長" },

  // LAHUG（特化）
  { slug: "lahug-english-schools-mapping", title: "ラホグ周辺の英語学校マッピング｜3D ACADEMY・CPI・周辺校", excerpt: "ラホグ・JYスクエア周辺にある日本人向け英語学校を地図ベースでマッピング。学校特性、立地、寮、通学距離で整理。", publishedAt: "2026.05.08", categorySlug: "schools", areaSlugs: ["lahug"], gradient: "from-sky-500 to-navy-700", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "lahug-housing-rent-report", title: "ラホグの家賃相場と住みやすさ｜JYスクエア周辺の実況", excerpt: "ラホグ・JYスクエア周辺のコンドミニアム家賃帯、アパートメント相場、生活インフラ、外食、買い物、夜の雰囲気を住む人目線で整理。", publishedAt: "2026.04.25", categorySlug: "housing", areaSlugs: ["lahug"], gradient: "from-navy-700 to-sky-500", readingMinutes: 18, author: "セブ犬/編集長" },
  { slug: "lahug-commute-routes", title: "ラホグから職場・学校・モールへの通学通勤ルート", excerpt: "ラホグからITパーク、アヤラ、SM、バニラッド、マクタンへの移動時間・渋滞・移動手段。住む前に知っておきたい毎日の動線。", publishedAt: "2026.04.11", categorySlug: "safety", areaSlugs: ["lahug"], gradient: "from-teal-400 to-navy-700", readingMinutes: 10, author: "セブ犬/編集長" },

  // BANILAD（特化）
  { slug: "banilad-international-school-map", title: "バニラッドのインター校アクセスマップ｜CIS・BRIGHT Academy・周辺住宅", excerpt: "バニラッド周辺のインター校とその通学圏にある住宅エリアをマッピング。送迎時間、コンド・タウンハウスの選択肢、家族向け住みやすさ。", publishedAt: "2026.05.07", categorySlug: "education", areaSlugs: ["banilad"], gradient: "from-palm-500 to-sky-500", readingMinutes: 17, author: "セブ犬/編集長" },
  { slug: "banilad-family-lifestyle", title: "バニラッドのスーパー・カフェ・週末スポット家族編", excerpt: "バニラッドで子育てする家庭の日常。買い物、外食、習い事、週末の遊び場、コミュニティ。「ファミリー向け定番エリア」のリアル。", publishedAt: "2026.04.23", categorySlug: "family-future", areaSlugs: ["banilad"], gradient: "from-sky-500 to-palm-500", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "banilad-long-stay-family", title: "バニラッドで家族長期滞在する家庭のリアル", excerpt: "バニラッドに3年以上住む家庭は何を選び、何に困っているか。住居、学校、医療、移動、子どもの友人関係、日本との接続。", publishedAt: "2026.04.09", categorySlug: "long-term-stay", areaSlugs: ["banilad"], gradient: "from-palm-500 to-navy-700", readingMinutes: 13, author: "セブ犬/編集長" },
  { slug: "banilad-shopping-malls-compare", title: "バニラッド周辺ショッピングモール比較｜ガイサノカントリーモール・バニラッドタウンセンター", excerpt: "ガイサノカントリーモール、バニラッドタウンセンターを中心に、Banilad周辺のスーパー、食料品、子ども用品、外食、銀行を生活者目線で比較。", publishedAt: "2026.04.20", categorySlug: "cost-of-living", areaSlugs: ["banilad"], gradient: "from-navy-900 to-palm-500", readingMinutes: 17, author: "セブ犬/編集長" },

  // MABOLO（特化）
  { slug: "mabolo-access-to-main-areas", title: "マボロから主要エリアへの移動時間ガイド", excerpt: "マボロからAyala、SM、ITパーク、ビジネスパーク、マクタン、バニラッドへの実測移動時間。朝夕の渋滞、Grab代、通勤・通学の現実。", publishedAt: "2026.05.06", categorySlug: "safety", areaSlugs: ["mabolo"], gradient: "from-navy-700 to-sky-500", readingMinutes: 11, author: "セブ犬/編集長" },
  { slug: "mabolo-japanese-family-housing", title: "マボロの日本人ファミリー向け住宅事情", excerpt: "マボロは日本人ファミリーが選ぶ定番エリアの一つ。コンド、サービスアパート、戸建ての選択肢と、家族で住む場合の判断軸。", publishedAt: "2026.04.22", categorySlug: "housing", areaSlugs: ["mabolo"], gradient: "from-sky-500 to-palm-500", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "mabolo-daily-life", title: "マボロで暮らす日常｜買い物・医療・食事", excerpt: "マボロ在住者の日常生活。近所のスーパー、薬局、クリニック、食事、子どもの遊び場、宅配サービス。住む前に知っておきたい生活感。", publishedAt: "2026.04.10", categorySlug: "healthcare", areaSlugs: ["mabolo"], gradient: "from-palm-500 to-teal-400", readingMinutes: 11, author: "セブ犬/編集長" },

  // MACTAN（特化）
  { slug: "mactan-resort-living-reality", title: "マクタンで暮らすリゾート生活のリアル｜本島との行き来", excerpt: "マクタンの住宅選択肢、リゾート感と日常生活のギャップ、本島への橋の渋滞、子育て・通学・通勤の難しさと魅力。", publishedAt: "2026.05.05", categorySlug: "housing", areaSlugs: ["mactan"], gradient: "from-teal-400 to-sky-500", readingMinutes: 13, author: "セブ犬/編集長" },
  { slug: "mactan-english-schools-family", title: "マクタンの英語学校と親子留学｜海の近くで学ぶ選択", excerpt: "マクタンの主要英語学校とリゾート型親子留学の特徴。授業内容、寮、週末アクティビティ、本島系学校との違い。", publishedAt: "2026.04.21", categorySlug: "family", areaSlugs: ["mactan"], gradient: "from-sky-500 to-teal-400", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "mactan-two-base-with-mainland", title: "マクタンと本島の二拠点暮らしという選択", excerpt: "マクタンに住みながら本島の学校・職場に通う、あるいは本島に住みながらマクタンで週末を過ごす。両エリアを行き来する暮らしの現実。", publishedAt: "2026.04.08", categorySlug: "long-term-stay", areaSlugs: ["mactan"], gradient: "from-teal-400 to-navy-700", readingMinutes: 12, author: "セブ犬/編集長" },

  // MANDAUE（特化）
  { slug: "mandaue-cost-focused-life", title: "マンダウエで暮らすコスト重視ライフ｜家賃と生活費", excerpt: "セブ市内中心部より家賃を抑えやすいマンダウエ。住居、買い物、外食、通信、移動のコスト感を実額ベースで整理。", publishedAt: "2026.05.04", categorySlug: "cost-of-living", areaSlugs: ["mandaue"], gradient: "from-palm-500 to-teal-400", readingMinutes: 11, author: "セブ犬/編集長" },
  { slug: "mandaue-base-for-business", title: "マンダウエに拠点を持つ｜起業・倉庫・物流の選択肢", excerpt: "マンダウエは製造、物流、卸、BPO拠点として使いやすい。オフィス物件、倉庫、業種、人材、許認可の論点を整理。", publishedAt: "2026.04.19", categorySlug: "startup", areaSlugs: ["mandaue"], gradient: "from-sun-500 to-navy-700", readingMinutes: 12, author: "セブ犬/編集長" },
  { slug: "mandaue-family-commute", title: "マンダウエから通勤・通学する家族のリアル", excerpt: "マンダウエに住んで本島の学校や職場に通う家族の動線。橋・渋滞・送迎、子どもの通学、生活圏のバランス。", publishedAt: "2026.04.07", categorySlug: "safety", areaSlugs: ["mandaue"], gradient: "from-navy-700 to-teal-400", readingMinutes: 11, author: "セブ犬/編集長" },
];

export function getArticle(slug: string): GuideArticle | undefined {
  return guideArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): GuideArticle[] {
  return guideArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getArticlesByPillar(pillar: PillarKey): GuideArticle[] {
  const categorySlugs = getCategoriesByPillar(pillar).map((c) => c.slug);
  return guideArticles.filter((a) => categorySlugs.includes(a.categorySlug));
}

export function getLatestArticles(limit = 6): GuideArticle[] {
  return [...guideArticles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

/**
 * 「そのエリアに特化した記事」だけを返す。
 *
 * 特化記事の条件: areaSlugs が 1 つだけで、それが当該エリアと一致するもの。
 * 複数エリアにタグ付けされた汎用記事（不動産特集・留学費用など）は除外する。
 * これにより /areas/[slug] や /guide のエリアセクションには、本当にその
 * エリアを扱う記事だけが表示される。
 *
 * 並び順は publishedAt 降順（新着順）。
 */
export function getArticlesByArea(areaSlug: string, limit?: number): GuideArticle[] {
  const filtered = guideArticles
    .filter((a) => a.areaSlugs?.length === 1 && a.areaSlugs[0] === areaSlug)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

/**
 * エリア特化記事（areaSlugs が 1 つだけの記事）を新着順で返す。
 * /areas トップで「エリアに紐づく最新記事」を表示するのに使う。
 * 複数エリアタグの汎用記事は含まない。
 */
export function getLatestAreaTaggedArticles(limit = 6): GuideArticle[] {
  return [...guideArticles]
    .filter((a) => a.areaSlugs?.length === 1)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
