// 古诗词学习数据文件
// 包含诗词库和辅助配置数据

// ==================== 朝代配置 ====================
const poetryDynasties = [
    { id: 'tang', name: '唐代', color: '#D4A058' },
    { id: 'song', name: '宋代', color: '#4A7C98' },
    { id: 'yuan', name: '元代', color: '#6B5B8E' },
    { id: 'ming', name: '明代', color: '#5D8C58' },
    { id: 'qing', name: '清代', color: '#C84032' }
];

// ==================== 主题分类 ====================
const poetryThemes = [
    { id: 'nostalgia', name: '思乡', icon: '🏠', color: '#C84032' },
    { id: 'landscape', name: '山水', icon: '⛰️', color: '#4A7C98' },
    { id: 'seasonal', name: '四季', icon: '🍂', color: '#8B6B8E' },
    { id: 'farewell', name: '送别', icon: '👋', color: '#D4A058' },
    { id: 'pastoral', name: '田园', icon: '🌾', color: '#5D8C58' },
    { id: 'frontier', name: '边塞', icon: '🏰', color: '#6B5B4E' },
    { id: 'philosophy', name: '哲理', icon: '💭', color: '#6B8E9C' },
    { id: 'patriotic', name: '爱国', icon: '🇨🇳', color: '#C84032' }
];

// ==================== 诗词库 ====================
const poetryDB = [
    // ===== 一年级 =====
    {
        id: 'poem_001',
        title: '咏鹅',
        author: '骆宾王',
        dynasty: '唐代',
        period: '初唐',
        themes: ['seasonal'],
        genre: '五言绝句',
        grade: 1,
        difficulty: 1,
        content: [
            '鹅，鹅，鹅，',
            '曲项向天歌。',
            '白毛浮绿水，',
            '红掌拨清波。'
        ],
        pinyin: [
            'é, é, é,',
            'qū xiàng xiàng tiān gē.',
            'bái máo fú lǜ shuǐ,',
            'hóng zhǎng bō qīng bō.'
        ],
        translation: `
            鹅，鹅，鹅，
            弯曲着脖子向天高歌。
            洁白的羽毛浮在绿水之上，
            红色的脚掌拨动着清澈的水波。
        `,
        notes: [
            { word: '咏', explanation: '用诗歌来赞颂或描写。' },
            { word: '曲项', explanation: '弯着脖子。' },
            { word: '向天歌', explanation: '对着天空歌唱。' }
        ],
        appreciation: {
            background: '这首诗相传是骆宾王七岁时所作，描写了一只白鹅在水中游动的可爱形象。',
            theme: '通过生动活泼的语言，描绘了白鹅在水中浮游的情景，表达了诗人对白鹅的喜爱之情。',
            art: '这首诗运用了"白毛"与"红掌"、"绿水"与"清波"的色彩对比，画面鲜明生动。语言朴素自然，朗朗上口，适合儿童诵读。',
            keySentences: ['白毛浮绿水，红掌拨清波']
        },
        authorInfo: {
            name: '骆宾王',
            dynasty: '唐代',
            lifeYear: '约619年—约687年',
            title: '初唐四杰之一',
            biography: '唐代著名诗人，与王勃、杨炯、卢照邻并称"初唐四杰"。七岁能诗，号称"神童"。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_002',
        title: '画',
        author: '王维',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['landscape'],
        genre: '五言绝句',
        grade: 1,
        difficulty: 1,
        content: [
            '远看山有色，',
            '近听水无声。',
            '春去花还在，',
            '人来鸟不惊。'
        ],
        pinyin: [
            'yuǎn kàn shān yǒu sè,',
            'jìn tīng shuǐ wú shēng.',
            'chūn qù huā hái zài,',
            'rén lái niǎo bù jīng.'
        ],
        translation: `
            远远看去，山色青翠，
            走近听时，水声却没有。
            春天过去了，花儿依然开放，
            人走过来，鸟儿也不惊飞。
        `,
        notes: [
            { word: '色', explanation: '颜色，也有景色之意。' },
            { word: '惊', explanation: '惊吓，害怕。' }
        ],
        appreciation: {
            background: '这是一首谜语诗，诗的内容描写的是一幅画。',
            theme: '通过描述画中的景物，告诉读者这是一幅画，而不是真实的景色。',
            art: '这首诗运用了对比的手法，"远"与"近"、"看"与"听"、"有"与"无"形成鲜明对比，巧妙地揭示了画的特点。'
        },
        authorInfo: {
            name: '王维',
            dynasty: '唐代',
            lifeYear: '约701年—761年',
            title: '诗佛',
            biography: '唐代著名诗人、画家，与李白、杜甫并称"李杜王"。诗中有画，画中有诗，是山水田园诗派的代表人物。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_003',
        title: '静夜思',
        author: '李白',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['nostalgia'],
        genre: '五言绝句',
        grade: 1,
        difficulty: 1,
        content: [
            '床前明月光，',
            '疑是地上霜。',
            '举头望明月，',
            '低头思故乡。'
        ],
        pinyin: [
            'chuáng qián míng yuè guāng,',
            'yí shì dì shàng shuāng.',
            'jǔ tóu wàng míng yuè,',
            'dī tóu sī gù xiāng.'
        ],
        translation: `
            明亮的月光洒在床前的窗户纸上，
            好像地上泛起了一层霜。
            我禁不住抬起头来，看那天窗外空中的一轮明月，
            不由得低头沉思，想起远方的家乡。
        `,
        notes: [
            { word: '床', explanation: '指井台边，也有说法指井栏。' },
            { word: '疑', explanation: '以为，怀疑。' },
            { word: '举头', explanation: '抬头。' }
        ],
        appreciation: {
            background: '这首诗是李白在旅途中写的一首思乡诗，流传千古，家喻户晓。',
            theme: '这首诗表达了诗人对故乡的思念之情，语言朴实自然，意境深远。',
            art: '运用了比喻的修辞手法，将月光比作霜，生动形象。"举头"与"低头"形成对照，表达了诗人从望月到思乡的心理过程。全诗语言清新朴素，意境深远。'
        },
        authorInfo: {
            name: '李白',
            courtesyName: '太白',
            styleName: '青莲居士',
            dynasty: '唐代',
            lifeYear: '701年—762年',
            title: '诗仙',
            biography: '唐代伟大的浪漫主义诗人，被后人誉为"诗仙"。与杜甫并称"李杜"。其诗风豪放飘逸，想象丰富，语言流转自然，音律和谐多变。代表作有《将进酒》《蜀道难》《望庐山瀑布》等。',
            masterpieces: ['将进酒', '蜀道难', '望庐山瀑布', '早发白帝城', '静夜思']
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_004',
        title: '春晓',
        author: '孟浩然',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['seasonal'],
        genre: '五言绝句',
        grade: 1,
        difficulty: 1,
        content: [
            '春眠不觉晓，',
            '处处闻啼鸟。',
            '夜来风雨声，',
            '花落知多少。'
        ],
        pinyin: [
            'chūn mián bù jué xiǎo,',
            'chù chù wén tí niǎo.',
            'yè lái fēng yǔ shēng,',
            'huā luò zhī duō shǎo.'
        ],
        translation: `
            春天睡得香甜，不知不觉天已亮，
            到处都能听到鸟儿的啼叫声。
            回想起昨夜的风雨声，
            不知道花儿被打落了多少。
        `,
        notes: [
            { word: '春晓', explanation: '春天的早晨。' },
            { word: '不觉晓', explanation: '不知不觉天就亮了。' },
            { word: '知', explanation: '知道。这里是不确知道的意思。' }
        ],
        appreciation: {
            background: '这首诗是孟浩然隐居鹿门山时所作，描写了春日清晨的景象。',
            theme: '通过描写春晓的景色，表达了诗人对春天的喜爱和对美好事物的珍惜之情。',
            art: '这首诗语言浅显易懂，意境清新。前两句写春天的生机，后两句写惜春之情，"花落知多少"一句，蕴含着诗人对春光易逝的感慨。'
        },
        authorInfo: {
            name: '孟浩然',
            dynasty: '唐代',
            lifeYear: '689年—740年',
            title: '田园诗人',
            biography: '唐代著名诗人，是唐代第一位大量写作山水田园诗的诗人。与王维并称"王孟"。'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 二年级 =====
    {
        id: 'poem_005',
        title: '登鹳雀楼',
        author: '王之涣',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['landscape', 'philosophy'],
        genre: '五言绝句',
        grade: 2,
        difficulty: 2,
        content: [
            '白日依山尽，',
            '黄河入海流。',
            '欲穷千里目，',
            '更上一层楼。'
        ],
        pinyin: [
            'bái rì yī shān jìn,',
            'huáng hé rù hǎi liú.',
            'yù qióng qiān lǐ mù,',
            'gèng shàng yī céng lóu.'
        ],
        translation: `
            太阳依傍着群山慢慢下沉，
            黄河滚滚向大海奔流。
            如果想把千里的风光景物看够，
            那就要登上更高的一层楼。
        `,
        notes: [
            { word: '鹳雀楼', explanation: '唐代著名名胜，位于今山西省永济市。' },
            { word: '白日', explanation: '傍晚的太阳。' },
            { word: '穷', explanation: '穷尽，这里引申为"看尽"。' }
        ],
        appreciation: {
            background: '王之涣登上鹳雀楼，眺望远方，写下这首千古名篇。',
            theme: '这首诗通过描写登楼所见的壮阔景象，表达了诗人积极进取、不断攀登的人生态度。',
            art: '后两句"欲穷千里目，更上一层楼"成为千古名句，寓意只有站得高才能看得远，蕴含深刻哲理，激励人们不断向上。'
        },
        authorInfo: {
            name: '王之涣',
            dynasty: '唐代',
            lifeYear: '688年—742年',
            title: '盛唐诗人',
            biography: '唐代著名诗人，其诗"慷慨有大略，倜傥有异才"，现仅存六首，但首首精品。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_006',
        title: '望庐山瀑布',
        author: '李白',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['landscape'],
        genre: '七言绝句',
        grade: 2,
        difficulty: 2,
        content: [
            '日照香炉生紫烟，',
            '遥看瀑布挂前川。',
            '飞流直下三千尺，',
            '疑是银河落九天。'
        ],
        pinyin: [
            'rì zhào xiāng lú shēng zǐ yān,',
            'yáo kàn pù bù guà qián chuān.',
            'fēi liú zhí xià sān qiān chǐ,',
            'yí shì yín hé luò jiǔ tiān.'
        ],
        translation: `
            香炉峰在阳光的照射下生起紫色烟霞，
            远远望见瀑布似白色绢绸挂在山川之间。
            高崖上飞腾直落的瀑布好像有几千尺，
            让人恍惚以为银河从天上泻落到人间。
        `,
        notes: [
            { word: '香炉', explanation: '指庐山的香炉峰。' },
            { word: '紫烟', explanation: '日光照射下的云气水雾呈现出紫色。' },
            { word: '九天', explanation: '天的最高处。' }
        ],
        appreciation: {
            background: '李白游历庐山时，被壮观的瀑布景象所震撼，写下这首名作。',
            theme: '通过描绘庐山瀑布的壮丽景象，表达了对大自然的赞美之情。',
            art: '这首诗运用了夸张、比喻等修辞手法，"飞流直下三千尺，疑是银河落九天"成为千古名句，展现了李白浪漫主义的诗风。'
        },
        authorInfo: {
            name: '李白',
            dynasty: '唐代',
            lifeYear: '701年—762年',
            title: '诗仙'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 三年级 =====
    {
        id: 'poem_007',
        title: '饮湖上初晴后雨',
        author: '苏轼',
        dynasty: '宋代',
        period: '北宋',
        themes: ['landscape'],
        genre: '七言绝句',
        grade: 3,
        difficulty: 2,
        content: [
            '水光潋滟晴方好，',
            '山色空蒙雨亦奇。',
            '欲把西湖比西子，',
            '淡妆浓抹总相宜。'
        ],
        pinyin: [
            'shuǐ guāng liàn yàn qíng fāng hǎo,',
            'shān sè kōng méng yǔ yì qí.',
            'yù bǎ xī hú bǐ xī zǐ,',
            'dàn zhuāng nóng mǒ zǒng xiāng yí.'
        ],
        translation: `
            晴天时，湖水波光粼粼，景色美丽，
            雨天时，山色朦胧，也别有一番奇景。
            如果把西湖比作美女西施，
            无论是淡妆还是浓抹，总是那么合适。
        `,
        notes: [
            { word: '潋滟', explanation: '波光闪动的样子。' },
            { word: '空蒙', explanation: '迷茫的样子。' },
            { word: '西子', explanation: '西施，中国古代四大美女之一。' }
        ],
        appreciation: {
            background: '苏轼在杭州任官期间，游览西湖时写下这首赞美西湖的诗。',
            theme: '通过描写西湖晴雨不同的美景，表达了对西湖的喜爱赞美之情。',
            art: '诗人用西施来比喻西湖，"淡妆浓抹总相宜"成为千古名句，既写出了西湖的美，又展现了诗人开阔的胸怀。'
        },
        authorInfo: {
            name: '苏轼',
            courtesyName: '子瞻',
            styleName: '东坡居士',
            dynasty: '宋代',
            lifeYear: '1037年—1101年',
            title: '东坡居士',
            biography: '北宋著名文学家、书画家，与父苏洵、弟苏辙并称"三苏"。诗词文俱佳，是宋代文学的代表人物。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_008',
        title: '望天门山',
        author: '李白',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['landscape'],
        genre: '七言绝句',
        grade: 3,
        difficulty: 2,
        content: [
            '天门中断楚江开，',
            '碧水东流至此回。',
            '两岸青山相对出，',
            '孤帆一片日边来。'
        ],
        pinyin: [
            'tiān mén zhōng duàn chǔ jiāng kāi,',
            'bì shuǐ dōng liú zhì cǐ huí.',
            'liǎng àn qīng shān xiāng duì chū,',
            'gū fān yī piàn rì biān lái.'
        ],
        translation: `
            天门山从中间断开，楚江奔涌而出，
            碧绿的江水向东流去，在这里回旋。
            两岸的青山相对耸立，一座座迎面而来，
            一叶孤舟从日边驶来。
        `,
        notes: [
            { word: '天门山', explanation: '位于今安徽省，山形如门。' },
            { word: '楚江', explanation: '长江流经旧楚地的一段。' }
        ],
        appreciation: {
            background: '李白乘舟顺江而下，经过天门山时写下这首诗。',
            theme: '通过描写天门山的壮丽景色，表达了对祖国山河的赞美。',
            art: '这首诗气势磅礴，"两岸青山相对出"运用拟人手法，写出青山迎面而来的动态美。'
        },
        authorInfo: {
            name: '李白',
            dynasty: '唐代',
            lifeYear: '701年—762年',
            title: '诗仙'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_009',
        title: '早发白帝城',
        author: '李白',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['landscape'],
        genre: '七言绝句',
        grade: 3,
        difficulty: 2,
        content: [
            '朝辞白帝彩云间，',
            '千里江陵一日还。',
            '两岸猿声啼不住，',
            '轻舟已过万重山。'
        ],
        pinyin: [
            'zhāo cí bái dì cǎi yún jiān,',
            'qiān lǐ jiāng líng yī rì huán.',
            'liǎng àn yuán shēng tí bù zhù,',
            'qīng zhōu yǐ guò wàn chóng shān.'
        ],
        translation: `
            早晨告别高入云霄的白帝城，
            千里之遥的江陵一天就可以到达。
            两岸猿猴的啼声还在耳边回荡，
            轻快的船儿已经驶过万重青山。
        `,
        notes: [
            { word: '白帝', explanation: '白帝城，位于今重庆奉节。' },
            { word: '江陵', explanation: '今湖北荆州。' },
            { word: '万重山', explanation: '形容山很多。' }
        ],
        appreciation: {
            background: '李白因安史之乱被流放，途中遇赦，从白帝城顺江东下，心情愉快，写下此诗。',
            theme: '通过描写轻快顺江而下的情景，表达了遇赦后的欢快心情。',
            art: '全诗节奏明快，"轻舟已过万重山"成为千古名句，既写出了船行之快，又表达了心情之畅快。'
        },
        authorInfo: {
            name: '李白',
            dynasty: '唐代',
            lifeYear: '701年—762年',
            title: '诗仙'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 四年级 =====
    {
        id: 'poem_010',
        title: '题西林壁',
        author: '苏轼',
        dynasty: '宋代',
        period: '北宋',
        themes: ['philosophy', 'landscape'],
        genre: '七言绝句',
        grade: 4,
        difficulty: 2,
        content: [
            '横看成岭侧成峰，',
            '远近高低各不同。',
            '不识庐山真面目，',
            '只缘身在此山中。'
        ],
        pinyin: [
            'héng kàn chéng lǐng cè chéng fēng,',
            'yuǎn jìn gāo dī gè bù tóng.',
            'bù shí lú shān zhēn miàn mù,',
            'zhī yuán shēn zài cǐ shān zhōng.'
        ],
        translation: `
            正面看是连绵的山岭，侧面看是陡峭的山峰，
            从远处、近处、高处、低处看，庐山呈现出各种不同的样子。
            为什么认不清庐山的真面目呢？
            只因为自己身处在这座大山之中。
        `,
        notes: [
            { word: '题', explanation: '书写，题写。' },
            { word: '西林', explanation: '庐山上的西林寺。' },
            { word: '缘', explanation: '因为。' }
        ],
        appreciation: {
            background: '苏轼游览庐山，在西林寺墙壁上题下这首诗。',
            theme: '通过描写庐山变化多姿的面貌，阐述"当局者迷，旁观者清"的哲理。',
            art: '这是一首哲理诗，后两句"不识庐山真面目，只缘身在此山中"揭示了认识事物的规律：要全面客观地认识事物，必须跳出局部的限制。'
        },
        authorInfo: {
            name: '苏轼',
            dynasty: '宋代',
            lifeYear: '1037年—1101年',
            title: '东坡居士'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_011',
        title: '游子吟',
        author: '孟郊',
        dynasty: '唐代',
        period: '中唐',
        themes: ['patriotic'],
        genre: '五言古诗',
        grade: 4,
        difficulty: 2,
        content: [
            '慈母手中线，',
            '游子身上衣。',
            '临行密密缝，',
            '意恐迟迟归。',
            '谁言寸草心，',
            '报得三春晖。'
        ],
        pinyin: [
            'cí mǔ shǒu zhōng xiàn,',
            'yóu zǐ shēn shàng yī.',
            'lín xíng mì mì féng,',
            'yì kǒng chí chí guī.',
            'shuí yán cùn cǎo xīn,',
            'bào dé sān chūn huī.'
        ],
        translation: `
            慈母用手中的针线，
            为远行的儿子缝制衣服。
            临行前一针针密密地缝着，
            担心儿子回来得太晚。
            谁说小草般微弱的孝心，
            能报答得了春日阳光般的慈母恩情呢？
        `,
        notes: [
            { word: '游子', explanation: '离家远游的人。' },
            { word: '寸草心', explanation: '小草的心，比喻子女微小的孝心。' },
            { word: '三春晖', explanation: '春天的阳光，比喻母爱。' }
        ],
        appreciation: {
            background: '孟郊五十岁时出任溧阳县尉，迎接母亲时写下这首诗。',
            theme: '歌颂了母爱的伟大和深沉，表达了诗人对母亲的感激之情。',
            art: '最后两句"谁言寸草心，报得三春晖"成为千古名句，运用比喻手法，生动形象地表达了母爱的伟大和子女难以报答的感恩之情。'
        },
        authorInfo: {
            name: '孟郊',
            dynasty: '唐代',
            lifeYear: '751年—814年',
            title: '苦吟诗人',
            biography: '唐代著名诗人，与贾岛并称"郊寒岛瘦"。其诗多描写世态炎凉，民间苦难，诗风朴实自然。'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 五年级 =====
    {
        id: 'poem_012',
        title: '示儿',
        author: '陆游',
        dynasty: '宋代',
        period: '南宋',
        themes: ['patriotic'],
        genre: '七言绝句',
        grade: 5,
        difficulty: 3,
        content: [
            '死去元知万事空，',
            '但悲不见九州同。',
            '王师北定中原日，',
            '家祭无忘告乃翁。'
        ],
        pinyin: [
            'sǐ qù yuán zhī wàn shì kōng,',
            'dàn bēi bù jiàn jiǔ zhōu tóng.',
            'wáng shī běi dìng zhōng yuán rì,',
            'jiā jì wú wàng gào nǎi wēng.'
        ],
        translation: `
            我本来就知道人死后万事皆空，
            只是悲伤看不到国家统一。
            等到朝廷军队收复中原的那一天，
            家祭时不要忘记告诉你的父亲。
        `,
        notes: [
            { word: '示儿', explanation: '给儿子看，即写给儿子的遗书。' },
            { word: '元知', explanation: '本来就知道。' },
            { word: '九州同', explanation: '指全国统一。' }
        ],
        appreciation: {
            background: '陆游临终前写下这首绝笔诗，表达了他对国家统一的渴望。',
            theme: '表达了诗人至死不渝的爱国情怀和对国家统一的期盼。',
            art: '这首诗语言质朴，情感真挚，是陆游的代表作之一。"家祭无忘告乃翁"一句，把个人生死与国家命运紧密相连，感人至深。'
        },
        authorInfo: {
            name: '陆游',
            courtesyName: '务观',
            styleName: '放翁',
            dynasty: '宋代',
            lifeYear: '1125年—1210年',
            title: '爱国诗人',
            biography: '南宋著名爱国诗人，一生主张抗金，收复失地。现存诗歌九千多首，是中国历史上存诗最多的诗人。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_013',
        title: '题临安邸',
        author: '林升',
        dynasty: '宋代',
        period: '南宋',
        themes: ['patriotic'],
        genre: '七言绝句',
        grade: 5,
        difficulty: 3,
        content: [
            '山外青山楼外楼，',
            '西湖歌舞几时休？',
            '暖风熏得游人醉，',
            '直把杭州作汴州。'
        ],
        pinyin: [
            'shān wài qīng shān lóu wài lóu,',
            'xī hú gē wǔ jǐ shí xiū?',
            'nuǎn fēng xūn de yóu rén zuì,',
            'zhí bǎ háng zhōu zuò biàn zhōu.'
        ],
        translation: `
            青山之外还有青山，高楼之外还有高楼，
            西湖边的歌舞什么时候才会停止？
            温暖的风把游客吹得如痴如醉，
            简直把杭州当成了当年的汴州。
        `,
        notes: [
            { word: '临安', explanation: '今浙江杭州，南宋都城。' },
            { word: '邸', explanation: '旅店、酒店。' },
            { word: '汴州', explanation: '今河南开封，北宋都城。' }
        ],
        appreciation: {
            background: '南宋时期，朝廷偏安江南，林升看到统治者的享乐生活，写下这首讽刺诗。',
            theme: '讽刺南宋统治者沉湎享乐、忘记了国耻家仇的腐朽生活。',
            art: '这首诗运用强烈的对比手法，"暖风熏得游人醉，直把杭州作汴州"讽刺了统治者苟且偷安、不思收复失地的可耻行为。'
        },
        authorInfo: {
            name: '林升',
            dynasty: '宋代',
            lifeYear: '生平不详',
            biography: '南宋诗人，生平事迹不详，仅存诗三首。'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 六年级 =====
    {
        id: 'poem_014',
        title: '春日',
        author: '朱熹',
        dynasty: '宋代',
        period: '南宋',
        themes: ['seasonal', 'philosophy'],
        genre: '七言绝句',
        grade: 6,
        difficulty: 2,
        content: [
            '胜日寻芳泗水滨，',
            '无边光景一时新。',
            '等闲识得东风面，',
            '万紫千红总是春。'
        ],
        pinyin: [
            'shèng rì xún fāng sì shuǐ bīn,',
            'wú biān guāng jǐng yī shí xīn.',
            'děng xián shí dé dōng fēng miàn,',
            'wàn zǐ qiān hóng zǒng shì chūn.'
        ],
        translation: `
            在一个风和日丽的日子，我来到泗水河边寻春，
            无边无际的风光让人耳目一新。
            谁都可以轻易看出春风的面貌，
            那万紫千红的景象全都是春风吹拂带来的啊。
        `,
        notes: [
            { word: '胜日', explanation: '好日子，晴朗的日子。' },
            { word: '泗水', explanation: '河名，在今山东省。' },
            { word: '等闲', explanation: '轻易，随便。' }
        ],
        appreciation: {
            background: '朱熹春游时写下的诗作，描写了春天的美好景象。',
            theme: '通过描写春日美景，表达了对春天的喜爱和赞美。',
            art: '后两句"等闲识得东风面，万紫千红总是春"成为千古名句，巧妙地把春风和春天的景象联系在一起。'
        },
        authorInfo: {
            name: '朱熹',
            courtesyName: '元晦',
            styleName: '紫阳',
            dynasty: '宋代',
            lifeYear: '1130年—1200年',
            title: '理学集大成者',
            biography: '南宋著名理学家、教育家、诗人，理学集大成者，对中国后世思想文化影响深远。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_015',
        title: '石灰吟',
        author: '于谦',
        dynasty: '明代',
        period: '明中期',
        themes: ['philosophy', 'patriotic'],
        genre: '七言绝句',
        grade: 6,
        difficulty: 3,
        content: [
            '千锤万凿出深山，',
            '烈火焚烧若等闲。',
            '粉骨碎身全不怕，',
            '要留清白在人间。'
        ],
        pinyin: [
            'qiān chuí wàn záo chū shēn shān,',
            'liè huǒ fén shāo ruò děng xián.',
            'fěn gǔ suì shēn quán bù pà,',
            'yào liú qīng bái zài rén jiān.'
        ],
        translation: `
            经过千万次锤打从深山开采出来，
            把烈火焚烧看作是很平常的事情。
            即使粉身碎骨也全然不惧，
            只要把清白高尚的节操留在人世间。
        `,
        notes: [
            { word: '若等闲', explanation: '好像很平常的事情。' },
            { word: '清白', explanation: '双关语，既指石灰的颜色，也指高尚的品格。' }
        ],
        appreciation: {
            background: '于谦借咏石灰表达自己坚贞不屈的品格和高尚的节操。',
            theme: '诗人借石灰自喻，表达了自己不畏艰难、不怕牺牲、坚守高尚品格的决心。',
            art: '这是一首咏物诗，运用了托物言志的手法。"要留清白在人间"成为千古名句，表达了诗人坚守高洁品格的坚定决心。'
        },
        authorInfo: {
            name: '于谦',
            courtesyName: '廷益',
            styleName: '节庵',
            dynasty: '明代',
            lifeYear: '1398年—1457年',
            title: '民族英雄',
            biography: '明代名臣、民族英雄，与岳飞、张煌言并称"西湖三杰"。'
        },
        isFavorite: false,
        reciteCount: 0
    },

    // ===== 补充经典诗词 =====
    {
        id: 'poem_016',
        title: '江雪',
        author: '柳宗元',
        dynasty: '唐代',
        period: '中唐',
        themes: ['landscape', 'philosophy'],
        genre: '五言绝句',
        grade: 4,
        difficulty: 2,
        content: [
            '千山鸟飞绝，',
            '万径人踪灭。',
            '孤舟蓑笠翁，',
            '独钓寒江雪。'
        ],
        pinyin: [
            'qiān shān niǎo fēi jué,',
            'wàn jìng rén zōng miè.',
            'gū zhōu suō lì wēng,',
            'dú diào hán jiāng xuě.'
        ],
        translation: `
            千山万岭鸟儿都飞走了，
            千路万径人踪都消失了。
            只有一叶孤舟上披着蓑衣戴着斗笠的老翁，
            独自在大雪纷飞的江面上垂钓。
        `,
        notes: [
            { word: '绝', explanation: '绝迹，没有了。' },
            { word: '径', explanation: '小路。' },
            { word: '蓑笠', explanation: '蓑衣和斗笠，古代雨具。' }
        ],
        appreciation: {
            background: '柳宗元被贬永州时所作，描写了雪天垂钓的景象。',
            theme: '通过描写雪中垂钓的景象，表现了诗人孤傲、清高的品格。',
            art: '全诗用"千""万""孤""独"等词语形成强烈对比，营造出一种寒冷、孤寂的意境，表现了诗人坚贞不屈的品格。'
        },
        authorInfo: {
            name: '柳宗元',
            courtesyName: '子厚',
            dynasty: '唐代',
            lifeYear: '773年—819年',
            title: '河东先生',
            biography: '唐代著名文学家、哲学家，与韩愈并称"韩柳"，共同倡导古文运动。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_017',
        title: '忆江南',
        author: '白居易',
        dynasty: '唐代',
        period: '中唐',
        themes: ['landscape', 'nostalgia'],
        genre: '词',
        grade: 3,
        difficulty: 2,
        content: [
            '江南好，',
            '风景旧曾谙。',
            '日出江花红胜火，',
            '春来江水绿如蓝。',
            '能不忆江南？'
        ],
        pinyin: [
            'jiāng nán hǎo,',
            'fēng jǐng jiù céng ān.',
            'rì chū jiāng huā hóng shèng huǒ,',
            'chūn lái jiāng shuǐ lǜ rú lán.',
            'néng bù yì jiāng nán?'
        ],
        translation: `
            江南的风景多么美好，
            那里的风景我以前就很熟悉。
            太阳升起时，江边的花朵比火还要红艳，
            春天来临时，江水像蓝草一样碧绿。
            怎能不让人怀念江南呢？
        `,
        notes: [
            { word: '忆江南', explanation: '词牌名，也是题目。' },
            { word: '谙', explanation: '熟悉。' },
            { word: '蓝', explanation: '蓝草，一种植物，可制蓝色染料。' }
        ],
        appreciation: {
            background: '白居易晚年回忆江南生活时写下这首词。',
            theme: '通过描写江南的美丽景色，表达了对江南的深深怀念。',
            art: '这首词色彩鲜明，"红胜火""绿如蓝"形成强烈对比，画面感强，是描写江南的名作。'
        },
        authorInfo: {
            name: '白居易',
            courtesyName: '乐天',
            styleName: '香山居士',
            dynasty: '唐代',
            lifeYear: '772年—846年',
            title: '诗魔',
            biography: '唐代著名诗人，与李白、杜甫并称"李杜白"。其诗语言通俗易懂，流传甚广。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_018',
        title: '泊船瓜洲',
        author: '王安石',
        dynasty: '宋代',
        period: '北宋',
        themes: ['nostalgia'],
        genre: '七言绝句',
        grade: 5,
        difficulty: 2,
        content: [
            '京口瓜洲一水间，',
            '钟山只隔数重山。',
            '春风又绿江南岸，',
            '明月何时照我还。'
        ],
        pinyin: [
            'jīng kǒu guā zhōu yī shuǐ jiān,',
            'zhōng shān zhǐ gé shù chóng shān.',
            'chūn fēng yòu lǜ jiāng nán àn,',
            'míng yuè hé shí zhào wǒ huán.'
        ],
        translation: `
            京口和瓜洲只隔着一道长江，
            钟山也只隔着几座山。
            春风又一次吹绿了江南的岸边，
            明月什么时候才能照着我回到家乡呢？
        `,
        notes: [
            { word: '泊', explanation: '停船靠岸。' },
            { word: '京口', explanation: '今江苏镇江。' },
            { word: '钟山', explanation: '今南京紫金山，王安石曾居住于此。' }
        ],
        appreciation: {
            background: '王安石奉诏进京，途径瓜洲时写下这首诗。',
            theme: '表达了诗人对家乡的思念之情。',
            art: '"春风又绿江南岸"中的"绿"字是经过反复推敲的名句，把形容词当作动词使用，生动形象。'
        },
        authorInfo: {
            name: '王安石',
            courtesyName: '介甫',
            styleName: '半山',
            dynasty: '宋代',
            lifeYear: '1021年—1086年',
            title: '临川先生',
            biography: '北宋著名政治家、文学家、思想家，唐宋八大家之一，曾推行变法改革。'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_019',
        title: '九月九日忆山东兄弟',
        author: '王维',
        dynasty: '唐代',
        period: '盛唐',
        themes: ['nostalgia', 'farewell'],
        genre: '七言绝句',
        grade: 3,
        difficulty: 2,
        content: [
            '独在异乡为异客，',
            '每逢佳节倍思亲。',
            '遥知兄弟登高处，',
            '遍插茱萸少一人。'
        ],
        pinyin: [
            'dú zài yì xiāng wéi yì kè,',
            'měi féng jiā jié bèi sī qīn.',
            'yáo zhī xiōng dì dēng gāo chù,',
            'biàn chā zhū yú shǎo yī rén.'
        ],
        translation: `
            我独自在他乡做异乡的客人，
            每逢佳节就加倍思念亲人。
            在遥远的地方，我知道兄弟们正在登高，
            他们都插着茱萸，只少了我一个人。
        `,
        notes: [
            { word: '九月九日', explanation: '重阳节。' },
            { word: '山东', explanation: '指华山以东。' },
            { word: '茱萸', explanation: '一种植物，古代有重阳插茱萸避邪的习俗。' }
        ],
        appreciation: {
            background: '王维十七岁时独自在外，重阳节思念家乡亲人而作。',
            theme: '表达了游子在佳节时对亲人的思念之情。',
            art: '"每逢佳节倍思亲"成为千古名句，道出了所有游子的共同感受。'
        },
        authorInfo: {
            name: '王维',
            dynasty: '唐代',
            lifeYear: '约701年—761年',
            title: '诗佛'
        },
        isFavorite: false,
        reciteCount: 0
    },
    {
        id: 'poem_020',
        title: '赋得古原草送别',
        author: '白居易',
        dynasty: '唐代',
        period: '中唐',
        themes: ['farewell', 'philosophy'],
        genre: '五言律诗',
        grade: 4,
        difficulty: 2,
        content: [
            '离离原上草，',
            '一岁一枯荣。',
            '野火烧不尽，',
            '春风吹又生。',
            '远芳侵古道，',
            '晴翠接荒城。',
            '又送王孙去，',
            '萋萋满别情。'
        ],
        pinyin: [
            'lí lí yuán shàng cǎo,',
            'yī suì yī kū róng.',
            'yě huǒ shāo bù jìn,',
            'chūn fēng chuī yòu shēng.',
            'yuǎn fāng qīn gǔ dào,',
            'qíng cuì jiē huāng chéng.',
            'yòu sòng wáng sūn qù,',
            'qī qī mǎn bié qíng.'
        ],
        translation: `
            原野上长满茂盛的野草，
            每年秋冬枯黄，春夏繁荣。
            无情的野火也无法将它烧尽，
            温暖的春风一吹，它又重新生长。
            远处的野草侵占了古老的古道，
            阳光下翠绿的野草连接着荒凉的城池。
            又要送别老朋友离去，
            茂盛的野草充满了离别之情。
        `,
        notes: [
            { word: '赋得', explanation: '科举考试中指定诗题和限韵作诗的方式。' },
            { word: '离离', explanation: '草木茂盛的样子。' },
            { word: '王孙', explanation: '本指贵族子弟，这里指朋友。' }
        ],
        appreciation: {
            background: '这是白居易十六岁时参加科举考试的诗作。',
            theme: '通过描写野草的顽强生命力，表达了对友人的依依惜别之情。',
            art: '"野火烧不尽，春风吹又生"成为千古名句，赞美了野草顽强的生命力。'
        },
        authorInfo: {
            name: '白居易',
            dynasty: '唐代',
            lifeYear: '772年—846年',
            title: '诗魔'
        },
        isFavorite: false,
        reciteCount: 0
    }
];

// ==================== 导出数据 ====================
// 如果需要用于其他页面，可以导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        poetryDB,
        poetryDynasties,
        poetryThemes
    };
}
