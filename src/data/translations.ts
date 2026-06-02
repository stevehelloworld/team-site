export type TranslationItem = {
  en: string;
  zh: string;
};

export type TranslationsDict = {
  [page: string]: {
    [key: string]: TranslationItem;
  };
};

export const translations: TranslationsDict = {
  navbar: {
    home: { en: "Home", zh: "首頁" },
    about: { en: "About Us", zh: "關於我們" },
    story: { en: "Our Story", zh: "隊伍故事" },
    members: { en: "Team Members", zh: "隊伍成員" },
    technical: { en: "Technical", zh: "技術開發" },
    robots: { en: "Robots", zh: "機器人" },
    notes: { en: "Engineering Notes", zh: "工程筆記" },
    resources: { en: "Resources", zh: "品牌與資源" },
    schedule: { en: "Schedule", zh: "賽事日程" },
    calendar: { en: "Calendar", zh: "行事曆" },
    season: { en: "FTC Season", zh: "FTC 賽季" },
    media: { en: "Media", zh: "影音媒體" },
    first: { en: "FIRST & FTC", zh: "認識 FIRST" }
  },
  home: {
    teamBadge: { en: "FIRST Tech Challenge", zh: "FIRST 機器人科技挑戰賽" },
    subTitle: { en: "FTC Team #32760 from Taipei, Taiwan. We engineer, we compete, we inspire.", zh: "來自台灣台北的 FTC 隊伍 #32760。我們工程、我們競爭、我們啟發。" },
    btnRobots: { en: "Our Robots →", zh: "我們的機器人 →" },
    btnStory: { en: "Our Story", zh: "我們的故事" },
    statTeamNum: { en: "Team Number", zh: "隊伍編號" },
    statFounded: { en: "Founded", zh: "創立年份" },
    statTaipei: { en: "Taipei", zh: "所在城市" },
    missionTitle: { en: "Our Mission", zh: "我們的使命" },
    missionDesc: { en: "To push the boundaries of student robotics in Taiwan through engineering excellence, teamwork, and community impact.", zh: "透過卓越的工程技術、團隊合作以及社區影響力，推動台灣學生機器人領域的邊界。" },
    mission1Title: { en: "Engineer", zh: "工程實踐" },
    mission1Desc: { en: "Design, build, and program competitive robots that solve real engineering challenges.", zh: "設計、建造與編寫具競爭力的機器人，解決真實世界的工程挑戰。" },
    mission2Title: { en: "Compete", zh: "賽場競技" },
    mission2Desc: { en: "Represent Taiwan on the international FTC stage, competing at regional and world championships.", zh: "在國際 FTC 舞台上代表台灣，參與區域賽與世界錦標賽的競爭。" },
    mission3Title: { en: "Inspire", zh: "傳承啟發" },
    mission3Desc: { en: "Spread STEM education and robotics enthusiasm in our community and beyond.", zh: "在我們的社區與更多地方推廣 STEM 教育與機器人熱忱。" },
    exploreTitle: { en: "Explore", zh: "探索更多" },
    featuredDocuBadge: { en: "Featured Documentary", zh: "精選紀錄片" },
    featuredDocuTitle: { en: "Season Documentary: TO CARRY IT ALL", zh: "年度紀錄片首部曲《TO CARRY IT ALL》（承載一切）" },
    featuredDocuDesc: { en: "This documentary chronicles the real journey of VIS Mars #32760 in the DECODE season. It reveals the intense pressure of debugging code and mechanism failures behind the scenes, and how they learned the true meaning of Gracious Professionalism (GP).", zh: "這部紀錄片完整記錄了 VIS Mars #32760 戰隊在 DECODE 賽季中的真實歷程。影片歷史性地呈現了這支新秀戰隊在經歷嚴格技術開發、賽場調試壓力，以及學習高尚專業精神（GP）中的心理成長與團隊蛻變。" },
    btnPlay: { en: "Play Now →", zh: "立即播放 →" },
    btnMediaLibrary: { en: "Media Library", zh: "影音媒體庫" },
    playSeasonPromo: { en: "Play Season Promo", zh: "播放賽季宣傳片" }
  },
  story: {
    title: { en: "Our Story", zh: "隊伍故事" },
    subTitle: { en: "The journey of VIS Mars", zh: "VIS Mars 的火星飛行日誌" },
    summaryTitle: { en: "VIS Mars #32760", zh: "VIS Mars #32760 戰隊" },
    summaryLoc: { en: "TAIPEI, TAIWAN", zh: "台灣台北" },
    summaryDesc: { en: "VIS Mars is an FTC robotics team founded in 2024. Based in Taipei, Taiwan, our team is passionate about engineering, programming, and competing at the highest level. We believe in the power of STEM education and the FIRST philosophy of Gracious Professionalism.", zh: "VIS Mars 是一支創立於 2024 年的 FTC 機器人戰隊。我們立足於台灣台北，熱衷於工程設計、程式開發與高水準競技。我們深信 STEM 教育的力量，並踐行 FIRST 組織的高尚專業精神與合作精神。" },
    timelineTitle: { en: "Timeline", zh: "隊伍里程碑" },
    valuesTitle: { en: "Our Values", zh: "核心價值觀" },
    val1Title: { en: "Innovation", zh: "創新思維" },
    val1Desc: { en: "We embrace creative problem-solving and aren't afraid to try new approaches. Every challenge is an opportunity to innovate.", zh: "我們擁抱創造性問題解決方案，不懼嘗試新方法。每個挑戰都是創新的契機。" },
    val2Title: { en: "Teamwork", zh: "團隊協作" },
    val2Desc: { en: "Our strength comes from collaboration. Every team member's contribution is valued and essential to our success.", zh: "我們的力量源於協作。每位成員的貢獻都無比珍貴，是成功的基石。" },
    val3Title: { en: "Growth", zh: "持續成長" },
    val3Desc: { en: "We are committed to continuous learning and improvement, both as engineers and as individuals.", zh: "我們致力於持續學習與改進，無論是作為工程師還是個人。" },
    val4Title: { en: "Community", zh: "社群貢獻" },
    val4Desc: { en: "We give back by sharing our knowledge and resources, and inspiring the next generation of STEM leaders in Taiwan.", zh: "我們透過分享知識與資源回饋社會，啟發台灣下一代的 STEM 領袖。" }
  },
  first: {
    badge: { en: "Coopertition & Gracious Professionalism", zh: "高尚專業精神與合作性競爭" },
    title: { en: "What is FIRST & FTC?", zh: "什麼是 FIRST 與 FTC？" },
    subTitle: { en: "Explore the core values of FIRST Tech Challenge and our education philosophies.", zh: "探索 FIRST Tech Challenge 機器人競賽的核心架構，以及在科技與合作中共同成長的教育理念。" },
    aboutTitle: { en: "About FIRST Organization", zh: "關於 FIRST 組織" },
    aboutP1: { 
      en: "FIRST (For Inspiration and Recognition of Science and Technology) is a non-profit organization founded in 1989 by inventor Dean Kamen. Its mission is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.", 
      zh: "FIRST (For Inspiration and Recognition of Science and Technology) 是由發明家 Dean Kamen 於 1989 年創立的非營利組織。其宗旨是透過引人入勝的導師指導型計劃，激發年輕人成為科學與技術領域的領袖與創新者，並在過程中培養其自信、溝通與領導能力。" 
    },
    aboutP2: { 
      en: "The FTC (FIRST Tech Challenge) is designed for students in grades 7-12 to compete head-to-head using a sports model. Teams are responsible for designing, building, and programming robots to compete in an alliance format against other teams. Students develop STEM skills and practice engineering principles while realizing the value of hard work, innovation, and sharing.", 
      zh: "VIS Mars 隊伍所參與的 FTC (FIRST Tech Challenge) 則是專為 7-12 年級（國高中生）設計的挑戰賽，讓學生在有限的資源與時間下，以團隊合作方式設計、建造並程式化一台機器人，與來自全球的隊伍同台對抗與合作。" 
    },
    valuesTitle: { en: "Core Values", zh: "核心精神價值觀" },
    gpTitle: { en: "Gracious Professionalism® (高尚專業精神)", zh: "高尚專業精神 (Gracious Professionalism®)" },
    gpDesc: { 
      en: "Gracious Professionalism is a way of doing things that encourages high-quality work, emphasizes the value of others, and respects individuals and the community. It means competing fiercely but treating everyone with respect and kindness, sharing knowledge, and helping other teams even in the middle of a tournament.", 
      zh: "這是一種在激烈競爭中依然保持善良與尊重的態度。它鼓勵隊伍尊重對手、熱心分享技術，不以勝負為唯一導向，而是在競爭中互相學習，共同推動整個社群的進步。" 
    },
    coopTitle: { en: "Coopertition® (合作性競爭)", zh: "合作性競爭 (Coopertition®)" },
    coopDesc: { 
      en: "Coopertition produces innovation by combining cooperation and competition. It means teams help and cooperate with each other even as they compete. Coopertition is founded on the concept that teams can play hard and still support one another, knowing that helping others makes the game better and elevates everyone.", 
      zh: "這是合作（Cooperation）與競爭（Competition）的結合。在 FIRST 的賽場上，我們不僅要爭取勝利，更要在對手的設備出錯或缺乏零件時伸出援手。幫助對手，能讓整場競賽的品質更高，也能精發出更好的自己。" 
    },
    stagesTitle: { en: "FTC Match Structure (3 Phases)", zh: "FTC 賽事三階段" },
    stagesSub: { en: "Each FTC alliance match is 2 minutes and 30 seconds long, divided into three key phases:", zh: "每場 FTC 聯盟對抗賽長達 2 分 30 秒，分為以下三個完全不同控制模式的階段：" },
    stage1Time: { en: "30s", zh: "30秒" },
    stage1Title: { en: "Autonomous Phase", zh: "自主控制階段" },
    stage1Desc: { 
      en: "Robots run pre-programmed code using onboard sensors, gyroscopes, and vision detection cameras (such as TensorFlow or OpenCV). Drivers cannot touch the controllers. Scoring actions here earn high point multipliers, testing the programming team's algorithm reliability and environmental adaptability.", 
      zh: "機器人僅能依靠預先編寫的 Java / Blocks 程式碼、感測器與鏡頭視覺偵測執行任務。在此階段，操作手不得觸碰遙控器。成功得分通常伴隨較高分值乘數，極度考驗程式組的演算法深度與環境適應力。" 
    },
    stage2Time: { en: "2m", zh: "2分鐘" },
    stage2Title: { en: "Driver-Controlled Phase", zh: "遙控操作階段" },
    stage2Desc: { 
      en: "Drivers take control using gamepads. Over these two minutes, alliances coordinate to collect scoring elements (such as Pixels or Specimen samples) and secure them in scoring zones under dynamic field environments. It tests driver coordination, reflex, and defensive play.", 
      zh: "操作手拿起遙控手把直接操作機器人。在此兩分鐘內，聯盟隊伍必須在繁忙的場地中收集得分元素（例如本季 DECODE 中的 Pixels 與 Elements）並運送至計分區。此階段考驗操作手的操縱熟練度、戰術靈活性與防守應變力。" 
    },
    stage3Time: { en: "30s", zh: "30秒" },
    stage3Title: { en: "End Game Phase", zh: "終局階段" },
    stage3Desc: { 
      en: "The final 30 seconds of the driver-controlled phase. Teams perform high-risk, high-value maneuvers for bonus points, such as climbing the rigging structure (Hanging) or parking in designated areas. This is the most dramatic and critical phase of the game.", 
      zh: "遙控操作階段的最後 30 秒。此時機器人除了繼續執行常規得分外，通常要執行特殊的高難度動作以獲取大量額外加分，例如攀爬場地中央的鐵架（Hanging）。也是比賽懸念最大、最刺激的關鍵時刻。" 
    },
    teamDescTitle: { en: "We are VIS Mars Team", zh: "我們是 VIS Mars 隊伍" },
    teamDescText: { 
      en: "We put engineering principles into practice, translating passion into physical innovation. Guided by Gracious Professionalism, we compete to learn, share knowledge, and lift up the robotics community in Taiwan and beyond.", 
      zh: "我們實踐「知行合一」的精神，將對科技的熱忱轉化為創新的實體。我們以 Gracious Professionalism 作為前進的指南針，在競技中分享知識，攜手與台灣的機器人社群一同邁向世界的發射台。" 
    },
    btnReadStory: { en: "Read Our Story", zh: "閱讀我們的故事" }
  },
  season: {
    title: { en: "FTC Season Overview", zh: "FTC 賽季介紹" },
    subTitle: { en: "Current season game rules and VIS Mars records", zh: "當前賽季規則與 VIS Mars 戰績紀錄" },
    currentTitle: { en: "DECODE (2025 — 2026 Season)", zh: "DECODE (2025 — 2026 賽季)" },
    currentDesc: { 
      en: "DECODE™ presented by RTX challenges teams to solve cryptography tasks, align digital artifacts, and hang onto metal rigging systems under tight timelines.", 
      zh: "DECODE™ presented by RTX 挑戰隊伍在有限時間內，設計機器人解密密碼任務、精準排列數位 Pixels，並攀爬懸掛於金屬架上。" 
    },
    whatIsFtc: { en: "What is FTC?", zh: "什麼是 FTC？" },
    timelineTitle: { en: "Season Timeline", zh: "賽季時間軸" },
    resultsTitle: { en: "Our Results", zh: "我們的賽事戰績" },
    resultsDesc: { en: "Official tournament records for VIS Mars #32760 in DECODE", zh: "VIS Mars #32760 於 DECODE 賽季之官方選拔賽榮譽" },
    btnFtcScout: { en: "View Full Stats on FTCScout →", zh: "在 FTCScout 查看完整統計數據 →" }
  },
  media: {
    title: { en: "Media Gallery", zh: "影音媒體庫" },
    subTitle: { en: "Watch our official match documentaries and season stories.", zh: "點擊觀看 VIS Mars 的賽事紀錄片與官方影音故事。" },
    badge: { en: "Visual Logs & Episodes", zh: "影音日誌與系列劇集" },
    playNow: { en: "Play Episode", zh: "播放劇集" },
    viewFull: { en: "Watch Documentary →", zh: "觀看紀錄片 →" },
    hint: { en: "Note: Google Drive player requires you to be logged into a Google account or adjust cookie privacy settings.", zh: "提示：若無法播放影片，請確保您的 Google 帳戶已登入，或檢查瀏覽器隱私設定。" },
    ep1Title: { en: "Episode 01: TO CARRY IT ALL", zh: "Episode 01:《承載一切》" },
    ep1Sub: { en: "Season Kickoff & Chassis Build", zh: "賽季起步與底盤開發" },
    ep1Desc: { 
      en: "Documents the debut of VIS Mars #32760 in the build season. Explore how a team of rookie middle schoolers design Mars Rover v1, deal with initial software bugs, and discover that teamwork means lifting each other up.", 
      zh: "記錄了 VIS Mars #32760 新秀戰隊在開發賽季的初次亮相。展示國中生成員們如何共同設計 Mars Rover v1，解決程式碼 Bug，並在摩擦中學會系統合作。" 
    },
    ep2Title: { en: "Episode 02: HOLDING IT TOGETHER", zh: "Episode 02:《凝聚力量》" },
    ep2Sub: { en: "Chinese Taipei Championship (Kaohsiung)", zh: "台灣選拔賽精華（高雄科工館）" },
    ep2Desc: { 
      en: "Behind the scenes at the Taiwan Selection in February 2026. Experience the tension on the field, hardware failures under stress, and how the team held together to secure a Finalist Alliance slot.", 
      zh: "2026 年 2 月台灣選拔賽幕後紀實。帶您體驗賽場最前線的緊繃張力，面對機構故障的危急關頭，全隊如何咬牙挺住並勇奪決賽聯盟亞軍。" 
    },
    ep3Title: { en: "Episode 03: MORE THAN A GAME", zh: "Episode 03:《不止於賽》" },
    ep3Sub: { en: "China - Hong Kong Championship", zh: "香港錦標賽遠征（Lee Wai Lee）" },
    ep3Desc: { 
      en: "The international stage. VIS Mars travels to Hong Kong, adapts strategies to global competitors, and wins both Finalist Alliance and the prestigious 2nd Place Inspire Award.", 
      zh: "國際舞台的終極試煉。VIS Mars 遠征香港，面對更強大的對手即時調整戰略，並最終抱回決賽聯盟與極具分量的 Inspire Award 二等獎雙重肯定。" 
    },
    ep1Category: { en: "Season Documentary", zh: "年度紀錄片" },
    ep1Duration: { en: "Season Highlights", zh: "年度精華" },
    ep2Category: { en: "Championship", zh: "選拔賽" },
    ep2Duration: { en: "Tournament Record", zh: "賽事紀錄" },
    ep3Category: { en: "Championship", zh: "錦標賽" },
    ep3Duration: { en: "Overseas Tour", zh: "海外遠征" }
  },
  robots: {
    title: { en: "Our Robots", zh: "我們的機器人" },
    subTitle: { en: "Machines built with passion and precision", zh: "以熱忱與精準打造的機器人" }
  },
  members: {
    title: { en: "Team Members", zh: "隊伍成員" },
    subTitle: { en: "The people behind VIS Mars", zh: "VIS Mars 幕後的合作團隊" },
    mentorsTitle: { en: "Mentors", zh: "指導老師與技術顧問" },
    mentorsSub: { en: "The experienced mentors who guide our team", zh: "引導我們前進與技術開發的專業師資" },
    coachBio: {
      en: "Head Coach, specializing in project management and engineering design workflows. Guides the team in building strong development discipline and systemic documentation.",
      zh: "指導老師，專長於專案管理與工程設計流程控管。引導團隊建立良好的開發紀律與系統性記錄。"
    },
    mentorBio: {
      en: "Technical Mentor, specializing in embedded control systems and CAD mechanism verification. Guides students in software architecture design and mechanical manufacturing processes.",
      zh: "技術顧問，專長於嵌入式控制系統與 CAD 機構開發驗證。指導學生進行程式架構設計與硬體加工製程。"
    }
  },
  notes: {
    title: { en: "Engineering Notes", zh: "工程筆記" },
    subTitle: { en: "Our engineering process and design documentation", zh: "我們的工程開發歷程與設計文檔" }
  },
  calendar: {
    title: { en: "Calendar", zh: "行事曆" },
    subTitle: { en: "Team schedule and upcoming events", zh: "隊伍時程表與近期活動" },
    upcomingEvents: { en: "Upcoming Events", zh: "近期活動" },
    teamStatus: { en: "Team Status", zh: "團隊進度與狀態" }
  },
  resources: {
    badge: { en: "Open Source & Sharing", zh: "開源與共享" },
    title: { en: "Open Source Resources & Brand Guidelines", zh: "開源資源與品牌手冊" },
    subTitle: { en: "We believe in the FIRST philosophy of sharing and cooperation, making our hardware, software, portfolio, and branding assets open to everyone.", zh: "我們秉持 FIRST 共享共榮的精神，公開我們的軟硬體開發成果、參賽設計文檔與官方視覺資產。" },
    techTitle: { en: "Engineering & Technical Resources", zh: "工程與技術資源" },
    repoTitle: { en: "Robot Control Source Code", zh: "機器人控制源碼" },
    repoDesc: { en: "Our complete FTC robot codebase, including OpenCV vision detection during autonomous phase, PID loop motion controls, and route planning algorithms.", zh: "我們完整的 FTC 機器人控制系統程式碼，包含自主控制階段的 OpenCV 視覺偵測、PID 閉環路運動控制算法以及自動路徑規劃。" },
    repoLink: { en: "Go to GitHub Repository →", zh: "前往 GitHub 倉庫 →" },
    cadTitle: { en: "Robot 3D Model (Onshape)", zh: "機器人 3D 模型 (Onshape)" },
    cadDesc: { en: "Access CAD files for our robots, containing drivetrain layout, intake mechanism models, gear ratios calculations, and CNC plate specs.", zh: "公開歷代機器人的 CAD 工程檔。包含底盤輪系配置、進料懸掛機構、齒輪傳動比計算以及 CNC 鋁合金減重板零件規格。" },
    cadLink: { en: "Browse 3D Model Online →", zh: "線上瀏覽 3D 模型 →" },
    docTitle: { en: "Engineering Portfolio", zh: "工程設計筆記 (Portfolio)" },
    docDesc: { en: "Our engineering portfolio compiled to FTC standards, recording the complete journey from design brainstorming to match strategy analysis.", zh: "符合 FTC 評審規範的工程筆記（Engineering Portfolio），詳細記錄了從設計概念腦力激盪、機構迭代到賽場策略分析的完整脈絡。" },
    docLink: { en: "Download PDF Portfolio →", zh: "下載 PDF 文件 →" },
    brandTitle: { en: "Brand Visuals & Guidelines (Media Kit)", zh: "隊伍視覺與品牌規範 (Media Kit)" },
    brandSub: { en: "To maintain the consistent and professional image of FTC Team #32760 VIS Mars, please adhere to these color and typography rules:", zh: "為維持 VIS Mars #32760 隊伍形象的統一性與專業感，請依循以下標準色彩與字體規範：" },
    brandGuidelines: { en: "Visual Guidelines", zh: "品牌視覺規範" },
    standardColors: { en: "Standard Colors", zh: "標準色彩" },
    standardTypography: { en: "Standard Typography", zh: "標準字體" },
    bodyFontName: { en: "Roboto / Sans-serif", zh: "Roboto / 繁體中文標準黑體" },
    downloadsTitle: { en: "Official Assets Download", zh: "官方素材下載" },
    downloadsDesc: { en: "Download official branding elements for media, outreach, and sponsor materials. Includes vector SVGs, transparent PNGs, and color variations.", zh: "提供給合作夥伴、贊助商及宣傳推廣活動使用的官方標誌資產。包內含有去背 PNG、標準向量 SVG 以及不同背景色適用的色盤版本。" },
    logoVector: { en: "Official Vector Logo (SVG)", zh: "官方徽章 Logo (向量版)" },
    logoVectorDesc: { en: "Vector SVG file for high-resolution print and large scale prints", zh: "向量 SVG 格式 • 適用於印刷與放大設計" },
    logoPng: { en: "Official Logo (Transparent PNG)", zh: "官方徽章 Logo (透明背景)" },
    logoPngDesc: { en: "Transparent PNG file for presentation slides and flyers", zh: "去背 PNG 格式 • 適用於數位簡報與海報" },
    slidesTemplate: { en: "Presentation Slides Template (PPT)", zh: "簡報投影片模板 (PPT)" },
    slidesTemplateDesc: { en: "PowerPoint template with unified style guidelines", zh: "PowerPoint 格式 • 統一色調與排版架構" }
  }
};
