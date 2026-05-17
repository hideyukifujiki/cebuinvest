/**
 * 6 つの学び方トピックの完全データ。
 * /study トップのカード一覧と各個別ページの両方から参照される。
 */

export type StudyTopicSlug =
  | "short-term"
  | "working-adults"
  | "family"
  | "kids-english"
  | "career-english"
  | "schools";

export type StudyTopic = {
  slug: StudyTopicSlug;
  eyebrow: string;
  title: string;
  /** カード／一覧用の 1 行説明 */
  shortDescription: string;
  /** 詳細ページ Hero 用のリード文 */
  heroLead: string;
  tags: string[];
  /** Hero グラデーション */
  gradient: string;
  /** カードのアイコン名（lucide-react） */
  iconName: "Clock" | "Briefcase" | "Users" | "BookOpen" | "GraduationCap" | "Building";
  /** 関連する guide.ts のカテゴリ slug */
  relatedGuideCategory: string;
  /** 詳細ページの主要セクション */
  overview: string;
  durationGuideline: string;
  budgetGuideline: string;
  forWhom: string[];
  notForWhom: string[];
  selectionPoints: { title: string; description: string }[];
  recommendedAreas: { slug: string; name: string; nameEn: string; reason: string }[];
  faqs: { q: string; a: string }[];
  /** 同テーマで関連性が強い他の学び方 slug */
  relatedTopics: StudyTopicSlug[];
};

export const studyTopics: StudyTopic[] = [
  // ------------------------------------------------------------------
  // 短期集中英語
  // ------------------------------------------------------------------
  {
    slug: "short-term",
    eyebrow: "SHORT-TERM",
    title: "短期集中英語",
    shortDescription:
      "1〜4週間。仕事の合間や夏休みに、英語環境にどっぷり浸かる。",
    heroLead:
      "1 週間〜1 ヶ月で英語の感覚をリセットし、学習習慣を取り戻す。社会人のリフレッシュ留学、夏休みの短期留学にぴったりの選択肢。",
    tags: ["1週間〜", "マンツーマン中心", "社会人向け"],
    gradient: "from-navy-900 via-sky-500 to-teal-400",
    iconName: "Clock",
    relatedGuideCategory: "short-term",
    overview:
      "マンツーマン中心の授業を1日 6〜10 時間こなし、英語環境にどっぷり浸かるスタイル。期間が短いため、伸ばす力（リスニング・スピーキング・語彙）を絞って学ぶことがコツ。",
    durationGuideline: "1〜4 週間が中心。1 週間でも英語に触れる時間が日常の数倍になる。",
    budgetGuideline:
      "授業料＋滞在費＋食費で、1 週間 8〜15 万円、1 ヶ月 15〜35 万円が目安。航空券別。",
    forWhom: [
      "まとまった休みは取れないが、英語にどっぷり浸かる体験をしたい社会人",
      "夏休み・年末年始・GWを利用する大学生",
      "ワーホリ・長期留学前の準備として体験したい人",
    ],
    notForWhom: [
      "短期間でスコアを大幅に上げたい人（最低 1 ヶ月以上が必要）",
      "学習よりも観光メインで考えている人（半日授業の学校を要検討）",
    ],
    selectionPoints: [
      { title: "授業数（コマ数）", description: "1 日 6〜10 コマ。集中度合いと自分の体力で選ぶ。" },
      { title: "国籍比率", description: "日本人が多い学校・少ない学校で雰囲気が大きく変わる。" },
      { title: "滞在形態", description: "校内寮／外部コンド／ホームステイ。生活コストと自由度のバランス。" },
      { title: "空港送迎・サポート", description: "短期だからこそ、到着初日のサポートの厚さが体験を左右する。" },
    ],
    recommendedAreas: [
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "語学学校が集積。徒歩圏で完結する短期留学に最適。" },
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "24h カフェ・コワーキングで自習しやすい都市型。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "海近くでリゾート型の短期留学。" },
    ],
    faqs: [
      { q: "1 週間でも意味はありますか？", a: "英語環境に身を置く体験と、学習習慣のリセットには十分有効です。スコアを大きく上げたい場合は 1 ヶ月以上を推奨します。" },
      { q: "週末は授業がありますか？", a: "学校により異なりますが、土日休みが一般的。週末は観光や自習に充てる人が多いです。" },
      { q: "観光と両立できますか？", a: "可能です。短期留学の方の多くは、平日授業＋週末で近場のリゾート（マクタン、ボホール島など）を楽しみます。" },
    ],
    relatedTopics: ["working-adults", "career-english"],
  },

  // ------------------------------------------------------------------
  // 社会人留学
  // ------------------------------------------------------------------
  {
    slug: "working-adults",
    eyebrow: "WORKING ADULTS",
    title: "社会人留学",
    shortDescription:
      "キャリアにつながる英語へ。1〜3ヶ月、本気で投資する。",
    heroLead:
      "キャリアの選択肢を広げるための英語投資。1〜3 ヶ月のまとまった期間で、ビジネスで使える英語を本気で身につける。",
    tags: ["1〜3ヶ月", "ビジネス英語", "キャリアアップ"],
    gradient: "from-navy-900 to-navy-700",
    iconName: "Briefcase",
    relatedGuideCategory: "working-adults",
    overview:
      "退職・転職・休職を活用した社会人向けの中期留学。マンツーマンで弱点を補強し、グループでアウトプットを増やす設計が中心。",
    durationGuideline: "1〜3 ヶ月が一般的。本気で TOEIC を上げるなら 2 ヶ月以上を推奨。",
    budgetGuideline:
      "授業料＋滞在費＋生活費で、1 ヶ月 20〜35 万円、3 ヶ月で 50〜90 万円が目安。",
    forWhom: [
      "転職前後に英語をブラッシュアップしたい 20〜40 代",
      "退職留学を考えている人",
      "今の仕事で英語の使用機会を増やしたいビジネスパーソン",
    ],
    notForWhom: [
      "1 週間程度の短期で済ませたい人（短期集中英語へ）",
      "観光中心で気軽に過ごしたい人",
    ],
    selectionPoints: [
      { title: "ビジネス英語コース", description: "プレゼン・会議・交渉など実務に即したコースの有無。" },
      { title: "年齢層と職種", description: "同年代・同職種のコミュニティがあると学習継続しやすい。" },
      { title: "ITパーク近接", description: "コワーキング・カフェ・ジムが揃い、社会人の生活リズムに合う。" },
      { title: "週末プログラム", description: "ボランティア・ビジネス見学・現地企業訪問など。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "社会人留学の本流。テック企業密集地。" },
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "ビジネス英語特化校が複数。落ち着いた学習環境。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "週末リゾートでリフレッシュしながら学ぶ。" },
    ],
    faqs: [
      { q: "退職留学は周りからどう見られますか？", a: "近年は前向きに評価する企業が増えています。帰国後のキャリアパスは出発前に整理しておくと安心です。" },
      { q: "TOEIC は何点まで伸ばせますか？", a: "現状スコアと学習時間によりますが、2〜3 ヶ月本気で取り組むと 100〜200 点アップは現実的です。" },
      { q: "ビザはどうなりますか？", a: "観光ビザでの入国後、現地で延長手続きが可能です。59 日まで滞在可能で、それ以上は学校が SSP・ACR I-Card 取得をサポートします。" },
    ],
    relatedTopics: ["short-term", "career-english"],
  },

  // ------------------------------------------------------------------
  // 親子留学
  // ------------------------------------------------------------------
  {
    slug: "family",
    eyebrow: "FAMILY",
    title: "親子留学",
    shortDescription:
      "親も子も、同じ国で同じ時間に英語を学ぶ。家族の海外経験。",
    heroLead:
      "親も子も、同じ国で同じ時間に英語を学ぶ。家族の海外経験は、英語スキル以上の「人生の幅」を子どもに残します。",
    tags: ["2週間〜", "6歳〜", "ファミリープラン"],
    gradient: "from-palm-500 via-sky-500 to-navy-700",
    iconName: "Users",
    relatedGuideCategory: "family",
    overview:
      "親と子どもが同じ語学学校または近接の学校に通い、午後は家族で過ごすスタイル。短期は 2 週間から、長期は数ヶ月〜半年まで。教育移住の入口にも。",
    durationGuideline: "2 週間〜半年。最初は短期で試運転 → 数ヶ月の本番、というステップが一般的。",
    budgetGuideline:
      "親子 2 人で 1 ヶ月 35〜70 万円が目安。子どもの年齢・滞在グレードで変動。",
    forWhom: [
      "夏休み・春休みを使って親子で海外経験をしたい家庭",
      "教育移住を検討する前の試運転として",
      "子どもの英語環境を本気で考え始めた親",
    ],
    notForWhom: [
      "親が完全に休暇モードで過ごしたい場合（学校通学が必須）",
      "子どもがまだ 3 歳未満の場合（一部学校のみ対応）",
    ],
    selectionPoints: [
      { title: "親子プランの有無", description: "親と子のクラス時間が揃っているか、保育・ナニーがあるか。" },
      { title: "子どもの年齢対応", description: "6 歳〜が一般的。3〜5 歳対応校は限定的。" },
      { title: "滞在環境", description: "ファミリー向けコンド／ホテル／ホームステイ。安全性と利便性。" },
      { title: "送り迎えの距離", description: "親と子の学校が徒歩圏内かどうか。" },
      { title: "週末プログラム", description: "家族向けアクティビティの有無（海・自然・文化体験）。" },
    ],
    recommendedAreas: [
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "親子向け学校が多く、家族滞在に向いた住宅地。" },
      { slug: "banilad", name: "バニラッド", nameEn: "Banilad", reason: "インター校とファミリー向け住環境。教育移住の本命。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "リゾートと両立する家族向け留学。" },
    ],
    faqs: [
      { q: "子どもは何歳から参加できますか？", a: "学校により異なりますが、6 歳前後から受け入れる学校が多いです。3〜5 歳向けのプログラムを持つ学校もあります。" },
      { q: "親が授業中、子どもはどう過ごしますか？", a: "親子留学プランでは、子どもも同時間帯にレッスンを受けるのが基本。プリスクール併設校もあります。" },
      { q: "夫婦のうち片方だけ働きながら可能ですか？", a: "可能です。リモートワークしながら子の付き添いをする親も増えています。マボロ・バニラッドの長期滞在向けコンドが人気です。" },
      { q: "学校の長期休暇とどう合わせますか？", a: "夏休み（7〜8 月）・春休み（3〜4 月）に集中しますが、近年は長期休暇前後の数週間も含めて取りに行く家庭が増えています。" },
    ],
    relatedTopics: ["kids-english", "schools"],
  },

  // ------------------------------------------------------------------
  // 子どもの英語教育
  // ------------------------------------------------------------------
  {
    slug: "kids-english",
    eyebrow: "KIDS",
    title: "子どもの英語教育",
    shortDescription:
      "セブの学校・サマースクール・ホームステイ。教育移住の入口にも。",
    heroLead:
      "セブで「子どもに英語環境を与える」選択肢を整理。サマースクール、長期インター就学、教育移住まで、段階的な検討ができます。",
    tags: ["サマー", "インター", "教育移住"],
    gradient: "from-sky-500 via-palm-500 to-navy-700",
    iconName: "BookOpen",
    relatedGuideCategory: "kids-english",
    overview:
      "子どもの英語教育を、サマースクール（短期）からインターナショナルスクール就学（長期）まで段階的に検討。子どもの年齢、家族の方針、教育コストで選択肢が変わる。",
    durationGuideline: "サマー 2〜4 週間／学期単位 3〜4 ヶ月／年単位の長期就学。",
    budgetGuideline:
      "サマースクール 10〜25 万円／学期、インター就学 年間 50〜200 万円（学校により大差）。",
    forWhom: [
      "夏休みに子どもへ英語環境を体験させたい家庭",
      "中長期で子どもの英語教育を考えたい親",
      "教育移住を視野に入れる家族",
    ],
    notForWhom: [
      "親が滞在せず子どもだけで送り出したい場合（年齢制限あり、要確認）",
    ],
    selectionPoints: [
      { title: "年齢別の選択肢", description: "幼児（3〜6）／小学生／中学生／高校生で選択肢が異なる。" },
      { title: "学校のタイプ", description: "インターナショナル／ローカル＋アフタースクール／ホームスクール。" },
      { title: "学習言語と方針", description: "完全英語／一部現地語／IB／アメリカン／英国スタイル。" },
      { title: "親の在留体制", description: "親同行が必要な年齢か、寮対応か、ガーディアン契約か。" },
      { title: "帰国後の接続", description: "日本の学校に戻る場合の単位認定・受験対策。" },
    ],
    recommendedAreas: [
      { slug: "banilad", name: "バニラッド", nameEn: "Banilad", reason: "CIS、Singapore School など主要インター校が集中。教育移住の中心。" },
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "サマースクール・親子留学に向く立地。" },
      { slug: "mabolo", name: "マボロ", nameEn: "Mabolo", reason: "日本人ファミリーが多く、子どもの友達ができやすい。" },
    ],
    faqs: [
      { q: "インター校の入学は難しいですか？", a: "学校により英語面談・志願書類が必要です。早めの準備が望ましく、特に学年途中の入学は枠が限られます。" },
      { q: "帰国後、日本の学校に戻れますか？", a: "公立小・中は基本的に編入可能ですが、学習内容の差を埋めるサポートが必要な場合があります。私立中学受験を考える場合は影響を要確認。" },
      { q: "サマースクールはいつ申し込みますか？", a: "3〜4 月までに枠が埋まる学校が多いです。1 月までに候補を絞ると安心。" },
      { q: "子どもだけで参加できる年齢は？", a: "中学生（13 歳前後）以上で受け入れる学校が一般的。年齢が低いほど親の付き添いが推奨されます。" },
    ],
    relatedTopics: ["family", "schools"],
  },

  // ------------------------------------------------------------------
  // キャリア英語・資格
  // ------------------------------------------------------------------
  {
    slug: "career-english",
    eyebrow: "CAREER",
    title: "キャリア英語・資格",
    shortDescription:
      "IELTS、TOEFL、TOEIC、ビジネス英語。目標スコアで逆算。",
    heroLead:
      "進学・転職・移住・MBA。「具体的なスコアやスキル」が必要な人に向けた、目標逆算型の英語投資。",
    tags: ["IELTS", "TOEFL", "TOEIC", "ビジネス英語"],
    gradient: "from-navy-700 via-sun-500 to-navy-900",
    iconName: "GraduationCap",
    relatedGuideCategory: "career-english",
    overview:
      "資格スコアやビジネスコミュニケーションが目的の留学。テストスコアコースは学校選びの幅が狭まる一方、スコア保証コースを持つ学校もある。",
    durationGuideline: "TOEIC 集中：1〜2 ヶ月／IELTS・TOEFL：2〜6 ヶ月。",
    budgetGuideline:
      "スコア保証コース 1 ヶ月で 25〜45 万円、IELTS 集中 3 ヶ月で 80〜150 万円が目安。",
    forWhom: [
      "海外大学・大学院・MBA 進学希望者",
      "移住・ビザ取得に英語スコアが必要な人",
      "外資系・海外赴任を目指す転職層",
    ],
    notForWhom: [
      "総合的な英会話力を伸ばしたい人（一般英語コースへ）",
      "短期間で結果を出したい人（最低 1〜2 ヶ月は必要）",
    ],
    selectionPoints: [
      { title: "資格特化コースの有無", description: "IELTS・TOEFL・TOEIC それぞれの専門コース。" },
      { title: "スコア保証", description: "保証コースは入学要件・違反時の対応も含めて確認。" },
      { title: "講師の質", description: "ネイティブ／ノンネイティブ、テスト経験者比率。" },
      { title: "教材と模試", description: "公式教材使用、週次模試、スコア分析。" },
      { title: "スピーキング対策", description: "IELTS スピーキングはローカル講師の場合、ネイティブ模試の頻度を要確認。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "社会人留学・キャリア組の集積地。学習リズムを作りやすい。" },
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "IELTS・TOEFL 特化校が複数集まる。" },
    ],
    faqs: [
      { q: "IELTS のスピーキングはセブで対策できますか？", a: "可能です。多くの学校でネイティブ講師の模試・フィードバックが受けられます。事前に頻度を確認してください。" },
      { q: "スコア保証コースの注意点は？", a: "出席率・宿題提出など条件があります。違反時の保証無効化条項を契約前に確認しましょう。" },
      { q: "TOEIC 600 → 800 にしたい場合の期間は？", a: "本気で取り組めば 2〜3 ヶ月が目安。週末・夜学習も含めた総学習時間で決まります。" },
    ],
    relatedTopics: ["working-adults", "short-term"],
  },

  // ------------------------------------------------------------------
  // 英語学校で選ぶ
  // ------------------------------------------------------------------
  {
    slug: "schools",
    eyebrow: "SCHOOLS",
    title: "英語学校で選ぶ",
    shortDescription:
      "セブ島の主要校をエリア・特徴・規模・価格帯で中立比較。",
    heroLead:
      "「学校から選ぶ」という入口。エリア・規模・国籍比率・カリキュラム・価格を中立比較。ランキングではなく、判断軸で選びましょう。",
    tags: ["中立比較", "エリア別", "規模別"],
    gradient: "from-sky-500 via-navy-700 to-palm-500",
    iconName: "Building",
    relatedGuideCategory: "schools",
    overview:
      "セブ島の英語学校は 50 校以上あり、規模・国籍比率・カリキュラム・滞在形態・価格帯で大きく異なる。判断軸を持って絞り込むのがコツ。",
    durationGuideline: "学校選びは留学の 50%。1〜2 ヶ月かけて 3〜5 校に絞り込むのが理想。",
    budgetGuideline:
      "学校による幅が大きい：低価格帯 1 ヶ月 12 万円〜、高価格帯 1 ヶ月 35 万円〜。",
    forWhom: [
      "自分の目的・期間が既に決まっている人",
      "複数校を比較してから決めたい人",
    ],
    notForWhom: [
      "目的が漠然としている人（先に Study Topics で軸を決める）",
    ],
    selectionPoints: [
      { title: "エリア", description: "セブシティ（ラホグ・ITパーク）／マクタン／バニラッド。生活感が大きく異なる。" },
      { title: "規模", description: "大規模（200 名超）／中規模／小規模。サポートの厚さと自由度のバランス。" },
      { title: "国籍比率", description: "日本人比率の高低、台湾・韓国・ベトナムなどの混在度。" },
      { title: "カリキュラム", description: "マンツーマン中心／グループ中心、専門コースの有無。" },
      { title: "滞在形態", description: "校内寮／外部コンド／ホームステイ。" },
      { title: "総額", description: "授業料だけでなく、滞在費・食費・空港送迎・SSP・電気代まで。" },
    ],
    recommendedAreas: [
      { slug: "lahug", name: "ラホグ", nameEn: "Lahug", reason: "セブ留学の中心。学校数が最も多い。" },
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "社会人向け中規模校が点在。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "リゾート型・小〜中規模校。" },
    ],
    faqs: [
      { q: "おすすめの学校はどこですか？", a: "セブインベストはランキングを出しません。目的・期間・予算・年齢・家族構成で選び方が変わるため、判断軸で絞り込みます。相談からご利用ください。" },
      { q: "現地で学校を決めるのは可能ですか？", a: "可能ですが、人気校は数ヶ月前から枠が埋まります。短期なら 1〜2 ヶ月前、長期なら 3〜6 ヶ月前の予約を推奨。" },
      { q: "エージェント経由と直接申込、どちらが良いですか？", a: "費用は基本同じ（エージェント手数料は学校が負担するケース多）。サポート・契約理解・トラブル時の窓口の有無で判断します。" },
    ],
    relatedTopics: ["short-term", "working-adults", "family"],
  },
];

export function getStudyTopic(slug: string): StudyTopic | undefined {
  return studyTopics.find((t) => t.slug === slug);
}

export function getRelatedStudyTopics(
  currentSlug: StudyTopicSlug
): StudyTopic[] {
  const current = getStudyTopic(currentSlug);
  if (!current) return [];
  return current.relatedTopics
    .map((s) => getStudyTopic(s))
    .filter((t): t is StudyTopic => Boolean(t));
}
