// 中国历代朝代数据
const dynasties = [
    {
        name: '夏朝',
        period: '约前2070年 - 约前1600年',
        startYear: -2070,
        endYear: -1600,
        duration: '约470年',
        founder: '禹',
        capital: '阳城(今河南登封)',
        category: 'ancient',
        achievements: [
            '中国第一个世袭制王朝',
            '青铜器开始出现',
            '已有历法,农业经济发展'
        ],
        events: [
            '大禹治水,建立夏朝',
            '少康中兴,复兴夏朝',
            '夏桀暴政,夏朝灭亡'
        ],
        culture: '夏朝是中国历史上第一个有文字记载的王朝,标志着中国进入文明时代。夏代以农业经济为主,管理制度严密,为后世奠定了基础。',
        emperors: [
            { name: '禹', nianhao: '-', period: '约前2070年 - 约前2065年', duration: '约5年' },
            { name: '启', nianhao: '-', period: '约前2065年 - 约前2050年', duration: '约15年' },
            { name: '太康', nianhao: '-', period: '约前2050年 - 约前2030年', duration: '约20年' },
            { name: '仲康', nianhao: '-', period: '约前2030年 - 约前2010年', duration: '约20年' },
            { name: '相', nianhao: '-', period: '约前2010年 - 约前1990年', duration: '约20年' },
            { name: '少康', nianhao: '-', period: '约前1980年 - 约前1950年', duration: '约30年' },
            { name: '槐', nianhao: '-', period: '约前1950年 - 约前1900年', duration: '约50年' },
            { name: '芒', nianhao: '-', period: '约前1900年 - 约前1880年', duration: '约20年' },
            { name: '泄', nianhao: '-', period: '约前1880年 - 约前1850年', duration: '约30年' },
            { name: '孔甲', nianhao: '-', period: '约前1650年 - 约前1620年', duration: '约30年' },
            { name: '桀', nianhao: '-', period: '约前1620年 - 约前1600年', duration: '约20年' }
        ]
    },
    {
        name: '商朝',
        period: '约前1600年 - 约前1046年',
        startYear: -1600,
        endYear: -1046,
        duration: '约554年',
        founder: '汤',
        capital: '亳(后迁至殷,今河南安阳)',
        category: 'ancient',
        achievements: [
            '甲骨文——中国最早的成熟文字',
            '青铜器铸造达到高峰(司母戊鼎)',
            '天文历法发展,记载日食月食'
        ],
        events: [
            '商汤灭夏,建立商朝',
            '盘庚迁殷,国力稳定',
            '商纣王暴政,商朝灭亡'
        ],
        culture: '商朝创造了灿烂的青铜文化,甲骨文的发现使商朝成为中国有确切文字记载的第一个王朝。商代青铜器工艺精湛,造型优美,反映了高度发达的手工业。',
        emperors: [
            { name: '汤', nianhao: '-', period: '约前1600年 - 约前1588年', duration: '约13年' },
            { name: '太丁', nianhao: '-', period: '约前1588年 - 约前1580年', duration: '约8年' },
            { name: '外丙', nianhao: '-', period: '约前1580年 - 约前1575年', duration: '约5年' },
            { name: '中壬', nianhao: '-', period: '约前1575年 - 约前1570年', duration: '约5年' },
            { name: '太甲', nianhao: '-', period: '约前1570年 - 约前1540年', duration: '约30年' },
            { name: '沃丁', nianhao: '-', period: '约前1540年 - 约前1530年', duration: '约10年' },
            { name: '太庚', nianhao: '-', period: '约前1530年 - 约前1500年', duration: '约30年' },
            { name: '小甲', nianhao: '-', period: '约前1500年 - 约前1480年', duration: '约20年' },
            { name: '雍己', nianhao: '-', period: '约前1480年 - 约前1465年', duration: '约15年' },
            { name: '太戊', nianhao: '-', period: '约前1465年 - 约前1400年', duration: '约65年' },
            { name: '仲丁', nianhao: '-', period: '约前1400年 - 约前1375年', duration: '约25年' },
            { name: '外壬', nianhao: '-', period: '约前1375年 - 约前1360年', duration: '约15年' },
            { name: '盘庚', nianhao: '-', period: '约前1300年 - 约前1270年', duration: '约30年' },
            { name: '武丁', nianhao: '-', period: '约前1250年 - 约前1192年', duration: '约58年' },
            { name: '祖甲', nianhao: '-', period: '约前1192年 - 约前1150年', duration: '约42年' },
            { name: '武乙', nianhao: '-', period: '约前1150年 - 约前1115年', duration: '约35年' },
            { name: '帝辛(纣)', nianhao: '-', period: '约前1075年 - 约前1046年', duration: '约29年' }
        ]
    },
    {
        name: '周朝',
        period: '约前1046年 - 前256年',
        startYear: -1046,
        endYear: -256,
        duration: '约790年',
        founder: '姬发(周武王)',
        capital: '西周:镐京(西安) | 东周:洛邑(洛阳)',
        category: 'ancient',
        achievements: [
            '分封制与宗法制确立',
            '礼乐文化繁荣',
            '春秋战国:百家争鸣(儒、道、墨、法等)',
            '《诗经》——最早的诗歌总集'
        ],
        events: [
            '周武王伐纣,建立周朝',
            '周公制礼作乐',
            '春秋五霸:齐桓公、晋文公、楚庄王等',
            '战国七雄:秦、齐、楚、燕、韩、赵、魏'
        ],
        culture: '周朝分为西周和东周,东周又分春秋战国。春秋战国时期是中国思想文化的黄金时代,诸子百家争鸣,儒家、道家、墨家、法家等思想流派涌现,奠定了中国传统文化的基础。',
        emperors: [
            { name: '姬发(周武王)', nianhao: '-', period: '约前1046年 - 约前1043年', duration: '约4年' },
            { name: '姬诵(周成王)', nianhao: '-', period: '约前1043年 - 约前1006年', duration: '约37年' },
            { name: '姬钊(周康王)', nianhao: '-', period: '约前1006年 - 约前967年', duration: '约39年' },
            { name: '姬瑕(周昭王)', nianhao: '-', period: '约前967年 - 约前948年', duration: '约19年' },
            { name: '姬满(周穆王)', nianhao: '-', period: '约前947年 - 约前903年', duration: '约44年' },
            { name: '姬宫湦(周厉王)', nianhao: '-', period: '约前878年 - 约前842年', duration: '约37年' },
            { name: '姬静(周宣王)', nianhao: '-', period: '约前828年 - 约前782年', duration: '约46年' },
            { name: '姬宫湦(周幽王)', nianhao: '-', period: '约前782年 - 约前771年', duration: '约11年' },
            { name: '姬宜臼(周平王)', nianhao: '-', period: '前770年 - 前720年', duration: '51年' },
            { name: '姬林(周桓王)', nianhao: '-', period: '前720年 - 前697年', duration: '23年' },
            { name: '姬佗(周庄王)', nianhao: '-', period: '前697年 - 前682年', duration: '15年' },
            { name: '姬郑(周厘王)', nianhao: '-', period: '前682年 - 前677年', duration: '5年' },
            { name: '姬齐(周惠王)', nianhao: '-', period: '前677年 - 前652年', duration: '25年' },
            { name: '姬郑(周襄王)', nianhao: '-', period: '前652年 - 前619年', duration: '33年' },
            { name: '姬壬臣(周顷王)', nianhao: '-', period: '前619年 - 前614年', duration: '5年' },
            { name: '姬班(周匡王)', nianhao: '-', period: '前613年 - 前607年', duration: '6年' },
            { name: '姬瑜(周定王)', nianhao: '-', period: '前607年 - 前586年', duration: '21年' },
            { name: '姬夷(周简王)', nianhao: '-', period: '前586年 - 前572年', duration: '14年' },
            { name: '姬泄心(周灵王)', nianhao: '-', period: '前572年 - 前545年', duration: '27年' },
            { name: '姬贵(周景王)', nianhao: '-', period: '前545年 - 前521年', duration: '24年' },
            { name: '姬猛(周敬王)', nianhao: '-', period: '前520年 - 前477年', duration: '43年' },
            { name: '姬仁(周元王)', nianhao: '-', period: '前476年 - 前469年', duration: '7年' },
            { name: '姬介(周贞定王)', nianhao: '-', period: '前469年 - 前442年', duration: '27年' },
            { name: '姬午(周考王)', nianhao: '-', period: '前441年 - 前426年', duration: '15年' },
            { name: '姬嬴(周威烈王)', nianhao: '-', period: '前426年 - 前402年', duration: '24年' },
            { name: '姬扁(周安王)', nianhao: '-', period: '前402年 - 前376年', duration: '26年' },
            { name: '姬定(周显王)', nianhao: '-', period: '前369年 - 前321年', duration: '48年' },
            { name: '姬扁(周慎靓王)', nianhao: '-', period: '前321年 - 前315年', duration: '6年' },
            { name: '姬延(周赧王)', nianhao: '-', period: '前315年 - 前256年', duration: '59年' }
        ]
    },
    {
        name: '秦朝',
        period: '前221年 - 前207年',
        startYear: -221,
        endYear: -207,
        duration: '15年',
        founder: '嬴政(秦始皇)',
        capital: '咸阳',
        category: 'ancient',
        achievements: [
            '统一六国,建立中央集权制度',
            '统一文字、货币、度量衡',
            '修筑万里长城',
            '建立郡县制',
            '秦始皇兵马俑——世界第八大奇迹'
        ],
        events: [
            '前221年秦始皇统一六国',
            '焚书坑儒',
            '修建阿房宫和骊山陵墓',
            '陈胜吴广起义',
            '秦二世而亡'
        ],
        culture: '秦朝是中国历史上第一个大一统的中央集权国家,秦始皇创立的皇帝制度、郡县制、统一文字等措施对中国历史影响深远,奠定了两千多年封建社会的基本格局。',
        emperors: [
            { name: '嬴政(秦始皇)', nianhao: '-', period: '前221年 - 前210年', duration: '12年' },
            { name: '胡亥(秦二世)', nianhao: '-', period: '前210年 - 前207年', duration: '3年' }
        ]
    },
    {
        name: '汉朝',
        period: '前202年 - 220年',
        startYear: -202,
        endYear: 220,
        duration: '422年',
        founder: '刘邦(汉高祖)',
        capital: '西汉:长安 | 东汉:洛阳',
        category: 'ancient',
        achievements: [
            '丝绸之路开辟,中西交流',
            '造纸术发明(东汉蔡伦改进)',
            '《史记》——司马迁著,纪传体通史',
            '独尊儒术,儒家思想成为正统',
            '张衡发明地动仪、浑天仪',
            '华佗发明麻沸散,世界最早的麻醉术'
        ],
        events: [
            '文景之治',
            '汉武帝刘彻:罢黜百家,独尊儒术',
            '卫青、霍去病击败匈奴',
            '张骞出使西域',
            '光武中兴(东汉刘秀)'
        ],
        culture: '汉朝是中国历史上最强盛的朝代之一,奠定了汉民族的基础。汉武帝时期国力达到顶峰,开辟丝绸之路,促进了中西方文化交流。汉代文化成就辉煌,《史记》、汉赋、科技发明等影响深远。',
        emperors: [
            { name: '刘邦(汉高祖)', nianhao: '-', period: '前202年 - 前195年', duration: '8年' },
            { name: '刘盈(汉惠帝)', nianhao: '-', period: '前195年 - 前188年', duration: '7年' },
            { name: '刘恭(前少帝)', nianhao: '-', period: '前188年 - 前184年', duration: '4年' },
            { name: '刘恒(汉文帝)', nianhao: '前元、后元', period: '前180年 - 前157年', duration: '23年' },
            { name: '刘启(汉景帝)', nianhao: '前元、中元、后元', period: '前157年 - 前141年', duration: '16年' },
            { name: '刘彻(汉武帝)', nianhao: '建元、元光、元朔、元狩、元鼎、元封、太初、天汉、太始、征和、后元', period: '前141年 - 前87年', duration: '54年' },
            { name: '刘弗陵(汉昭帝)', nianhao: '始元、元凤、元平', period: '前87年 - 前74年', duration: '13年' },
            { name: '刘询(汉宣帝)', nianhao: '本始、地节、元康、神爵、五凤、甘露、黄龙', period: '前74年 - 前49年', duration: '25年' },
            { name: '刘奭(汉元帝)', nianhao: '初元、永光、建昭、竟宁', period: '前49年 - 前33年', duration: '16年' },
            { name: '刘骜(汉成帝)', nianhao: '建始、河平、阳朔、鸿嘉、永始、元延、绥和', period: '前33年 - 前7年', duration: '26年' },
            { name: '刘欣(汉哀帝)', nianhao: '建平、元寿', period: '前7年 - 前1年', duration: '6年' },
            { name: '刘衎(汉平帝)', nianhao: '元始', period: '前1年 - 6年', duration: '6年' },
            { name: '刘秀(光武帝)', nianhao: '建武、建武中元', period: '25年 - 57年', duration: '32年' },
            { name: '刘庄(汉明帝)', nianhao: '永平', period: '57年 - 75年', duration: '18年' },
            { name: '刘炟(汉章帝)', nianhao: '建初、元和、章和', period: '75年 - 88年', duration: '13年' },
            { name: '刘肇(汉和帝)', nianhao: '永元、元兴', period: '88年 - 105年', duration: '17年' },
            { name: '刘祜(汉安帝)', nianhao: '永初、元初、永宁、建光、延光', period: '106年 - 125年', duration: '19年' },
            { name: '刘保(汉顺帝)', nianhao: '永建、阳嘉、永和、汉安、建康', period: '125年 - 144年', duration: '19年' },
            { name: '刘炳(汉冲帝)', nianhao: '永嘉', period: '144年 - 145年', duration: '1年' },
            { name: '刘缵(汉质帝)', nianhao: '本初', period: '145年 - 146年', duration: '1年' },
            { name: '刘志(汉桓帝)', nianhao: '建和、和平、元嘉、永兴、永寿、延熹、永康', period: '146年 - 168年', duration: '22年' },
            { name: '刘宏(汉灵帝)', nianhao: '建宁、熹平、光和、中平', period: '168年 - 189年', duration: '21年' },
            { name: '刘协(汉献帝)', nianhao: '初平、兴平、建安、延康', period: '189年 - 220年', duration: '31年' }
        ]
    },
    {
        name: '三国',
        period: '220年 - 280年',
        startYear: 220,
        endYear: 280,
        duration: '60年',
        founder: '曹丕(魏)、刘备(蜀)、孙权(吴)',
        capital: '魏:洛阳 | 蜀:成都 | 吴:建业(南京)',
        category: 'middle',
        achievements: [
            '诸葛亮改进连弩',
            '马钧发明翻车(灌溉工具)',
            '刘徽注解《九章算术》'
        ],
        events: [
            '官渡之战:曹操以少胜多',
            '赤壁之战:孙刘联军大败曹操',
            '三顾茅庐:刘备请诸葛亮出山',
            '七擒孟获:诸葛亮平定南蛮',
            '司马炎灭吴,统一全国'
        ],
        culture: '三国时期是中国历史上政权分裂的时期,魏、蜀、吴三国鼎立。这一时期战乱频繁,但也涌现了许多杰出人物和脍炙人口的故事,成为中国文学艺术的重要题材。'
    },
    {
        name: '晋朝',
        period: '265年 - 420年',
        startYear: 265,
        endYear: 420,
        duration: '155年',
        founder: '司马炎(晋武帝)',
        capital: '西晋:洛阳 | 东晋:建康(南京)',
        category: 'middle',
        achievements: [
            '王羲之《兰亭序》——"天下第一行书"',
            '陶渊明田园诗',
            '《搜神记》等志怪小说'
        ],
        events: [
            '西晋统一全国',
            '八王之乱',
            '五胡乱华,西晋灭亡',
            '东晋偏安江南',
            '淝水之战:东晋以少胜多'
        ],
        culture: '晋朝分为西晋和东晋。西晋短暂统一后,北方陷入五胡乱华的动荡,东晋偏安江南。这一时期玄学盛行,书法艺术达到新高峰,王羲之被誉为"书圣"。'
    },
    {
        name: '南北朝',
        period: '420年 - 589年',
        startYear: 420,
        endYear: 589,
        duration: '169年',
        founder: '南朝:宋齐梁陈 | 北朝:北魏等',
        capital: '南朝:建康 | 北朝:平城、洛阳等',
        category: 'middle',
        achievements: [
            '贾思勰《齐民要术》——最早农学专著',
            '郦道元《水经注》——地理名著',
            '祖冲之精确计算圆周率(3.1415926-3.1415927)',
            '北魏孝文帝改革,促进民族融合',
            '佛教文化繁荣(云冈石窟、龙门石窟)'
        ],
        events: [
            '北魏统一北方',
            '孝文帝迁都洛阳,推行汉化',
            '南朝文化繁荣',
            '侯景之乱'
        ],
        culture: '南北朝时期政权分立,但民族融合加速。北魏孝文帝改革促进了鲜卑族与汉族的融合。这一时期佛教盛行,石窟艺术达到高峰,科技成就显著,祖冲之的圆周率计算领先世界千年。'
    },
    {
        name: '隋朝',
        period: '581年 - 618年',
        startYear: 581,
        endYear: 618,
        duration: '37年',
        founder: '杨坚(隋文帝)',
        capital: '大兴(今西安)',
        category: 'middle',
        achievements: [
            '开创科举制度',
            '开凿大运河,沟通南北',
            '赵州桥——世界最古老石拱桥',
            '《切韵》——音韵学专著'
],
        events: [
            '隋文帝统一全国,结束南北分裂',
            '开皇之治',
            '隋炀帝三征高句丽',
            '大运河开凿',
            '隋末农民起义'
        ],
        culture: '隋朝结束了长达近300年的南北分裂局面,开创了科举制度,对后世影响深远。大运河的开凿沟通了南北交通,促进了经济文化交流,但也因过度劳民伤财导致王朝短命。'
    },
    {
        name: '唐朝',
        period: '618年 - 907年',
        startYear: 618,
        endYear: 907,
        duration: '289年',
        founder: '李渊(唐高祖)',
        capital: '长安',
        category: 'middle',
        achievements: [
            '贞观之治——政治清明,经济繁荣',
            '开元盛世——国力达到顶峰',
            '唐诗繁荣:李白、杜甫、白居易等',
            '雕版印刷术《金刚经》——世界最早印刷品',
            '火药发明',
            '鉴真东渡日本,玄奘西天取经'
        ],
        events: [
            '玄武门之变:李世民夺位',
            '贞观之治:唐太宗励精图治',
            '武则天称帝,建立武周',
            '开元盛世:唐玄宗前期',
            '安史之乱:唐朝由盛转衰',
            '黄巢起义'
        ],
        culture: '唐朝是中国历史上最繁荣强盛的朝代之一,政治开明,经济发达,文化灿烂,对外交往频繁。唐诗代表了中国古典诗歌的最高成就,长安成为世界性大都市,中国文化影响力达到巅峰。',
        emperors: [
            { name: '李渊(唐高祖)', nianhao: '武德', period: '618年 - 626年', duration: '9年' },
            { name: '李世民(唐太宗)', nianhao: '贞观', period: '626年 - 649年', duration: '23年' },
            { name: '李治(唐高宗)', nianhao: '永徽、显庆、龙朔、麟德、乾封、总章、咸亨、上元、仪凤、调露、永隆、开耀、永淳、弘道', period: '649年 - 683年', duration: '34年' },
            { name: '李显(唐中宗)', nianhao: '嗣圣、神龙、景龙', period: '684年 - 690年', duration: '6年' },
            { name: '李旦(唐睿宗)', nianhao: '文明、景云', period: '684年 - 690年', duration: '6年' },
            { name: '武则天(武周)', nianhao: '天授、如意、长寿、延载、证圣、天册万岁、万岁登封、万岁通天、神功、圣历、久视、大足、长安', period: '690年 - 705年', duration: '15年' },
            { name: '李旦(唐睿宗复辟)', nianhao: '景云、太极、延和', period: '710年 - 712年', duration: '2年' },
            { name: '李隆基(唐玄宗)', nianhao: '先天、开元、天宝', period: '712年 - 756年', duration: '44年' },
            { name: '李亨(唐肃宗)', nianhao: '至德、乾元、上元', period: '756年 - 762年', duration: '6年' },
            { name: '李豫(唐代宗)', nianhao: '宝应、广德、永泰、大历', period: '762年 - 779年', duration: '17年' },
            { name: '李适(唐德宗)', nianhao: '建中、兴元、贞元', period: '779年 - 805年', duration: '26年' },
            { name: '李诵(唐顺宗)', nianhao: '永贞', period: '805年', duration: '1年' },
            { name: '李纯(唐宪宗)', nianhao: '元和', period: '805年 - 820年', duration: '15年' },
            { name: '李恒(唐穆宗)', nianhao: '长庆', period: '820年 - 824年', duration: '4年' },
            { name: '李湛(唐敬宗)', nianhao: '宝历', period: '824年 - 826年', duration: '2年' },
            { name: '李昂(唐文宗)', nianhao: '大和、开成', period: '826年 - 840年', duration: '14年' },
            { name: '李炎(唐武宗)', nianhao: '会昌', period: '840年 - 846年', duration: '6年' },
            { name: '李忱(唐宣宗)', nianhao: '大中', period: '846年 - 859年', duration: '13年' },
            { name: '李漼(唐懿宗)', nianhao: '大中、咸通', period: '859年 - 873年', duration: '14年' },
            { name: '李儇(唐僖宗)', nianhao: '咸通、乾符、广明、中和、光启、文德', period: '873年 - 888年', duration: '15年' },
            { name: '李晔(唐昭宗)', nianhao: '龙纪、大顺、景福、乾宁、光化、天复、天祐', period: '888年 - 904年', duration: '16年' },
            { name: '李柷(唐哀帝)', nianhao: '天祐', period: '904年 - 907年', duration: '3年' }
        ]
    },
    {
        name: '五代十国',
        period: '907年 - 960年',
        startYear: 907,
        endYear: 960,
        duration: '53年',
        founder: '后梁、后唐、后晋、后汉、后周',
        capital: '多处',
        category: 'middle',
        achievements: [
            '火药开始用于军事',
            '《韩熙载夜宴图》等绘画名作',
            '南方经济继续发展'
        ],
        events: [
            '朱温灭唐,建立后梁',
            '五代更替频繁',
            '十国割据南方',
            '周世宗改革',
            '赵匡胤陈桥兵变'
        ],
        culture: '五代十国是唐朝灭亡后的分裂时期,北方五个朝代更替频繁,南方十国相对稳定。虽然政治动荡,但南方经济文化继续发展,为宋代繁荣奠定了基础。'
    },
    {
        name: '宋朝',
        period: '960年 - 1279年',
        startYear: 960,
        endYear: 1279,
        duration: '319年',
        founder: '赵匡胤(宋太祖)',
        capital: '北宋:开封 | 南宋:临安(杭州)',
        category: 'late',
        achievements: [
            '活字印刷术(毕昇发明)',
            '火药广泛应用于军事',
            '指南针用于航海',
            '宋词繁荣:苏轼、李清照、辛弃疾等',
            '宋代绘画:《清明上河图》等',
            '理学兴起:程颢、程颐、朱熹等',
            '《资治通鉴》——司马光编年体通史'
        ],
        events: [
            '陈桥兵变,黄袍加身',
            '杯酒释兵权',
            '王安石变法',
            '靖康之变:北宋灭亡',
            '岳飞抗金',
            '南宋偏安'
        ],
        culture: '宋朝是中国历史上经济、文化、科技最繁荣的时代之一。四大发明中的三项(活字印刷、火药、指南针)在宋代完善或广泛应用。宋词与唐诗并称,理学成为官方哲学,商业经济高度发达。',
        emperors: [
            { name: '赵匡胤(宋太祖)', nianhao: '建隆、乾德、开宝', period: '960年 - 976年', duration: '17年' },
            { name: '赵光义(宋太宗)', nianhao: '太平兴国、雍熙、端拱、淳化、至道', period: '976年 - 997年', duration: '21年' },
            { name: '赵恒(宋真宗)', nianhao: '咸平、景德、大中祥符、天禧、乾兴', period: '997年 - 1022年', duration: '25年' },
            { name: '赵祯(宋仁宗)', nianhao: '天圣、明道、景祐、宝元、康定、庆历、皇祐、至和、嘉祐', period: '1022年 - 1063年', duration: '41年' },
            { name: '赵曙(宋英宗)', nianhao: '治平', period: '1063年 - 1067年', duration: '4年' },
            { name: '赵顼(宋神宗)', nianhao: '熙宁、元丰', period: '1067年 - 1085年', duration: '18年' },
            { name: '赵煦(宋哲宗)', nianhao: '元祐、绍圣、元符', period: '1085年 - 1100年', duration: '15年' },
            { name: '赵佶(宋徽宗)', nianhao: '建中靖国、崇宁、大观、政和、重和、宣和', period: '1100年 - 1125年', duration: '25年' },
            { name: '赵桓(宋钦宗)', nianhao: '靖康', period: '1125年 - 1127年', duration: '2年' },
            { name: '赵构(宋高宗)', nianhao: '建炎、绍兴', period: '1127年 - 1162年', duration: '35年' },
            { name: '赵昚(宋孝宗)', nianhao: '隆兴、乾道、淳熙', period: '1162年 - 1189年', duration: '27年' },
            { name: '赵惇(宋光宗)', nianhao: '绍熙', period: '1189年 - 1194年', duration: '5年' },
            { name: '赵扩(宋宁宗)', nianhao: '庆元、嘉泰、开禧、嘉定', period: '1194年 - 1224年', duration: '30年' },
            { name: '赵昀(宋理宗)', nianhao: '宝庆、绍定、端平、嘉熙、淳祐、宝祐、开庆、景定', period: '1224年 - 1264年', duration: '40年' },
            { name: '赵禥(宋度宗)', nianhao: '咸淳', period: '1264年 - 1274年', duration: '10年' },
            { name: '赵显(宋恭帝)', nianhao: '德祐', period: '1274年 - 1276年', duration: '2年' },
            { name: '赵昰(宋端宗)', nianhao: '景炎', period: '1276年 - 1278年', duration: '2年' },
            { name: '赵昺(宋少帝)', nianhao: '祥兴', period: '1278年 - 1279年', duration: '1年' }
        ]
    },
    {
        name: '元朝',
        period: '1271年 - 1368年',
        startYear: 1271,
        endYear: 1368,
        duration: '97年',
        founder: '忽必烈(元世祖)',
        capital: '大都(今北京)',
        category: 'late',
        achievements: [
            '疆域空前辽阔',
            '行省制度',
            '元曲繁荣:关汉卿、马致远等',
            '《马可·波罗游记》传播中国文化',
            '天文历法:郭守敬《授时历》'
        ],
        events: [
            '成吉思汗统一蒙古',
            '蒙古西征',
            '忽必烈建立元朝',
            '元朝灭南宋,统一全国',
            '红巾军起义'
        ],
        culture: '元朝是蒙古族建立的统一王朝,疆域空前辽阔,东西方文化交流频繁。元曲成为继唐诗、宋词之后的又一文学高峰。虽然统治者推行民族压迫政策,但促进了各民族融合。',
        emperors: [
            { name: '忽必烈(元世祖)', nianhao: '中统、至元', period: '1271年 - 1294年', duration: '24年' },
            { name: '铁穆耳(元成宗)', nianhao: '元贞、大德', period: '1294年 - 1307年', duration: '13年' },
            { name: '海山(元武宗)', nianhao: '至大', period: '1307年 - 1311年', duration: '4年' },
            { name: '爱育黎拔力八达(元仁宗)', nianhao: '皇庆、延祐', period: '1311年 - 1320年', duration: '9年' },
            { name: '硕德八剌(元英宗)', nianhao: '至治', period: '1320年 - 1323年', duration: '3年' },
            { name: '也孙铁木儿(元泰定帝)', nianhao: '泰定、致和', period: '1323年 - 1328年', duration: '5年' },
            { name: '图帖睦尔(元文宗)', nianhao: '天历、至顺', period: '1328年 - 1329年', duration: '1年' },
            { name: '和世㻋(元明宗)', nianhao: '天历', period: '1329年', duration: '1年' },
            { name: '懿璘质班(元宁宗)', nianhao: '至顺', period: '1332年', duration: '1年' },
            { name: '妥欢帖睦尔(元惠宗)', nianhao: '元统、至元、至正', period: '1333年 - 1368年', duration: '35年' }
        ]
    },
    {
        name: '明朝',
        period: '1368年 - 1644年',
        startYear: 1368,
        endYear: 1644,
        duration: '276年',
        founder: '朱元璋(明太祖)',
        capital: '北京(初都南京)',
        category: 'late',
        achievements: [
            '郑和七下西洋(1405-1433)',
            '《永乐大典》——世界最大百科全书',
            '《本草纲目》——李时珍医药巨著',
            '《天工开物》——宋应星科技百科',
            '明代小说:《三国演义》《水浒传》《西游记》《金瓶梅》',
            '紫禁城(故宫)建成'
        ],
        events: [
            '朱元璋建立明朝',
            '靖难之役:朱棣夺位',
            '明成祖迁都北京',
            '郑和下西洋',
            '土木堡之变',
            '戚继光抗倭',
            '李自成攻占北京,明朝灭亡'
        ],
        culture: '明朝是汉族建立的最后一个大一统王朝。明初国力强盛,郑和下西洋展示了中国强大的航海能力。明代小说、戏曲繁荣,四大名著中的三部成书于明代,科技著作丰富。',
        emperors: [
            { name: '朱元璋(明太祖)', nianhao: '洪武', period: '1368年 - 1398年', duration: '31年' },
            { name: '朱允炆(明惠帝)', nianhao: '建文', period: '1398年 - 1402年', duration: '4年' },
            { name: '朱棣(明成祖)', nianhao: '永乐', period: '1402年 - 1424年', duration: '22年' },
            { name: '朱高炽(明仁宗)', nianhao: '洪熙', period: '1424年 - 1425年', duration: '1年' },
            { name: '朱瞻基(明宣宗)', nianhao: '宣德', period: '1425年 - 1435年', duration: '10年' },
            { name: '朱祁镇(明英宗)', nianhao: '正统', period: '1435年 - 1449年', duration: '14年' },
            { name: '朱祁钰(明代宗)', nianhao: '景泰', period: '1449年 - 1457年', duration: '8年' },
            { name: '朱祁镇(明英宗复辟)', nianhao: '天顺', period: '1457年 - 1464年', duration: '7年' },
            { name: '朱见深(明宪宗)', nianhao: '成化', period: '1464年 - 1487年', duration: '23年' },
            { name: '朱祐樘(明孝宗)', nianhao: '弘治', period: '1487年 - 1505年', duration: '18年' },
            { name: '朱厚照(明武宗)', nianhao: '正德', period: '1505年 - 1521年', duration: '16年' },
            { name: '朱厚熜(明世宗)', nianhao: '嘉靖', period: '1521年 - 1567年', duration: '46年' },
            { name: '朱载坖(明穆宗)', nianhao: '隆庆', period: '1567年 - 1572年', duration: '6年' },
            { name: '朱翊钧(明神宗)', nianhao: '万历', period: '1572年 - 1620年', duration: '48年' },
            { name: '朱常洛(明光宗)', nianhao: '泰昌', period: '1620年', duration: '1年' },
            { name: '朱由校(明熹宗)', nianhao: '天启', period: '1620年 - 1627年', duration: '7年' },
            { name: '朱由检(明思宗)', nianhao: '崇祯', period: '1627年 - 1644年', duration: '17年' }
        ]
    },
    {
        name: '清朝',
        period: '1644年 - 1911年',
        startYear: 1644,
        endYear: 1911,
        duration: '267年',
        founder: '皇太极(清太宗)、顺治帝入关',
        capital: '北京',
        category: 'late',
        achievements: [
            '康乾盛世——清朝鼎盛时期',
            '平定三藩之乱',
            '收复台湾',
            '确定西藏政治制度',
            '《红楼梦》——曹雪芹',
            '《四库全书》——乾隆时期编纂'
        ],
        events: [
            '努尔哈赤建立后金',
            '清军入关,定都北京',
            '康熙平定三藩,收复台湾',
            '雍正改革',
            '乾隆六下江南',
            '鸦片战争(1840):中国近代史开端',
            '辛亥革命(1911):清朝灭亡'
        ],
        culture: '清朝是中国历史上最后一个封建王朝。康熙、雍正、乾隆三朝国力强盛,称为"康乾盛世",疆域辽阔,统一多民族国家得到巩固。但后期闭关锁国,导致落后于世界潮流。',
        emperors: [
            { name: '福临(顺治帝)', nianhao: '顺治', period: '1644年 - 1661年', duration: '18年' },
            { name: '玄烨(康熙帝)', nianhao: '康熙', period: '1661年 - 1722年', duration: '61年' },
            { name: '胤禛(雍正帝)', nianhao: '雍正', period: '1722年 - 1735年', duration: '13年' },
            { name: '弘历(乾隆帝)', nianhao: '乾隆', period: '1735年 - 1796年', duration: '60年' },
            { name: '颙琰(嘉庆帝)', nianhao: '嘉庆', period: '1796年 - 1820年', duration: '25年' },
            { name: '旻宁(道光帝)', nianhao: '道光', period: '1820年 - 1850年', duration: '30年' },
            { name: '奕詝(咸丰帝)', nianhao: '咸丰', period: '1850年 - 1861年', duration: '11年' },
            { name: '载淳(同治帝)', nianhao: '同治', period: '1861年 - 1875年', duration: '14年' },
            { name: '载湉(光绪帝)', nianhao: '光绪', period: '1875年 - 1908年', duration: '34年' },
            { name: '溥仪(宣统帝)', nianhao: '宣统', period: '1909年 - 1912年', duration: '3年' }
        ]
    },
    {
        name: '民国',
        period: '1912年 - 1949年',
        startYear: 1912,
        endYear: 1949,
        duration: '37年',
        founder: '孙中山(临时大总统)',
        capital: '南京、北京、重庆等',
        category: 'late',
        achievements: [
            '推翻帝制,建立共和国',
            '五四运动——新文化运动',
            '白话文推广',
            '京张铁路等近代工业发展',
            '西南联大——教育奇迹',
            '抗战胜利'
        ],
        events: [
            '辛亥革命成功',
            '中华民国成立(1912)',
            '袁世凯称帝失败',
            '五四运动(1919)',
            '北伐战争',
            '抗日战争(1937-1945)',
            '新中国成立(1949)'
        ],
        culture: '民国时期是中国从传统社会向现代社会转型的重要阶段。这一时期思想文化空前活跃,民主科学思想传播,文学艺术革新,教育事业快速发展。抗战期间全民族团结一致,展现出坚韧的民族精神。',
        emperors: [
            { name: '孙中山(临时大总统)', nianhao: '-', period: '1912年', duration: '3个月' },
            { name: '袁世凯(大总统)', nianhao: '-', period: '1912年 - 1916年', duration: '4年' },
            { name: '黎元洪', nianhao: '-', period: '1916年 - 1917年', duration: '1年' },
            { name: '冯国璋', nianhao: '-', period: '1917年 - 1918年', duration: '1年' },
            { name: '徐世昌', nianhao: '-', period: '1918年 - 1922年', duration: '4年' },
            { name: '曹锟', nianhao: '-', period: '1923年 - 1924年', duration: '1年' },
            { name: '蒋介石', nianhao: '-', period: '1928年 - 1948年', duration: '20年' },
            { name: '李宗仁(代总统)', nianhao: '-', period: '1949年', duration: '8个月' }
        ]
    }
];
