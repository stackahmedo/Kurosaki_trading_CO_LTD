import { SiteContent } from '../types/siteContent';

export const defaultSiteContent: SiteContent = {
  theme: {
    forest: '#0B513D',
    deepForest: '#073E30',
    deepRed: '#C92732',
    charcoal: '#17231E',
    warmWhite: '#FAFAF7',
  },
  global: {
    companyName: {
      ja: '黒崎トレーディング株式会社',
      en: 'KUROSAKI TRADING CO., LTD.',
    },
    shortName: {
      ja: '黒崎トレーディング',
      en: 'KUROSAKI TRADING',
    },
    logoUrl: '/logo.svg',
    footerDescription: {
      ja: '国内外の生産者と業務用厨房をつなぎ、調達から供給までの品質を一貫して管理します。',
      en: 'Connecting domestic and international producers with professional kitchens, ensuring consistent quality.',
    },
    address: {
      ja: '〒124-0025\n東京都葛飾区西新小岩1丁目２番１１号\nキクヤビル１F',
      en: 'Kikuya Bldg 1F, 1-2-11\nNishishinkoiwa, Katsushika-ku\nTokyo 124-0025, Japan',
    },
    phone: '0366576728',
    phoneDisplay: {
      ja: '03-6657-6728',
      en: '03-6657-6728 (+81-3-6657-6728)',
    },
    email: 'kurosakitrading@gmail.com',
    businessHours: {
      ja: '情報準備中',
      en: 'Information in preparation',
    },
    copyright: 'KUROSAKI TRADING CO., LTD. All Rights Reserved.',
    socialLinks: [
      { id: 'soc_fb', platform: 'facebook', label: 'Facebook', url: 'https://facebook.com', enabled: true },
      { id: 'soc_ig', platform: 'instagram', label: 'Instagram', url: 'https://instagram.com', enabled: true },
      { id: 'soc_x', platform: 'x', label: 'X (Twitter)', url: 'https://x.com', enabled: true },
      { id: 'soc_li', platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', enabled: true },
      { id: 'soc_yt', platform: 'youtube', label: 'YouTube', url: 'https://youtube.com', enabled: true },
      { id: 'soc_line', platform: 'line', label: 'LINE', url: 'https://line.me', enabled: true },
    ],
  },
  pages: [
    {
      id: 'page_home',
      builtInKey: 'home',
      path: '/',
      navLabel: { ja: 'ホーム', en: 'Home' },
      enabled: true,
      showInHeader: true,
      showInFooter: false,
      footerGroup: 'none',
    },
    {
      id: 'page_about',
      builtInKey: 'about',
      path: '/about',
      navLabel: { ja: '会社概要', en: 'About Us' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'corporate',
    },
    {
      id: 'page_solutions',
      builtInKey: 'solutions',
      path: '/solutions',
      navLabel: { ja: '事業内容', en: 'Solutions' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'corporate',
    },
    {
      id: 'page_products',
      builtInKey: 'products',
      path: '/products',
      navLabel: { ja: '商品・取扱分野', en: 'Products' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'business',
    },
    {
      id: 'page_quality',
      builtInKey: 'quality',
      path: '/quality',
      navLabel: { ja: '品質管理', en: 'Quality Assurance' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'business',
    },
    {
      id: 'page_sustainability',
      builtInKey: 'sustainability',
      path: '/sustainability',
      navLabel: { ja: 'サステナビリティ', en: 'Sustainability' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'business',
    },
    {
      id: 'page_news',
      builtInKey: 'news',
      path: '/news',
      navLabel: { ja: 'お知らせ', en: 'News' },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'corporate',
    },
    {
      id: 'page_contact',
      builtInKey: 'contact',
      path: '/contact',
      navLabel: { ja: 'お問い合わせ', en: 'Contact Us' },
      enabled: true,
      showInHeader: false,
      showInFooter: false,
      footerGroup: 'none',
    },
    {
      id: 'page_sitemap',
      builtInKey: 'sitemap',
      path: '/sitemap',
      navLabel: { ja: 'サイトマップ', en: 'Sitemap' },
      enabled: true,
      showInHeader: false,
      showInFooter: true,
      footerGroup: 'bottom',
    },
  ],
  home: {
    hero: {
      badge: { ja: '総合食品ソリューション', en: 'INTEGRATED FOOD SOLUTIONS' },
      title: {
        ja: '農場から食卓まで、\nすべてのソリューションを。',
        en: 'From Farm to Kitchen,\nAll Solutions.',
      },
      subtitle: {
        ja: '農業、生産、調達、加工、品質管理、物流まで。食のサプライチェーンを一貫して支えます。',
        en: 'We support the entire food supply chain, from farming and sourcing to processing, quality control, logistics, and delivery.',
      },
      primaryCta: { ja: '事業内容を見る', en: 'Explore Our Solutions' },
      secondaryCta: { ja: 'お問い合わせ', en: 'Contact Us' },
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    },
    processSteps: [
      { id: '1', title: { ja: '農業・生産', en: 'Farming' } },
      { id: '2', title: { ja: '商品調達', en: 'Product Sourcing' } },
      { id: '3', title: { ja: '製造・加工', en: 'Manufacturing' } },
      { id: '4', title: { ja: '包装・品質管理', en: 'Packaging & QC' } },
      { id: '5', title: { ja: '物流・輸出入', en: 'Logistics' } },
      { id: '6', title: { ja: '業務用食品供給', en: 'Kitchen Supply' } },
    ],
    companyIntro: {
      title: {
        ja: '食の未来を支える、\n信頼のパートナー',
        en: 'A Trusted Partner\nSupporting the Future of Food',
      },
      description: {
        ja: '国内外の生産者、メーカー、物流事業者と連携し、商品調達から業務用供給までを一貫して支援します。',
        en: 'By collaborating with domestic and international producers, manufacturers, and logistics operators, we provide integrated support from product sourcing to professional food supply.',
      },
      buttonLabel: { ja: '会社概要を見る', en: 'View Company Profile' },
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    },
    whyChoose: {
      title: { ja: '黒崎トレーディングが選ばれる理由', en: 'Why Choose Kurosaki Trading' },
      subtitle: {
        ja: '商品調達から加工、包装、輸入、保管、配送まで。\nお客様の事業に必要な食のサプライチェーンを一つの窓口で支援します。',
        en: 'From product sourcing to processing, packaging, import, storage, and delivery.\nWe support your food supply chain through a single contact point.',
      },
      features: [
        {
          id: 'f1',
          title: { ja: '一貫した対応', en: 'Integrated Process' },
          description: {
            ja: '商品調達、加工、包装、輸入、保管、配送まで、複数の工程を一つの窓口で支援します。',
            en: 'We support multiple processes from sourcing to delivery through a single window.',
          },
        },
        {
          id: 'f2',
          title: { ja: '国内外の調達力', en: 'Global Sourcing' },
          description: {
            ja: 'お客様の条件に合わせて、国内外のメーカーやサプライヤーから適切な商品を調達します。',
            en: 'We source appropriate products from domestic and global suppliers based on your requirements.',
          },
        },
        {
          id: 'f3',
          title: { ja: '法人ニーズへの柔軟な対応', en: 'Flexible for B2B Needs' },
          description: {
            ja: '商品仕様、数量、包装形態、納期など、業務用・卸売向けのご要望に対応します。',
            en: 'We accommodate B2B and wholesale requests regarding specs, quantity, packaging, and delivery.',
          },
        },
        {
          id: 'f4',
          title: { ja: '品質管理', en: 'Quality Control' },
          description: {
            ja: 'サプライヤー選定から入荷、保管、配送まで、各工程で品質と安全を確認します。',
            en: 'We verify quality and safety at each stage from supplier selection to delivery.',
          },
        },
      ],
    },
    coreServices: {
      badge: { ja: '一貫した供給ネットワーク', en: 'Integrated Supply Network' },
      title: { ja: '一つの信頼で、\nすべてをつなぐ。', en: 'One Source.\nEndless Solutions.' },
      description: {
        ja: '国内外の生産者と業務用厨房をつなぎ、調達から供給までの品質を一貫して管理します。',
        en: 'We connect domestic and international producers with professional kitchens, ensuring consistent quality management from sourcing to supply.',
      },
      services: [
        {
          id: 'cs1',
          title: { ja: '農業・生産', en: 'Farming & Production' },
          description: {
            ja: '自社農場及び契約農家との連携により、安全で高品質な原材料の安定供給を実現します。',
            en: 'Partnering with contract farmers to produce sustainable, high-quality agricultural products.',
          },
        },
        {
          id: 'cs2',
          title: { ja: '商品調達', en: 'Product Sourcing' },
          description: {
            ja: '世界中のネットワークを活かし、最適な食材を安定的に調達。',
            en: 'Leveraging our global network to stably source optimal ingredients.',
          },
        },
        {
          id: 'cs3',
          title: { ja: '製造・加工', en: 'Manufacturing & Processing' },
          description: {
            ja: '最新設備の自社・提携工場で、顧客ニーズに合わせた加工を実施。',
            en: 'Processing tailored to customer needs at our state-of-the-art affiliated factories.',
          },
        },
        {
          id: 'cs4',
          title: { ja: '包装・品質管理', en: 'Packaging & QC' },
          description: {
            ja: '最新の設備による徹底した衛生管理と、厳格な検査基準に基づく品質保証体制を構築。',
            en: 'Packaging tech that preserves freshness and safety, paired with strict international quality inspections.',
          },
        },
        {
          id: 'cs5',
          title: { ja: '物流・輸出入', en: 'Logistics & Trade' },
          description: {
            ja: '国内外のネットワークを駆使し、コールドチェーンを遵守した迅速かつ確実な物流を提供します。',
            en: 'Cold chain with strict temperature control and smooth trade procedures.',
          },
        },
        {
          id: 'cs6',
          title: { ja: '業務用食品供給', en: 'Kitchen Supply' },
          description: {
            ja: '外食・ホテル・中食産業へ、必要な食材を必要な形でお届け。',
            en: 'Delivering necessary ingredients in required formats to restaurants, hotels, and catering industries.',
          },
        },
      ],
    },
    industries: {
      title: { ja: 'さまざまな事業者の食材調達を支援します', en: 'Industries We Support' },
      description: {
        ja: '飲食店、食品小売、卸売、製造事業者など、幅広い法人のお客様に商品調達と供給サービスを提供します。',
        en: 'We provide product sourcing and supply services to a wide range of corporate clients, including restaurants, food retailers, wholesalers, and manufacturers.',
      },
      items: [
        { ja: 'レストラン・飲食店', en: 'Restaurants & Dining' },
        { ja: 'ホテル・宿泊施設', en: 'Hotels & Accommodation' },
        { ja: 'ケータリング事業者', en: 'Catering Businesses' },
        { ja: '食品小売店', en: 'Food Retailers' },
        { ja: 'スーパーマーケット', en: 'Supermarkets' },
        { ja: '食品卸売事業者', en: 'Food Wholesalers' },
        { ja: '食品メーカー', en: 'Food Manufacturers' },
        { ja: 'EC・通販事業者', en: 'E-commerce & Mail Order' },
      ],
    },
    sourcing: {
      title: { ja: 'ご要望に合わせた商品調達', en: 'Customized Product Sourcing' },
      description: {
        ja: '商品名が分からない場合でも、用途、予算、数量、希望納期などをお知らせいただければ、条件に合う商品をご提案します。',
        en: "Even if you don't know the specific product name, let us know your intended use, budget, quantity, and desired delivery date, and we will propose products that meet your criteria.",
      },
      buttonLabel: { ja: '商品調達について相談する', en: 'Consult About Sourcing' },
      checklist: [
        { ja: '希望商品・カテゴリー', en: 'Desired Product/Category' },
        { ja: '原産国', en: 'Country of Origin' },
        { ja: '内容量・包装仕様', en: 'Volume & Packaging Specs' },
        { ja: 'ケース単位・業務用容量', en: 'Case Units & Commercial Sizes' },
        { ja: '最低発注数量', en: 'Minimum Order Quantity' },
        { ja: '希望納期', en: 'Desired Delivery Date' },
        { ja: '保管温度', en: 'Storage Temperature' },
        { ja: 'ラベル・表示対応', en: 'Labeling & Display Support' },
        { ja: 'プライベートブランド相談', en: 'Private Brand Consultation' },
        { ja: '輸入・国内配送相談', en: 'Import & Domestic Delivery' },
      ],
    },
    productCategories: {
      items: [
        {
          id: 'pc1',
          title: { ja: '食品・食料品', en: 'Food & Grocery' },
          description: {
            ja: '小売および卸売向けの日本・アジア食品、パントリーの必需品、特産食料品。',
            en: 'Japanese and Asian food products, pantry staples, and specialty grocery items for retail and wholesale.',
          },
        },
        {
          id: 'pc2',
          title: { ja: 'ハラール製品', en: 'Halal Products' },
          description: {
            ja: 'ムスリムの消費者や国際市場向けの、ハラール認証を受けた食品、化粧品、日用品。',
            en: 'Certified halal food, cosmetics, and household goods for Muslim consumers and international markets.',
          },
        },
        {
          id: 'pc3',
          title: { ja: '日用品・生活雑貨', en: 'Household Goods' },
          description: {
            ja: 'キッチン用品、清掃用品、収納、生活必需品などの高品質な家庭用品。',
            en: 'Quality home goods including kitchenware, cleaning products, storage solutions, and living essentials.',
          },
        },
        {
          id: 'pc4',
          title: { ja: '衛生・生活必需品', en: 'Daily Essentials' },
          description: {
            ja: '信頼できるメーカーのパーソナルケア、衛生用品、健康、日常の消費財。',
            en: 'Personal care, hygiene, health, and everyday consumer goods from trusted manufacturers.',
          },
        },
        {
          id: 'pc5',
          title: { ja: '輸入商品', en: 'Imported Products' },
          description: {
            ja: '日本の消費者や地域市場向けに国際的に調達された厳選商品。',
            en: 'Curated internationally sourced products for Japanese and regional consumer markets.',
          },
        },
        {
          id: 'pc6',
          title: { ja: '卸売商品', en: 'Wholesale Items' },
          description: {
            ja: '卸売業者、ディストリビューター、小売チェーンの調達チーム向けのバルク商品。',
            en: 'Bulk quantity products for wholesale buyers, distributors, and retail chain procurement teams.',
          },
        },
      ],
      ctaTitle: { ja: 'お探しの商品はございますか？', en: 'Looking for a Specific Product?' },
      ctaDescription: {
        ja: '幅広いカテゴリーの商品調達に対応しています。商品仕様、数量、納期などをお知らせください。',
        en: 'We can source products across many categories. Please let us know product specifications, volume, and delivery timeline.',
      },
      ctaButton: { ja: '調達の見積もりを依頼する', en: 'Request Sourcing Quote' },
    },
    deliveryProcess: {
      title: { ja: 'ご相談から納品までの流れ', en: 'Process from Inquiry to Delivery' },
      steps: [
        {
          id: 'dp1',
          title: { ja: 'お問い合わせ', en: 'Inquiry' },
          description: {
            ja: '必要な商品、数量、納期、包装仕様などをお知らせください。',
            en: 'Please let us know the required products, quantity, delivery date, and packaging specifications.',
          },
        },
        {
          id: 'dp2',
          title: { ja: '内容確認', en: 'Confirmation' },
          description: {
            ja: 'ご希望条件を確認し、調達方法や対応可能なサービスを整理します。',
            en: 'We will confirm your requirements and organize sourcing methods and available services.',
          },
        },
        {
          id: 'dp3',
          title: { ja: '商品調査・お見積もり', en: 'Research & Quotation' },
          description: {
            ja: 'サプライヤー、価格、仕様、納期を確認し、お見積もりをご案内します。',
            en: 'We will confirm suppliers, prices, specifications, and delivery dates, and provide a quotation.',
          },
        },
        {
          id: 'dp4',
          title: { ja: 'ご発注・手配', en: 'Order & Arrangement' },
          description: {
            ja: '内容確定後、商品調達、加工、包装、輸入、物流手配を進めます。',
            en: 'Once confirmed, we will proceed with sourcing, processing, packaging, import, and logistics arrangements.',
          },
        },
        {
          id: 'dp5',
          title: { ja: '検品・納品', en: 'Inspection & Delivery' },
          description: {
            ja: '品質、数量、包装状態を確認したうえで、ご指定先へ納品します。',
            en: 'After confirming quality, quantity, and packaging condition, we will deliver to your specified location.',
          },
        },
      ],
    },
    qualityPolicy: {
      title: { ja: '品質管理方針', en: 'Quality Management Policy' },
      description: {
        ja: '黒崎トレーディングでは、商品の安全性、品質、表示、保管条件を重要な管理項目として位置づけています。\n\nサプライヤー確認、商品情報確認、入荷時検品、保管温度管理、出荷前確認を通じて、安定した商品供給を目指します。',
        en: 'At Kurosaki Trading, we position product safety, quality, labeling, and storage conditions as critical management items.\n\nThrough supplier verification, product information confirmation, receiving inspection, storage temperature control, and pre-shipment checks, we aim for a stable product supply.',
      },
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
      checklist: [
        { ja: '商品仕様書の確認', en: 'Product Specification Check' },
        { ja: '原材料・アレルゲン情報', en: 'Ingredient & Allergen Info' },
        { ja: '原産国表示', en: 'Country of Origin Labeling' },
        { ja: '賞味期限管理', en: 'Expiration Date Management' },
        { ja: 'ロット管理', en: 'Lot Management' },
        { ja: '保管温度', en: 'Storage Temperature' },
        { ja: '包装状態', en: 'Packaging Condition' },
        { ja: '輸入関連書類', en: 'Import-related Documents' },
        { ja: 'トレーサビリティ', en: 'Traceability' },
      ],
      note: {
        ja: '品質管理・認証対応については、商品や取引条件に応じて個別にご案内します。',
        en: 'We will provide individual guidance on quality management and certification compliance based on the product and transaction conditions.',
      },
    },
    globalNetwork: {
      title: { ja: '日本と世界をつなぐ調達・物流ネットワーク', en: 'Global Supply and Logistics Network' },
      description: {
        ja: '国内外のサプライヤーと連携し、商品調達、輸入、保管、国内配送まで一貫して対応します。',
        en: 'Working with domestic and international suppliers, we provide integrated support from product sourcing, import, storage, to domestic delivery.',
      },
      mapImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg',
    },
    quoteInfo: {
      title: { ja: 'お問い合わせ時にお知らせください', en: 'Information Required for a Quote' },
      description: {
        ja: '以下の情報をお知らせいただくと、商品調査とお見積もりをスムーズに進められます。',
        en: 'Providing the following information will help us proceed smoothly with product research and quotation.',
      },
      checklist: [
        { ja: '商品名または商品カテゴリー', en: 'Product Name or Category' },
        { ja: '希望数量', en: 'Desired Quantity' },
        { ja: '希望価格帯', en: 'Target Price Range' },
        { ja: '希望納期', en: 'Desired Delivery Date' },
        { ja: '納品場所', en: 'Delivery Location' },
        { ja: '包装・容量', en: 'Packaging & Volume' },
        { ja: '原産国の希望', en: 'Preferred Country of Origin' },
        { ja: '必要な認証・規格', en: 'Required Certifications/Standards' },
        { ja: '使用目的', en: 'Intended Use' },
        { ja: '参考画像または商品資料', en: 'Reference Images or Documents' },
      ],
      buttonLabel: { ja: '見積もりを依頼する', en: 'Request a Quote' },
    },
    faq: {
      title: { ja: 'よくあるご質問', en: 'Frequently Asked Questions' },
      items: [
        {
          id: 'faq1',
          question: { ja: '少量から注文できますか？', en: 'Can I order in small quantities?' },
          answer: {
            ja: '商品やサプライヤーによって最低発注数量が異なります。ご希望の商品と数量をお知らせください。',
            en: 'Minimum order quantities vary depending on the product and supplier. Please let us know your desired product and quantity.',
          },
        },
        {
          id: 'faq2',
          question: { ja: '商品名が分からなくても相談できますか？', en: 'Can I consult without knowing the specific product name?' },
          answer: {
            ja: 'はい。用途、予算、数量、納期などをもとに、条件に合う商品をお探しします。',
            en: 'Yes. Based on your intended use, budget, quantity, delivery date, etc., we will look for products that meet your criteria.',
          },
        },
        {
          id: 'faq3',
          question: { ja: '海外からの商品調達は可能ですか？', en: 'Is it possible to source products from overseas?' },
          answer: {
            ja: '商品、原産国、輸入条件を確認したうえで、対応可否をご案内します。',
            en: 'We will inform you of availability after confirming the product, country of origin, and import conditions.',
          },
        },
        {
          id: 'faq4',
          question: { ja: 'オリジナル包装に対応できますか？', en: 'Can you handle custom packaging?' },
          answer: {
            ja: '商品や発注数量によって対応可能です。包装仕様やデザインのご希望をお知らせください。',
            en: 'It is possible depending on the product and order quantity. Please let us know your desired packaging specifications and design.',
          },
        },
        {
          id: 'faq5',
          question: { ja: 'ハラール商品を探してもらえますか？', en: 'Can you find halal products?' },
          answer: {
            ja: 'はい。必要な認証、原産国、商品カテゴリーを確認し、条件に合う商品を調査します。',
            en: 'Yes. We will investigate products that meet your criteria after confirming required certifications, country of origin, and product category.',
          },
        },
        {
          id: 'faq6',
          question: { ja: '見積もりには何が必要ですか？', en: 'What is required for a quotation?' },
          answer: {
            ja: '商品名、数量、納品場所、希望納期、包装仕様などをご連絡ください。',
            en: 'Please provide the product name, quantity, delivery location, desired delivery date, packaging specifications, etc.',
          },
        },
      ],
    },
    finalCta: {
      title: {
        ja: '商品調達や業務用供給について、お気軽にご相談ください。',
        en: 'Please feel free to contact us regarding product sourcing and professional supply.',
      },
      buttonLabel: { ja: 'お問い合わせフォームへ', en: 'Go to Contact Form' },
    },
  },
  about: {
    title: { ja: '会社概要', en: 'About Us' },
    message: {
      badge: { ja: '代表挨拶', en: 'LEADERSHIP MESSAGE' },
      heading: { ja: '代表者からのメッセージ', en: 'Message from the President' },
      paragraphs: [
        {
          ja: '弊社のWebサイトをご覧いただき、誠にありがとうございます。',
          en: 'Thank you very much for visiting our website.',
        },
        {
          ja: '近年、食の多様化やグローバル化に伴い、外食産業や食料品小売店の皆様が求められる「米」のニーズも大きく変化しております。伝統的な国産米の深い味わいから、本格的なエスニック料理や多国籍メニューに欠かせない輸入米穀まで、その選択肢はかつてないほど広がっています。',
          en: 'In recent years, with the diversification and globalization of food culture, the rice needs of restaurant operators and food retailers have evolved considerably. From the deep flavor of traditional domestic Japanese rice to imported grains essential for authentic ethnic and international dishes, the range of choices has broadened like never before.',
        },
        {
          ja: '私たちは、世界・日本全国の信頼できるサプライヤーと確固たるネットワークを築き、品質管理の徹底されたお米をお届けしています。単に米を供給するだけでなく、お米のプロとして「どのような料理にどの銘柄が合うか」「コストと品質のバランスをどう取るか」という仕入れのお悩みに寄り添い、確実で安定した供給をお約束いたします。',
          en: 'We have established strong networks with trusted suppliers both across Japan and around the world, delivering rice under rigorous quality control. Beyond simply supplying rice, as rice professionals, we actively support your procurement decisions—helping identify the ideal grain for each cuisine and balancing cost with culinary excellence—while guaranteeing reliable, consistent supply.',
        },
        {
          ja: '貴店の味とビジネスを足元から支えるパートナーとして、ぜひお気軽にご相談ください。',
          en: 'As a dedicated partner supporting your flavors and business from the ground up, please feel free to consult with us.',
        },
      ],
      role: { ja: '代表取締役', en: 'President & Representative Director' },
      presidentName: { ja: '月岡 勇人', en: 'Hayato Tsukioka' },
    },
    profile: {
      badge: { ja: '企業情報', en: 'OVERVIEW' },
      heading: { ja: '会社情報', en: 'Company Profile' },
      rows: [
        { id: 'r1', label: { ja: '会社名', en: 'Company Name' }, value: { ja: '黒崎トレーディング株式会社（ｸﾛｻｷﾄﾚｰﾃﾞｨﾝｸﾞｶﾌﾞｼｷｶﾞｲｼｬ）', en: 'Kurosaki Trading Co., Ltd.' } },
        { id: 'r2', label: { ja: '英文会社名', en: 'English Company Name' }, value: { ja: 'Kurosaki Trading Co., Ltd.', en: 'Kurosaki Trading Co., Ltd.' } },
        { id: 'r3', label: { ja: '法人番号', en: 'Corporate Number' }, value: { ja: '3010501042099', en: '3010501042099' } },
        { id: 'r4', label: { ja: '代表者', en: 'Representative' }, value: { ja: '月岡　勇人', en: 'Hayato Tsukioka' } },
        { id: 'r5', label: { ja: '設立年月', en: 'Established' }, value: { ja: '平成30年１月１９日', en: 'January 19, 2018' } },
        { id: 'r6', label: { ja: '資本金', en: 'Capital' }, value: { ja: '￥5,000,000', en: '¥5,000,000' } },
        { id: 'r7', label: { ja: '所在地', en: 'Address' }, value: { ja: '東京都葛飾区西新小岩1丁目２番１１号キクヤビル１F', en: 'Kikuya Bldg 1F, 1-2-11 Nishi-Shinkoiwa, Katsushika-ku, Tokyo' } },
        { id: 'r8', label: { ja: '電話番号', en: 'Phone Number' }, value: { ja: '03 6657 6728', en: '03 6657 6728 (+81-3-6657-6728)' }, type: 'phone' },
        { id: 'r9', label: { ja: 'メールアドレス', en: 'Email Address' }, value: { ja: 'kurosakitrading@gmail.com', en: 'kurosakitrading@gmail.com' }, type: 'email' },
        { id: 'r10', label: { ja: '営業時間', en: 'Business Hours' }, value: { ja: '情報準備中', en: 'Information in preparation' } },
        { id: 'r11', label: { ja: '事業内容', en: 'Business Activities' }, value: { ja: '・飲食店舗経営\n・輸入米穀、国産米の卸売り', en: '• Restaurant Management\n• Wholesale of Imported and Domestic Rice' } },
        { id: 'r12', label: { ja: '対応地域', en: 'Service Area' }, value: { ja: '全世界', en: 'Worldwide' } },
        { id: 'r13', label: { ja: '主要取引銀行', en: 'Main Banks' }, value: { ja: '三井住友銀行', en: 'Sumitomo Mitsui Banking Corporation (SMBC)' } },
        { id: 'r14', label: { ja: '許認可', en: 'Licenses & Approvals' }, value: { ja: '情報準備中', en: 'Information in preparation' } },
        { id: 'r15', label: { ja: '適格請求書発行事業者番号', en: 'Invoice Issuer Registration Number' }, value: { ja: 'T3010501042099', en: 'T3010501042099' } },
      ],
    },
  },
  solutions: {
    title: { ja: '事業内容', en: 'Solutions' },
    subtitle: {
      ja: '農場から食卓までを一貫してサポートする、6つのコアソリューション。複雑なフードサプライチェーンにおけるあらゆる課題を解決します。',
      en: 'Six core solutions supporting the integrated supply chain from farm to kitchen. We solve any challenge within the complex food supply chain.',
    },
    items: [
      {
        id: 'farming',
        title: { ja: '農業・生産', en: 'Farming & Production' },
        description: {
          ja: '契約農家と連携し、持続可能で高品質な農産物を生産。土壌作りから収穫まで、厳密な基準に基づいて管理しています。',
          en: 'Partnering with contract farmers to produce sustainable, high-quality agricultural products. We manage everything from soil preparation to harvesting based on strict standards.',
        },
        benefits: [
          { ja: '安定した収穫量', en: 'Stable yields' },
          { ja: '無農薬・減農薬対応', en: 'Pesticide-free / Reduced-pesticide options' },
          { ja: 'トレーサビリティの確保', en: 'Guaranteed traceability' },
        ],
        imageUrl: '',
      },
      {
        id: 'sourcing',
        title: { ja: '商品調達', en: 'Sourcing' },
        description: {
          ja: '世界中のネットワークを活かし、最適な食材を安定的に調達。長年のパートナーシップにより、競争力のある価格と高品質を両立します。',
          en: 'Leveraging our global network to stably source optimal ingredients. Long-standing partnerships allow us to balance competitive pricing with high quality.',
        },
        benefits: [
          { ja: '世界各国の特産品調達', en: 'Sourcing global specialties' },
          { ja: '価格変動リスクの低減', en: 'Mitigating price fluctuation risks' },
          { ja: '安定供給の実現', en: 'Ensuring stable supply' },
        ],
        imageUrl: '',
      },
      {
        id: 'manufacturing',
        title: { ja: '製造・加工', en: 'Manufacturing & Processing' },
        description: {
          ja: '最新設備の自社および提携工場で、顧客ニーズに合わせた加工を実施。小ロットから大量生産まで柔軟に対応します。',
          en: 'Processing tailored to customer needs at our state-of-the-art affiliated factories. We flexibly handle everything from small batches to mass production.',
        },
        benefits: [
          { ja: 'オーダーメイド加工', en: 'Custom processing' },
          { ja: 'HACCP対応の衛生管理', en: 'HACCP-compliant hygiene management' },
          { ja: '規格外品の活用提案', en: 'Proposals for utilizing off-spec products' },
        ],
        imageUrl: '',
      },
      {
        id: 'packaging',
        title: { ja: '包装・品質管理', en: 'Packaging & Quality Control' },
        description: {
          ja: '鮮度と安全を保つ最先端の包装技術と、国際基準に基づく厳格な品質検査。お客様のブランド価値を守ります。',
          en: 'State-of-the-art packaging technology that preserves freshness and safety, paired with strict international quality inspections. We protect your brand value.',
        },
        benefits: [
          { ja: '鮮度保持パッケージ', en: 'Freshness-preserving packaging' },
          { ja: '微生物・残留農薬検査', en: 'Microbial / Pesticide residue testing' },
          { ja: '環境配慮型素材の提案', en: 'Eco-friendly material proposals' },
        ],
        imageUrl: '',
      },
      {
        id: 'logistics',
        title: { ja: '物流・輸出入', en: 'Logistics, Import & Export' },
        description: {
          ja: '徹底した温度管理によるコールドチェーンと、スムーズな貿易手続き。最適なルートでスピーディにお届けします。',
          en: 'Cold chain with strict temperature control and smooth trade procedures. We deliver swiftly using optimal routes.',
        },
        benefits: [
          { ja: '3温度帯（常温・冷蔵・冷凍）対応', en: '3-temperature zones (ambient, chilled, frozen)' },
          { ja: '通関手続きの代行', en: 'Customs clearance agency' },
          { ja: 'ジャストインタイム配送', en: 'Just-in-time delivery' },
        ],
        imageUrl: '',
      },
      {
        id: 'kitchen',
        title: { ja: '業務用食品供給', en: 'Foodservice and Kitchen Supply' },
        description: {
          ja: '外食・ホテル・中食産業へ、必要な食材を必要な形でお届け。現場のオペレーション効率化に貢献します。',
          en: 'Delivering necessary ingredients in required formats to restaurants, hotels, and catering industries. We contribute to operational efficiency in professional kitchens.',
        },
        benefits: [
          { ja: '調理済みキットの提供', en: 'Pre-cooked kit provision' },
          { ja: 'メニュー開発サポート', en: 'Menu development support' },
          { ja: '小分け・ポーションカット', en: 'Portion cutting' },
        ],
        imageUrl: '',
      },
    ],
  },
  products: {
    title: { ja: '商品・取扱分野', en: 'Products' },
    subtitle: {
      ja: '外食産業、小売業、食品メーカー様向けに、世界中から厳選した高品質な食材を提供しています。',
      en: 'We provide high-quality ingredients carefully selected from around the world for the foodservice industry, retailers, and food manufacturers.',
    },
    categories: [
      { ja: '農産物・生鮮食品', en: 'Agricultural & Fresh' },
      { ja: '冷凍食品', en: 'Frozen Foods' },
      { ja: '加工食品', en: 'Processed Foods' },
      { ja: '調味料・スパイス', en: 'Seasonings & Spices' },
      { ja: '業務用食材', en: 'Foodservice Ingredients' },
    ],
    items: [
      {
        id: 'p1',
        category: { ja: '農産物・生鮮食品', en: 'Agricultural & Fresh' },
        name: { ja: '厳選 国産コシヒカリ', en: 'Premium Domestic Koshihikari Rice' },
        origin: { ja: '日本', en: 'Japan' },
        storage: { ja: '常温', en: 'Ambient' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: '厳選された契約農家から仕入れる高品質な国産コシヒカリ。', en: 'High-quality domestic Koshihikari rice sourced directly from contracted farms.' },
      },
      {
        id: 'p2',
        category: { ja: '冷凍食品', en: 'Frozen Foods' },
        name: { ja: '業務用 冷凍ブロッコリー', en: 'Commercial Frozen Broccoli' },
        origin: { ja: '中国', en: 'China' },
        storage: { ja: '冷凍', en: 'Frozen' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: '収穫後すぐに急速冷凍し、鮮度と栄養を閉じ込めました。', en: 'Flash-frozen immediately after harvest to lock in freshness and nutrients.' },
      },
      {
        id: 'p3',
        category: { ja: '加工食品', en: 'Processed Foods' },
        name: { ja: 'オーガニック トマトピューレ', en: 'Organic Tomato Puree' },
        origin: { ja: 'イタリア', en: 'Italy' },
        storage: { ja: '常温', en: 'Ambient' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: 'イタリア産完熟オーガニックトマトを使用した濃厚ピューレ。', en: 'Rich puree made from ripe Italian organic tomatoes.' },
      },
      {
        id: 'p4',
        category: { ja: '調味料・スパイス', en: 'Seasonings & Spices' },
        name: { ja: '特撰 濃口醤油（業務用）', en: 'Special Dark Soy Sauce (Bulk)' },
        origin: { ja: '日本', en: 'Japan' },
        storage: { ja: '常温', en: 'Ambient' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: '伝統的な醸造法で仕上げた、深い旨味と香りの業務用濃口醤油。', en: 'Traditionally brewed dark soy sauce with rich umami for commercial kitchens.' },
      },
      {
        id: 'p5',
        category: { ja: '業務用食材', en: 'Foodservice Ingredients' },
        name: { ja: 'チキンブイヨン 無添加', en: 'Additive-free Chicken Bouillon' },
        origin: { ja: 'タイ', en: 'Thailand' },
        storage: { ja: '常温', en: 'Ambient' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: '素材本来の味を活かした無添加の業務用チキンブイヨン。', en: 'Additive-free commercial chicken bouillon highlighting natural flavors.' },
      },
      {
        id: 'p6',
        category: { ja: '冷凍食品', en: 'Frozen Foods' },
        name: { ja: '冷凍アトランティックサーモン', en: 'Frozen Atlantic Salmon' },
        origin: { ja: 'ノルウェー', en: 'Norway' },
        storage: { ja: '冷凍', en: 'Frozen' },
        wholesale: { ja: '可能', en: 'Available' },
        imageUrl: '',
        description: { ja: '脂の乗ったノルウェー産サーモンを厳格な温度管理でお届けします。', en: 'Rich Norwegian Atlantic salmon delivered under strict cold-chain control.' },
      },
    ],
  },
  quality: {
    title: { ja: '品質管理', en: 'Quality Assurance' },
    subtitle: {
      ja: '「食の安全は、すべての前提である」という理念のもと、農場から食卓まで、一切の妥協のない品質管理体制を敷いています。',
      en: 'Under the philosophy that "Food safety is the premise of everything," we have established an uncompromising quality control system from farm to kitchen.',
    },
    processTitle: { ja: '品質管理プロセス', en: 'Quality Control Process' },
    processes: [
      {
        id: 'q1',
        title: { ja: 'サプライヤー審査', en: 'Supplier Screening' },
        description: {
          ja: '国内外の生産者や製造委託先に対して、当社独自の厳格な監査を実施。基準を満たしたパートナーのみと取引を行います。',
          en: 'We conduct our own strict audits of domestic and international producers and contract manufacturers. We only partner with those who meet our standards.',
        },
      },
      {
        id: 'q2',
        title: { ja: '生産・製造管理', en: 'Production Control' },
        description: {
          ja: '各工程での温度管理、衛生管理を徹底。異常を検知した場合は直ちに出荷を停止し、原因を究明する体制を構築しています。',
          en: 'Strict temperature and hygiene control at every process. We have a system to immediately stop shipments and investigate causes if abnormalities are detected.',
        },
      },
      {
        id: 'q3',
        title: { ja: '成分・残留農薬検査', en: 'Ingredient & Pesticide Testing' },
        description: {
          ja: '外部の第三者機関と連携し、定期的な成分分析、微生物検査、残留農薬検査を実施。科学的根拠に基づいた安全性を担保します。',
          en: 'We conduct regular ingredient analysis, microbial testing, and pesticide residue testing in collaboration with third-party organizations to ensure science-based safety.',
        },
      },
    ],
    coldChain: {
      title: { ja: 'コールドチェーン管理とトレーサビリティ', en: 'Cold Chain Management & Traceability' },
      paragraphs: [
        {
          ja: '商品の特性に応じた常温・冷蔵・冷凍の3温度帯管理を徹底。収穫から加工、輸送、お客様の元へ届くまでの全工程において、途切れることのない温度管理（コールドチェーン）を実現しています。',
          en: 'We ensure strict management in 3 temperature zones (ambient, chilled, frozen) according to product characteristics. We achieve an uninterrupted cold chain throughout all processes from harvest to processing, transport, and delivery to the customer.',
        },
        {
          ja: 'また、独自のシステムによりロット単位でのトレーサビリティを確保。万が一の問題発生時にも、速やかに原因箇所を特定し、影響範囲を最小限に抑えます。',
          en: 'In addition, our proprietary system ensures traceability at the lot level. In the unlikely event of a problem, we can quickly identify the source and minimize the impact.',
        },
      ],
      imageUrl: '',
    },
    cta: {
      title: { ja: '品質に関するお問い合わせ', en: 'Quality Inquiries' },
      description: {
        ja: '製品の規格書、安全証明書、各種認証情報に関するご質問はこちらから承ります。',
        en: 'For questions regarding product specifications, safety certificates, and certifications, please contact us.',
      },
      buttonLabel: { ja: 'お問い合わせへ進む', en: 'Proceed to Contact Form' },
    },
  },
  sustainability: {
    title: { ja: 'サステナビリティ', en: 'Sustainability' },
    subtitle: {
      ja: '次世代へ豊かな食環境を引き継ぐために。私たちは、サプライチェーン全体で環境負荷の低減と持続可能な社会の実現に取り組みます。',
      en: 'To pass on a rich food environment to the next generation. We are working across the supply chain to reduce environmental impact and realize a sustainable society.',
    },
    initiativesTitle: { ja: '4つの重点取り組み', en: '4 Key Initiatives' },
    initiatives: [
      {
        id: 's1',
        title: { ja: '持続可能な調達', en: 'Sustainable Sourcing' },
        description: {
          ja: '環境に配慮した農法を実践する生産者との取引を優先し、農薬・化学肥料の使用低減を推進しています。',
          en: 'We prioritize working with producers who practice eco-friendly farming and promote the reduction of pesticides and chemical fertilizers.',
        },
      },
      {
        id: 's2',
        title: { ja: '食品ロスの削減と資源循環', en: 'Reducing Food Loss & Resource Circulation' },
        description: {
          ja: '規格外品の加工品への転用や、データ分析を活用した需要予測による在庫最適化により、サプライチェーン全体での食品ロス削減に努めています。',
          en: 'We strive to reduce food loss across the supply chain by repurposing off-spec products into processed foods and optimizing inventory using data-driven demand forecasting.',
        },
      },
      {
        id: 's3',
        title: { ja: '環境配慮型パッケージング', en: 'Eco-friendly Packaging' },
        description: {
          ja: '鮮度保持機能と環境負荷低減を両立する新素材の導入を進め、プラスチック使用量の削減を段階的に実施しています。',
          en: 'We are phasing in new materials that balance freshness preservation with reduced environmental impact, gradually reducing plastic usage.',
        },
      },
      {
        id: 's4',
        title: { ja: '地域社会・生産者との共生', en: 'Community & Producer Coexistence' },
        description: {
          ja: '適正な価格での継続的な取引を通じて、生産者の経営安定化と地域農業の持続的な発展を支援しています。',
          en: 'Through continuous trading at fair prices, we support the financial stability of producers and the sustainable development of regional agriculture.',
        },
      },
    ],
    targetsTitle: { ja: '目標と進捗', en: 'Targets and Progress' },
    kpis: [
      {
        id: 'kpi1',
        label: { ja: '食品ロス削減', en: 'Food Loss Reduction' },
        value: '50%',
        description: { ja: '2030年までの削減目標（2020年比）', en: 'Reduction target by 2030 (vs 2020)' },
      },
      {
        id: 'kpi2',
        label: { ja: '環境配慮型包装', en: 'Eco-Packaging' },
        value: '80%',
        description: { ja: '2030年までの切り替え目標', en: 'Transition target by 2030' },
      },
      {
        id: 'kpi3',
        label: { ja: '持続可能な調達率', en: 'Sustainable Sourcing Rate' },
        value: '100%',
        description: { ja: '2030年までの主要原材料達成目標', en: 'Target for key ingredients by 2030' },
      },
    ],
  },
  news: {
    title: { ja: 'お知らせ', en: 'News & Updates' },
    categories: [
      { id: 'All', label: { ja: 'すべて', en: 'All' } },
      { id: 'Corporate', label: { ja: '会社情報', en: 'Corporate' } },
      { id: 'Products', label: { ja: '商品情報', en: 'Products' } },
      { id: 'Quality', label: { ja: '品質管理', en: 'Quality' } },
      { id: 'Sustainability', label: { ja: 'サステナビリティ', en: 'Sustainability' } },
    ],
    items: [
      {
        id: 'n1',
        date: '2023.10.15',
        categoryId: 'Corporate',
        title: { ja: '公式ウェブサイト刷新のお知らせ', en: 'Official Website Renewal Announcement' },
        excerpt: {
          ja: 'お客様により分かりやすく情報をお届けするため、公式ウェブサイトをリニューアルいたしました。',
          en: 'We have renewed our official website to provide clearer information on our food supply chain services.',
        },
        content: {
          ja: '平素は格別のご高配を賜り、厚く御礼申し上げます。このたび、黒崎トレーディング株式会社の公式ウェブサイトを全面リニューアルいたしました。今後も内容の充実を図ってまいります。',
          en: 'Thank you for your continued support. We have completely renewed the official website of Kurosaki Trading Co., Ltd. We will continue to enhance our content and services.',
        },
      },
      {
        id: 'n2',
        date: '2023.09.01',
        categoryId: 'Products',
        title: { ja: '新規取り扱い：オーガニック野菜シリーズ', en: 'New Product Line: Organic Vegetable Series' },
        excerpt: {
          ja: '契約農家と共同開発した、業務用のオーガニック野菜シリーズの提供を開始します。',
          en: 'We are launching a new organic vegetable series for foodservice, co-developed with contract farmers.',
        },
        content: {
          ja: '契約農家と共同開発した業務用オーガニック野菜シリーズの取り扱いを開始いたしました。詳細やサンプルのご依頼はお問い合わせフォームよりご連絡ください。',
          en: 'We are pleased to announce the launch of our new commercial organic vegetable series co-developed with partner farms. Please contact us for samples and specifications.',
        },
      },
      {
        id: 'n3',
        date: '2023.07.20',
        categoryId: 'Sustainability',
        title: { ja: 'フードロス削減に向けた新プロジェクト', en: 'New Project for Food Loss Reduction' },
        excerpt: {
          ja: '未利用食材を活用した新しい加工食品の開発プロジェクトをスタートしました。',
          en: 'We have started a new project to develop processed foods utilizing unused ingredients.',
        },
        content: {
          ja: 'サプライチェーン全体での食品ロス削減を目指し、規格外品や未利用食材を活用した加工食品の開発プロジェクトを始動いたしました。',
          en: 'To reduce food loss across our supply chain, we have initiated a new project developing processed foods from off-spec and unused ingredients.',
        },
      },
      {
        id: 'n4',
        date: '2023.05.10',
        categoryId: 'Quality',
        title: { ja: '新設加工センターにてHACCP認証取得', en: 'HACCP Certification Acquired at New Processing Center' },
        excerpt: {
          ja: 'より一層の品質管理強化のため、新設の関東加工センターにおいてHACCP認証を取得しました。',
          en: 'To further strengthen quality control, our new Kanto Processing Center has acquired HACCP certification.',
        },
        content: {
          ja: 'お客様により安全な食材をお届けするため、関東加工センターにおいて国際基準の衛生管理手法であるHACCP認証を取得いたしました。',
          en: 'To deliver even safer food products to our clients, our Kanto Processing Center has achieved HACCP certification.',
        },
      },
    ],
  },
  contact: {
    title: { ja: 'お問い合わせ', en: 'Contact Us' },
    subtitle: {
      ja: '法人取引、商品調達、お見積もり等に関するご相談はこちらから承ります。',
      en: 'For B2B inquiries, product sourcing, and quotation requests, please use the form below.',
    },
    inquiryTypes: [
      { ja: '商品調達について', en: 'Product Sourcing' },
      { ja: '卸売について', en: 'Wholesale' },
      { ja: '製造・加工について', en: 'Manufacturing and Processing' },
      { ja: '包装・品質管理について', en: 'Packaging and Quality Control' },
      { ja: '輸入・輸出について', en: 'Import and Export' },
      { ja: '物流について', en: 'Logistics' },
      { ja: '業務用食品供給について', en: 'Foodservice Supply' },
      { ja: 'プライベートブランドについて', en: 'Private Label' },
      { ja: '取引・パートナーシップについて', en: 'Business Partnership' },
      { ja: 'その他', en: 'Other' },
    ],
    submittedTitle: { ja: 'お問い合わせを受け付けました', en: 'Inquiry Submitted' },
    submittedMessage: {
      ja: 'この度はお問い合わせいただき、誠にありがとうございます。担当者より通常3営業日以内にご連絡いたします。',
      en: 'Thank you for your inquiry. Our representative will contact you within 3 business days.',
    },
  },
  sitemap: {
    badge: 'SITE DIRECTORY',
    title: { ja: 'サイトマップ', en: 'Sitemap' },
    subtitle: {
      ja: '黒崎トレーディング株式会社の公式ウェブサイトに掲載されている各ページの一覧です。',
      en: 'Explore the full structure and pages of the Kurosaki Trading Co., Ltd. official website.',
    },
    ctaTitle: { ja: 'お探しの情報が見つかりませんか？', en: "Can't find what you're looking for?" },
    ctaDescription: {
      ja: '商品のお取り扱いや法人取引に関するご質問は、お問い合わせフォームよりお気軽にご連絡ください。',
      en: 'For questions regarding our products, sourcing, or B2B partnerships, please reach out via our contact form.',
    },
    ctaButton: { ja: 'お問い合わせへ', en: 'Go to Contact' },
  },
};
