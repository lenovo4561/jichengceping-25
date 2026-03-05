// 1. 情感测评题库（严格匹配指定格式）
const funTestBank = {
  // 1: 情感自愈能力测评
  1: {
    title: '情感自愈能力测评',
    questions: [
      {
        id: 1,
        title: '当你情绪低落时，通常多久能恢复？',
        options: [
          { label: '1天内', score: 1 },
          { label: '2-3天', score: 2 },
          { label: '1周左右', score: 3 },
          { label: '超过1周', score: 4 }
        ]
      },
      {
        id: 2,
        title: '遭遇挫折后，你会如何应对？',
        options: [
          { label: '主动复盘调整', score: 1 },
          { label: '慢慢消化', score: 2 },
          { label: '陷入自责', score: 3 },
          { label: '逃避现实', score: 4 }
        ]
      },
      {
        id: 3,
        title: '被他人误解时，你会？',
        options: [
          { label: '冷静解释后放下', score: 1 },
          { label: '在意但不纠结', score: 2 },
          { label: '耿耿于怀', score: 3 },
          { label: '自我否定', score: 4 }
        ]
      },
      {
        id: 4,
        title: '面对生活压力，你会？',
        options: [
          { label: '合理宣泄调节', score: 1 },
          { label: '默默承受', score: 2 },
          { label: '抱怨焦虑', score: 3 },
          { label: '崩溃摆烂', score: 4 }
        ]
      },
      {
        id: 5,
        title: '失去重要的人/物后，你能释怀吗？',
        options: [
          { label: '坦然接受', score: 1 },
          { label: '逐步放下', score: 2 },
          { label: '难以释怀', score: 3 },
          { label: '长期执念', score: 4 }
        ]
      },
      {
        id: 6,
        title: '负面情绪来袭时，你会主动转移注意力吗？',
        options: [
          { label: '立刻转移', score: 1 },
          { label: '尝试转移', score: 2 },
          { label: '很难转移', score: 3 },
          { label: '完全不转移', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你会主动寻求情绪疏导的方法吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你能快速从负面事件中抽离吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '比较困难', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会通过运动/倾诉缓解坏心情吗？',
        options: [
          { label: '经常用', score: 1 },
          { label: '偶尔用', score: 2 },
          { label: '很少用', score: 3 },
          { label: '从不用', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你能接受自己偶尔的情绪失控吗？',
        options: [
          { label: '完全接受', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '难以接受', score: 3 },
          { label: '极度排斥', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会给自己的情绪设置“缓冲期”吗？',
        options: [
          { label: '每次都设', score: 1 },
          { label: '偶尔设置', score: 2 },
          { label: '很少设置', score: 3 },
          { label: '从不设置', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你能理性看待让你难过的事情吗？',
        options: [
          { label: '非常理性', score: 1 },
          { label: '比较理性', score: 2 },
          { label: '不太理性', score: 3 },
          { label: '完全不理性', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会主动避免陷入情绪内耗吗？',
        options: [
          { label: '一直避免', score: 1 },
          { label: '偶尔避免', score: 2 },
          { label: '很少避免', score: 3 },
          { label: '从不避免', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你能从挫折中总结经验而非沉溺悲伤吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '比较困难', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会用积极的心理暗示调节情绪吗？',
        options: [
          { label: '经常用', score: 1 },
          { label: '偶尔用', score: 2 },
          { label: '很少用', score: 3 },
          { label: '从不用', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你能允许自己有“不开心”的权利吗？',
        options: [
          { label: '完全允许', score: 1 },
          { label: '基本允许', score: 2 },
          { label: '不太允许', score: 3 },
          { label: '完全不允许', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会主动远离让你情绪变差的人/事吗？',
        options: [
          { label: '立刻远离', score: 1 },
          { label: '尝试远离', score: 2 },
          { label: '很难远离', score: 3 },
          { label: '从不远离', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你能快速切换“情绪频道”吗？',
        options: [
          { label: '非常快速', score: 1 },
          { label: '比较快速', score: 2 },
          { label: '比较缓慢', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会把坏情绪“隔夜”吗？',
        options: [
          { label: '从不隔夜', score: 1 },
          { label: '偶尔隔夜', score: 2 },
          { label: '经常隔夜', score: 3 },
          { label: '一直隔夜', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情绪自愈能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 2: 情感表达能力测评
  2: {
    title: '情感表达能力测评',
    questions: [
      {
        id: 1,
        title: '你能清晰表达自己的真实情绪吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 2,
        title: '面对喜欢的人，你会表达心意吗？',
        options: [
          { label: '主动真诚表达', score: 1 },
          { label: '犹豫后表达', score: 2 },
          { label: '不敢表达', score: 3 },
          { label: '刻意隐藏', score: 4 }
        ]
      },
      {
        id: 3,
        title: '生气时，你会如何表达不满？',
        options: [
          { label: '理性沟通', score: 1 },
          { label: '适当表达', score: 2 },
          { label: '压抑情绪', score: 3 },
          { label: '暴躁发泄/沉默', score: 4 }
        ]
      },
      {
        id: 4,
        title: '开心时，你会分享给他人吗？',
        options: [
          { label: '主动分享', score: 1 },
          { label: '愿意分享', score: 2 },
          { label: '不愿分享', score: 3 },
          { label: '独自闷着', score: 4 }
        ]
      },
      {
        id: 5,
        title: '感到委屈时，你会诉说吗？',
        options: [
          { label: '主动倾诉', score: 1 },
          { label: '向信任的人说', score: 2 },
          { label: '独自承受', score: 3 },
          { label: '长期压抑', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你能准确描述自己的情绪感受吗？',
        options: [
          { label: '非常准确', score: 1 },
          { label: '比较准确', score: 2 },
          { label: '不太准确', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你会用恰当的语言表达感谢吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你能拒绝自己不想做的事情吗？',
        options: [
          { label: '坦然拒绝', score: 1 },
          { label: '委婉拒绝', score: 2 },
          { label: '勉强接受', score: 3 },
          { label: '不敢拒绝', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会向家人表达爱意吗？',
        options: [
          { label: '经常表达', score: 1 },
          { label: '偶尔表达', score: 2 },
          { label: '很少表达', score: 3 },
          { label: '从不表达', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你能清晰表达自己的需求吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '不太可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 11,
        title: '和他人有矛盾时，你会主动沟通吗？',
        options: [
          { label: '立刻沟通', score: 1 },
          { label: '稍后沟通', score: 2 },
          { label: '等待对方', score: 3 },
          { label: '拒绝沟通', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会用非语言方式（拥抱/礼物）表达情感吗？',
        options: [
          { label: '经常用', score: 1 },
          { label: '偶尔用', score: 2 },
          { label: '很少用', score: 3 },
          { label: '从不用', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你能接受他人和你不同的情感表达吗？',
        options: [
          { label: '完全接受', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '不太接受', score: 3 },
          { label: '完全不接受', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会主动询问他人的情绪感受吗？',
        options: [
          { label: '经常询问', score: 1 },
          { label: '偶尔询问', score: 2 },
          { label: '很少询问', score: 3 },
          { label: '从不询问', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你能在表达情绪时不伤害他人吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔伤害', score: 3 },
          { label: '经常伤害', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会为自己的表达不当道歉吗？',
        options: [
          { label: '立刻道歉', score: 1 },
          { label: '稍后道歉', score: 2 },
          { label: '勉强道歉', score: 3 },
          { label: '从不道歉', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你能清晰表达自己的边界和底线吗？',
        options: [
          { label: '非常清晰', score: 1 },
          { label: '比较清晰', score: 2 },
          { label: '不太清晰', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会用幽默的方式表达情绪吗？',
        options: [
          { label: '经常用', score: 1 },
          { label: '偶尔用', score: 2 },
          { label: '很少用', score: 3 },
          { label: '从不用', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你能在公共场合自然表达情绪吗？',
        options: [
          { label: '非常自然', score: 1 },
          { label: '比较自然', score: 2 },
          { label: '不太自然', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感表达能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 3: 情感敏感程度测评（因篇幅限制，仅展示核心结构，其余套题格式一致）
  3: {
    title: '情感敏感程度测评',
    questions: [
      {
        id: 1,
        title: '他人语气冷淡时，你会？',
        options: [
          { label: '不在意', score: 1 },
          { label: '偶尔留意', score: 2 },
          { label: '多想纠结', score: 3 },
          { label: '自我内耗', score: 4 }
        ]
      },
      {
        id: 2,
        title: '听到他人无意的话语，你会？',
        options: [
          { label: '一笑而过', score: 1 },
          { label: '不放在心上', score: 2 },
          { label: '耿耿于怀', score: 3 },
          { label: '过度解读', score: 4 }
        ]
      },
      // 剩余18题格式同上，此处省略（保持20题结构，id 3-20）
      {
        id: 3,
        title: '猜测他人议论你时，你会？',
        options: [
          { label: '不信且无视', score: 1 },
          { label: '偶尔疑惑但放下', score: 2 },
          { label: '焦虑求证', score: 3 },
          { label: '自我否定', score: 4 }
        ]
      },
      {
        id: 4,
        title: '朋友忘记回复消息，你会？',
        options: [
          { label: '理解体谅', score: 1 },
          { label: '偶尔询问', score: 2 },
          { label: '觉得被忽视', score: 3 },
          { label: '胡思乱想', score: 4 }
        ]
      },
      {
        id: 5,
        title: '被他人拒绝后，你会？',
        options: [
          { label: '坦然接受', score: 1 },
          { label: '短暂失落', score: 2 },
          { label: '否定自己', score: 3 },
          { label: '长期自我怀疑', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会过度关注他人的微表情吗？',
        options: [
          { label: '从不关注', score: 1 },
          { label: '偶尔关注', score: 2 },
          { label: '经常关注', score: 3 },
          { label: '极度关注', score: 4 }
        ]
      },
      {
        id: 7,
        title: '他人的小失误会影响你的心情吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔影响', score: 3 },
          { label: '严重影响', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会反复回想他人说过的话吗？',
        options: [
          { label: '从不回想', score: 1 },
          { label: '偶尔回想', score: 2 },
          { label: '经常回想', score: 3 },
          { label: '一直回想', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你能接受他人的无心之失吗？',
        options: [
          { label: '完全接受', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '不太接受', score: 3 },
          { label: '完全不接受', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会因为小事陷入情绪低谷吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会在意他人是否喜欢自己吗？',
        options: [
          { label: '完全不在意', score: 1 },
          { label: '基本不在意', score: 2 },
          { label: '比较在意', score: 3 },
          { label: '极度在意', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你能快速放下他人的无心之语吗？',
        options: [
          { label: '立刻放下', score: 1 },
          { label: '很快放下', score: 2 },
          { label: '很难放下', score: 3 },
          { label: '从不放下', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会因为他人的评价改变自己吗？',
        options: [
          { label: '从不改变', score: 1 },
          { label: '偶尔改变', score: 2 },
          { label: '经常改变', score: 3 },
          { label: '总是改变', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你能区分“事实”和“感受”吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '不太可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会因为环境变化感到不安吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔不安', score: 3 },
          { label: '极度不安', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你能接纳自己的敏感特质吗？',
        options: [
          { label: '完全接纳', score: 1 },
          { label: '基本接纳', score: 2 },
          { label: '不太接纳', score: 3 },
          { label: '完全不接纳', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会主动减少不必要的敏感吗？',
        options: [
          { label: '一直主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你能理性看待他人的态度变化吗？',
        options: [
          { label: '非常理性', score: 1 },
          { label: '比较理性', score: 2 },
          { label: '不太理性', score: 3 },
          { label: '完全不理性', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会因为敏感错过机会吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感敏感度如何？',
        options: [
          { label: '极低', score: 1 },
          { label: '适中', score: 2 },
          { label: '较高', score: 3 },
          { label: '极高', score: 4 }
        ]
      }
    ]
  },

  // 4: 情感稳定性测评
  4: {
    title: '情感稳定性测评',
    questions: [
      {
        id: 1,
        title: '你的情绪会突然大起大落吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '频繁', score: 4 }
        ]
      },
      {
        id: 2,
        title: '遇到小事时，你会发脾气吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '频繁', score: 4 }
        ]
      },
      {
        id: 3,
        title: '期待落空时，你会？',
        options: [
          { label: '坦然接受', score: 1 },
          { label: '慢慢接受', score: 2 },
          { label: '抱怨低落', score: 3 },
          { label: '情绪崩溃', score: 4 }
        ]
      },
      {
        id: 4,
        title: '与人争执时，你能保持冷静吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔冲动', score: 3 },
          { label: '极度冲动', score: 4 }
        ]
      },
      {
        id: 5,
        title: '你能享受平淡的生活吗？',
        options: [
          { label: '非常享受', score: 1 },
          { label: '基本适应', score: 2 },
          { label: '难以适应', score: 3 },
          { label: '极度排斥', score: 4 }
        ]
      },
      {
        id: 6,
        title: '外界评价会轻易影响你的情绪吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔影响', score: 3 },
          { label: '严重影响', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你能快速平复突发的坏情绪吗？',
        options: [
          { label: '立刻平复', score: 1 },
          { label: '很快平复', score: 2 },
          { label: '很难平复', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 8,
        title: '工作/学习压力大时，你会情绪失控吗？',
        options: [
          { label: '从不失控', score: 1 },
          { label: '偶尔失控', score: 2 },
          { label: '经常失控', score: 3 },
          { label: '总是失控', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你能保持稳定的作息和心态吗？',
        options: [
          { label: '一直保持', score: 1 },
          { label: '基本保持', score: 2 },
          { label: '偶尔打破', score: 3 },
          { label: '经常打破', score: 4 }
        ]
      },
      {
        id: 10,
        title: '计划被打乱时，你会？',
        options: [
          { label: '从容调整', score: 1 },
          { label: '慢慢适应', score: 2 },
          { label: '烦躁抱怨', score: 3 },
          { label: '崩溃放弃', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会因为他人的错误生气很久吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你能理性看待生活中的不确定性吗？',
        options: [
          { label: '非常理性', score: 1 },
          { label: '比较理性', score: 2 },
          { label: '不太理性', score: 3 },
          { label: '完全不理性', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会频繁切换开心和难过的状态吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你能在情绪激动时控制言行吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔失控', score: 3 },
          { label: '完全失控', score: 4 }
        ]
      },
      {
        id: 15,
        title: '长期重复的任务会让你烦躁吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔烦躁', score: 3 },
          { label: '极度烦躁', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会主动调节自己的情绪波动吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 17,
        title: '他人的否定会让你情绪崩溃吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你能保持稳定的社交状态吗？',
        options: [
          { label: '一直稳定', score: 1 },
          { label: '基本稳定', score: 2 },
          { label: '偶尔波动', score: 3 },
          { label: '频繁波动', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会因为天气变化影响心情吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感稳定性如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 5: 情感共情能力测评
  5: {
    title: '情感共情能力测评',
    questions: [
      {
        id: 1,
        title: '看到他人难过，你会感同身受吗？',
        options: [
          { label: '深度共情', score: 1 },
          { label: '有所共情', score: 2 },
          { label: '略有察觉', score: 3 },
          { label: '毫无感觉', score: 4 }
        ]
      },
      {
        id: 2,
        title: '他人分享喜悦，你会真心祝福吗？',
        options: [
          { label: '真心祝福', score: 1 },
          { label: '礼貌祝福', score: 2 },
          { label: '敷衍祝福', score: 3 },
          { label: '心生嫉妒', score: 4 }
        ]
      },
      {
        id: 3,
        title: '他人遇到困难，你会换位思考吗？',
        options: [
          { label: '主动换位思考', score: 1 },
          { label: '偶尔换位思考', score: 2 },
          { label: '很少换位思考', score: 3 },
          { label: '从不换位思考', score: 4 }
        ]
      },
      {
        id: 4,
        title: '听到他人的委屈，你会动容吗？',
        options: [
          { label: '极易动容', score: 1 },
          { label: '有所动容', score: 2 },
          { label: '略有动容', score: 3 },
          { label: '毫无动容', score: 4 }
        ]
      },
      {
        id: 5,
        title: '他人犯错道歉，你会轻易原谅吗？',
        options: [
          { label: '真心原谅', score: 1 },
          { label: '适当原谅', score: 2 },
          { label: '勉强原谅', score: 3 },
          { label: '坚决不原谅', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你能理解他人的处境和选择吗？',
        options: [
          { label: '完全理解', score: 1 },
          { label: '基本理解', score: 2 },
          { label: '不太理解', score: 3 },
          { label: '完全不理解', score: 4 }
        ]
      },
      {
        id: 7,
        title: '看到感人的场景，你会流泪吗？',
        options: [
          { label: '经常会', score: 1 },
          { label: '偶尔会', score: 2 },
          { label: '很少会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会主动关心情绪低落的人吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你能感受到他人未说出口的情绪吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 10,
        title: '他人的成功会让你由衷开心吗？',
        options: [
          { label: '非常开心', score: 1 },
          { label: '比较开心', score: 2 },
          { label: '毫无感觉', score: 3 },
          { label: '心生不满', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会为他人的困境感到着急吗？',
        options: [
          { label: '非常着急', score: 1 },
          { label: '比较着急', score: 2 },
          { label: '略有着急', score: 3 },
          { label: '毫无感觉', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你能站在他人角度考虑问题吗？',
        options: [
          { label: '总是能', score: 1 },
          { label: '经常能', score: 2 },
          { label: '偶尔能', score: 3 },
          { label: '从不能', score: 4 }
        ]
      },
      {
        id: 13,
        title: '看到他人努力却失败，你会安慰吗？',
        options: [
          { label: '主动安慰', score: 1 },
          { label: '适当安慰', score: 2 },
          { label: '不愿安慰', score: 3 },
          { label: '冷漠旁观', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你能接纳他人与你不同的感受吗？',
        options: [
          { label: '完全接纳', score: 1 },
          { label: '基本接纳', score: 2 },
          { label: '不太接纳', score: 3 },
          { label: '完全不接纳', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会主动帮助有情绪困扰的人吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你能理解他人的敏感和脆弱吗？',
        options: [
          { label: '完全理解', score: 1 },
          { label: '基本理解', score: 2 },
          { label: '不太理解', score: 3 },
          { label: '完全不理解', score: 4 }
        ]
      },
      {
        id: 17,
        title: '他人向你倾诉，你会耐心倾听吗？',
        options: [
          { label: '非常耐心', score: 1 },
          { label: '比较耐心', score: 2 },
          { label: '不太耐心', score: 3 },
          { label: '完全不耐心', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会因为他人的痛苦而难过吗？',
        options: [
          { label: '经常会', score: 1 },
          { label: '偶尔会', score: 2 },
          { label: '很少会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你能共情不同年龄/背景的人吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感共情能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 6: 情感安全感测评
  6: {
    title: '情感安全感测评',
    questions: [
      {
        id: 1,
        title: '你会频繁担心失去在意的人吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔留意', score: 2 },
          { label: '经常担心', score: 3 },
          { label: '频繁焦虑', score: 4 }
        ]
      },
      {
        id: 2,
        title: '独处时，你会感到孤独恐慌吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔无聊', score: 2 },
          { label: '经常孤独', score: 3 },
          { label: '极度恐慌', score: 4 }
        ]
      },
      {
        id: 3,
        title: '他人晚归/失联，你会过度焦虑吗？',
        options: [
          { label: '从不焦虑', score: 1 },
          { label: '偶尔询问', score: 2 },
          { label: '频繁焦虑', score: 3 },
          { label: '极度焦虑', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会过度依赖他人的陪伴吗？',
        options: [
          { label: '完全独立', score: 1 },
          { label: '基本独立', score: 2 },
          { label: '偶尔依赖', score: 3 },
          { label: '极度依赖', score: 4 }
        ]
      },
      {
        id: 5,
        title: '面对分离，你能坦然接受吗？',
        options: [
          { label: '坦然接受', score: 1 },
          { label: '逐步接受', score: 2 },
          { label: '难以释怀', score: 3 },
          { label: '无法接受', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会怀疑他人对自己的真心吗？',
        options: [
          { label: '从不怀疑', score: 1 },
          { label: '偶尔怀疑', score: 2 },
          { label: '经常怀疑', score: 3 },
          { label: '总是怀疑', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你能信任他人会一直陪伴你吗？',
        options: [
          { label: '完全信任', score: 1 },
          { label: '基本信任', score: 2 },
          { label: '不太信任', score: 3 },
          { label: '完全不信任', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会因为他人的冷淡而不安吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你能接受感情中的平淡期吗？',
        options: [
          { label: '完全接受', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '不太接受', score: 3 },
          { label: '完全不接受', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会过度关注他人的行踪吗？',
        options: [
          { label: '从不关注', score: 1 },
          { label: '偶尔关注', score: 2 },
          { label: '经常关注', score: 3 },
          { label: '极度关注', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你能在关系中保持自我吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔迷失', score: 3 },
          { label: '完全迷失', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会因为害怕失去而妥协吗？',
        options: [
          { label: '从不妥协', score: 1 },
          { label: '偶尔妥协', score: 2 },
          { label: '经常妥协', score: 3 },
          { label: '总是妥协', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你对未来的情感关系有信心吗？',
        options: [
          { label: '非常有信心', score: 1 },
          { label: '比较有信心', score: 2 },
          { label: '不太有信心', score: 3 },
          { label: '完全没信心', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会因为他人的一句话胡思乱想吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你能独立处理情感中的问题吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会过度需要他人的肯定吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你能接纳关系中的不完美吗？',
        options: [
          { label: '完全接纳', score: 1 },
          { label: '基本接纳', score: 2 },
          { label: '不太接纳', score: 3 },
          { label: '完全不接纳', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会因为孤独而随便开始一段关系吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔想过', score: 2 },
          { label: '经常想过', score: 3 },
          { label: '已经做过', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你对自己的魅力有信心吗？',
        options: [
          { label: '非常有信心', score: 1 },
          { label: '比较有信心', score: 2 },
          { label: '不太有信心', score: 3 },
          { label: '完全没信心', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感安全感如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 7: 情感包容度测评
  7: {
    title: '情感包容度测评',
    questions: [
      {
        id: 1,
        title: '他人有缺点，你能包容吗？',
        options: [
          { label: '完全接纳', score: 1 },
          { label: '基本包容', score: 2 },
          { label: '偶尔包容', score: 3 },
          { label: '无法包容', score: 4 }
        ]
      },
      {
        id: 2,
        title: '他人与你观点不同，你能接受吗？',
        options: [
          { label: '尊重差异', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '偶尔接受', score: 3 },
          { label: '坚决拒绝', score: 4 }
        ]
      },
      {
        id: 3,
        title: '他人不小心伤害你，你会原谅吗？',
        options: [
          { label: '主动原谅', score: 1 },
          { label: '适当原谅', score: 2 },
          { label: '勉强原谅', score: 3 },
          { label: '坚决不原谅', score: 4 }
        ]
      },
      {
        id: 4,
        title: '感情中，你能包容对方的过错吗？',
        options: [
          { label: '理性包容', score: 1 },
          { label: '基本包容', score: 2 },
          { label: '偶尔包容', score: 3 },
          { label: '无法包容', score: 4 }
        ]
      },
      {
        id: 5,
        title: '面对他人的不足，你会包容鼓励吗？',
        options: [
          { label: '主动鼓励', score: 1 },
          { label: '适当鼓励', score: 2 },
          { label: '不愿鼓励', score: 3 },
          { label: '肆意指责', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你能接受他人的生活习惯与你不同吗？',
        options: [
          { label: '完全接受', score: 1 },
          { label: '基本接受', score: 2 },
          { label: '不太接受', score: 3 },
          { label: '完全不接受', score: 4 }
        ]
      },
      {
        id: 7,
        title: '他人的慢节奏会让你不耐烦吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你能包容他人的小脾气吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 9,
        title: '他人的审美与你不同，你会尊重吗？',
        options: [
          { label: '完全尊重', score: 1 },
          { label: '基本尊重', score: 2 },
          { label: '不太尊重', score: 3 },
          { label: '完全不尊重', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你能包容他人的失误吗？',
        options: [
          { label: '完全包容', score: 1 },
          { label: '基本包容', score: 2 },
          { label: '偶尔包容', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 11,
        title: '他人的价值观与你不同，你能理解吗？',
        options: [
          { label: '完全理解', score: 1 },
          { label: '基本理解', score: 2 },
          { label: '不太理解', score: 3 },
          { label: '完全不理解', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会因为他人的小缺点否定对方吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你能包容他人的唠叨吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 14,
        title: '他人的成功会让你嫉妒吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你能包容他人的拖延症吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会主动包容他人的个性差异吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 17,
        title: '他人的无心之失会让你耿耿于怀吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你能包容他人对自己的误解吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会因为他人的习惯改变自己吗？',
        options: [
          { label: '合理调整', score: 1 },
          { label: '适当调整', score: 2 },
          { label: '勉强调整', score: 3 },
          { label: '坚决不调整', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感包容度如何？',
        options: [
          { label: '非常高', score: 1 },
          { label: '比较高', score: 2 },
          { label: '比较低', score: 3 },
          { label: '非常低', score: 4 }
        ]
      }
    ]
  },
  // 8: 情感付出意愿测评
  8: {
    title: '情感付出意愿测评',
    questions: [
      {
        id: 1,
        title: '面对在意的人，你愿意主动付出吗？',
        options: [
          { label: '主动付出', score: 1 },
          { label: '适当付出', score: 2 },
          { label: '偶尔付出', score: 3 },
          { label: '从不付出', score: 4 }
        ]
      },
      {
        id: 2,
        title: '他人需要帮助，你会主动伸出援手吗？',
        options: [
          { label: '主动帮忙', score: 1 },
          { label: '欣然帮忙', score: 2 },
          { label: '勉强帮忙', score: 3 },
          { label: '坚决拒绝', score: 4 }
        ]
      },
      {
        id: 3,
        title: '感情中，你会主动迁就对方吗？',
        options: [
          { label: '主动迁就', score: 1 },
          { label: '适当迁就', score: 2 },
          { label: '偶尔迁就', score: 3 },
          { label: '从不迁就', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会主动为他人花时间/精力吗？',
        options: [
          { label: '主动付出', score: 1 },
          { label: '适当付出', score: 2 },
          { label: '偶尔付出', score: 3 },
          { label: '从不付出', score: 4 }
        ]
      },
      {
        id: 5,
        title: '他人难过时，你会主动陪伴吗？',
        options: [
          { label: '主动陪伴', score: 1 },
          { label: '欣然陪伴', score: 2 },
          { label: '勉强陪伴', score: 3 },
          { label: '坚决拒绝', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会主动为他人准备惊喜吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你会为了他人放弃自己的小计划吗？',
        options: [
          { label: '愿意', score: 1 },
          { label: '偶尔愿意', score: 2 },
          { label: '不太愿意', score: 3 },
          { label: '完全不愿意', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会主动关心他人的生活吗？',
        options: [
          { label: '经常关心', score: 1 },
          { label: '偶尔关心', score: 2 },
          { label: '很少关心', score: 3 },
          { label: '从不关心', score: 4 }
        ]
      },
      {
        id: 9,
        title: '感情中，你会主动沟通解决问题吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会为他人的成长感到开心吗？',
        options: [
          { label: '非常开心', score: 1 },
          { label: '比较开心', score: 2 },
          { label: '毫无感觉', score: 3 },
          { label: '心生不满', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会主动为他人分担压力吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会在他人需要时放下自己的事吗？',
        options: [
          { label: '愿意', score: 1 },
          { label: '偶尔愿意', score: 2 },
          { label: '不太愿意', score: 3 },
          { label: '完全不愿意', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会主动原谅他人的过错吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会为他人的喜好改变自己吗？',
        options: [
          { label: '合理改变', score: 1 },
          { label: '适当改变', score: 2 },
          { label: '勉强改变', score: 3 },
          { label: '坚决不改变', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会主动分享自己的资源给他人吗？',
        options: [
          { label: '经常分享', score: 1 },
          { label: '偶尔分享', score: 2 },
          { label: '很少分享', score: 3 },
          { label: '从不分享', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会为感情付出时间陪伴吗？',
        options: [
          { label: '经常付出', score: 1 },
          { label: '偶尔付出', score: 2 },
          { label: '很少付出', score: 3 },
          { label: '从不付出', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会主动为他人解决困难吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会在付出后计较回报吗？',
        options: [
          { label: '从不计较', score: 1 },
          { label: '偶尔计较', score: 2 },
          { label: '经常计较', score: 3 },
          { label: '总是计较', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会主动为他人的错误承担责任吗？',
        options: [
          { label: '合理承担', score: 1 },
          { label: '适当承担', score: 2 },
          { label: '勉强承担', score: 3 },
          { label: '坚决不承担', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感付出意愿如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 9: 情感抗伤害能力测评
  9: {
    title: '情感抗伤害能力测评',
    questions: [
      {
        id: 1,
        title: '被喜欢的人拒绝，你能快速走出吗？',
        options: [
          { label: '快速走出', score: 1 },
          { label: '慢慢走出', score: 2 },
          { label: '长期难过', score: 3 },
          { label: '陷入痛苦', score: 4 }
        ]
      },
      {
        id: 2,
        title: '被他人背叛，你能重新振作吗？',
        options: [
          { label: '快速振作', score: 1 },
          { label: '慢慢振作', score: 2 },
          { label: '长期消沉', score: 3 },
          { label: '彻底崩溃', score: 4 }
        ]
      },
      {
        id: 3,
        title: '感情破裂，你能坦然面对吗？',
        options: [
          { label: '坦然面对', score: 1 },
          { label: '慢慢接受', score: 2 },
          { label: '情绪低落', score: 3 },
          { label: '极度痛苦', score: 4 }
        ]
      },
      {
        id: 4,
        title: '被他人恶意诋毁，你会自我否定吗？',
        options: [
          { label: '从不否定', score: 1 },
          { label: '短暂难过', score: 2 },
          { label: '偶尔否定', score: 3 },
          { label: '彻底否定', score: 4 }
        ]
      },
      {
        id: 5,
        title: '遭遇情感欺骗，你能重新相信他人吗？',
        options: [
          { label: '依然相信', score: 1 },
          { label: '谨慎相信', score: 2 },
          { label: '心存戒备', score: 3 },
          { label: '彻底不信', score: 4 }
        ]
      },
      {
        id: 6,
        title: '他人的恶意中伤会让你一蹶不振吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你能从情感伤害中吸取教训吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 8,
        title: '被他人误解，你会长期内耗吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你能在情感伤害后保持自我吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔迷失', score: 3 },
          { label: '完全迷失', score: 4 }
        ]
      },
      {
        id: 10,
        title: '他人的背叛会让你不再相信爱情吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你能快速平复情感伤害带来的痛苦吗？',
        options: [
          { label: '非常快速', score: 1 },
          { label: '比较快速', score: 2 },
          { label: '比较缓慢', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 12,
        title: '情感伤害后，你会封闭自己吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你能理性看待情感中的伤害吗？',
        options: [
          { label: '非常理性', score: 1 },
          { label: '比较理性', score: 2 },
          { label: '不太理性', score: 3 },
          { label: '完全不理性', score: 4 }
        ]
      },
      {
        id: 14,
        title: '被他人抛弃，你会自我贬低吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔', score: 2 },
          { label: '经常', score: 3 },
          { label: '总是', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你能在情感伤害后重新开始吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 16,
        title: '他人的冷漠会让你受伤很久吗？',
        options: [
          { label: '完全不会', score: 1 },
          { label: '基本不会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '总是会', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会因为情感伤害报复他人吗？',
        options: [
          { label: '从不', score: 1 },
          { label: '偶尔想过', score: 2 },
          { label: '经常想过', score: 3 },
          { label: '已经做过', score: 4 }
        ]
      },
      {
        id: 18,
        title: '情感伤害后，你会加倍珍惜自己吗？',
        options: [
          { label: '会', score: 1 },
          { label: '偶尔会', score: 2 },
          { label: '很少会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你能区分“伤害”和“成长”吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感抗伤害能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },

  // 10: 情感幸福感感知测评（续上完整）
  10: {
    title: '情感幸福感感知测评',
    questions: [
      {
        id: 1,
        title: '你能从平凡生活中感受到幸福吗？',
        options: [
          { label: '轻易感受', score: 1 },
          { label: '偶尔感受', score: 2 },
          { label: '转瞬即逝', score: 3 },
          { label: '从未感受', score: 4 }
        ]
      },
      {
        id: 2,
        title: '身边人对你的关心，你能感受到吗？',
        options: [
          { label: '清晰感受', score: 1 },
          { label: '基本感受', score: 2 },
          { label: '不以为然', score: 3 },
          { label: '觉得冷漠', score: 4 }
        ]
      },
      {
        id: 3,
        title: '完成小事后，你会感到满足吗？',
        options: [
          { label: '极度满足', score: 1 },
          { label: '基本满足', score: 2 },
          { label: '毫无波澜', score: 3 },
          { label: '满心不满', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会主动创造生活中的小美好吗？',
        options: [
          { label: '主动创造', score: 1 },
          { label: '偶尔创造', score: 2 },
          { label: '被动接受', score: 3 },
          { label: '从不创造', score: 4 }
        ]
      },
      {
        id: 5,
        title: '你对当下的情感生活满意吗？',
        options: [
          { label: '十分满意', score: 1 },
          { label: '基本满意', score: 2 },
          { label: '大多失落', score: 3 },
          { label: '极度不满', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会因为阳光/美食感到幸福吗？',
        options: [
          { label: '经常会', score: 1 },
          { label: '偶尔会', score: 2 },
          { label: '很少会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你会记录生活中的幸福瞬间吗？',
        options: [
          { label: '经常记录', score: 1 },
          { label: '偶尔记录', score: 2 },
          { label: '很少记录', score: 3 },
          { label: '从不记录', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会因为他人的赞美感到开心吗？',
        options: [
          { label: '非常开心', score: 1 },
          { label: '比较开心', score: 2 },
          { label: '毫无感觉', score: 3 },
          { label: '心生怀疑', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会主动分享自己的幸福吗？',
        options: [
          { label: '经常分享', score: 1 },
          { label: '偶尔分享', score: 2 },
          { label: '很少分享', score: 3 },
          { label: '从不分享', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你对生活中的小惊喜有期待吗？',
        options: [
          { label: '非常有期待', score: 1 },
          { label: '比较有期待', score: 2 },
          { label: '不太有期待', score: 3 },
          { label: '完全没期待', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会因为帮助他人感到幸福吗？',
        options: [
          { label: '非常幸福', score: 1 },
          { label: '比较幸福', score: 2 },
          { label: '略有感觉', score: 3 },
          { label: '毫无感觉', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你能接纳生活中的不完美吗？',
        options: [
          { label: '完全接纳', score: 1 },
          { label: '基本接纳', score: 2 },
          { label: '不太接纳', score: 3 },
          { label: '完全不接纳', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会主动寻找幸福的来源吗？',
        options: [
          { label: '经常主动', score: 1 },
          { label: '偶尔主动', score: 2 },
          { label: '很少主动', score: 3 },
          { label: '从不主动', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会因为平淡的陪伴感到幸福吗？',
        options: [
          { label: '非常会', score: 1 },
          { label: '比较会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你对未来的幸福有信心吗？',
        options: [
          { label: '非常有信心', score: 1 },
          { label: '比较有信心', score: 2 },
          { label: '不太有信心', score: 3 },
          { label: '完全没信心', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会因为兴趣爱好感到幸福吗？',
        options: [
          { label: '经常会', score: 1 },
          { label: '偶尔会', score: 2 },
          { label: '很少会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会感恩生活中的小确幸吗？',
        options: [
          { label: '经常感恩', score: 1 },
          { label: '偶尔感恩', score: 2 },
          { label: '很少感恩', score: 3 },
          { label: '从不感恩', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会因为和家人相处感到幸福吗？',
        options: [
          { label: '非常会', score: 1 },
          { label: '比较会', score: 2 },
          { label: '偶尔会', score: 3 },
          { label: '从不会', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你能在困境中找到幸福的微光吗？',
        options: [
          { label: '完全可以', score: 1 },
          { label: '基本可以', score: 2 },
          { label: '偶尔可以', score: 3 },
          { label: '完全不能', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感幸福感感知能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      }
    ]
  },
  // 11: 测你的爱情情感观
  11: {
    title: '测你的爱情情感观',
    questions: [
      {
        id: 1,
        title: '你认为爱情的核心是？',
        options: [
          { label: '相互陪伴，彼此包容', score: 1 },
          { label: '三观契合，灵魂共鸣', score: 2 },
          { label: '真心付出，双向奔赴', score: 3 },
          { label: '热烈浪漫，轰轰烈烈', score: 4 }
        ]
      },
      {
        id: 2,
        title: '爱人犯错，你会？',
        options: [
          { label: '温柔包容，耐心沟通', score: 1 },
          { label: '理性指出，给其空间', score: 2 },
          { label: '偶尔抱怨，很快原谅', score: 3 },
          { label: '情绪爆发，难以释怀', score: 4 }
        ]
      },
      {
        id: 3,
        title: '你会为爱情放弃什么？',
        options: [
          { label: '无关紧要的小爱好', score: 1 },
          { label: '部分私人时间', score: 2 },
          { label: '自己的一些小坚持', score: 3 },
          { label: '重要的个人目标', score: 4 }
        ]
      },
      {
        id: 4,
        title: '异地恋对你来说？',
        options: [
          { label: '可以接受，慢慢坚守', score: 1 },
          { label: '偶尔焦虑，努力维系', score: 2 },
          { label: '难以忍受，缺乏安全感', score: 3 },
          { label: '绝对拒绝，无法坚持', score: 4 }
        ]
      },
      {
        id: 5,
        title: '爱情走到尽头，你会？',
        options: [
          { label: '体面告别，各自安好', score: 1 },
          { label: '短暂难过，慢慢放下', score: 2 },
          { label: '纠缠不舍，难以释怀', score: 3 },
          { label: '怨恨对方，彻底断联', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你认为爱情需要保鲜吗？',
        options: [
          { label: '需要，主动创造新鲜感', score: 1 },
          { label: '需要，偶尔制造惊喜', score: 2 },
          { label: '不太需要，平淡就好', score: 3 },
          { label: '完全不需要，顺其自然', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你会在爱情中保持独立吗？',
        options: [
          { label: '完全独立，互不依附', score: 1 },
          { label: '基本独立，适当依赖', score: 2 },
          { label: '偶尔依赖，缺乏独立', score: 3 },
          { label: '完全依赖，失去自我', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你认为爱情中的信任重要吗？',
        options: [
          { label: '至关重要，完全信任', score: 1 },
          { label: '比较重要，基本信任', score: 2 },
          { label: '不太重要，有所保留', score: 3 },
          { label: '完全不重要，互相防备', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会为爱情妥协自己的原则吗？',
        options: [
          { label: '从不妥协，坚守原则', score: 1 },
          { label: '偶尔妥协，底线不变', score: 2 },
          { label: '经常妥协，失去底线', score: 3 },
          { label: '总是妥协，毫无原则', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你认为爱情应该是平等的吗？',
        options: [
          { label: '完全平等，相互尊重', score: 1 },
          { label: '基本平等，偶尔迁就', score: 2 },
          { label: '不太平等，一方付出', score: 3 },
          { label: '完全不平等，单方面索取', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会轻易开始一段爱情吗？',
        options: [
          { label: '从不，谨慎对待', score: 1 },
          { label: '偶尔，认真考察', score: 2 },
          { label: '经常，凭感觉开始', score: 3 },
          { label: '总是，盲目投入', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会在爱情中表达自己的需求吗？',
        options: [
          { label: '完全会，清晰表达', score: 1 },
          { label: '基本会，适当表达', score: 2 },
          { label: '偶尔会，不好意思', score: 3 },
          { label: '完全不会，刻意隐藏', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你认为爱情能战胜一切困难吗？',
        options: [
          { label: '不能，理性看待', score: 1 },
          { label: '可能，共同努力', score: 2 },
          { label: '大概能，抱有期待', score: 3 },
          { label: '一定能，盲目坚信', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会原谅爱情中的背叛吗？',
        options: [
          { label: '从不原谅，果断离开', score: 1 },
          { label: '偶尔原谅，看情况而定', score: 2 },
          { label: '经常原谅，选择妥协', score: 3 },
          { label: '总是原谅，无底线包容', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你认为爱情需要物质基础吗？',
        options: [
          { label: '需要，适度即可', score: 1 },
          { label: '需要，比较重要', score: 2 },
          { label: '不太需要，感情至上', score: 3 },
          { label: '完全不需要，纯粹就好', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会在爱情中控制对方吗？',
        options: [
          { label: '从不控制，给予自由', score: 1 },
          { label: '偶尔关注，不控制', score: 2 },
          { label: '经常控制，缺乏安全感', score: 3 },
          { label: '总是控制，占有欲极强', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你认为爱情的保质期是多久？',
        options: [
          { label: '长久，用心经营', score: 1 },
          { label: '较长，看双方努力', score: 2 },
          { label: '较短，容易变质', score: 3 },
          { label: '很短，转瞬即逝', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会为爱情牺牲自己的社交吗？',
        options: [
          { label: '从不牺牲，保持独立', score: 1 },
          { label: '偶尔牺牲，适度平衡', score: 2 },
          { label: '经常牺牲，以爱情为重', score: 3 },
          { label: '总是牺牲，完全放弃', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你认为爱情中沟通重要吗？',
        options: [
          { label: '至关重要，主动沟通', score: 1 },
          { label: '比较重要，偶尔沟通', score: 2 },
          { label: '不太重要，顺其自然', score: 3 },
          { label: '完全不重要，无需沟通', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的爱情情感观成熟吗？',
        options: [
          { label: '非常成熟', score: 1 },
          { label: '比较成熟', score: 2 },
          { label: '不太成熟', score: 3 },
          { label: '完全不成熟', score: 4 }
        ]
      }
    ]
  },
  // 12: 测你的友情情感特质
  12: {
    title: '测你的友情情感特质',
    questions: [
      {
        id: 1,
        title: '你交朋友更看重什么？',
        options: [
          { label: '真诚靠谱，彼此信任', score: 1 },
          { label: '三观契合，聊得来', score: 2 },
          { label: '温柔体贴，懂得倾听', score: 3 },
          { label: '志同道合，能共患难', score: 4 }
        ]
      },
      {
        id: 2,
        title: '朋友向你倾诉烦恼，你会？',
        options: [
          { label: '耐心倾听，默默陪伴', score: 1 },
          { label: '理性分析，给出建议', score: 2 },
          { label: '共情安慰，一起吐槽', score: 3 },
          { label: '不知所措，勉强应付', score: 4 }
        ]
      },
      {
        id: 3,
        title: '朋友犯错伤害你，你会？',
        options: [
          { label: '选择原谅，珍惜情谊', score: 1 },
          { label: '冷静沟通，化解矛盾', score: 2 },
          { label: '暂时疏远，慢慢释怀', score: 3 },
          { label: '彻底断联，不再来往', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会主动维系友情吗？',
        options: [
          { label: '偶尔联系，顺其自然', score: 1 },
          { label: '主动问候，保持联络', score: 2 },
          { label: '对方主动，自己被动', score: 3 },
          { label: '很少联系，随缘相处', score: 4 }
        ]
      },
      {
        id: 5,
        title: '你认为友情的意义是？',
        options: [
          { label: '难过时有人陪伴', score: 1 },
          { label: '迷茫时有人指引', score: 2 },
          { label: '开心时有人分享', score: 3 },
          { label: '困境时有人相助', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会在朋友需要时挺身而出吗？',
        options: [
          { label: '一定会，全力以赴', score: 1 },
          { label: '会，力所能及', score: 2 },
          { label: '偶尔会，看情况而定', score: 3 },
          { label: '不会，事不关己', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你能接受朋友的缺点吗？',
        options: [
          { label: '完全接受，包容理解', score: 1 },
          { label: '基本接受，不苛求', score: 2 },
          { label: '偶尔接受，心存不满', score: 3 },
          { label: '完全不能，极度挑剔', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会和朋友分享自己的秘密吗？',
        options: [
          { label: '经常分享，彼此信任', score: 1 },
          { label: '偶尔分享，选择性倾诉', score: 2 },
          { label: '很少分享，有所保留', score: 3 },
          { label: '从不分享，刻意隐藏', score: 4 }
        ]
      },
      {
        id: 9,
        title: '朋友取得成就，你会真心祝福吗？',
        options: [
          { label: '真心祝福，由衷开心', score: 1 },
          { label: '礼貌祝福，表达善意', score: 2 },
          { label: '敷衍祝福，内心平淡', score: 3 },
          { label: '心生嫉妒，不愿祝福', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会为友情付出时间和精力吗？',
        options: [
          { label: '愿意，毫无怨言', score: 1 },
          { label: '愿意，适度付出', score: 2 },
          { label: '偶尔愿意，勉强应付', score: 3 },
          { label: '不愿意，吝啬付出', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你能和朋友保持长期联系吗？',
        options: [
          { label: '能，一直保持', score: 1 },
          { label: '能，基本保持', score: 2 },
          { label: '偶尔能，时断时续', score: 3 },
          { label: '不能，逐渐疏远', score: 4 }
        ]
      },
      {
        id: 12,
        title: '朋友的观点与你不同，你会？',
        options: [
          { label: '尊重差异，理性沟通', score: 1 },
          { label: '基本接受，不争执', score: 2 },
          { label: '偶尔接受，不愿沟通', score: 3 },
          { label: '坚决拒绝，强行反驳', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会主动帮助朋友解决困难吗？',
        options: [
          { label: '经常主动，尽力协助', score: 1 },
          { label: '偶尔主动，力所能及', score: 2 },
          { label: '很少主动，被动帮助', score: 3 },
          { label: '从不主动，拒绝帮助', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会嫉妒朋友的好运吗？',
        options: [
          { label: '从不，真心为其开心', score: 1 },
          { label: '偶尔，很快释怀', score: 2 },
          { label: '经常，心存不满', score: 3 },
          { label: '总是，恶意嫉妒', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会在友情中斤斤计较吗？',
        options: [
          { label: '从不，大方包容', score: 1 },
          { label: '偶尔，很快放下', score: 2 },
          { label: '经常，耿耿于怀', score: 3 },
          { label: '总是，极度计较', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你会主动策划朋友聚会吗？',
        options: [
          { label: '经常主动，活跃气氛', score: 1 },
          { label: '偶尔主动，配合参与', score: 2 },
          { label: '很少主动，等待邀约', score: 3 },
          { label: '从不主动，拒绝参与', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你能原谅朋友的无心之失吗？',
        options: [
          { label: '完全原谅，不记仇', score: 1 },
          { label: '基本原谅，不再追究', score: 2 },
          { label: '勉强原谅，心存芥蒂', score: 3 },
          { label: '完全不能，记恨在心', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你认为友情需要经营吗？',
        options: [
          { label: '需要，用心维护', score: 1 },
          { label: '需要，偶尔维护', score: 2 },
          { label: '不太需要，顺其自然', score: 3 },
          { label: '完全不需要，随缘就好', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你会在朋友面前展现真实的自己吗？',
        options: [
          { label: '完全展现，毫无保留', score: 1 },
          { label: '基本展现，适当隐藏', score: 2 },
          { label: '偶尔展现，刻意伪装', score: 3 },
          { label: '完全不展现，虚假应对', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的友情情感特质如何？',
        options: [
          { label: '非常成熟', score: 1 },
          { label: '比较成熟', score: 2 },
          { label: '不太成熟', score: 3 },
          { label: '完全不成熟', score: 4 }
        ]
      }
    ]
  },
  // 13: 测你的亲情情感表达
  13: {
    title: '测你的亲情情感表达',
    questions: [
      {
        id: 1,
        title: '你会主动和家人沟通吗？',
        options: [
          { label: '偶尔沟通，报喜不报忧', score: 1 },
          { label: '定期沟通，分享日常', score: 2 },
          { label: '很少沟通，不善表达', score: 3 },
          { label: '只在需要帮助时沟通', score: 4 }
        ]
      },
      {
        id: 2,
        title: '你会向家人说“我爱你”吗？',
        options: [
          { label: '很少说，用行动表达', score: 1 },
          { label: '偶尔说，氛围合适时', score: 2 },
          { label: '经常说，大胆表达', score: 3 },
          { label: '从不说，觉得很别扭', score: 4 }
        ]
      },
      {
        id: 3,
        title: '家人不理解你，你会？',
        options: [
          { label: '耐心解释，争取理解', score: 1 },
          { label: '默默忍受，不做争辩', score: 2 },
          { label: '情绪激动，据理力争', score: 3 },
          { label: '冷战回避，不愿沟通', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会为家人付出什么？',
        options: [
          { label: '时间精力，尽力陪伴', score: 1 },
          { label: '物质支持，满足需求', score: 2 },
          { label: '耐心倾听，给予安慰', score: 3 },
          { label: '力所能及，不做勉强', score: 4 }
        ]
      },
      {
        id: 5,
        title: '你心中的亲情是？',
        options: [
          { label: '默默守护，无需多言', score: 1 },
          { label: '温暖陪伴，彼此滋养', score: 2 },
          { label: '相互扶持，共渡难关', score: 3 },
          { label: '责任在肩，必须承担', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会记住家人的重要日子吗？',
        options: [
          { label: '全部记住，用心准备', score: 1 },
          { label: '基本记住，简单庆祝', score: 2 },
          { label: '偶尔记住，敷衍应对', score: 3 },
          { label: '从不记住，毫无在意', score: 4 }
        ]
      },
      {
        id: 7,
        title: '家人遇到困难，你会主动帮助吗？',
        options: [
          { label: '立刻帮助，全力以赴', score: 1 },
          { label: '主动帮助，力所能及', score: 2 },
          { label: '偶尔帮助，勉强应对', score: 3 },
          { label: '从不帮助，事不关己', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会和家人分享自己的心事吗？',
        options: [
          { label: '经常分享，毫无保留', score: 1 },
          { label: '偶尔分享，选择性倾诉', score: 2 },
          { label: '很少分享，刻意隐藏', score: 3 },
          { label: '从不分享，独自承受', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会为家人改变自己的习惯吗？',
        options: [
          { label: '愿意，合理改变', score: 1 },
          { label: '愿意，适当改变', score: 2 },
          { label: '偶尔愿意，勉强改变', score: 3 },
          { label: '不愿意，坚决不改变', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会主动关心家人的健康吗？',
        options: [
          { label: '经常关心，细致体贴', score: 1 },
          { label: '偶尔关心，简单问候', score: 2 },
          { label: '很少关心，漠不关心', score: 3 },
          { label: '从不关心，毫无在意', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你会和家人一起做家务吗？',
        options: [
          { label: '经常一起，主动承担', score: 1 },
          { label: '偶尔一起，配合参与', score: 2 },
          { label: '很少一起，勉强应付', score: 3 },
          { label: '从不一起，拒绝参与', score: 4 }
        ]
      },
      {
        id: 12,
        title: '家人的建议，你会采纳吗？',
        options: [
          { label: '理性采纳，结合自身', score: 1 },
          { label: '适当采纳，参考借鉴', score: 2 },
          { label: '偶尔采纳，勉强接受', score: 3 },
          { label: '从不采纳，坚决拒绝', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你会向家人道歉吗？',
        options: [
          { label: '主动道歉，真诚认错', score: 1 },
          { label: '适当道歉，不再犯错', score: 2 },
          { label: '偶尔道歉，勉强认错', score: 3 },
          { label: '从不道歉，固执己见', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会为家人准备礼物吗？',
        options: [
          { label: '经常准备，用心挑选', score: 1 },
          { label: '偶尔准备，简单挑选', score: 2 },
          { label: '很少准备，敷衍应对', score: 3 },
          { label: '从不准备，毫无表示', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会和家人一起旅行吗？',
        options: [
          { label: '经常一起，享受时光', score: 1 },
          { label: '偶尔一起，放松心情', score: 2 },
          { label: '很少一起，勉强参与', score: 3 },
          { label: '从不一起，拒绝参与', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你能包容家人的缺点吗？',
        options: [
          { label: '完全包容，理解体谅', score: 1 },
          { label: '基本包容，不苛求', score: 2 },
          { label: '偶尔包容，心存不满', score: 3 },
          { label: '完全不能，极度挑剔', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会在家人面前展现真实的自己吗？',
        options: [
          { label: '完全展现，毫无保留', score: 1 },
          { label: '基本展现，适当隐藏', score: 2 },
          { label: '偶尔展现，刻意伪装', score: 3 },
          { label: '完全不展现，虚假应对', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会感谢家人的付出吗？',
        options: [
          { label: '经常感谢，真心表达', score: 1 },
          { label: '偶尔感谢，简单表达', score: 2 },
          { label: '很少感谢，不以为然', score: 3 },
          { label: '从不感谢，觉得理所当然', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你认为亲情需要表达吗？',
        options: [
          { label: '需要，主动表达', score: 1 },
          { label: '需要，偶尔表达', score: 2 },
          { label: '不太需要，默默付出', score: 3 },
          { label: '完全不需要，无需表达', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的亲情情感表达如何？',
        options: [
          { label: '非常好', score: 1 },
          { label: '比较好', score: 2 },
          { label: '不太好', score: 3 },
          { label: '非常不好', score: 4 }
        ]
      }
    ]
  },
  // 14: 测你的情感依赖程度
  14: {
    title: '测你的情感依赖程度',
    questions: [
      {
        id: 1,
        title: '做重要决定时，你会？',
        options: [
          { label: '自主决定，不依赖他人', score: 1 },
          { label: '参考他人意见，自己做主', score: 2 },
          { label: '依赖他人，难以自主', score: 3 },
          { label: '完全听从他人安排', score: 4 }
        ]
      },
      {
        id: 2,
        title: '独处时，你会感到？',
        options: [
          { label: '自在舒适，享受独处', score: 1 },
          { label: '偶尔孤单，很快适应', score: 2 },
          { label: '十分孤单，渴望陪伴', score: 3 },
          { label: '极度不安，无法独处', score: 4 }
        ]
      },
      {
        id: 3,
        title: '情感上遇到挫折，你会？',
        options: [
          { label: '自主调节，不依赖他人', score: 1 },
          { label: '偶尔求助，主要靠自己', score: 2 },
          { label: '依赖他人安慰，才能缓解', score: 3 },
          { label: '无法自主缓解，全靠他人', score: 4 }
        ]
      },
      {
        id: 4,
        title: '你会过度在意他人的看法吗？',
        options: [
          { label: '不会，坚持自己的想法', score: 1 },
          { label: '偶尔在意，不影响决定', score: 2 },
          { label: '经常在意，容易动摇', score: 3 },
          { label: '极度在意，完全被左右', score: 4 }
        ]
      },
      {
        id: 5,
        title: '没有他人陪伴，你能好好生活吗？',
        options: [
          { label: '能，生活规律且充实', score: 1 },
          { label: '基本能，偶尔会孤单', score: 2 },
          { label: '很难，生活变得混乱', score: 3 },
          { label: '不能，完全无法正常生活', score: 4 }
        ]
      },
      {
        id: 6,
        title: '你会主动寻求他人的认可吗？',
        options: [
          { label: '从不，自我认可', score: 1 },
          { label: '偶尔，适度寻求', score: 2 },
          { label: '经常，非常需要', score: 3 },
          { label: '总是，极度依赖', score: 4 }
        ]
      },
      {
        id: 7,
        title: '你能独立完成复杂的事情吗？',
        options: [
          { label: '完全可以，不依赖他人', score: 1 },
          { label: '基本可以，偶尔求助', score: 2 },
          { label: '很难，需要他人协助', score: 3 },
          { label: '完全不能，必须依赖', score: 4 }
        ]
      },
      {
        id: 8,
        title: '你会因为他人的离开感到恐慌吗？',
        options: [
          { label: '完全不会，坦然接受', score: 1 },
          { label: '基本不会，慢慢适应', score: 2 },
          { label: '偶尔会，略有不安', score: 3 },
          { label: '总是会，极度恐慌', score: 4 }
        ]
      },
      {
        id: 9,
        title: '你会主动培养独立能力吗？',
        options: [
          { label: '经常主动，持续提升', score: 1 },
          { label: '偶尔主动，适度提升', score: 2 },
          { label: '很少主动，被动提升', score: 3 },
          { label: '从不主动，拒绝提升', score: 4 }
        ]
      },
      {
        id: 10,
        title: '你会把情绪寄托在他人身上吗？',
        options: [
          { label: '从不，自我调节', score: 1 },
          { label: '偶尔，适度寄托', score: 2 },
          { label: '经常，非常依赖', score: 3 },
          { label: '总是，完全寄托', score: 4 }
        ]
      },
      {
        id: 11,
        title: '你能接受他人的拒绝吗？',
        options: [
          { label: '完全接受，坦然面对', score: 1 },
          { label: '基本接受，慢慢释怀', score: 2 },
          { label: '偶尔接受，略有难过', score: 3 },
          { label: '完全不能，极度崩溃', score: 4 }
        ]
      },
      {
        id: 12,
        title: '你会过度黏着在意的人吗？',
        options: [
          { label: '从不，保持距离', score: 1 },
          { label: '偶尔，适度黏着', score: 2 },
          { label: '经常，非常黏着', score: 3 },
          { label: '总是，极度黏着', score: 4 }
        ]
      },
      {
        id: 13,
        title: '你能自主安排自己的生活吗？',
        options: [
          { label: '完全可以，充实有序', score: 1 },
          { label: '基本可以，偶尔迷茫', score: 2 },
          { label: '很难，需要他人安排', score: 3 },
          { label: '完全不能，依赖他人', score: 4 }
        ]
      },
      {
        id: 14,
        title: '你会因为他人的忽视感到难过吗？',
        options: [
          { label: '完全不会，坦然面对', score: 1 },
          { label: '基本不会，偶尔失落', score: 2 },
          { label: '偶尔会，比较难过', score: 3 },
          { label: '总是会，极度难过', score: 4 }
        ]
      },
      {
        id: 15,
        title: '你会主动拒绝他人的过度干涉吗？',
        options: [
          { label: '经常主动，明确边界', score: 1 },
          { label: '偶尔主动，适当拒绝', score: 2 },
          { label: '很少主动，勉强接受', score: 3 },
          { label: '从不主动，完全接受', score: 4 }
        ]
      },
      {
        id: 16,
        title: '你能独立处理生活中的困难吗？',
        options: [
          { label: '完全可以，不依赖他人', score: 1 },
          { label: '基本可以，偶尔求助', score: 2 },
          { label: '很难，需要他人帮助', score: 3 },
          { label: '完全不能，必须依赖', score: 4 }
        ]
      },
      {
        id: 17,
        title: '你会过度需要他人的陪伴吗？',
        options: [
          { label: '从不，享受独立', score: 1 },
          { label: '偶尔，适度需要', score: 2 },
          { label: '经常，非常需要', score: 3 },
          { label: '总是，极度需要', score: 4 }
        ]
      },
      {
        id: 18,
        title: '你会因为他人的意见改变自己的选择吗？',
        options: [
          { label: '从不，坚持自我', score: 1 },
          { label: '偶尔，合理改变', score: 2 },
          { label: '经常，轻易改变', score: 3 },
          { label: '总是，完全改变', score: 4 }
        ]
      },
      {
        id: 19,
        title: '你认为自己的独立能力如何？',
        options: [
          { label: '非常强', score: 1 },
          { label: '比较强', score: 2 },
          { label: '比较弱', score: 3 },
          { label: '非常弱', score: 4 }
        ]
      },
      {
        id: 20,
        title: '你认为自己的情感依赖程度如何？',
        options: [
          { label: '非常低', score: 1 },
          { label: '比较低', score: 2 },
          { label: '比较高', score: 3 },
          { label: '非常高', score: 4 }
        ]
      }
    ]
  }
}

// 2. 独立结论配置变量（严格匹配指定格式）
const workplaceResults = {
  // 1: 情感自愈能力测评结论
  1: {
    low: {
      title: 'Ⅰ型·自愈能力极强',
      content:
        '你情感自愈能力突出，情绪低落、遭遇挫折时能快速自我疏导，被误解不钻牛角尖，压力大时能合理宣泄，面对失去能坦然释怀。心态成熟坚韧，能快速从负面情绪中走出，建议保持优势，学会适度倾诉，兼顾自愈与情感释放。'
    },
    mediumLow: {
      title: 'Ⅱ型·自愈能力良好',
      content:
        '你自愈能力均衡，情绪低落时能慢慢缓解，遭遇挫折会偶尔疏导，被误解能慢慢想开，压力大时能适当调节，面对失去能逐步放下。能应对日常情感困扰，偶尔会陷入短暂内耗，建议提升调节速度，减少负面情绪停留时间。'
    },
    mediumHigh: {
      title: 'Ⅲ型·自愈能力较弱',
      content:
        '你自愈能力不足，情绪低落持续较久，遭遇挫折难以释怀，被误解易耿耿于怀，压力易堆积，面对失去难以放下。易陷入情感内耗，影响正常生活，建议学会主动宣泄，尝试自我开解，必要时寻求他人帮助。'
    },
    high: {
      title: 'Ⅳ型·自愈能力极差',
      content:
        '你情感自愈能力严重缺失，长期陷入低落，沉溺挫折无法自拔，被误解陷入内耗自我否定，无法调节压力，对失去长期执念。严重影响生活与心态，建议重点学习疏导方法，主动寻求帮助，逐步培养自愈能力。'
    }
  },
  // 2: 情感表达能力测评结论
  2: {
    low: {
      title: 'Ⅰ型·表达能力极强',
      content:
        '你情感表达能力突出，能清晰准确表达自身情绪，面对喜欢的人敢于真诚表达心意，生气时理性表达不满，开心时主动分享喜悦，委屈时愿意诉说心声。擅长通过表达传递情感，人际关系融洽，建议保持优势，兼顾表达真诚与分寸感。'
    },
    mediumLow: {
      title: 'Ⅱ型·表达能力良好',
      content:
        '你表达能力均衡，能较顺畅表达情绪，面对喜欢的人会犹豫后表达，生气时能适当表达不满，开心时愿意分享，委屈时会向信任的人诉说。能满足日常情感表达需求，偶尔会拘谨，建议提升表达主动性，减少情绪压抑。'
    },
    mediumHigh: {
      title: 'Ⅲ型·表达能力较弱',
      content:
        '你情感表达能力不足，情绪表达不精准，面对喜欢的人不敢表达，生气时压抑情绪，开心时不愿分享，委屈时独自承受。易因表达不畅产生情感隔阂，建议尝试主动表达，慢慢克服拘谨，学会释放情绪。'
    },
    high: {
      title: 'Ⅳ型·表达能力极差',
      content:
        '你情感表达能力严重缺失，无法表达自身情绪，刻意隐藏心意，生气时暴躁发泄或压抑，不愿分享喜怒哀乐，长期压抑委屈。易引发情感矛盾与自我内耗，建议从简单表达开始，逐步提升表达能力，学会合理释放情绪。'
    }
  },
  // 3: 情感敏感程度测评结论
  3: {
    low: {
      title: 'Ⅰ型·敏感度极低',
      content:
        '你情感敏感度极低，内心自信从容，他人语气冷淡、无意的话语不会让你多想，不猜测他人议论，朋友忘记回复也能理解，被拒绝后不否定自己。心态豁达，不易陷入内耗，建议保持优势，偶尔留意他人情绪，兼顾自身与他人感受。'
    },
    mediumLow: {
      title: 'Ⅱ型·敏感度适中',
      content:
        '你情感敏感度适中，偶尔会留意他人语气，对他人议论偶尔疑惑，朋友忘记回复会偶尔询问，被拒绝后短暂失落不否定自己。能平衡自身情绪与外界影响，偶尔会有小敏感，建议保持平和心态，减少不必要的猜测。'
    },
    mediumHigh: {
      title: 'Ⅲ型·敏感度较高',
      content:
        '你情感敏感度较高，他人语气冷淡、无意的话语会让你多想，易猜测他人议论，朋友忘记回复会觉得被忽视，被拒绝后偶尔否定自己。偶尔陷入内耗，影响心情，建议减少过度猜测，提升自信心，学会自我肯定。'
    },
    high: {
      title: 'Ⅳ型·敏感度极高',
      content:
        '你情感敏感度极高，过度在意他人态度，他人无意的话语、冷淡的语气都会让你陷入内耗，易猜测他人议论，被拒绝后彻底否定自己。严重影响心态与生活，建议学会放宽心态，减少自我内耗，建立强大的内心自信。'
    }
  },
  // 4-14套测评结论格式同上，此处省略
  4: {
    low: {
      title: 'Ⅰ型·稳定性极强',
      content:
        '你情感稳定性突出，情绪始终平和，不会突然大起大落，遇到小事不急躁、不发脾气，期待落空能坦然接受，与人争执时保持理性，能享受平淡生活。心态成熟稳重，不易被外界影响，建议保持优势，偶尔释放情绪，避免过度压抑。'
    },
    mediumLow: {
      title: 'Ⅱ型·稳定性良好',
      content:
        '你情感稳定性良好，情绪基本平稳，偶尔有小波动，遇到小事基本不发脾气，期待落空能慢慢接受，与人争执时基本冷静，能适应平淡生活。能应对日常情绪变化，偶尔会急躁，建议提升情绪控制能力，减少冲动行为。'
    },
    mediumHigh: {
      title: 'Ⅲ型·稳定性较弱',
      content:
        '你情感稳定性不足，偶尔会情绪大起大落，遇到小事偶尔发脾气，期待落空会情绪低落、抱怨，与人争执时偶尔冲动，难以适应平淡生活。易被情绪左右，影响人际关系，建议学会控制情绪，培养平和心态，提升抗压能力。'
    },
    high: {
      title: 'Ⅳ型·稳定性极差',
      content:
        '你情感稳定性严重缺失，情绪频繁大起大落、易失控，遇到小事频繁发脾气，期待落空会情绪崩溃，与人争执时极度冲动，极度排斥平淡生活。严重影响生活与人际关系，建议重点学习情绪控制方法，主动疏导情绪，培养沉稳心态。'
    }
  },
  5: {
    low: {
      title: 'Ⅰ型·共情能力极强',
      content:
        '你情感共情能力突出，能深度感受他人的喜怒哀乐，看到他人难过会主动安慰，真心祝福他人的喜悦，主动换位思考理解他人，听到委屈会动容倾听，能真心原谅他人过错。善良真诚，善于体谅他人，人际关系融洽，建议保持优势，兼顾共情与自身情绪，避免过度内耗。'
    },
    mediumLow: {
      title: 'Ⅱ型·共情能力良好',
      content:
        '你共情能力均衡，能感受到他人情绪，会适当安慰难过的人，礼貌祝福他人，偶尔换位思考，耐心倾听他人委屈，能适当原谅他人。能做到基本的共情与善意，偶尔会忽略他人感受，建议提升共情主动性，多关注身边人的情绪。'
    },
    mediumHigh: {
      title: 'Ⅲ型·共情能力较弱',
      content:
        '你共情能力不足，对他人情绪感受不深，不愿安慰难过的人，敷衍祝福他人，很少换位思考，不愿倾听他人委屈，勉强原谅他人且心存芥蒂。易显得冷漠，影响人际关系，建议培养共情意识，学会换位思考，多体谅他人。'
    },
    high: {
      title: 'Ⅳ型·共情能力极差',
      content:
        '你情感共情能力严重缺失，对他人情绪毫无感觉，冷漠旁观他人难过，嫉妒他人喜悦，从不换位思考，拒绝倾听他人委屈，坚决不原谅他人过错。极度冷漠自私，难以建立良好人际关系，建议学会尊重他人情绪，培养共情能力，学会善意待人。'
    }
  },
  // 6: 情感安全感测评结论
  6: {
    low: {
      title: 'Ⅰ型·安全感极强',
      content:
        '你情感安全感极强，信任身边在意的人，不担心失去，能享受独处、不感到孤独，他人晚归不焦虑，独立自信不依赖他人陪伴，面对分离能坦然接受。内心强大，心态平和，能从容应对情感中的分离与独处，建议保持优势，适当给予他人陪伴，兼顾独立与共情。'
    },
    mediumLow: {
      title: 'Ⅱ型·安全感良好',
      content:
        '你安全感均衡，基本不担心失去在意的人，偶尔留意对方状态，独处时基本不孤独，他人晚归偶尔询问不焦虑，偶尔依赖他人、基本独立，面对分离能慢慢接受。能应对日常情感场景，偶尔会有小不安，建议提升自信心，减少不必要的焦虑。'
    },
    mediumHigh: {
      title: 'Ⅲ型·安全感较弱',
      content:
        '你情感安全感不足，偶尔担心失去在意的人，独处时偶尔感到孤独，他人晚归会焦虑、频繁询问，偶尔依赖他人、缺乏独立，面对分离难以释怀。易陷入不安与焦虑，影响情感状态，建议培养独立意识，建立自信，学会信任他人。'
    },
    high: {
      title: 'Ⅳ型·安全感极差',
      content:
        '你情感安全感严重缺失，频繁担心失去在意的人，独处时极度孤独恐慌，他人晚归极度焦虑，极度依赖他人陪伴、无法独立，面对分离无法接受。严重影响情感生活与心态，建议学会自我接纳，培养独立能力，逐步建立内心的安全感。'
    }
  },
  // 7: 情感包容度测评结论
  7: {
    low: {
      title: 'Ⅰ型·包容度极高',
      content:
        '你情感包容度极高，能接纳他人的缺点与不足，尊重不同观点、理性沟通，能主动原谅他人的不小心伤害，感情中理性包容对方过错，包容不足并主动鼓励他人。心胸豁达，善良大度，善于理解与接纳，人际关系和谐，建议保持优势，包容的同时坚守自身底线。'
    },
    mediumLow: {
      title: 'Ⅱ型·包容度良好',
      content:
        '你包容度均衡，能基本包容他人缺点，接受不同观点不争执，适当原谅他人伤害，感情中基本包容对方过错，基本包容不足并适当鼓励。能做到基本的包容与理解，偶尔会有不满，建议提升包容心，减少挑剔，学会换位思考。'
    },
    mediumHigh: {
      title: 'Ⅲ型·包容度较弱',
      content:
        '你情感包容度不足，偶尔包容他人缺点但心存不满，不愿接受不同观点，勉强原谅他人且心存芥蒂，感情中偶尔包容却轻易指责，不愿鼓励他人不足。易挑剔、爱抱怨，影响人际关系，建议培养包容心，学会接纳差异，减少指责。'
    },
    high: {
      title: 'Ⅳ型·包容度极差',
      content:
        '你情感包容度严重缺失，无法包容他人缺点、极度挑剔，坚决拒绝不同观点、强行反驳，不原谅他人伤害、记恨在心，感情中无法包容过错、轻易放弃，肆意指责他人不足。心胸狭隘，易引发情感矛盾，建议学会接纳差异，培养包容心，学会善意待人。'
    }
  },
  // 8: 情感付出意愿测评结论
  8: {
    low: {
      title: 'Ⅰ型·付出意愿极强',
      content:
        '你情感付出意愿突出，面对在意的人主动付出、不求回报，他人需要帮助时主动伸出援手，感情中主动迁就体谅对方，愿意主动为他人花时间精力，他人难过时主动陪伴安慰。善良真诚，乐于付出，懂得珍惜情感，人际关系融洽，建议保持优势，付出的同时学会善待自己，避免过度付出。'
    },
    mediumLow: {
      title: 'Ⅱ型·付出意愿良好',
      content:
        '你付出意愿均衡，愿意为在意的人适当付出、期待回应，他人需要帮助时欣然帮忙，感情中适当迁就、相互包容，愿意适当为他人花时间，他人难过时欣然陪伴。能做到合理付出，偶尔会有顾虑，建议保持真诚，平衡付出与回报，不盲目付出。'
    },
    mediumHigh: {
      title: 'Ⅲ型·付出意愿较弱',
      content:
        '你情感付出意愿不足，不愿为在意的人付出、斤斤计较，他人需要帮助时勉强应对，感情中偶尔迁就却满心委屈，偶尔付出还抱怨不断，他人难过时勉强陪伴。易显得自私，影响情感关系，建议培养付出意识，学会主动付出，懂得珍惜身边人。'
    },
    high: {
      title: 'Ⅳ型·付出意愿极差',
      content:
        '你情感付出意愿严重缺失，从不为在意的人付出、只懂索取，拒绝帮助他人，感情中从不迁就、固执己见，吝啬时间精力、从不付出，拒绝陪伴难过的人。极度自私自利，难以建立稳定情感关系，建议转变心态，学会主动付出，懂得体谅与珍惜。'
    }
  },
  // 9: 情感抗伤害能力测评结论
  9: {
    low: {
      title: 'Ⅰ型·抗伤害能力极强',
      content:
        '你情感抗伤害能力突出，被拒绝、背叛能快速振作，感情破裂能坦然面对，被恶意诋毁不自我否定，遭遇欺骗依然愿意相信他人。内心强大坚韧，能正视情感伤害，快速走出阴影，建议保持优势，学会保护自己，兼顾坚强与柔软，避免再次受伤。'
    },
    mediumLow: {
      title: 'Ⅱ型·抗伤害能力良好',
      content:
        '你抗伤害能力均衡，被拒绝、背叛能慢慢走出，感情破裂能逐步接受，被诋毁后短暂难过不自我否定，遭遇欺骗后谨慎相信他人。能应对常见情感伤害，偶尔会消沉，建议提升恢复速度，学会自我保护，减少伤害带来的影响。'
    },
    mediumHigh: {
      title: 'Ⅲ型·抗伤害能力较弱',
      content:
        '你情感抗伤害能力不足，被拒绝、背叛后长期消沉，感情破裂难以接受、反复纠缠，被诋毁后偶尔自我否定，遭遇欺骗后心存戒备。易被情感伤害困住，影响生活，建议学会正视伤害，主动疏导情绪，逐步提升抗伤害能力，学会自我保护。'
    },
    high: {
      title: 'Ⅳ型·抗伤害能力极差',
      content:
        '你情感抗伤害能力严重缺失，被拒绝、背叛后陷入痛苦无法自拔，感情破裂彻底崩溃，被诋毁后彻底自我否定，遭遇欺骗后封闭内心、不再相信他人。严重影响心态与生活，建议主动寻求帮助，学会疏导情绪，逐步走出阴影，重新建立对他人的信任。'
    }
  },
  // 10: 情感幸福感感知测评结论
  10: {
    low: {
      title: 'Ⅰ型·幸福感感知极强',
      content:
        '你情感幸福感感知能力突出，能从平凡生活中轻易感受到幸福，清晰感知身边人的关心并心怀感恩，完成小事能获得满足感，主动创造生活小美好，对当下情感生活十分满意。热爱生活，心态积极，善于发现美好，建议保持优势，继续热爱生活，传递幸福与温暖。'
    },
    mediumLow: {
      title: 'Ⅱ型·幸福感感知良好',
      content:
        '你幸福感感知能力均衡，能偶尔从生活中感受幸福，基本能感知身边人的关心，完成小事能获得基本满足，偶尔创造生活小美好，对当下情感生活基本满意。能感受到生活中的美好，偶尔有小遗憾，建议提升感知能力，多关注生活中的小美好，减少抱怨。'
    },
    mediumHigh: {
      title: 'Ⅲ型·幸福感感知较弱',
      content:
        '你情感幸福感感知能力不足，偶尔感受幸福却转瞬即逝，对身边人的关心不以为然，完成小事难以获得满足，不主动创造美好，对情感生活大多失落。易忽视生活中的美好，满心平淡，建议培养感知能力，学会发现美好，主动创造属于自己的幸福。'
    },
    high: {
      title: 'Ⅳ型·幸福感感知极差',
      content:
        '你情感幸福感感知能力严重缺失，从未从生活中感受幸福，觉得身边人冷漠，完成小事无法获得满足，从不创造生活美好，对情感生活极度不满、满心抱怨。心态消极，难以感受到生活的温暖，建议调整心态，学会发现美好，主动寻求幸福，必要时寻求帮助。'
    }
  },
  // 11: 测你的爱情情感观结论
  11: {
    low: {
      title: '内敛温和型',
      content:
        '你对爱情的态度内敛而真诚，不追求轰轰烈烈，更看重平淡中的陪伴与包容。你性格温和，待人宽厚，在爱情中懂得体谅对方、包容对方的缺点，不会轻易发脾气，也不会过度纠缠。你不擅长表达爱意，却会用行动默默付出，对待感情专一且长久。但有时你过于迁就对方，容易忽略自己的情感需求，甚至在感情中委屈自己。建议学会勇敢表达自己的心意，坚守自己的底线，不必过度妥协，既要懂得包容，也要学会爱自己，这样才能收获更平等、更长久的爱情。'
    },
    mediumLow: {
      title: '平衡适度型',
      content:
        '你拥有成熟健康的爱情观，既看重彼此的陪伴与真心，也注重个人的独立与边界。你理性与感性并存，对待爱情认真专一，懂得双向付出，也会保留自己的个人空间，不会过度依赖对方。遇到矛盾时，你能冷静沟通、理性解决，既不会盲目包容，也不会过度计较，懂得换位思考、体谅对方。你能坦然面对爱情中的得失，分开时也能体面告别。保持这份平衡与真诚，不卑不亢、不慌不忙，你既能在爱情中收获温暖与幸福，也能保持自我，活成自己喜欢的样子。'
    },
    mediumHigh: {
      title: '鲜明热烈型',
      content:
        '你对爱情充满热情，爱得鲜明而浓烈，喜欢轰轰烈烈的相处模式，善于表达自己的爱意，也渴望得到对方同等热烈的回应。你对待爱情执着而坚定，愿意为对方付出很多，甚至牺牲自己的部分目标。但你情绪波动较大，容易因为一点小事就产生情绪，对待矛盾不够理性，偶尔会过于冲动、纠缠不休，分开时也难以体面放下。建议学会控制自己的情绪，理性看待爱情中的得失，给彼此留一点空间，减少过度执念，学会平淡相处，才能让爱情更长久、更舒适。'
    },
    high: {
      title: '鲜明热烈型',
      content:
        '你对爱情充满热情，爱得鲜明而浓烈，喜欢轰轰烈烈的相处模式，善于表达自己的爱意，也渴望得到对方同等热烈的回应。你对待爱情执着而坚定，愿意为对方付出很多，甚至牺牲自己的部分目标。但你情绪波动较大，容易因为一点小事就产生情绪，对待矛盾不够理性，偶尔会过于冲动、纠缠不休，分开时也难以体面放下。建议学会控制自己的情绪，理性看待爱情中的得失，给彼此留一点空间，减少过度执念，学会平淡相处，才能让爱情更长久、更舒适。'
    }
  },
  // 12: 测你的友情情感特质结论
  12: {
    low: {
      title: '内敛温和型',
      content:
        '你对待友情真诚而内敛，不擅长主动维系，却极其珍惜身边的真心朋友。你性格温和、不善言辞，朋友倾诉烦恼时，你更擅长默默陪伴，而不是主动给出建议，却能给人足够的安全感。你交朋友不追求数量，只看重质量，一旦认定一个朋友，就会真心相待、不离不弃。但你过于被动，很少主动联系朋友，容易让友情慢慢变淡，也不擅长表达自己的需求，遇到委屈时习惯自己承受。建议学会主动一点，多联系身边的朋友，勇敢表达自己的心意，让朋友感受到你的重视，才能让友情更长久。'
    },
    mediumLow: {
      title: '平衡适度型',
      content:
        '你拥有健康的友情观，对待友情认真且适度，既懂得珍惜，也懂得保持边界。你善于倾听，也乐于分享，朋友有困难时会主动伸出援手，自己有烦恼时也会适当倾诉，懂得双向奔赴。你会主动维系友情，定期联系朋友，却不会过度打扰，懂得给彼此留足够的个人空间。遇到矛盾时，你能冷静沟通、理性化解，既不会盲目原谅，也不会斤斤计较，懂得珍惜每一份真心。保持这份真诚与分寸，你的友情会越来越稳固，也能在友情中收获温暖与力量，成为彼此成长路上的依靠。'
    },
    mediumHigh: {
      title: '鲜明热烈型',
      content:
        '你对待友情热情而执着，重情重义，把朋友看得很重，愿意为朋友付出时间和精力，甚至牺牲自己的利益。你善于表达自己的心意，喜欢和朋友分享喜怒哀乐，朋友有困难时，你会第一时间挺身而出，是朋友眼中可靠的“靠山”。但你有时过于热情，容易过度介入朋友的生活，给对方造成压力，也容易因为朋友的一点疏忽而感到受伤，对待矛盾不够冷静，偶尔会冲动行事。建议学会保持边界，尊重朋友的个人空间，理性看待友情中的小矛盾，减少过度执念，才能让友情更舒适、更长久。'
    },
    high: {
      title: '鲜明热烈型',
      content:
        '你对待友情热情而执着，重情重义，把朋友看得很重，愿意为朋友付出时间和精力，甚至牺牲自己的利益。你善于表达自己的心意，喜欢和朋友分享喜怒哀乐，朋友有困难时，你会第一时间挺身而出，是朋友眼中可靠的“靠山”。但你有时过于热情，容易过度介入朋友的生活，给对方造成压力，也容易因为朋友的一点疏忽而感到受伤，对待矛盾不够冷静，偶尔会冲动行事。建议学会保持边界，尊重朋友的个人空间，理性看待友情中的小矛盾，减少过度执念，才能让友情更舒适、更长久。'
    }
  },
  // 13: 测你的亲情情感表达结论
  13: {
    low: {
      title: '内敛温和型',
      content:
        '你内心十分重视亲情，却不擅长表达自己的情感，属于“行动派”。你很少主动和家人沟通，也不会轻易说“我爱你”，但会用实际行动默默守护家人，在家人需要时挺身而出，尽力付出。你习惯报喜不报忧，不想让家人担心，遇到家人不理解时，也会选择默默忍受，不喜欢争辩。但这种内敛的方式，容易让家人误解你的心意，也容易让自己积累委屈。建议学会大胆表达自己的情感，多和家人沟通日常，主动说出自己的想法和爱意，让家人感受到你的重视，才能让亲情更温暖、更紧密。'
    },
    mediumLow: {
      title: '平衡适度型',
      content:
        '你对待亲情真诚而适度，既懂得珍惜，也善于表达。你会定期和家人沟通，分享自己的日常和心事，也会耐心倾听家人的想法，懂得换位思考、体谅家人的不易。你不会刻意回避情感表达，偶尔会向家人说“我爱你”，用温暖的语言传递心意，也会用行动陪伴家人、为家人付出。遇到家人不理解时，你能耐心解释、理性沟通，既不会盲目妥协，也不会冲动争辩，懂得化解矛盾、增进感情。保持这份真诚与温暖，你会拥有和谐融洽的家庭关系，也能在亲情中获得满满的安全感和归属感。'
    },
    mediumHigh: {
      title: '鲜明热烈型',
      content:
        '你对亲情充满热情，极其看重家人，善于表达自己的情感，会经常向家人说“我爱你”，乐于和家人分享喜怒哀乐，让家人感受到你的在意。你愿意为家人付出一切，无论是时间、精力还是物质，都毫无保留，在家人需要时，你会第一时间出现，是家人眼中的“主心骨”。但你有时过于情绪化，遇到家人不理解时，容易情绪激动、据理力争，甚至发生争吵，偶尔也会因为过度付出而忽略自己的需求。建议学会控制情绪，理性沟通，尊重家人的想法，学会平衡付出与自我，才能让亲情更和谐、更长久。'
    },
    high: {
      title: '鲜明热烈型',
      content:
        '你对亲情充满热情，极其看重家人，善于表达自己的情感，会经常向家人说“我爱你”，乐于和家人分享喜怒哀乐，让家人感受到你的在意。你愿意为家人付出一切，无论是时间、精力还是物质，都毫无保留，在家人需要时，你会第一时间出现，是家人眼中的“主心骨”。但你有时过于情绪化，遇到家人不理解时，容易情绪激动、据理力争，甚至发生争吵，偶尔也会因为过度付出而忽略自己的需求。建议学会控制情绪，理性沟通，尊重家人的想法，学会平衡付出与自我，才能让亲情更和谐、更长久。'
    }
  },
  // 14: 测你的情感依赖程度结论
  14: {
    low: {
      title: '内敛温和型',
      content:
        '你的情感依赖程度很低，性格独立而坚韧，无论在情感上还是生活中，都能保持自主，不依赖他人。你善于自主做决定，不会过度在意他人的看法，能坚定地坚持自己的想法，独处时也能享受其中的自在，不会感到孤单或不安。遇到情感挫折时，你能自主调节情绪，不依赖他人的安慰和帮助，能凭借自己的力量走出困境。但有时你过于独立，容易封闭自己，不擅长向他人求助，偶尔会因为过度逞强而感到疲惫。建议学会适当依赖他人，偶尔向身边人求助，学会示弱，既能减轻自己的压力，也能让情感关系更融洽。'
    },
    mediumLow: {
      title: '平衡适度型',
      content:
        '你的情感依赖程度适中，既懂得独立，也懂得适当依赖，能在两者之间找到平衡。你能自主做重要决定，也会参考他人的合理意见，不会盲目依赖或过度独立。独处时，你能适应孤单，也会享受陪伴的温暖，遇到情感挫折时，既能自主调节，也会在需要时向他人求助，懂得借助外界的力量缓解痛苦。你不会过度在意他人的看法，能坚持自我，也能尊重他人的意见。保持这份平衡，既不盲目逞强，也不过度依赖，既能拥有独立的人格，也能在情感中收获温暖与支持，生活状态更舒适。'
    },
    mediumHigh: {
      title: '鲜明热烈型',
      content:
        '你的情感依赖程度很高，性格敏感而脆弱，在情感上极度依赖他人，缺乏自主意识。你很难自主做决定，容易被他人的看法左右，独处时会感到极度孤单和不安，无法适应没有他人陪伴的生活。遇到情感挫折时，你无法自主缓解情绪，完全依赖他人的安慰和帮助，一旦失去外界的支持，就会陷入迷茫和痛苦中。过度的情感依赖不仅会给自己带来困扰，也会给身边人造成压力。建议学会培养自主意识，慢慢锻炼独立能力，学会自我调节情绪，减少对他人的过度依赖，才能拥有更健康、更独立的情感状态。'
    },
    high: {
      title: '鲜明热烈型',
      content:
        '你的情感依赖程度很高，性格敏感而脆弱，在情感上极度依赖他人，缺乏自主意识。你很难自主做决定，容易被他人的看法左右，独处时会感到极度孤单和不安，无法适应没有他人陪伴的生活。遇到情感挫折时，你无法自主缓解情绪，完全依赖他人的安慰和帮助，一旦失去外界的支持，就会陷入迷茫和痛苦中。过度的情感依赖不仅会给自己带来困扰，也会给身边人造成压力。建议学会培养自主意识，慢慢锻炼独立能力，学会自我调节情绪，减少对他人的过度依赖，才能拥有更健康、更独立的情感状态。'
    }
  }
}

// 3. 核心功能逻辑（完整可运行）
function emotionAssessmentHandler(testTypeId, answers) {
  // 校验测评类型ID
  if (!testTypeId || !funTestBank[testTypeId]) {
    return {
      error: `无效的测评类型ID（仅支持1-14），当前传入${testTypeId}`,
      code: -1
    }
  }

  // 获取当前测评的题目配置
  const currentTest = funTestBank[testTypeId]

  // 3.1 计算得分
  const calculateScore = userAnswers => {
    let totalScore = 0
    const questionCount = currentTest.questions.length
    // 校验答题数量（按当前测评题目数）
    if (userAnswers.length !== questionCount) {
      return {
        error: `答题数量异常（需${questionCount}题），当前提交${userAnswers.length}题`,
        code: -2
      }
    }
    // 累加得分
    currentTest.questions.forEach((q, idx) => {
      const answerIdx = userAnswers[idx]
      if (answerIdx === undefined || answerIdx < 0 || answerIdx > 3) {
        console.warn(`第${q.id}题答题无效（需传入0-3的索引），该题计0分`)
        return
      }
      totalScore += q.options[answerIdx].score
    })
    // 计算占比（按题目数动态换算成0-1）
    const minScore = questionCount
    const maxScore = questionCount * 4
    const percentage =
      maxScore === minScore
        ? 0
        : (totalScore - minScore) / (maxScore - minScore)
    return { totalScore, percentage }
  }

  // 3.2 生成结论
  const getResult = percentage => {
    const resultConfig = workplaceResults[testTypeId]
    if (percentage <= 0.25) return resultConfig.low
    if (percentage <= 0.5) return resultConfig.mediumLow
    if (percentage <= 0.75) return resultConfig.mediumHigh
    return resultConfig.high
  }

  // 4. 主逻辑
  // 无答题参数 → 返回题目列表；有参数 → 计算得分+生成结论
  if (!answers) {
    // 返回格式化的题目列表
    return {
      testId: testTypeId,
      testTitle: currentTest.title,
      questions: currentTest.questions.map(q => ({
        id: q.id,
        title: q.title,
        options: q.options.map(opt => opt.label)
      }))
    }
  } else {
    // 计算得分
    const scoreResult = calculateScore(answers)
    if (scoreResult.error) return scoreResult
    // 生成结论
    const result = getResult(scoreResult.percentage)
    // 返回完整结果
    return {
      testId: testTypeId,
      testTitle: currentTest.title,
      questions: currentTest.questions.map(q => ({
        id: q.id,
        title: q.title,
        options: q.options.map(opt => opt.label)
      })),
      score: {
        totalScore: scoreResult.totalScore,
        percentage: scoreResult.percentage.toFixed(2)
      },
      result: result,
      note: '本测评仅作趣味参考，旨在了解自身情感特质，无专业心理指导意义。'
    }
  }
}

export { emotionAssessmentHandler }

// 调用示例
// 1. 获取第1套测评题目
// console.log(emotionAssessmentHandler(1));

// 2. 提交答题结果（示例：20题均选第1个选项）
// const testAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// console.log(emotionAssessmentHandler(1, testAnswers));
