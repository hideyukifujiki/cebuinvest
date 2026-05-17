export type AreaPillar = "study" | "live" | "work" | "invest";

export type FitCategory =
  | "english-study"
  | "family"
  | "nomad"
  | "invest-rental"
  | "retirement"
  | "executive"
  | "manufacturing"
  | "resort"
  | "tourism"
  | "retreat"
  | "diving"
  | "short-stay";

export type FitScore = {
  category: FitCategory;
  label: string;
  score: number; // 0-100
};

export type QuickFact = {
  label: string;
  value: string;
};

export type PerspectiveCard = {
  title: string;
  description: string;
};

export type Perspective = {
  pillar: AreaPillar | "tourism";
  heading: string;
  lead: string;
  cards: PerspectiveCard[];
};

export type AreaSpot = {
  title: string;
  caption: string;
  description: string;
  gradient: string;
};

export type AreaFaq = {
  q: string;
  a: string;
};

export type Area = {
  slug: string;
  name: string;
  nameEn: string;
  oneLiner: string;
  heroDescription: string;
  pillars: AreaPillar[];
  tags: string[];
  gradient: string;
  /** Hero 装飾のアクセントカラー（光線・太陽など） */
  accentColor: "navy" | "sky" | "palm" | "teal" | "sun" | "navy-sky";
  order: number;
  quickFacts: QuickFact[];
  fitScores: FitScore[];
  perspectives: Perspective[];
  spots: AreaSpot[];
  faqs: AreaFaq[];
  /** 隣接エリアの slug 配列 */
  nearby: string[];
  /** 投資パートの免責文（一部エリアのみ） */
  investDisclaimer?: string;
};

export const pillarLabel: Record<AreaPillar, string> = {
  study: "学ぶ",
  live: "暮らす",
  work: "働く",
  invest: "投資",
};

export const areas: Area[] = [
  // -----------------------------------------------------------------
  // Cebu City
  // -----------------------------------------------------------------
  {
    slug: "cebu-city",
    name: "セブシティ",
    nameEn: "Cebu City",
    oneLiner: "セブ島最大の都市。教育・ビジネス・生活機能が集約された中核エリア。",
    heroDescription:
      "商業・教育・行政・歴史が交差するセブ最大の都市。最初の拠点としても、長く暮らす場としても選ばれる、メトロセブの中心。",
    pillars: ["study", "live", "work", "invest"],
    tags: ["学ぶ", "暮らす", "働く", "投資", "歴史・観光"],
    gradient: "from-navy-900 via-navy-700 to-sky-500",
    accentColor: "navy",
    order: 1,
    quickFacts: [
      { label: "位置", value: "メトロセブ中心" },
      { label: "人口", value: "約 100 万人" },
      { label: "特徴", value: "セブの中核都市" },
      { label: "サブ地区", value: "IT Park／Business Park／Lahug等" },
      { label: "主要施設", value: "SM City、Colon、Carbon" },
      { label: "空港まで", value: "車 30〜50 分" },
      { label: "日本人イメージ", value: "セブの本体" },
    ],
    fitScores: [
      { category: "english-study", label: "英語留学", score: 88 },
      { category: "family", label: "親子・ファミリー", score: 75 },
      { category: "nomad", label: "デジタルノマド", score: 80 },
      { category: "invest-rental", label: "投資（賃貸需要）", score: 80 },
      { category: "retirement", label: "リタイアメント", score: 65 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "大学・語学学校の集積地。",
        lead: "セブシティには複数の大学（USC、USJR等）と多数の英語学校が集まり、英語環境としての層が厚い。短期から長期、子どもから社会人まで対応できる。",
        cards: [
          { title: "主な選択肢", description: "英語学校（大規模・中規模）、大学留学、サマースクール、子ども英語教室まで。" },
          { title: "向く学習者", description: "短期・長期どちらも。コスパ重視・初心者・社会人・親子のすべて。" },
          { title: "学校エリア", description: "中心地、ラホグ、ITパーク周辺。生活環境と組み合わせて選択。" },
          { title: "日本人比率", description: "学校により大きく異なる。あえて低い学校を選ぶ社会人も。" },
        ],
      },
      {
        pillar: "live",
        heading: "サブ地区の選び方が肝。",
        lead: "「セブシティに住む」と言っても、IT Park／Business Park／Lahug／Banilad／Mabolo などサブ地区で生活感が大きく変わる。目的別に選ぶことが重要。",
        cards: [
          { title: "家賃目安", description: "月 3〜25 万円。地区とグレードで幅広い。" },
          { title: "食費", description: "月 2〜8 万円。ローカル中心〜外食中心。" },
          { title: "医療", description: "主要私立病院が集中。国際水準の対応可。" },
          { title: "治安", description: "地区差あり。中心部・夜間は注意。" },
        ],
      },
      {
        pillar: "work",
        heading: "機会の選択肢が広い。",
        lead: "BPO、テック、観光、教育、医療まで産業の幅が広く、現地就職・起業・採用の選択肢が豊富。働く拠点はサブ地区で絞り込む。",
        cards: [
          { title: "産業", description: "BPO、観光、教育、医療、商業、製造、IT。日系企業も多く拠点を構える。" },
          { title: "主な働く拠点", description: "ITパーク（テック）、ビジネスパーク（金融・経営）、マンダウエ（製造）。" },
          { title: "起業しやすさ", description: "行政手続き、専門家、人材の集積。スモールスタートが組みやすい。" },
        ],
      },
      {
        pillar: "invest",
        heading: "幅広い不動産マーケット。",
        lead: "スタジオから高級コンドまで価格レンジが広く、投資家層の好みで選びやすい。ただし「セブシティ全体」では大きすぎる。サブ地区で絞り込むのが鉄則。",
        cards: [
          { title: "需要の傾向", description: "学生・社会人・駐在員・観光客と多様。サブ地区により需要構造が異なる。" },
          { title: "価格レンジ（参考）", description: "執筆時点でスタジオ 400 万円台〜、高級2BR は 3,000 万円超まで。" },
        ],
      },
    ],
    spots: [
      { title: "SM City Cebu", caption: "セブ最大級モール", description: "日常の買い物から外食まで網羅する大規模モール。", gradient: "from-navy-900 to-sky-500" },
      { title: "Basilica del Santo Niño", caption: "セブ最古の教会", description: "フィリピン最古の教会のひとつ。歴史地区の象徴。", gradient: "from-sky-500 to-teal-400" },
      { title: "Colon Street", caption: "フィリピン最古の通り", description: "商業の起源とされる歴史ある通り。観光・歴史巡り向け。", gradient: "from-sun-500 to-palm-500" },
      { title: "大学エリア", caption: "USC、USJR、USP-F", description: "高等教育機関が集積。学生街の活気がある。", gradient: "from-teal-400 to-sky-500" },
      { title: "セブドクターズ病院", caption: "主要私立病院", description: "日本人駐在員にも利用される国際水準の病院。", gradient: "from-palm-500 to-teal-400" },
      { title: "Carbon Market", caption: "最大のローカル市場", description: "活気のあるローカル市場。観光・現地体験に。", gradient: "from-navy-700 to-sun-500" },
    ],
    faqs: [
      { q: "「セブシティに住む」と言うと、どこを指しますか？", a: "セブシティは行政区域として広く、ITパーク・ビジネスパーク・ラホグ・バニラッド・マボロなど複数のサブ地区を含みます。実際に住む際はサブ地区で絞り込んでください。" },
      { q: "初めての留学に向きますか？", a: "向きます。大規模校・中規模校・親子向け校まで選択肢が広く、日本人サポートが手厚い学校も多い。" },
      { q: "治安が心配です。注意点はありますか？", a: "中心部・ダウンタウン・夜間の単独行動には注意。観光客の多いモール周辺やコンドミニアム居住エリアは比較的安全。最新の渡航情報を確認してください。" },
      { q: "渋滞はひどいですか？", a: "朝夕は渋滞が発生します。職場と住居を徒歩圏に組むのが定番の対策。" },
      { q: "不動産はどこを買うべきですか？", a: "サブ地区により需要構造が大きく異なります。ITパーク・ビジネスパーク・バニラッドは需要が読みやすいが価格も高め。投資助言ではないため、専門家との検討が必須です。" },
    ],
    nearby: ["it-park", "mandaue", "mactan"],
  },

  // -----------------------------------------------------------------
  // IT Park
  // -----------------------------------------------------------------
  {
    slug: "it-park",
    name: "ITパーク",
    nameEn: "IT Park",
    oneLiner: "BPO 企業が集まるテック地区。ノマド・リモートワーカーに人気。",
    heroDescription:
      "セブのテックハブ。BPO企業と多国籍テック企業が集まり、24時間営業の街で、ノマド・リモートワーカー・社会人留学に人気のエリア。",
    pillars: ["work", "study", "invest", "live"],
    tags: ["働く", "学ぶ", "暮らす", "投資", "ノマド", "社会人留学"],
    gradient: "from-navy-900 to-sky-500",
    accentColor: "sky",
    order: 2,
    quickFacts: [
      { label: "場所", value: "セブシティ ラホグ地区" },
      { label: "面積", value: "約 24 ヘクタール" },
      { label: "特徴", value: "BPO・テック集積" },
      { label: "回線", value: "光ファイバ・5G" },
      { label: "営業時間", value: "24h（街全体）" },
      { label: "最寄空港", value: "マクタン国際 約 30 分" },
      { label: "日本人イメージ", value: "セブの渋谷" },
    ],
    fitScores: [
      { category: "english-study", label: "社会人留学", score: 92 },
      { category: "nomad", label: "デジタルノマド", score: 96 },
      { category: "family", label: "親子・ファミリー", score: 55 },
      { category: "invest-rental", label: "投資（賃貸需要）", score: 88 },
      { category: "retirement", label: "リタイアメント", score: 42 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "社会人・キャリア英語と相性が良い。",
        lead: "ITパーク周辺と、隣接のラホグには社会人向けの英語学校が点在。仕事帰り・週末カフェ学習を取り入れやすい環境です。",
        cards: [
          { title: "主な学校タイプ", description: "マンツーマン中心の社会人向け校、ビジネス英語特化校、IELTS／TOEFL コース。" },
          { title: "向く学習者", description: "仕事と並行して学ぶ社会人、短期集中で力をつけたい人、英語×キャリア志向。" },
          { title: "向きにくい学習者", description: "夜の街の刺激を避けたい家族・子ども。親子留学はラホグ・バニラッドを推奨。" },
          { title: "学習環境", description: "24h カフェ、コワーキング、Wi-Fi 環境が充実。学校外学習の自由度が高い。" },
        ],
      },
      {
        pillar: "live",
        heading: "単身・カップル向けの利便性。",
        lead: "24h 営業の街。スーパー、薬局、レストラン、ジム、医療まで徒歩圏。家族で住むより、単身・カップル・ノマドに最適。",
        cards: [
          { title: "家賃目安", description: "月 5〜18 万円。スタジオ〜2BR コンドミニアム。" },
          { title: "食費", description: "月 3〜6 万円。外食中心も可能。" },
          { title: "医療", description: "国際水準。セブドクターズ等が近接。" },
          { title: "治安", description: "良好。24h セキュリティ・警備員配置。" },
        ],
      },
      {
        pillar: "work",
        heading: "セブで「働く」なら、まずここ。",
        lead: "BPO 企業・多国籍テック・コワーキングが集積。回線も電源も時間帯も、リモートワーカーに最適化された街。",
        cards: [
          { title: "回線・インフラ", description: "光ファイバ・5G。実測 100〜500 Mbps が一般的。停電時の発電機を備えるコワーキングも多い。" },
          { title: "コワーキング", description: "月 3〜5 万円が中心。デイパス、24h、ホットデスク、専用席まで選択肢多数。" },
          { title: "BPO 集積と採用", description: "JP Morgan、Concentrix、Lexmark などが拠点を構える。英語人材のプールが厚い。" },
          { title: "24時間の街", description: "BPO のシフト勤務に合わせて、レストラン・カフェ・スーパーが深夜営業。" },
        ],
      },
      {
        pillar: "invest",
        heading: "賃貸需要が読みやすい街。",
        lead: "BPO 従業員・短期滞在者・ノマドの需要が一定して存在。短期賃貸との相性が良い一方、価格上昇や供給過多リスクもあり、煽らない検討が前提。",
        cards: [
          { title: "需要の安定性", description: "BPO 産業に直結。シフト勤務の従業員が徒歩通勤できる立地需要が継続。" },
          { title: "価格の傾向", description: "スタジオ：執筆時点で 500〜800 万円帯。1BR：700〜1,200 万円帯。" },
          { title: "注意点", description: "外国人保有規制、為替、管理費、税制、空室、運用代行コスト、出口戦略。" },
        ],
      },
    ],
    spots: [
      { title: "The Walk", caption: "レストラン・バー集積エリア", description: "国際料理が並ぶ屋外レストラン街。", gradient: "from-navy-900 to-sky-500" },
      { title: "Cebu IT Tower", caption: "テック企業の旗艦ビル", description: "多国籍テック企業・BPO の主要オフィス。", gradient: "from-sky-500 to-navy-700" },
      { title: "Sugbo Mercado", caption: "土曜限定の夜市", description: "セブの食を体験できる人気夜市。", gradient: "from-sun-500 to-palm-500" },
      { title: "主要コワーキング", caption: "ノマドの拠点群", description: "月会員・デイパスを使い分けられる。", gradient: "from-teal-400 to-sky-500" },
      { title: "居住コンドミニアム群", caption: "徒歩通勤圏の高層住宅", description: "家賃 5〜18 万円帯のコンド群。", gradient: "from-sky-500 to-teal-400" },
      { title: "医療施設", caption: "セブドクターズ等が近接", description: "国際水準の私立病院が近く、緊急時の対応も安心。", gradient: "from-palm-500 to-teal-400" },
    ],
    faqs: [
      { q: "ITパークで家族と住むのは現実的ですか？", a: "可能ですが、家族向けには隣接のバニラッド・ラホグ・マボロが主流です。" },
      { q: "治安はどうですか？", a: "セブ島内では治安が良いエリアの一つです。24時間警備員が配置され、夜間でも人通りがあります。" },
      { q: "インターネット回線は信頼できますか？", a: "光ファイバが普及しており、コワーキングや主要コンドでは安定して 100Mbps〜が出ます。" },
      { q: "BPO 拠点を作る場合、ITパークは最適ですか？", a: "候補の一つとして有力です。BPO 人材が集まりやすく、24h 営業の街なので時差対応にも向きます。" },
      { q: "不動産投資先として「買い」ですか？", a: "需要は読みやすい一方、価格は近年上昇傾向です。利回りだけでなく総合的に検討してください。" },
    ],
    nearby: ["lahug", "banilad", "business-park"],
    investDisclaimer:
      "本セクションは一般情報であり、個別の投資助言ではありません。価格・賃料・利回りは執筆時点の参考。為替・規制・税制で変動します。",
  },

  // -----------------------------------------------------------------
  // Business Park
  // -----------------------------------------------------------------
  {
    slug: "business-park",
    name: "ビジネスパーク",
    nameEn: "Cebu Business Park",
    oneLiner: "高級モール・オフィス・コンドが集まる、セブの「丸の内」的エリア。",
    heroDescription:
      "セブの「丸の内」。Ayala モール・銀行・高層オフィス・高級コンドが集積する、ビジネスと富裕層居住の中心地。",
    pillars: ["work", "invest"],
    tags: ["働く", "投資", "暮らす", "経営層", "高級"],
    gradient: "from-navy-900 via-navy-700 to-sun-600",
    accentColor: "sun",
    order: 3,
    quickFacts: [
      { label: "位置", value: "セブシティ中心" },
      { label: "面積", value: "約 20 ヘクタール" },
      { label: "特徴", value: "金融・経営・高級住宅" },
      { label: "中核施設", value: "Ayala Center Cebu" },
      { label: "ホテル", value: "Marriott、Crowne Plaza" },
      { label: "空港", value: "車 30〜45 分" },
      { label: "日本人イメージ", value: "セブの丸の内" },
    ],
    fitScores: [
      { category: "executive", label: "経営層・出張", score: 96 },
      { category: "invest-rental", label: "投資（高級コンド）", score: 92 },
      { category: "retirement", label: "富裕層リタイア", score: 80 },
      { category: "family", label: "親子・ファミリー", score: 65 },
      { category: "english-study", label: "英語留学", score: 50 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学校は隣接エリアに。",
        lead: "ビジネスパーク内には英語学校は少ないが、ラホグ・ITパーク・バニラッドの学校に車で 10〜20 分。",
        cards: [
          { title: "住んで通うパターン", description: "ビジネスパークに居住し、ラホグ／ITパークの語学学校へ通う社会人・富裕層向け。" },
          { title: "家族の教育", description: "徒歩圏のインターナショナルスクールは限定的。バニラッド方面が主流。" },
        ],
      },
      {
        pillar: "live",
        heading: "高級コンド集積。利便性最高。",
        lead: "高層コンドミニアム、5つ星ホテル、Ayala モールが徒歩圏。物価は高めだが、利便性とセキュリティでは最上位。",
        cards: [
          { title: "家賃", description: "月 10〜35 万円。高級コンド中心。" },
          { title: "食費", description: "月 5〜12 万円。外食の選択肢豊富。" },
          { title: "医療", description: "最上位。主要私立病院 5 分。" },
          { title: "治安", description: "最上位。セキュリティ充実。" },
        ],
      },
      {
        pillar: "work",
        heading: "経営層・大企業の拠点。",
        lead: "銀行、保険、コンサル、不動産、テック大企業のオフィスが集中。経営層・取引先訪問・出張ベースに最適。",
        cards: [
          { title: "主要企業", description: "Ayala Land、Cebu Holdings、各種銀行、大手会計事務所、コンサルティングファーム等。" },
          { title: "オフィス賃料", description: "セブ最上位帯。Grade A オフィスの集積。" },
          { title: "向く働き方", description: "取引先訪問が多い経営層、大企業の現地代表、金融・コンサル系。" },
        ],
      },
      {
        pillar: "invest",
        heading: "セブ不動産の最上位帯。",
        lead: "セブで最も高い不動産価格帯。需要は安定しているが、利回りは中位。資産性・流動性重視の投資先。",
        cards: [
          { title: "需要構造", description: "経営層・駐在員・富裕層の長期賃貸需要が中心。空室リスクは低めだが利回りも低め。" },
          { title: "価格帯（参考）", description: "1BR：1,500〜2,500 万円、2BR：2,500〜5,000 万円超まで。築年と眺望で大差。" },
          { title: "注意点", description: "価格上昇余地は限定的。管理費が高め。為替・規制リスクは他エリアと同様。" },
        ],
      },
    ],
    spots: [
      { title: "Ayala Center Cebu", caption: "セブ最高級モール", description: "高級ブランド、グルメ、シネマ。セブのライフスタイル拠点。", gradient: "from-navy-900 to-sun-500" },
      { title: "Marriott Cebu City", caption: "5つ星ホテル", description: "出張・接待・滞在の定番。", gradient: "from-sky-500 to-navy-700" },
      { title: "高級コンドミニアム群", caption: "Park Tower、Avalon等", description: "セブで最も評価の高いコンド群。", gradient: "from-sun-500 to-navy-900" },
      { title: "主要銀行・金融機関", caption: "BPI、BDO、Citibank", description: "外国人対応の主要銀行が集中。", gradient: "from-navy-700 to-sky-500" },
      { title: "Cebu Country Club", caption: "隣接の名門ゴルフ場", description: "セブのビジネス層が集う名門クラブ。", gradient: "from-palm-500 to-sky-500" },
      { title: "レストラン群", caption: "国際料理の集積", description: "日本・韓国・欧米・東南アジア料理まで、接待・会食に最適。", gradient: "from-teal-400 to-sun-500" },
    ],
    faqs: [
      { q: "ビジネスパークとITパークの違いは？", a: "ビジネスパークは金融・大企業・高級住宅の中心、ITパークはBPO・テック・ノマド向けの中心。" },
      { q: "家族で住むには高すぎますか？", a: "家賃は高めです。家族で長く住む場合はバニラッド・マボロが主流。短期出張・経営層には最適。" },
      { q: "投資先として有望ですか？", a: "価格の安定性と流動性は最上位。一方で利回りは中位で、購入価格も高い。資産性重視の投資家向け。" },
      { q: "治安は？", a: "セブで最も治安が良いエリアのひとつ。コンド・モール・オフィスにセキュリティが配置されています。" },
    ],
    nearby: ["it-park", "mabolo", "banilad"],
    investDisclaimer:
      "投資助言ではありません。為替・規制・税制で変動します。",
  },

  // -----------------------------------------------------------------
  // Lahug
  // -----------------------------------------------------------------
  {
    slug: "lahug",
    name: "ラホグ",
    nameEn: "Lahug",
    oneLiner: "語学学校・大学・住宅街が集まる、留学・家族滞在に人気のエリア。",
    heroDescription:
      "大学・語学学校と住宅街が共存するセブの「学園エリア」。留学・親子滞在・社会人留学に最も選ばれる地区のひとつ。",
    pillars: ["study", "live"],
    tags: ["学ぶ", "暮らす", "親子", "社会人留学"],
    gradient: "from-palm-500 via-sky-500 to-navy-700",
    accentColor: "palm",
    order: 4,
    quickFacts: [
      { label: "位置", value: "セブシティ北東" },
      { label: "特徴", value: "学園・住宅エリア" },
      { label: "大学", value: "USPF、UP Cebu等" },
      { label: "語学学校", value: "複数集積" },
      { label: "主要施設", value: "JY Square" },
      { label: "ITパーク", value: "徒歩・車5分" },
      { label: "日本人イメージ", value: "セブの学園都市" },
    ],
    fitScores: [
      { category: "english-study", label: "英語留学", score: 96 },
      { category: "family", label: "親子留学", score: 85 },
      { category: "short-stay", label: "暮らす（中期）", score: 78 },
      { category: "invest-rental", label: "投資（賃貸需要）", score: 70 },
      { category: "nomad", label: "デジタルノマド", score: 62 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "セブ留学の中心エリア。",
        lead: "複数の語学学校と USPF（University of Southern Philippines Foundation）、UP Cebu などの大学が集まる。徒歩で行ける学習環境が魅力。",
        cards: [
          { title: "主な学校タイプ", description: "大規模校、中規模校、親子向け、社会人向け。日本人スタッフ常駐校多数。" },
          { title: "向く学習者", description: "初心者・親子・社会人・短期から長期まで。コスパ重視にも。" },
          { title: "大学留学", description: "USPF、UP Cebu が近く、大学聴講や交換留学の選択肢も。" },
          { title: "学習環境", description: "学園エリアならではの落ち着いた雰囲気。学生街の活気も。" },
        ],
      },
      {
        pillar: "live",
        heading: "中期滞在に最適な穏やかさ。",
        lead: "学園エリアならではの落ち着き。住宅街と利便施設のバランスが良い。家賃も中位で、親子・社会人滞在に向く。",
        cards: [
          { title: "家賃", description: "月 4〜15 万円。スタジオ〜2BR。" },
          { title: "食費", description: "月 2〜5 万円。学生街で安価。" },
          { title: "医療", description: "至近。セブドクターズ等。" },
          { title: "買い物", description: "JY Square。徒歩圏のモール。" },
        ],
      },
      {
        pillar: "work",
        heading: "ITパークと組み合わせる。",
        lead: "ラホグ自体に大企業集積はないが、隣接のITパークまで徒歩・車 5 分。住む場所と働く場所を分ける戦略に向く。",
        cards: [
          { title: "働き方", description: "ラホグに住みつつ ITパークで働く・コワーキングを使う、というスタイルが現実的。" },
          { title: "向く人", description: "家賃を抑えつつ ITパークの利便性を享受したいノマド・社会人。" },
        ],
      },
      {
        pillar: "invest",
        heading: "中位価格・安定需要。",
        lead: "学生・留学生・社会人留学・短期滞在の需要が安定。ITパーク至近のため賃貸需要に厚みがある一方、価格はITパーク・ビジネスパークより落ち着く。",
        cards: [
          { title: "需要構造", description: "短期賃貸（留学生・社会人留学）と中長期（駐在員家族・学生）の両方が存在。" },
          { title: "価格レンジ（参考）", description: "スタジオ：400〜700 万円帯、1BR：600〜1,000 万円帯。" },
        ],
      },
    ],
    spots: [
      { title: "主要語学学校エリア", caption: "セブ留学の本場", description: "3D ACADEMY をはじめとする主要校が集積。", gradient: "from-palm-500 to-sky-500" },
      { title: "USPF（南フィリピン大学）", caption: "ラホグの私立総合大学", description: "Salinas Drive 沿いの主要大学。法学・工学などで知られる。", gradient: "from-navy-900 to-palm-500" },
      { title: "UP Cebu", caption: "フィリピン大学セブ校", description: "Gorordo Avenue 沿いの国立フィリピン大学セブ校。", gradient: "from-navy-700 to-sky-500" },
      { title: "JY Square Mall", caption: "ローカル向けモール", description: "スーパー、飲食、薬局が揃う日常使いのモール。", gradient: "from-sky-500 to-palm-500" },
      { title: "住宅エリア", caption: "中位コンドミニアム", description: "学生・家族・社会人留学が混在する住宅街。", gradient: "from-sun-500 to-palm-500" },
      { title: "医療施設", caption: "セブドクターズ等", description: "主要私立病院に近く、緊急時の安心材料。", gradient: "from-palm-500 to-teal-400" },
      { title: "学習向けカフェ", caption: "学園エリアの強み", description: "Wi-Fi・電源完備で長時間学習に向くカフェが多数。", gradient: "from-sky-500 to-navy-900" },
    ],
    faqs: [
      { q: "留学するならラホグで間違いないですか？", a: "学校の選択肢が多いという意味で有力候補です。ただし「リゾート型留学（マクタン）」「都心型（IT パーク周辺）」など他選択肢もあります。" },
      { q: "親子留学に向きますか？", a: "向きます。親子プランを持つ学校が複数あり、住宅街の落ち着いた雰囲気は家族にも好まれます。" },
      { q: "家賃はITパークより安いですか？", a: "同等〜やや安め。コンドの新しさやアメニティでは IT パークが上回ることが多いです。" },
      { q: "治安は？", a: "学園エリアらしく落ち着いた治安。一般的な海外都市の注意で十分です。" },
    ],
    nearby: ["it-park", "banilad", "business-park"],
  },

  // -----------------------------------------------------------------
  // Banilad
  // -----------------------------------------------------------------
  {
    slug: "banilad",
    name: "バニラッド",
    nameEn: "Banilad",
    oneLiner: "高級住宅・スクール・モールが揃う、家族向け定番エリア。",
    heroDescription:
      "高級住宅、インターナショナルスクール、モールが揃う、セブの家族向け定番エリア。日本人ファミリーの教育移住先としても定評。",
    pillars: ["live", "study", "invest"],
    tags: ["暮らす", "家族", "親子留学", "教育移住", "投資"],
    gradient: "from-palm-500 via-sky-500 to-navy-900",
    accentColor: "palm",
    order: 5,
    quickFacts: [
      { label: "位置", value: "セブシティ東部" },
      { label: "特徴", value: "高級住宅・教育" },
      { label: "スクール", value: "CIS、Singapore Schoolほか" },
      { label: "主要施設", value: "Banilad Town Centre" },
      { label: "日本人", value: "ファミリー多数" },
      { label: "空港", value: "車 40 分" },
      { label: "イメージ", value: "セブの田園調布" },
    ],
    fitScores: [
      { category: "family", label: "家族で暮らす", score: 96 },
      { category: "english-study", label: "親子留学・教育移住", score: 92 },
      { category: "invest-rental", label: "投資（ファミリー賃貸）", score: 78 },
      { category: "retirement", label: "リタイアメント", score: 72 },
      { category: "nomad", label: "デジタルノマド", score: 48 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "インター・国際校が集まる教育の街。",
        lead: "CIS（Cebu International School）、Singapore School、Centre for International Education など、子どもの英語教育の選択肢が豊富。",
        cards: [
          { title: "主なスクール", description: "CIS、Singapore School、Centre for International Education、British School。" },
          { title: "向く家庭", description: "子どもの英語教育・国際感覚を育てたい家庭。長期滞在前提の親子。" },
          { title: "親の英語学習", description: "隣接のラホグ・ITパークまで車 10〜15 分。送り迎えと両立可能。" },
          { title: "入学要件", description: "学校ごとに英語面談・志願書類が必要。早めの準備推奨。" },
        ],
      },
      {
        pillar: "live",
        heading: "家族で住む、第一候補。",
        lead: "緑が多く、住宅街として整っている。スーパー、医療、教育、レストランが揃い、長期家族滞在に最適。",
        cards: [
          { title: "家賃", description: "月 8〜30 万円。2BR〜戸建てまで。" },
          { title: "食費", description: "月 4〜10 万円。家族・外食頻度で変動。" },
          { title: "医療", description: "至近。小児科対応病院複数。" },
          { title: "治安", description: "良好。ゲーテッドコミュニティ多数。" },
        ],
      },
      {
        pillar: "work",
        heading: "住んで他エリアで働く。",
        lead: "バニラッド自体に大企業集積はないが、ITパーク・ビジネスパークまで車 10〜15 分。家族で住む駐在員・経営層の定番拠点。",
        cards: [
          { title: "向く働き方", description: "家族と長く住みたい駐在員、経営層、リモートワーカー。" },
          { title: "通勤", description: "朝の渋滞時はビジネスパーク／ITパークまで 20〜30 分かかる場合あり。" },
        ],
      },
      {
        pillar: "invest",
        heading: "ファミリー賃貸が安定。",
        lead: "家族向け 2〜3BR の長期賃貸需要が安定。駐在員・経営層の家族層が中心。利回りは中位、空室リスクは低め。",
        cards: [
          { title: "需要構造", description: "家族向け中長期賃貸、駐在員ニーズ、教育移住層が中心。" },
          { title: "価格レンジ（参考）", description: "2BR：1,500〜3,000 万円、3BR/戸建て：3,000 万円超まで。" },
        ],
      },
    ],
    spots: [
      { title: "Banilad Town Centre", caption: "家族向けモール", description: "スーパー・飲食・サービスが揃う家族向けモール。", gradient: "from-palm-500 to-sky-500" },
      { title: "CIS（Cebu International School）", caption: "主要インター校", description: "セブを代表するインターナショナルスクール。", gradient: "from-navy-900 to-palm-500" },
      { title: "Crossroads", caption: "レストラン・カフェ集積", description: "家族向けレストランやカフェが並ぶライフスタイル拠点。", gradient: "from-sky-500 to-navy-900" },
      { title: "Maria Luisa Park", caption: "ゲーテッド高級住宅地", description: "セキュリティの高いゲーテッドコミュニティ。", gradient: "from-sun-500 to-palm-500" },
      { title: "医療施設", caption: "小児科対応病院", description: "家族向けクリニックが多数。緊急時の私立病院もすぐ。", gradient: "from-palm-500 to-navy-700" },
      { title: "日本食レストラン", caption: "家族で通える", description: "日本人ファミリーに人気の日本食店が複数。", gradient: "from-teal-400 to-sky-500" },
    ],
    faqs: [
      { q: "子どもの教育移住には最適ですか？", a: "セブで最も選ばれるエリアのひとつです。インター校・住環境・医療・買い物が揃います。" },
      { q: "家賃はどのくらい必要ですか？", a: "家族向けは月 8〜30 万円が中心。ゲーテッドコミュニティの戸建てはこの上のレンジ。" },
      { q: "朝の渋滞はひどいですか？", a: "スクールの時間帯は渋滞します。学校近くに住む・送迎時間をずらすなどの工夫が一般的。" },
      { q: "日本人コミュニティはありますか？", a: "セブで最も日本人ファミリーが多いエリアのひとつです。スクール・SNSでのつながりも作りやすい。" },
    ],
    nearby: ["lahug", "mabolo", "business-park"],
  },

  // -----------------------------------------------------------------
  // Mabolo
  // -----------------------------------------------------------------
  {
    slug: "mabolo",
    name: "マボロ",
    nameEn: "Mabolo",
    oneLiner: "ビジネスパーク至近の住宅地。日本人ファミリーの暮らしに人気。",
    heroDescription:
      "ビジネスパーク隣接の住宅エリア。日本人ファミリーが集まる、利便性と家賃のバランスが良いセブの「住みやすい街」。",
    pillars: ["live"],
    tags: ["暮らす", "家族", "日本人", "バランス型"],
    gradient: "from-sky-500 via-navy-700 to-palm-500",
    accentColor: "sky",
    order: 6,
    quickFacts: [
      { label: "位置", value: "ビジネスパーク隣接" },
      { label: "特徴", value: "住宅・利便性" },
      { label: "日本人", value: "ファミリー多数" },
      { label: "家賃", value: "中位レンジ" },
      { label: "ビジネスパーク", value: "徒歩・車5分" },
      { label: "空港", value: "車 35 分" },
      { label: "イメージ", value: "セブの住宅街" },
    ],
    fitScores: [
      { category: "family", label: "家族で暮らす", score: 88 },
      { category: "family", label: "親子・ファミリー", score: 80 },
      { category: "executive", label: "駐在員家庭", score: 85 },
      { category: "invest-rental", label: "投資（賃貸需要）", score: 72 },
      { category: "nomad", label: "デジタルノマド", score: 55 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学校は隣接エリアへ。",
        lead: "マボロには大規模語学学校は少ないが、ビジネスパーク・バニラッドのインター校、ITパーク・ラホグの語学学校へ車 10〜15 分。",
        cards: [
          { title: "親の英語学習", description: "隣接エリアの語学学校までアクセス良好。マンツーマン中心の社会人留学にも。" },
          { title: "子の教育", description: "バニラッドのインター校への通学が現実的。マボロから車 10 分。" },
        ],
      },
      {
        pillar: "live",
        heading: "日本人ファミリーが選ぶ理由。",
        lead: "ビジネスパークの利便性を享受しつつ、家賃は落ち着く。日本人コミュニティの厚みも安心材料。",
        cards: [
          { title: "家賃", description: "月 6〜18 万円。家族向けコンド中心。" },
          { title: "食費", description: "月 4〜8 万円。家族の頻度で変動。" },
          { title: "医療", description: "至近。セブドクターズ等近接。" },
          { title: "日本人", description: "多い。情報交換しやすい。" },
        ],
      },
      {
        pillar: "work",
        heading: "ビジネスパークへ徒歩通勤。",
        lead: "ビジネスパークの大企業オフィスまで徒歩・車 5 分。経営層・駐在員の住居エリアとして機能。",
        cards: [
          { title: "向く働き方", description: "ビジネスパーク勤務の経営層・駐在員家族。在宅勤務もしやすい。" },
        ],
      },
      {
        pillar: "invest",
        heading: "中位帯で底堅い需要。",
        lead: "日本人ファミリー・駐在員需要が中心。利回りは中位、空室率は低め。価格はビジネスパークより落ち着く。",
        cards: [
          { title: "価格レンジ（参考）", description: "1BR：700〜1,500 万円、2BR：1,200〜2,500 万円帯。" },
        ],
      },
    ],
    spots: [
      { title: "主要コンドミニアム", caption: "家族向け中位帯", description: "日本人ファミリー入居の主要コンド群。", gradient: "from-sky-500 to-navy-700" },
      { title: "日本食店・スーパー", caption: "日常使い", description: "日本食材が手に入る店舗。日本人需要を支える。", gradient: "from-palm-500 to-sky-500" },
      { title: "クリニック群", caption: "家族向け医療", description: "小児科・歯科などの家族向け医療が揃う。", gradient: "from-navy-700 to-sun-500" },
      { title: "日本人会・コミュニティ", caption: "情報交換の場", description: "日本人会・SNSグループでの情報交換が活発。", gradient: "from-sky-500 to-palm-500" },
      { title: "Cebu Doctors' Hospital", caption: "国際水準の私立病院", description: "家族滞在の安心材料となる主要病院。", gradient: "from-teal-400 to-navy-900" },
      { title: "Cebu Country Club", caption: "隣接ゴルフ場", description: "経営層・駐在員も利用するゴルフ場が至近。", gradient: "from-sun-500 to-navy-700" },
    ],
    faqs: [
      { q: "マボロとバニラッドの違いは？", a: "マボロはビジネスパーク近接で利便性重視・コンド中心、バニラッドはインター校近接で家族・教育重視・住宅街中心。" },
      { q: "日本人会はありますか？", a: "日本人ファミリーのコミュニティが活発で、情報交換しやすい環境です。" },
      { q: "独身でも住みやすい？", a: "住めますが、独身向けの賑わいなら IT パーク／ビジネスパークの方が向きます。" },
    ],
    nearby: ["business-park", "banilad", "it-park"],
  },

  // -----------------------------------------------------------------
  // Mandaue
  // -----------------------------------------------------------------
  {
    slug: "mandaue",
    name: "マンダウエ",
    nameEn: "Mandaue",
    oneLiner: "セブシティ隣接の経済地区。手頃な住まいと利便性の両立。",
    heroDescription:
      "セブシティ隣接の経済地区。家具・食品など製造業の中心。家賃が落ち着き、空港・マクタンへのアクセスも良好な実用エリア。",
    pillars: ["live", "invest"],
    tags: ["働く", "投資", "暮らす", "製造業"],
    gradient: "from-navy-900 via-navy-700 to-teal-400",
    accentColor: "navy",
    order: 7,
    quickFacts: [
      { label: "位置", value: "セブシティ隣接" },
      { label: "特徴", value: "製造業・物流の中心" },
      { label: "主要施設", value: "SM City Cebu隣接" },
      { label: "マクタン", value: "橋で接続" },
      { label: "空港", value: "車 20 分" },
      { label: "家賃", value: "中位〜手頃" },
      { label: "イメージ", value: "セブの実務エリア" },
    ],
    fitScores: [
      { category: "manufacturing", label: "製造業従事者", score: 85 },
      { category: "invest-rental", label: "投資（手頃な利回り）", score: 78 },
      { category: "family", label: "コスト重視で住む", score: 75 },
      { category: "family", label: "親子・ファミリー", score: 55 },
      { category: "retirement", label: "リタイアメント", score: 40 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学校は隣接エリアへ。",
        lead: "マンダウエ自体の語学学校は限定的。隣接のラホグ・ITパークへ車 15〜20 分。",
        cards: [
          { title: "代替地", description: "ラホグ・ITパーク・バニラッドの学校が現実的。" },
        ],
      },
      {
        pillar: "live",
        heading: "コスト重視で住む選択肢。",
        lead: "セブシティ中心部より家賃が落ち着き、生活機能（SM、スーパー、医療）は揃う。日本人居住者は少なめ。",
        cards: [
          { title: "家賃", description: "月 4〜12 万円。中位コンド中心。" },
          { title: "食費", description: "月 2〜5 万円。ローカル中心で安価。" },
          { title: "買い物", description: "SM City至近。大型モール隣接。" },
          { title: "空港", description: "20分。最短アクセス圏。" },
        ],
      },
      {
        pillar: "work",
        heading: "製造業・物流の中心地。",
        lead: "家具・食品・電子部品など製造業の集積。日系企業の進出先としても歴史がある。マクタン経済特区（MEPZ）も近接。",
        cards: [
          { title: "産業", description: "家具製造、食品、電子部品、物流、卸売。BPO 進出も増加。" },
          { title: "向く人", description: "製造業の現地拠点責任者、サプライチェーン関係者、コスト重視のスタートアップ。" },
        ],
      },
      {
        pillar: "invest",
        heading: "手頃な価格・働き手需要。",
        lead: "セブシティ・マクタンより取得価格が抑えられ、現地ワーカー需要が支える賃貸需要。利回り重視の選択肢。",
        cards: [
          { title: "需要構造", description: "現地ワーカー・若手社会人の長期賃貸需要。空室リスクは中位。" },
          { title: "価格レンジ（参考）", description: "スタジオ：300〜600 万円、1BR：500〜900 万円帯。" },
        ],
      },
    ],
    spots: [
      { title: "SM City Cebu", caption: "大型モール", description: "マンダウエ寄りの大型モール。買い物・外食の中心。", gradient: "from-navy-900 to-teal-400" },
      { title: "家具製造拠点", caption: "セブの主力産業", description: "セブ家具のメーカー・ショールームが集積。", gradient: "from-teal-400 to-navy-900" },
      { title: "主要橋・物流ハブ", caption: "マクタン橋", description: "マクタン島と本島をつなぐ物流の要衝。", gradient: "from-navy-700 to-sun-500" },
      { title: "中位コンドミニアム", caption: "手頃な家賃帯", description: "単身〜小家族向け中位コンドが多数。", gradient: "from-sky-500 to-navy-700" },
      { title: "MEPZ（マクタン経済特区）", caption: "近接の輸出加工区", description: "外資企業の集積地。バイク 15 分。", gradient: "from-teal-400 to-sky-500" },
      { title: "J Centre Mall", caption: "中規模モール", description: "ローカルから外国人まで利用する日常モール。", gradient: "from-sun-500 to-teal-400" },
    ],
    faqs: [
      { q: "日本人駐在で住むエリアとして適していますか？", a: "製造業関連の駐在員には適しています。ファミリー駐在ならバニラッド・マボロが主流です。" },
      { q: "投資先としての魅力は？", a: "取得価格が抑えられ、利回り重視の選択肢として検討できます。空室リスク・出口戦略を要検討。" },
      { q: "治安は？", a: "工業地帯・住宅街・幹線道路周辺でエリア差があります。住む場所の選択が重要です。" },
    ],
    nearby: ["cebu-city", "mactan", "it-park"],
  },

  // -----------------------------------------------------------------
  // Mactan
  // -----------------------------------------------------------------
  {
    slug: "mactan",
    name: "マクタン",
    nameEn: "Mactan",
    oneLiner: "ビーチ・リゾート・空港の島。リゾート暮らしと不動産投資の中心。",
    heroDescription:
      "空港とビーチリゾートを擁するセブの玄関口。海近くで暮らす・短期賃貸投資・ダイビング・リゾートノマドの拠点になる島。",
    pillars: ["live", "invest"],
    tags: ["リゾート", "投資", "暮らす", "リタイア", "ダイビング"],
    gradient: "from-teal-400 via-sky-500 to-navy-700",
    accentColor: "teal",
    order: 8,
    quickFacts: [
      { label: "位置", value: "セブ島東岸の島" },
      { label: "特徴", value: "空港・リゾート" },
      { label: "空港", value: "島内すぐ" },
      { label: "本島へ", value: "2つの橋で接続" },
      { label: "代表リゾート", value: "Shangri-La等" },
      { label: "産業", value: "観光・家具製造" },
      { label: "イメージ", value: "セブのリゾート島" },
    ],
    fitScores: [
      { category: "resort", label: "リゾート暮らし", score: 95 },
      { category: "invest-rental", label: "投資（短期賃貸）", score: 85 },
      { category: "english-study", label: "リゾート型留学", score: 78 },
      { category: "retirement", label: "リタイアメント", score: 80 },
      { category: "executive", label: "都市型ビジネス", score: 50 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "海近くで集中するリゾート型留学。",
        lead: "マクタンには Genius English ほかリゾート型の語学学校が複数。海と街の両方が手に届く距離感。",
        cards: [
          { title: "向く学習者", description: "セブ市街の喧騒が苦手な人、リゾート気分を保ちたい社会人、家族滞在。" },
          { title: "学校の雰囲気", description: "小〜中規模で落ち着いた環境。海近くで授業外のリフレッシュも。" },
        ],
      },
      {
        pillar: "live",
        heading: "「海近く」が日常になる暮らし。",
        lead: "海・空港・モール（Marina Mall等）が揃う島。本島の混雑を避けつつ、必要な機能はそろう。",
        cards: [
          { title: "家賃", description: "月 5〜30 万円。海ビュー次第で大差。" },
          { title: "食費", description: "月 3〜8 万円。外食はリゾート価格。" },
          { title: "空港", description: "15分。頻繁な渡航に便利。" },
          { title: "家族", description: "向く。短中期滞在に最適。" },
        ],
      },
      {
        pillar: "work",
        heading: "海近くで働くノマド向き。",
        lead: "主要産業は観光と家具製造。リモートワークなら海近くの落ち着いた環境で集中できる。本格的なオフィスワークは本島が中心。",
        cards: [
          { title: "向く働き方", description: "海・自然を生活に取り入れたいリモートワーカー、リゾートノマド、観光業従事者。" },
          { title: "通勤", description: "本島勤務は橋の渋滞で 1 時間以上かかる場合あり。リモート前提を推奨。" },
        ],
      },
      {
        pillar: "invest",
        heading: "短期賃貸と相性が良い。",
        lead: "観光・空港需要から短期賃貸（Airbnb 型）との相性が高い。一方で運用は管理代行コスト・規制動向に注意。",
        cards: [
          { title: "需要構造", description: "観光・短期出張・短期語学留学の需要が安定。閑散期と繁忙期の差を見込んで運用。" },
          { title: "価格レンジ（参考）", description: "スタジオ：500〜1,000 万円、海ビュー 1BR：1,000〜2,500 万円。" },
        ],
      },
    ],
    spots: [
      { title: "Mactan-Cebu国際空港", caption: "セブの玄関口", description: "日本含む各国からの直行便。", gradient: "from-navy-900 to-sky-500" },
      { title: "主要リゾート群", caption: "Shangri-La、Crimson等", description: "世界水準のビーチリゾートが集積。デイユース利用も可能。", gradient: "from-teal-400 to-sky-500" },
      { title: "Lapu-Lapu Shrine", caption: "マゼランを倒した英雄の像", description: "マクタン島の歴史的シンボル。観光名所。", gradient: "from-sun-500 to-teal-400" },
      { title: "Marina Mall・Gaisano", caption: "島内モール", description: "日常買い物・スーパーが揃う。", gradient: "from-sky-500 to-teal-400" },
      { title: "主要ダイビングスポット", caption: "島周辺の海中", description: "サンゴ・熱帯魚の宝庫。", gradient: "from-teal-400 to-navy-900" },
      { title: "主要橋（Old/New Bridge）", caption: "本島へのアクセス", description: "2 本の橋で本島セブシティに接続。朝夕は渋滞。", gradient: "from-palm-500 to-sky-500" },
    ],
    faqs: [
      { q: "本島と比べて家賃は高いですか？", a: "海ビュー・リゾート型コンドは高めですが、内陸エリアの一般コンドは本島並みかやや安いものもあります。" },
      { q: "本島への通勤は現実的ですか？", a: "朝夕の橋の渋滞で 1 時間以上かかることがあります。毎日通勤よりリモート前提を推奨。" },
      { q: "短期賃貸投資は有望？", a: "需要は底堅いですが、規制・管理コスト・閑散期リスクがあります。総コストで判断してください。" },
      { q: "家族で住んで子の通学は？", a: "島内のインター校もありますが、選択肢はバニラッドより限定的。短期滞在向きです。" },
    ],
    nearby: ["cebu-city", "mandaue", "bantayan"],
    investDisclaimer: "投資助言ではありません。短期賃貸の規制動向に注意。",
  },

  // -----------------------------------------------------------------
  // Moalboal
  // -----------------------------------------------------------------
  {
    slug: "moalboal",
    name: "モアルボアル",
    nameEn: "Moalboal",
    oneLiner: "サーディンランで有名なダイビングタウン。ノマド・長期滞在も増加中。",
    heroDescription:
      "サーディンラン（鰯の大群）で世界に知られるダイビングタウン。観光客と長期滞在ノマドが交わる、セブの「もうひとつの拠点」。",
    pillars: ["live"],
    tags: ["観光", "ダイビング", "ノマド", "長期滞在"],
    gradient: "from-teal-400 via-palm-500 to-navy-700",
    accentColor: "teal",
    order: 9,
    quickFacts: [
      { label: "位置", value: "セブ島南西部" },
      { label: "セブ市から", value: "車 約 3 時間" },
      { label: "特徴", value: "ダイビングの聖地" },
      { label: "名物", value: "サーディンラン" },
      { label: "海岸", value: "Panagsama／White" },
      { label: "家賃", value: "安め" },
      { label: "イメージ", value: "海好きの拠点" },
    ],
    fitScores: [
      { category: "diving", label: "ダイビング・海好き", score: 96 },
      { category: "nomad", label: "デジタルノマド", score: 75 },
      { category: "retreat", label: "長期リトリート", score: 72 },
      { category: "invest-rental", label: "投資（観光賃貸）", score: 60 },
      { category: "family", label: "家族で学ぶ", score: 35 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学習よりも体験ベース。",
        lead: "本格的な語学留学拠点は限定的。短期英会話＋ダイビングを組み合わせる滞在向け。",
        cards: [
          { title: "向く学習者", description: "「海と英語」を一緒に体験したいダイバー・長期滞在者。" },
        ],
      },
      {
        pillar: "live",
        heading: "海と一緒の生活が日常に。",
        lead: "小さな町だが、ダイビング・観光客向けに飲食・宿が充実。長期滞在ノマドが少しずつ増加。",
        cards: [
          { title: "家賃", description: "月 3〜10 万円。アパート・小規模ヴィラ。" },
          { title: "食費", description: "月 2〜5 万円。海外レストラン多数。" },
          { title: "回線", description: "改善傾向。主要宿は光対応。" },
          { title: "医療", description: "限定。緊急時はセブ市へ。" },
        ],
      },
      {
        pillar: "work",
        heading: "海×リモートワーク。",
        lead: "大企業オフィスはないが、海近くで集中したいリモートワーカー・ノマドに人気。日中ダイビング、夕方〜深夜に仕事というスタイル。",
        cards: [
          { title: "向く働き方", description: "時差作業ができるリモートワーカー、自然と一緒に過ごしたい起業家、ダイビング業従事者。" },
          { title: "注意点", description: "停電・回線の不安定さがあるため、バックアップ計画は必須。" },
        ],
      },
      {
        pillar: "invest",
        heading: "観光需要が中心。",
        lead: "短期賃貸（観光・ダイバー向け）の需要が中心。市街地と異なる特殊マーケットのため、運用ノウハウが必要。",
        cards: [
          { title: "市場の特徴", description: "小規模で個別性が高い。土地保有規制と外国人所有可能物件の確認が重要。" },
        ],
      },
    ],
    spots: [
      { title: "サーディンラン", caption: "世界的に有名", description: "数百万匹の鰯が群れを成して泳ぐ自然現象。", gradient: "from-teal-400 to-navy-900" },
      { title: "Pescador島", caption: "ダイビングサイト", description: "沖合の小島。世界水準のダイブスポット。", gradient: "from-sky-500 to-teal-400" },
      { title: "White Beach", caption: "白砂のビーチ", description: "海水浴・夕陽を楽しめるローカル人気のビーチ。", gradient: "from-sun-500 to-palm-500" },
      { title: "カワサン滝", caption: "ターコイズブルーの滝", description: "隣町バディアンにある絶景の滝。", gradient: "from-palm-500 to-sky-500" },
      { title: "主要ダイブショップ", caption: "資格取得・体験", description: "PADI 認定校が複数。長期滞在で資格取得も可能。", gradient: "from-teal-400 to-sky-500" },
      { title: "ノマド向けカフェ", caption: "Wi-Fi対応の集まる場所", description: "海を眺めながら仕事できるカフェがじわじわ増加。", gradient: "from-navy-900 to-teal-400" },
    ],
    faqs: [
      { q: "セブ市から日帰りで行けますか？", a: "片道3時間のため、行くなら1〜2泊以上が現実的です。" },
      { q: "ノマドにおすすめの宿は？", a: "Panagsama Beach 沿いの長期滞在向けゲストハウス・小規模ホテルが定番。回線確認は必須。" },
      { q: "子連れで行っても楽しめますか？", a: "シュノーケル・滝・ビーチで家族でも楽しめますが、医療面で長期滞在は要検討。" },
    ],
    nearby: ["cebu-city", "oslob", "mactan"],
  },

  // -----------------------------------------------------------------
  // Oslob
  // -----------------------------------------------------------------
  {
    slug: "oslob",
    name: "オスロブ",
    nameEn: "Oslob",
    oneLiner: "ジンベイザメで有名な南部の街。週末・短期滞在のオプションに。",
    heroDescription:
      "ジンベイザメと泳げる町として世界に知られるセブ島南部の観光地。短期滞在・週末旅行・南部観光ルートの拠点。",
    pillars: [],
    tags: ["観光", "短期滞在", "ジンベイザメ"],
    gradient: "from-sky-500 via-teal-400 to-navy-700",
    accentColor: "sky",
    order: 10,
    quickFacts: [
      { label: "位置", value: "セブ島南端部" },
      { label: "セブ市から", value: "車 約 3〜4 時間" },
      { label: "特徴", value: "ジンベイザメで有名" },
      { label: "主な体験", value: "ジンベイザメ・ツマログ滝" },
      { label: "宿泊", value: "中小規模リゾート" },
      { label: "街の規模", value: "小さな町" },
      { label: "イメージ", value: "南部観光の起点" },
    ],
    fitScores: [
      { category: "tourism", label: "観光・短期旅行", score: 92 },
      { category: "short-stay", label: "数日の滞在", score: 75 },
      { category: "family", label: "家族・子連れ旅行", score: 70 },
      { category: "retreat", label: "長期滞在", score: 42 },
      { category: "invest-rental", label: "投資", score: 38 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学習拠点ではない。",
        lead: "学校はなく、観光ベースで訪れる場所。学習目的はラホグ・マクタンへ。",
        cards: [
          { title: "代替地", description: "学習目的なら他エリアを推奨。" },
        ],
      },
      {
        pillar: "live",
        heading: "短期滞在が中心。",
        lead: "日常生活基盤よりも、観光地としての魅力が中心。週末旅行や南部観光ルートと組み合わせて行くのが定番。",
        cards: [
          { title: "主な目的", description: "ジンベイザメ・スイム、ツマログ滝、海ビューでの宿泊。" },
          { title: "滞在期間", description: "1〜3 泊が中心。長期滞在は限定的。" },
          { title: "向く人", description: "短期で南部観光を満喫したい層、家族旅行、ダイバー。" },
          { title: "向きにくい", description: "日常生活拠点・働く拠点としては機能不足。" },
        ],
      },
      {
        pillar: "work",
        heading: "拠点には不向き。",
        lead: "回線・コワーキング環境は限定的。短期リトリート的な滞在で気分転換に。",
        cards: [
          { title: "向く働き方", description: "数日のワーケーション・気分転換滞在。" },
        ],
      },
      {
        pillar: "invest",
        heading: "観光型・限定的。",
        lead: "観光地ならではの短期賃貸・宿泊事業の余地はあるが、需要は季節性が強く、運用が複雑。",
        cards: [
          { title: "市場の特徴", description: "外国人所有可能物件は限定的。土地は規制が厳しい。" },
        ],
      },
    ],
    spots: [
      { title: "ジンベイザメスポット", caption: "朝の海上", description: "早朝の海でジンベイザメを近距離で見られる世界でも有数のスポット。", gradient: "from-sky-500 to-navy-900" },
      { title: "ツマログ滝", caption: "マイナスイオン", description: "オスロブ近郊の人気の滝。家族でも楽しめる。", gradient: "from-teal-400 to-palm-500" },
      { title: "Oslob教会・歴史地区", caption: "スペイン統治時代", description: "スペイン統治時代の教会・遺構が残る歴史地区。", gradient: "from-sun-500 to-teal-400" },
      { title: "Sumilon島", caption: "沖合の小島", description: "シュノーケル・デイトリップに人気。", gradient: "from-teal-400 to-sky-500" },
      { title: "中小規模リゾート", caption: "海沿いの宿", description: "ジンベイザメ早朝ツアーに便利な海沿いの宿。", gradient: "from-sky-500 to-teal-400" },
      { title: "ローカル食堂", caption: "現地の味", description: "島の素朴な食事を楽しめる小さな食堂群。", gradient: "from-palm-500 to-sun-500" },
    ],
    faqs: [
      { q: "ジンベイザメは年中いますか？", a: "ほぼ年中観察可能ですが、天候・時期により遭遇率は変動します。" },
      { q: "長く滞在する人はいますか？", a: "少数。長期滞在ならモアルボアル・マクタンの方が現実的です。" },
      { q: "セブ市から日帰り可能？", a: "早朝出発なら可能。1 泊するとカワサン滝・モアルボアルまで足を延ばせます。" },
    ],
    nearby: ["moalboal", "cebu-city", "mactan"],
  },

  // -----------------------------------------------------------------
  // Bantayan
  // -----------------------------------------------------------------
  {
    slug: "bantayan",
    name: "バンタヤン",
    nameEn: "Bantayan",
    oneLiner: "白砂のビーチが続く離島。リトリート・長期リラックス滞在向け。",
    heroDescription:
      "白砂のビーチが延々と続くセブ北部の離島。リトリート、長期リラックス、人生をペースダウンさせたい人のための楽園。",
    pillars: ["live"],
    tags: ["リゾート", "リトリート", "長期滞在", "癒し"],
    gradient: "from-sun-500 via-teal-400 to-sky-500",
    accentColor: "sun",
    order: 11,
    quickFacts: [
      { label: "位置", value: "セブ島北部の離島" },
      { label: "アクセス", value: "Hagnayaから船 1h" },
      { label: "セブ市から", value: "船含めて4〜5h" },
      { label: "特徴", value: "白砂ビーチ" },
      { label: "名物時期", value: "イースター" },
      { label: "街の規模", value: "小・のどか" },
      { label: "イメージ", value: "セブの隠れ家" },
    ],
    fitScores: [
      { category: "retreat", label: "リトリート・癒し", score: 96 },
      { category: "retreat", label: "長期リラックス滞在", score: 85 },
      { category: "nomad", label: "静か系ノマド", score: 62 },
      { category: "invest-rental", label: "投資（リゾート短期）", score: 55 },
      { category: "family", label: "家族・観光", score: 80 },
    ],
    perspectives: [
      {
        pillar: "study",
        heading: "学校はない。",
        lead: "島内に語学学校はないが、長期滞在しながら自学する人に。",
        cards: [
          { title: "代替地", description: "学校通学を目的とした留学なら他エリアを推奨。" },
        ],
      },
      {
        pillar: "live",
        heading: "ペースダウンの生活。",
        lead: "島時間でゆっくり過ごす長期滞在に最適。商業施設・医療は限定的だが、必要十分。",
        cards: [
          { title: "家賃", description: "月 2〜8 万円。小規模ヴィラ・ゲストハウス。" },
          { title: "食費", description: "月 2〜4 万円。島の食材で安価。" },
          { title: "回線", description: "改善傾向。主要宿は対応。" },
          { title: "医療", description: "限定。本島へ船で移動。" },
        ],
      },
      {
        pillar: "work",
        heading: "静かに働く長期滞在に。",
        lead: "BPO・テック企業はないが、リモートワーカーが静かに集中するには最適。",
        cards: [
          { title: "向く働き方", description: "週単位・月単位のリトリート型ワーケーション。" },
        ],
      },
      {
        pillar: "invest",
        heading: "癒し型リゾートの選択肢。",
        lead: "本格的な投資は限定的。短期賃貸（ヴィラ型）の運用と、人生後半のリタイア生活地として選ぶケース。",
        cards: [
          { title: "向く人", description: "海と自然のそばで人生をペースダウンしたい人、ワーケーション・リトリート型滞在を作りたい人。" },
          { title: "注意点", description: "医療・教育インフラが限定的。本島へのアクセス（船）の時間を読み込む必要。" },
        ],
      },
    ],
    spots: [
      { title: "Sugar Beach", caption: "島で最も人気のビーチ", description: "きめ細やかな白砂とエメラルドの海。リラックスの定番。", gradient: "from-sun-500 to-teal-400" },
      { title: "St. Peter & Paul教会", caption: "島で最も古い教会", description: "16世紀建造のスペイン統治期の教会。", gradient: "from-teal-400 to-sky-500" },
      { title: "ヤシ並木の島内道", caption: "スクーターで巡る", description: "島内をバイクや自転車で巡る、のどかな田園・ビーチ風景。", gradient: "from-sky-500 to-palm-500" },
      { title: "主要リゾート群", caption: "小〜中規模ヴィラ", description: "プール付きの中規模リゾート・ゲストハウスが点在。", gradient: "from-sun-500 to-teal-400" },
      { title: "Virgin Island", caption: "隣接の無人島", description: "船で渡る無人島。シュノーケル・海水浴の絶景スポット。", gradient: "from-teal-400 to-navy-700" },
      { title: "Sunset Point", caption: "夕陽の絶景", description: "水平線に沈む夕陽が美しい島の西側エリア。", gradient: "from-navy-900 to-teal-400" },
    ],
    faqs: [
      { q: "アクセスは大変ですか？", a: "セブ市からはバス・車 + 船で 4〜5 時間。北部空港（Bantayan空港）も小規模に運航しています。" },
      { q: "長期滞在は現実的？", a: "数週間〜数ヶ月は十分可能。医療・教育インフラが必要なら不向き。" },
      { q: "イースターは混みますか？", a: "フィリピン人観光客で大混雑します。静かに過ごしたい人はその時期を避けるのが無難。" },
    ],
    nearby: ["cebu-city", "mactan", "moalboal"],
  },
];

export const popularAreas = areas;

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getNearbyAreas(slug: string): Area[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearby
    .map((s) => getAreaBySlug(s))
    .filter((a): a is Area => Boolean(a));
}
