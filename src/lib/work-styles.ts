/**
 * セブで働く 5 スタイルの完全データ。
 * /work トップのカード一覧と各個別ページの両方から参照される。
 */

export type WorkStyleSlug =
  | "remote"
  | "digital-nomad"
  | "local-jobs"
  | "startup"
  | "bpo";

export type WorkStyle = {
  slug: WorkStyleSlug;
  eyebrow: string;
  title: string;
  shortDescription: string;
  heroLead: string;
  tags: string[];
  gradient: string;
  iconName: "Wifi" | "Laptop" | "Building2" | "Rocket" | "Users";
  relatedGuideCategory: string;
  overview: string;
  /** 対象スコープの説明 */
  scopeGuideline: string;
  /** コスト感 */
  costGuideline: string;
  forWhom: string[];
  cautions: string[];
  selectionPoints: { title: string; description: string }[];
  recommendedAreas: { slug: string; name: string; nameEn: string; reason: string }[];
  faqs: { q: string; a: string }[];
  relatedTopics: WorkStyleSlug[];
};

export const workStyles: WorkStyle[] = [
  // ------------------------------------------------------------------
  // REMOTE
  // ------------------------------------------------------------------
  {
    slug: "remote",
    eyebrow: "REMOTE",
    title: "リモートワーク",
    shortDescription: "日本の仕事をセブから。家賃と生活費を最適化。",
    heroLead:
      "日本の雇用主・取引先との関係を続けたまま、セブから働く。生活費を最適化しつつ、英語環境・南国生活・家族時間という追加価値を得る働き方。",
    tags: ["在宅", "コスト最適化", "個人事業主向け"],
    gradient: "from-teal-400 via-sky-500 to-navy-700",
    iconName: "Wifi",
    relatedGuideCategory: "remote",
    overview:
      "日本企業や日本クライアントの仕事を、セブの自宅やコワーキングから続ける働き方。フリーランス・個人事業主・リモート可能な日本企業の社員・海外スタートアップのリモート社員まで含む。住む場所と回線の選び方が成功の鍵。",
    scopeGuideline:
      "個人事業主／フリーランス／日本企業のリモート社員／海外企業のリモート社員。",
    costGuideline:
      "月生活費 10〜25 万円（住居グレードで変動）。回線・コワーキング込みで 15〜30 万円。",
    forWhom: [
      "場所に縛られない仕事をしている個人事業主・フリーランス",
      "リモート可能な日本企業の社員",
      "家族時間や英語環境を生活に組み込みたい人",
      "コスト最適化と生活の質の両方を求める人",
    ],
    cautions: [
      "観光ビザ滞在は最長 36 ヶ月だが、長期は SRRV・SIRV など他ビザを検討",
      "日本側の住民税・社会保険・確定申告の対応",
      "日本との時差 1 時間（コミュニケーション差は小さい）",
      "雨季の停電・回線不安定に備えたバックアップ計画",
      "重要書類のセキュリティ（紛失・盗難対策）",
    ],
    selectionPoints: [
      { title: "住む場所", description: "IT パーク（テック中心）／ビジネスパーク（高級型）／マクタン（リゾート型）が定番。" },
      { title: "回線", description: "光ファイバー＋モバイル 5G の二重化が安心。コワーキングを 1 箇所契約しておくのもバックアップに。" },
      { title: "仕事環境", description: "自宅・コワーキング・カフェの組み合わせ。気分や時間帯で使い分け。" },
      { title: "ビザ", description: "短期は観光ビザ、長期は SRRV / SIRV / TVS など。専門家相談を推奨。" },
      { title: "送金・銀行", description: "PayPal、Wise、Payoneer など。現地口座は長期前提で検討。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "コワーキング・カフェ・回線環境がリモートワーカーに最適化。" },
      { slug: "business-park", name: "ビジネスパーク", nameEn: "Business Park", reason: "高機能オフィス・コンドの選択肢。出張・打ち合わせに便利。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "海近くで暮らしながら働く。週末は自然・リゾート。" },
    ],
    faqs: [
      { q: "観光ビザのままリモートワークしてもよいですか？", a: "日本の雇用主の業務をリモートで行う場合、観光ビザでの短期滞在では実務上多く行われています。長期化や現地報酬を受ける場合はビザ要件が異なるため、専門家への確認が必要です。" },
      { q: "長期滞在のためのビザは？", a: "SRRV（退職者向け）、SIRV（投資家向け）、TVS（短期滞在延長）などがあります。年齢・資産・目的で適したビザが異なるので、移民法専門家にご相談ください。" },
      { q: "回線は信頼できますか？", a: "コンドの光ファイバーで実測 100〜500 Mbps が一般的。停電・障害時のために、モバイル 5G やコワーキングをバックアップに持つと安心。" },
      { q: "日本の住民税はどうなりますか？", a: "1 月 1 日時点の住所地で課税されます。海外転出届を出す場合は、出国前に税務署で確認。社会保険・年金も合わせて検討。" },
      { q: "セブで現地口座は必要ですか？", a: "短期なら不要。長期で家賃・公共料金の支払いに使うなら開設を。BPI、BDO、UnionBank などが外国人対応。" },
    ],
    relatedTopics: ["digital-nomad", "startup"],
  },

  // ------------------------------------------------------------------
  // DIGITAL NOMAD
  // ------------------------------------------------------------------
  {
    slug: "digital-nomad",
    eyebrow: "NOMAD",
    title: "デジタルノマド",
    shortDescription: "短期〜中期で、ITパークやリゾートから働く。",
    heroLead:
      "アジア各国を回るノマドにとって、セブは「英語＋生活コスト＋回線」のバランスが取れた人気拠点。ITパークがハブで、コワーキング・コミュニティが充実。",
    tags: ["1週間〜", "ITパーク中心", "コワーキング"],
    gradient: "from-sky-500 via-teal-400 to-palm-500",
    iconName: "Laptop",
    relatedGuideCategory: "digital-nomad",
    overview:
      "数週間〜数ヶ月単位で世界を回るノマドにとって、セブはアジア圏の有力拠点。短期賃貸・コワーキング・コミュニティが揃い、英語が日常で通じるのが大きな魅力。",
    scopeGuideline:
      "1 週間〜3 ヶ月の中短期滞在。世界各地を含むノマド生活の一拠点として活用。",
    costGuideline:
      "月 12〜25 万円（住居・回線・コワーキング・食費・国内移動含む）。航空券・ビザ別。",
    forWhom: [
      "個人事業主・フリーランスのノマド",
      "スタートアップ社員のワーケーション",
      "デジタルクリエイター、エンジニア、コンサル",
      "セブ＋他国（タイ、ベトナム、バリ等）を組み合わせる人",
    ],
    cautions: [
      "ビザの問題（観光ビザの延長、年間滞在日数）",
      "雨季（6〜11 月）の停電・回線不安定",
      "友達・人脈は能動的にコミュニティに参加しないと作りにくい",
      "運動不足、食事の偏りによる健康管理",
      "現地通貨と外貨の使い分け（クレジットカード手数料）",
    ],
    selectionPoints: [
      { title: "コワーキング", description: "月会員（3〜5 万円）、デイパス（800〜1500 円）。雰囲気・回線・電源・コミュニティで選ぶ。" },
      { title: "ノマドコミュニティ", description: "コワーキングのイベント、Slack、Facebook グループ、Meetup でつながる。" },
      { title: "住居", description: "短期賃貸、Airbnb、コリビング。1 ヶ月以上なら割引交渉が効く。" },
      { title: "移動の自由度", description: "マクタン空港から各国へ。LCC を活用して周辺国移動も容易。" },
      { title: "バックアップ回線", description: "モバイル 5G、複数 ISP の SIM、コワーキングの予備。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "セブのノマドの本流。コワーキング・カフェ・24h 営業の街。" },
      { slug: "mactan", name: "マクタン", nameEn: "Mactan", reason: "リゾート型ノマド。週末はビーチ。空港至近。" },
      { slug: "moalboal", name: "モアルボアル", nameEn: "Moalboal", reason: "海とダイビングを生活に取り入れる長期滞在型。" },
    ],
    faqs: [
      { q: "セブのノマドコミュニティは？", a: "ITパークのコワーキングを中心にコミュニティがあります。Slack・Meetup・コワーキング主催イベントで広がります。" },
      { q: "何ヶ月滞在できますか？", a: "観光ビザは 30 日無査証、現地で更新を重ねれば最長 36 ヶ月。それ以上は SRRV / SIRV / TVS など他ビザを検討。" },
      { q: "おすすめのコワーキングは？", a: "ITパーク内に複数あり、それぞれ雰囲気が異なります。1 週間トライアルや見学で実際に体験してから決めるのが定番。" },
      { q: "物価は他の東南アジアと比べてどう？", a: "バンコク・ホーチミンと同等〜やや高め、バリ・チェンマイより高め。英語環境のプレミアムを評価する人にはコストパフォーマンスが高い。" },
      { q: "雨季は仕事に支障？", a: "停電・回線断は時々あります。コワーキング契約とモバイル 5G の併用でリスクを抑えられます。" },
    ],
    relatedTopics: ["remote", "bpo"],
  },

  // ------------------------------------------------------------------
  // LOCAL JOBS
  // ------------------------------------------------------------------
  {
    slug: "local-jobs",
    eyebrow: "LOCAL JOB",
    title: "現地就職",
    shortDescription: "日系企業・現地BPO・観光業など。就労ビザが必要。",
    heroLead:
      "セブで現地企業に就職する。日系メーカー、BPO、観光・ホスピタリティ、英語人材市場が主な選択肢。就労ビザ（9G）の取得が前提。",
    tags: ["就労ビザ", "9G", "日系企業"],
    gradient: "from-navy-900 via-navy-700 to-sky-500",
    iconName: "Building2",
    relatedGuideCategory: "local-jobs",
    overview:
      "セブで現地企業に就職するには、就労ビザ（9G）が必要。日系企業のセブ拠点、BPO、観光ホスピタリティ、教育・語学、IT スタートアップなどが主な就職先。給与は日本より低いが、生活費も低く、海外キャリアの実体験が得られる。",
    scopeGuideline:
      "日系メーカー・サービス業／現地 BPO・コールセンター／観光・ホテル／教育・語学／IT・スタートアップ。",
    costGuideline:
      "月給は日本の 1/3〜2/3 が一般的（職種・経験で大差）。住居手当・医療含む総額で評価を。",
    forWhom: [
      "海外でキャリアを積みたい 20〜30 代",
      "駐在として送られる中堅・管理職",
      "配偶者・家族の都合でセブに住む人",
      "英語＋業界スキルでアジア展開したい人",
    ],
    cautions: [
      "就労ビザ（9G）の手続きには時間と書類が必要（雇用主のサポート必須）",
      "給与水準は日本より低く、貯蓄ペースは計算が必要",
      "言語要件（英語必須、セブアノ語ができると幅が広がる）",
      "労働環境・文化の違い（時間感覚、上下関係、コミュニケーション）",
      "帰国後のキャリア接続を出発前に計画",
    ],
    selectionPoints: [
      { title: "業種・職種", description: "日系メーカー（管理職）、BPO（マネジメント）、教育（語学指導）、IT・スタートアップ（エンジニア・PM）など。" },
      { title: "給与とパッケージ", description: "基本給だけでなく、住居手当・医療（HMO）・13 ヶ月給・有給休暇までを総合評価。" },
      { title: "ビザサポート", description: "雇用主が 9G ビザ取得をサポートしてくれるかは必須確認事項。" },
      { title: "言語要件", description: "英語は基本必須。日本語ができると日系企業で優遇。セブアノ語は加点。" },
      { title: "キャリアパス", description: "ローカル昇進可能か、地域統括への道があるか、本社への帰任は可能か。" },
    ],
    recommendedAreas: [
      { slug: "cebu-city", name: "セブシティ", nameEn: "Cebu City", reason: "オフィスワーク全般。日系企業・現地企業の拠点が多い。" },
      { slug: "business-park", name: "ビジネスパーク", nameEn: "Business Park", reason: "大手日系企業、コンサル、金融の集積地。" },
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "BPO、IT、スタートアップが多数。" },
    ],
    faqs: [
      { q: "英語ができないと無理ですか？", a: "業務上、英語は必須です。ただし日本人向けに日本語スキル重視の求人もあります（日系企業の総務、教育、観光ガイドなど）。" },
      { q: "どんな求人がありますか？", a: "JobStreet、LinkedIn、現地日本人会・JICA関連、日系BPOの直接募集など。専門エージェント経由が無難。" },
      { q: "給与水準は？", a: "管理職：月 15〜40 万円、エンジニア：月 12〜35 万円、英語講師：月 8〜15 万円が目安。職種・経験で大差。" },
      { q: "就労ビザはどう取りますか？", a: "雇用主が DOLE（労働省）と BI（移民局）に申請。9G が代表的で、申請から発給まで 2〜3 ヶ月かかります。" },
      { q: "日本人募集は多いですか？", a: "管理職・教育・営業など特定領域で常時募集があります。LinkedIn と日本人会の情報網が役立ちます。" },
    ],
    relatedTopics: ["bpo", "startup"],
  },

  // ------------------------------------------------------------------
  // STARTUP
  // ------------------------------------------------------------------
  {
    slug: "startup",
    eyebrow: "STARTUP",
    title: "起業",
    shortDescription: "現地法人、SEC登録、税制、雇用。専門家サポートが鍵。",
    heroLead:
      "セブで法人を作って事業を始める。SEC 登録、最低資本金、外国人比率規制、税制、雇用。専門家との連携でスモールスタートが基本。",
    tags: ["SEC登録", "現地法人", "ビジネス展開"],
    gradient: "from-navy-700 via-sky-500 to-teal-400",
    iconName: "Rocket",
    relatedGuideCategory: "startup",
    overview:
      "セブで法人設立して事業を作る。BPO・教育・観光・IT・小売・製造など。100% 外資可能業種と 40% 外資業種があり、業種選定が出発点。最低資本金、税制、雇用、外国人比率規制を理解し、専門家と進める。",
    scopeGuideline:
      "100% 外資可能業種（BPO、輸出系）／40% 外資業種（小売、製造）／Sole Prop（個人事業）／Branch・Representative Office。",
    costGuideline:
      "法人設立費用 50〜200 万円（業種・専門家利用で変動）。月運営費は規模次第で 50〜500 万円以上。",
    forWhom: [
      "セブで事業を作りたい起業家",
      "日本本社のセブ拠点設立担当者",
      "BPO・オフショア展開を考える経営者",
      "観光・教育・テック領域で挑戦したい人",
    ],
    cautions: [
      "外国人比率規制（土地保有、小売、メディア等で制限）",
      "最低資本金（業種・外国人比率で異なる）",
      "税制（VAT、所得税、源泉徴収、年次更新）",
      "雇用契約・労務（試用期間、解雇規制、13 ヶ月給）",
      "為替リスク（ペソ／円）",
      "専門家への投資（弁護士・会計士・現地パートナー）",
    ],
    selectionPoints: [
      { title: "業種選定", description: "Negative List で 100% 外資可能か、最低資本金がいくらか、をまず確認。" },
      { title: "法人形態", description: "SEC（株式会社）／Sole Proprietorship／Branch／Representative Office。事業内容と税効率で選ぶ。" },
      { title: "立地", description: "IT Park（IT・BPO）／Business Park（金融・コンサル）／Mandaue（製造）。事業に合う集積地を選ぶ。" },
      { title: "銀行・会計・税理士", description: "BPI / BDO / UnionBank の法人口座、現地会計事務所、税理士は早期に確保。" },
      { title: "雇用と労務サポート", description: "DOLE 規制、SSS / PhilHealth / Pag-IBIG 加入、13 ヶ月給、退職金。HR コンサル活用。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "BPO・IT・スタートアップが集積。優秀人材へのアクセス。" },
      { slug: "business-park", name: "ビジネスパーク", nameEn: "Business Park", reason: "金融・コンサル・本社機能向け。Grade A オフィス。" },
      { slug: "mandaue", name: "マンダウエ", nameEn: "Mandaue", reason: "製造業・物流。マクタン経済特区（MEPZ）も至近。" },
    ],
    faqs: [
      { q: "1 人で起業可能ですか？", a: "Sole Proprietorship なら可能ですが、外国人の場合は事業内容・最低資本金で制約があります。多くの場合、SEC 法人化が無難。" },
      { q: "最低資本金は？", a: "100% 外資の小売は 250 万 USD、輸出比率 60% 以上の事業は最低 5,000 USD など、業種で大きく異なります。最新の Negative List 確認が必須。" },
      { q: "外国人持株 100% 可能な業種は？", a: "BPO、IT サービス、輸出製造、教育（一部）など。Negative List で制限されている分野以外は概ね 100% 可能になっています。" },
      { q: "設立にどれくらいかかりますか？", a: "SEC 登録から開業まで 2〜4 ヶ月が目安。書類準備、銀行口座開設、BIR（税務）登録、Mayor's Permit、SSS / PhilHealth など。" },
      { q: "専門家費用の目安は？", a: "法人設立サポート 30〜100 万円、月次会計 5〜15 万円、税理士年次 10〜30 万円。HR コンサルは別。" },
    ],
    relatedTopics: ["bpo", "remote"],
  },

  // ------------------------------------------------------------------
  // BPO / HR
  // ------------------------------------------------------------------
  {
    slug: "bpo",
    eyebrow: "BPO / HR",
    title: "採用・BPO展開",
    shortDescription: "英語人材を活用したオフショア・採用拠点として。",
    heroLead:
      "BPO 拠点を作る、英語人材を採用する。コスト最適化と時差活用（日本＋1h、米国夜勤）。スモールスタートから本格展開まで段階的に。",
    tags: ["BPO", "採用", "オフショア"],
    gradient: "from-teal-400 via-navy-700 to-sun-500",
    iconName: "Users",
    relatedGuideCategory: "bpo",
    overview:
      "セブはフィリピン第 2 の BPO ハブ。英語人材が豊富で、コスト最適化・時差活用（日本＋1h、米国夜勤）が可能。コールセンター、バックオフィス、IT 開発、コンテンツモデレーション、デザイン、Web マーケまで多様な業務をオフショア化できる。",
    scopeGuideline:
      "コールセンター／バックオフィス／IT 開発／コンテンツモデレーション／データエントリー／デザイン／Web マーケティング／カスタマーサポート。",
    costGuideline:
      "月給 5〜15 万円／人（職種・経験で変動）。プラス雇用主負担（SSS、PhilHealth、HMO 等）。1 人月の総コストは日本の 1/2〜1/3。",
    forWhom: [
      "BPO・オフショア展開を検討する日本企業",
      "コスト最適化したい中堅・大企業",
      "採用拠点としてセブを選ぶ企業",
      "既存 BPO のスケール拡大を考える経営者",
    ],
    cautions: [
      "採用市場の競合（待遇水準、定着率の管理）",
      "文化的マネジメント差（日本流の押し付け NG）",
      "インターネット・電力の二重化（事業継続計画）",
      "業務の標準化・SOP 整備（暗黙知の言語化）",
      "給与水準の継続的見直し（インフレ・最低賃金改定）",
      "セキュリティ・コンプライアンス（個人情報、ISMS）",
    ],
    selectionPoints: [
      { title: "採用チャネル", description: "JobStreet（最大手）、LinkedIn、現地エージェント、自社サイト。職種で最適チャネル選択。" },
      { title: "給与パッケージ", description: "基本給＋13 ヶ月給＋HMO（医療保険）＋有給。競合 BPO の水準を調査して設計。" },
      { title: "オフィス選定", description: "コワーキング（5〜10 名）→ サービスオフィス（10〜30 名）→ 自社賃借（30 名〜）。" },
      { title: "業務管理", description: "KPI 設定、SLA、品質管理、研修プログラム。日本本社との連携フロー。" },
      { title: "自社設立 vs パートナー委託", description: "規模・期間・コア業務かで選択。最初はパートナー委託 → 自社化のパスも有効。" },
    ],
    recommendedAreas: [
      { slug: "it-park", name: "ITパーク", nameEn: "IT Park", reason: "BPO の本流。優秀な英語人材・コワーキング・24h 営業の街。" },
      { slug: "business-park", name: "ビジネスパーク", nameEn: "Business Park", reason: "本社機能・小規模オフィス向け。Grade A オフィス。" },
      { slug: "mandaue", name: "マンダウエ", nameEn: "Mandaue", reason: "製造業関連のオフショア。コストを抑えた採用が可能。" },
    ],
    faqs: [
      { q: "何人から始められますか？", a: "1 人から可能。コワーキング・サービスオフィスでスモールスタートし、5〜10 名で自社オフィス検討が定番。" },
      { q: "採用にかかる時間は？", a: "求人公開から着任まで 4〜8 週間が目安。職種・条件で変動。経験豊富なリクルーターと組むと早い。" },
      { q: "給与水準は？", a: "コールセンター：月 5〜10 万円、エンジニア：月 10〜20 万円、マネージャー：月 15〜30 万円。職種・経験・英語力で大差。" },
      { q: "自社設立と BPO 委託、どちらが良い？", a: "コア業務・5 名以上・3 年以上前提なら自社、テスト的・短期・5 名以下なら委託。両者のハイブリッドも可能。" },
      { q: "文化的に気をつけることは？", a: "「Yes」が「分かった」とは限らない、家族・宗教を重視、人前で叱らない、定時退社が標準、評価・昇給は文書化、など。日本流をそのまま持ち込まない。" },
    ],
    relatedTopics: ["startup", "local-jobs"],
  },
];

export function getWorkStyle(slug: string): WorkStyle | undefined {
  return workStyles.find((s) => s.slug === slug);
}

export function getRelatedWorkStyles(currentSlug: WorkStyleSlug): WorkStyle[] {
  const current = getWorkStyle(currentSlug);
  if (!current) return [];
  return current.relatedTopics
    .map((s) => getWorkStyle(s))
    .filter((s): s is WorkStyle => Boolean(s));
}
