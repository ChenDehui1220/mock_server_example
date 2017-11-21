const Mock = require('mockjs')

module.exports = {
    getSearchHotKeyword: Mock.mock({
        hotkeyword: [
            'h16055258',
            'h16055180',
            'h16053294',
            'h16053961',
            'h16054025',
            'h16051996',
            'h16051889',
            'h16055927'
        ]
    }),
    getShowCaseGroup: Mock.mock({
        showcase: [
            {
                showcaseId: '1573',
                layoutType: 'regionArea',
                data: [
                    {
                        productCategoryId: 80,
                        dataType: 'region',
                        name: '柒角捌叄玖伍',
                        category: [
                            {
                                productCategoryId: '83',
                                name: '仟億分玖',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/83_activeIcon.jpg?1510151740'
                            },
                            {
                                productCategoryId: '204',
                                name: '玖萬捌柒',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/204_activeIcon.jpg?1510151747'
                            },
                            {
                                productCategoryId: '175',
                                name: '※華雲專',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/0_activeIcon.png?1511246762'
                            },
                            {
                                productCategoryId: '151',
                                name: 'ryu專用',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/151_activeIcon.png?1503979974'
                            },
                            {
                                productCategoryId: '137',
                                name: 'mWeb測試專用',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/0_activeIcon.png?1511246762'
                            },
                            {
                                productCategoryId: '88',
                                name: '10F',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/0_activeIcon.png?1511246762'
                            },
                            {
                                productCategoryId: '91',
                                name: '庫存回補',
                                activeUrl:
                                    'https://root-x-mall-cdn.dev.hiiir-inc.com/categoryIcon/91_activeIcon.png?1505114121'
                            }
                        ]
                    },
                    {
                        type: 'externalLink',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59f2b3f3ca74f.png',
                        content: 'https://tw.yahoo.com/',
                        dataType: 'banner'
                    },
                    {
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/',
                        content: 'hellow word',
                        masterName: 'look three',
                        dataType: 'master'
                    },
                    {
                        dataType: 'taggingGroup',
                        taggingGroup: [
                            {
                                content: '436',
                                name: '宇宙人耶耶',
                                type: 'tagging'
                            }
                        ]
                    },
                    {
                        productNo: 'H16053818',
                        dataType: 'product',
                        marketSlogan: '限時限量特賣中吉納測試字數波波棒棒兒',
                        name: '【蘑菇】測試商品A吉納測試字數波波棒棒兒',
                        version: 2,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053818/default_240X240.png?2'
                    }
                ],
                productNo: ['H16053818']
            },
            {
                showcaseId: '1',
                layoutType: 'tip',
                data: [
                    {
                        content: '天啊！買越多被坑越多！',
                        dataType: 'tipContent'
                    }
                ]
            },
            {
                showcaseId: '2',
                layoutType: 'scrollBanner',
                data: [
                    {
                        type: 'externalLink',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fae501d8ee5.png',
                        content: 'https://tw.yahoo.com',
                        dataType: 'banner'
                    },
                    {
                        type: 'shop',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59f6d7898855d.jpg',
                        content: '23',
                        dataType: 'banner'
                    },
                    {
                        type: 'store',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59f6d7974ac70.jpg',
                        content: '192',
                        dataType: 'banner'
                    },
                    {
                        type: 'tagging',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59f6d79908d92.gif',
                        content: '448',
                        dataType: 'banner'
                    },
                    {
                        type: 'tagging',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fbe8d0efed1.gif',
                        content: '448',
                        dataType: 'banner'
                    }
                ]
            },
            {
                showcaseId: '67',
                layoutType: 'twoButton',
                data: [
                    {
                        type: 'tagging',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fa7ac8ef698.png',
                        content: '448',
                        dataType: 'banner'
                    },
                    {
                        type: 'product',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fbdc9738e88.png',
                        content: 'H16054102',
                        dataType: 'banner',
                        nmQty: 2,
                        saleType: 'nm'
                    }
                ]
            },
            {
                showcaseId: '68',
                layoutType: 'oneButton',
                data: [
                    {
                        type: 'externalLink',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fbdcc802993.jpg',
                        content: 'https://tw.yahoo.com',
                        dataType: 'banner'
                    }
                ]
            },
            {
                showcaseId: '1527',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'tagging',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fbe02be902d.jpg',
                        content: '448',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16054105',
                        dataType: 'product',
                        marketSlogan: 'olol',
                        name: '測測 1013',
                        version: 1,
                        salePrice: '500',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054105/default_240X240.png?1'
                    },
                    {
                        productNo: 'H16054025',
                        dataType: 'product',
                        marketSlogan: 'eeee',
                        name: '1017',
                        version: 1,
                        salePrice: '400',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054025/default_240X240.png?1'
                    },
                    {
                        productNo: 'H16054026',
                        dataType: 'product',
                        marketSlogan: 'rrrrrrrrrrrrrrrr',
                        name: '測試測試1017',
                        version: 3,
                        salePrice: '700',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054026/default_240X240.png?3'
                    }
                ],
                productNo: ['H16054105', 'H16054025', 'H16054026']
            },
            {
                showcaseId: '1524',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'externalLink',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59fbcef3f0da3.jpg',
                        content: 'https://tw.yahoo.com/',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16053987',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試高價低折',
                        version: 12,
                        salePrice: '20000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053987/default_240X240.png?12'
                    }
                ],
                productNo: ['H16053987']
            },
            {
                showcaseId: '601',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'region',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59e6ccf5b1c8f.jpg',
                        content: '191',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16054105',
                        dataType: 'product',
                        marketSlogan: 'olol',
                        name: '測測 1013',
                        version: 1,
                        salePrice: '500',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054105/default_240X240.png?1'
                    },
                    {
                        productNo: 'H16054118',
                        dataType: 'product',
                        marketSlogan: 'onlyyyyy',
                        name: '#33966 0817',
                        version: 3,
                        salePrice: '700',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054118/default_240X240.png?3'
                    },
                    {
                        productNo: 'H16054232',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '客約',
                        version: 3,
                        salePrice: '900',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054232/default_240X240.png?3'
                    }
                ],
                productNo: ['H16054105', 'H16054118', 'H16054232']
            },
            {
                showcaseId: '1519',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'tagging',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59faec54eb5aa.jpg',
                        content: '381',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16053645',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '彼得長規格測試 喔喔喔喔喔',
                        version: 7,
                        salePrice: '1234',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053645/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16054049',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '彼得 1019',
                        version: 2,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054049/default_240X240.png?2'
                    },
                    {
                        productNo: 'H16055250',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '【彼得】彼得測試 便宜任選賣場',
                        version: 7,
                        salePrice: '20',
                        nmQty: 3,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055250/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16055254',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '彼得測試 任選賣場非退貨自取',
                        version: 7,
                        salePrice: '450',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055254/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16055262',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '彼得測試 分期任選賣場',
                        version: 5,
                        salePrice: '880',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055262/default_240X240.png?5'
                    },
                    {
                        productNo: 'H16055283',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '彼得 測試用的喔喔喔',
                        version: 3,
                        salePrice: '900',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055283/default_240X240.png?3'
                    },
                    {
                        productNo: 'H16055470',
                        dataType: 'product',
                        marketSlogan: '對稱',
                        name: '【彼得】少數量 0804',
                        version: 11,
                        salePrice: '800',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055470/default_240X240.png?11'
                    }
                ],
                productNo: ['H16053645', 'H16054049', 'H16055250', 'H16055254', 'H16055262', 'H16055283', 'H16055470']
            },
            {
                showcaseId: '1383',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'shop',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59e709e82573a.jpg',
                        content: '23',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16054102',
                        dataType: 'product',
                        marketSlogan: 'ee',
                        name: '商品測試11111 0817',
                        version: 7,
                        salePrice: '700',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054102/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16054105',
                        dataType: 'product',
                        marketSlogan: 'olol',
                        name: '測測 1013',
                        version: 1,
                        salePrice: '500',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054105/default_240X240.png?1'
                    },
                    {
                        productNo: 'H16054431',
                        dataType: 'product',
                        marketSlogan: null,
                        name: 'test11111',
                        version: 3,
                        salePrice: '900',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054431/default_240X240.png?3'
                    },
                    {
                        productNo: 'H16054021',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '9999',
                        version: 1,
                        salePrice: '700',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054021/default_240X240.png?1'
                    }
                ],
                productNo: ['H16054102', 'H16054105', 'H16054431', 'H16054021']
            },
            {
                showcaseId: '1474',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'externalLink',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59f688e96db85.jpg',
                        content: 'https://tw.yahoo.com/',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16055560',
                        dataType: 'product',
                        marketSlogan: 'PPAP',
                        name: '【彼得】一般訂製 8/1',
                        version: 1,
                        salePrice: '350',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055560/default_240X240.png?1'
                    }
                ],
                productNo: ['H16055560']
            },
            {
                showcaseId: '1388',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'product',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/index_banner/59e97401e74ef.jpg',
                        content: 'H16054057',
                        dataType: 'banner',
                        nmQty: 1,
                        saleType: 'normal'
                    },
                    {
                        productNo: 'H16054057',
                        dataType: 'product',
                        marketSlogan: 'RYU的促銷標題',
                        name: '【手起刀落】ryu 1019 scm ryu',
                        version: 2,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054057/default_240X240.png?2'
                    },
                    {
                        productNo: 'H16054058',
                        dataType: 'product',
                        marketSlogan: 'RYU的促銷標題',
                        name: '【手起刀落】ryu 1019 b2e ryu',
                        version: 1,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054058/default_240X240.png?1'
                    },
                    {
                        productNo: 'H16054597',
                        dataType: 'product',
                        marketSlogan: '#32736 退款申請情境 2 ryu專用',
                        name: '【手起刀落】#32736 退款申請情境 2 ryu專用',
                        version: 6,
                        salePrice: '500',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054597/default_240X240.png?6'
                    },
                    {
                        productNo: 'H16054596',
                        dataType: 'product',
                        marketSlogan: '#32736 退款申請情境 1 ryu專用',
                        name: '【手起刀落】#32736 退款申請情境 1 ryu專用',
                        version: 2,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16054596/default_240X240.png?2'
                    },
                    {
                        productNo: 'H16055065',
                        dataType: 'product',
                        marketSlogan: 'SIT 複測賣場  促銷標題',
                        name: '【手起刀落品牌一二三四五六七八九十一二三四】SIT 複測賣場 0814 ryu',
                        version: 9,
                        salePrice: '1000',
                        nmQty: 2,
                        saleType: 'nm',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16055065/default_240X240.png?9'
                    }
                ],
                productNo: ['H16054057', 'H16054058', 'H16054597', 'H16054596', 'H16055065']
            },
            {
                showcaseId: '177',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'externalLink',
                        imageUrl:
                            'https://hiiir-ec2-public-beta.s3-ap-northeast-1.amazonaws.com/index_banner/58a2a1abe568c.jpg',
                        content: '91',
                        dataType: 'banner'
                    },
                    {
                        productNo: 'H16053987',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試高價低折',
                        version: 12,
                        salePrice: '20000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053987/default_240X240.png?12'
                    },
                    {
                        productNo: 'H16053948',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試低價低折',
                        version: 9,
                        salePrice: '200',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053948/default_240X240.png?9'
                    },
                    {
                        productNo: 'H16053986',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試高價高折',
                        version: 7,
                        salePrice: '20000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053986/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16053936',
                        dataType: 'product',
                        marketSlogan: null,
                        name: '【真魅力】買斷批次匯入測試 v2',
                        version: 6,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053936/default_240X240.png?6'
                    },
                    {
                        productNo: 'H16053904',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '[複製]測試低價高折',
                        version: 6,
                        salePrice: '200',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053904/default_240X240.png?6'
                    },
                    {
                        productNo: 'H16053922',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試低價高折',
                        version: 7,
                        salePrice: '200',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053922/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16053917',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '[複製]測試低價高折',
                        version: 7,
                        salePrice: '200',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053917/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16053919',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '測試低價高折',
                        version: 7,
                        salePrice: '200',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053919/default_240X240.png?7'
                    },
                    {
                        productNo: 'H16053910',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '[複製]測試高價低折',
                        version: 9,
                        salePrice: '20000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053910/default_240X240.png?9'
                    },
                    {
                        productNo: 'H16053909',
                        dataType: 'product',
                        marketSlogan: '測試演算法唷',
                        name: '[複製]測試高價高折',
                        version: 6,
                        salePrice: '20000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053909/default_240X240.png?6'
                    }
                ],
                productNo: [
                    'H16053987',
                    'H16053948',
                    'H16053986',
                    'H16053936',
                    'H16053904',
                    'H16053922',
                    'H16053917',
                    'H16053919',
                    'H16053910',
                    'H16053909'
                ]
            },
            {
                showcaseId: '583',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'product',
                        imageUrl:
                            'https://hiiir-ec2-public-beta.s3-ap-northeast-1.amazonaws.com/index_banner/594b4009dd896.jpg',
                        content: 'H16053271',
                        dataType: 'banner',
                        nmQty: 1,
                        saleType: 'normal'
                    },
                    {
                        productNo: 'H16053271',
                        dataType: 'product',
                        marketSlogan: null,
                        name: 'Anson好帥-單規`1',
                        version: 5,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053271/default_240X240.png?5'
                    }
                ],
                productNo: ['H16053271']
            },
            {
                showcaseId: '585',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'product',
                        imageUrl:
                            'https://hiiir-ec2-public-beta.s3-ap-northeast-1.amazonaws.com/index_banner/594b400a521a1.jpg',
                        content: 'H16053271',
                        dataType: 'banner',
                        nmQty: 1,
                        saleType: 'normal'
                    },
                    {
                        productNo: 'H16053271',
                        dataType: 'product',
                        marketSlogan: null,
                        name: 'Anson好帥-單規`1',
                        version: 5,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053271/default_240X240.png?5'
                    }
                ],
                productNo: ['H16053271']
            },
            {
                showcaseId: '584',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'product',
                        imageUrl:
                            'https://hiiir-ec2-public-beta.s3-ap-northeast-1.amazonaws.com/index_banner/594b400982064.jpg',
                        content: 'H16053271',
                        dataType: 'banner',
                        nmQty: 1,
                        saleType: 'normal'
                    },
                    {
                        productNo: 'H16053271',
                        dataType: 'product',
                        marketSlogan: null,
                        name: 'Anson好帥-單規`1',
                        version: 5,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053271/default_240X240.png?5'
                    }
                ],
                productNo: ['H16053271']
            },
            {
                showcaseId: '582',
                layoutType: 'bannerProduct',
                data: [
                    {
                        type: 'product',
                        imageUrl:
                            'https://hiiir-ec2-public-beta.s3-ap-northeast-1.amazonaws.com/index_banner/594b400829a73.jpg',
                        content: 'H16053271',
                        dataType: 'banner',
                        nmQty: 1,
                        saleType: 'normal'
                    },
                    {
                        productNo: 'H16053271',
                        dataType: 'product',
                        marketSlogan: null,
                        name: 'Anson好帥-單規`1',
                        version: 5,
                        salePrice: '1000',
                        nmQty: 1,
                        saleType: 'normal',
                        imageUrl: 'https://root-x-mall-cdn.dev.hiiir-inc.com/product/H16053271/default_240X240.png?5'
                    }
                ],
                productNo: ['H16053271']
            }
        ],
        categoryName: '',
        showcaseGroupName: null
    })
}
