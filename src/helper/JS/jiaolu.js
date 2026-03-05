// 焦虑状态评估测试题完整数据
const anxietyAssessment = {
  // 测评说明
  assessmentDesc: `本测试共25道题目，聚焦焦虑相关核心症状，主要测评情绪焦虑程度、躯体不适表现、注意力状态、思维模式、行为反应及人际适应等项目，用于初步评估个人近期焦虑状态及风险程度。答案无对错之分，请根据近两周内的真实感受，如实选择最符合自身情况的选项，测评结果仅作参考，不替代专业医疗诊断，若长期受焦虑困扰，建议及时寻求专业帮助。`,
  // 测试题目（id=题号，title=问题，options=选项含标签/分值/文本）
  questions: [
    {
      id: 1,
      title: '近两周，你是否经常感到紧张不安？',
      options: [
        { label: 'A', value: 1, text: '完全没有' },
        { label: 'B', value: 2, text: '偶尔出现' },
        { label: 'C', value: 3, text: '经常出现' },
        { label: 'D', value: 4, text: '几乎每天都有' }
      ]
    },
    {
      id: 2,
      title: '你是否会莫名担心不好的事情发生？',
      options: [
        { label: 'A', value: 1, text: '从不担心，心态平和' },
        { label: 'B', value: 2, text: '偶尔担心，很快缓解' },
        { label: 'C', value: 3, text: '经常担心，难以放下' },
        { label: 'D', value: 4, text: '时刻担心，无法控制' }
      ]
    },
    {
      id: 3,
      title: '近两周你的睡眠情况如何？',
      options: [
        { label: 'A', value: 1, text: '睡眠安稳，入睡顺利' },
        { label: 'B', value: 2, text: '偶尔失眠，不影响状态' },
        { label: 'C', value: 3, text: '经常失眠，多梦易醒' },
        { label: 'D', value: 4, text: '严重失眠，彻夜难眠' }
      ]
    },
    {
      id: 4,
      title: '你是否经常感到心跳加速、心慌？',
      options: [
        { label: 'A', value: 1, text: '无任何心慌感' },
        { label: 'B', value: 2, text: '偶尔心慌，很快平复' },
        { label: 'C', value: 3, text: '经常心慌，坐立难安' },
        { label: 'D', value: 4, text: '持续心慌，影响生活' }
      ]
    },
    {
      id: 5,
      title: '你能否专注完成一件事？',
      options: [
        { label: 'A', value: 1, text: '专注高效，不易分心' },
        { label: 'B', value: 2, text: '偶尔走神，不影响进度' },
        { label: 'C', value: 3, text: '难以集中，效率低下' },
        { label: 'D', value: 4, text: '完全无法专注，思绪混乱' }
      ]
    },
    {
      id: 6,
      title: '你是否经常感到烦躁易怒？',
      options: [
        { label: 'A', value: 1, text: '脾气温和，不易发怒' },
        { label: 'B', value: 2, text: '偶尔烦躁，可自我调节' },
        { label: 'C', value: 3, text: '经常烦躁，易发脾气' },
        { label: 'D', value: 4, text: '极度易怒，情绪失控' }
      ]
    },
    {
      id: 7,
      title: '你是否会过度思虑、胡思乱想？',
      options: [
        { label: 'A', value: 1, text: '思维清晰，不瞎想' },
        { label: 'B', value: 2, text: '偶尔思虑，很快拉回' },
        { label: 'C', value: 3, text: '经常思虑，难以控制' },
        { label: 'D', value: 4, text: '被思虑困扰，无法自拔' }
      ]
    },
    {
      id: 8,
      title: '面对未知的事情，你会？',
      options: [
        { label: 'A', value: 1, text: '从容应对，不焦虑' },
        { label: 'B', value: 2, text: '略有紧张，可适应' },
        { label: 'C', value: 3, text: '非常紧张，过度担忧' },
        { label: 'D', value: 4, text: '极度恐慌，回避面对' }
      ]
    },
    {
      id: 9,
      title: '你是否经常感到胸闷、气短？',
      options: [
        { label: 'A', value: 1, text: '无任何不适' },
        { label: 'B', value: 2, text: '偶尔不适，无大碍' },
        { label: 'C', value: 3, text: '经常不适，影响状态' },
        { label: 'D', value: 4, text: '持续不适，难以忍受' }
      ]
    },
    {
      id: 10,
      title: '你对自己的状态是否满意？',
      options: [
        { label: 'A', value: 1, text: '满意，心态积极' },
        { label: 'B', value: 2, text: '偶有不满，可调整' },
        { label: 'C', value: 3, text: '经常不满，焦虑不安' },
        { label: 'D', value: 4, text: '极度不满，陷入内耗' }
      ]
    },
    {
      id: 11,
      title: '你是否会回避社交场合？',
      options: [
        { label: 'A', value: 1, text: '乐于社交，不回避' },
        { label: 'B', value: 2, text: '偶尔回避，无影响' },
        { label: 'C', value: 3, text: '经常回避，害怕社交' },
        { label: 'D', value: 4, text: '完全回避，封闭自我' }
      ]
    },
    {
      id: 12,
      title: '你是否经常感到疲惫无力？',
      options: [
        { label: 'A', value: 1, text: '精力充沛，无疲惫感' },
        { label: 'B', value: 2, text: '偶尔疲惫，休息可恢复' },
        { label: 'C', value: 3, text: '经常疲惫，休息无改善' },
        { label: 'D', value: 4, text: '持续疲惫，无力做事' }
      ]
    },
    {
      id: 13,
      title: '你是否会过度关注自身健康？',
      options: [
        { label: 'A', value: 1, text: '理性关注，不焦虑' },
        { label: 'B', value: 2, text: '偶尔关注，无过度担忧' },
        { label: 'C', value: 3, text: '经常关注，过度紧张' },
        { label: 'D', value: 4, text: '极度关注，总担心生病' }
      ]
    },
    {
      id: 14,
      title: '你做决定时是否会犹豫不决？',
      options: [
        { label: 'A', value: 1, text: '果断决策，不犹豫' },
        { label: 'B', value: 2, text: '偶尔犹豫，很快决定' },
        { label: 'C', value: 3, text: '经常犹豫，难以抉择' },
        { label: 'D', value: 4, text: '极度犹豫，无法做决定' }
      ]
    },
    {
      id: 15,
      title: '你是否经常感到头晕、头痛？',
      options: [
        { label: 'A', value: 1, text: '无头晕头痛症状' },
        { label: 'B', value: 2, text: '偶尔出现，无大碍' },
        { label: 'C', value: 3, text: '经常出现，影响状态' },
        { label: 'D', value: 4, text: '持续出现，难以忍受' }
      ]
    },
    {
      id: 16,
      title: '你是否会莫名感到恐惧？',
      options: [
        { label: 'A', value: 1, text: '从不恐惧，心态平稳' },
        { label: 'B', value: 2, text: '偶尔恐惧，很快缓解' },
        { label: 'C', value: 3, text: '经常恐惧，内心不安' },
        { label: 'D', value: 4, text: '极度恐惧，无法平静' }
      ]
    },
    {
      id: 17,
      title: '你能否正常应对日常压力？',
      options: [
        { label: 'A', value: 1, text: '轻松应对，无压力感' },
        { label: 'B', value: 2, text: '略有压力，可缓解' },
        { label: 'C', value: 3, text: '压力较大，难以应对' },
        { label: 'D', value: 4, text: '被压力压垮，无法应对' }
      ]
    },
    {
      id: 18,
      title: '你是否经常感到坐立不安？',
      options: [
        { label: 'A', value: 1, text: '坐姿安稳，无不适' },
        { label: 'B', value: 2, text: '偶尔不安，可缓解' },
        { label: 'C', value: 3, text: '经常不安，来回走动' },
        { label: 'D', value: 4, text: '极度不安，无法静坐' }
      ]
    },
    {
      id: 19,
      title: '你对未来是否过度担忧？',
      options: [
        { label: 'A', value: 1, text: '不担忧，对未来有信心' },
        { label: 'B', value: 2, text: '偶尔担忧，很快释怀' },
        { label: 'C', value: 3, text: '经常担忧，影响心态' },
        { label: 'D', value: 4, text: '极度担忧，陷入绝望' }
      ]
    },
    {
      id: 20,
      title: '你是否会因小事过度纠结？',
      options: [
        { label: 'A', value: 1, text: '不纠结，理性看待小事' },
        { label: 'B', value: 2, text: '偶尔纠结，很快放下' },
        { label: 'C', value: 3, text: '经常纠结，难以释怀' },
        { label: 'D', value: 4, text: '极度纠结，自我内耗严重' }
      ]
    },
    {
      id: 21,
      title: '你是否经常感到口干、多汗？',
      options: [
        { label: 'A', value: 1, text: '无此类症状' },
        { label: 'B', value: 2, text: '偶尔出现，无影响' },
        { label: 'C', value: 3, text: '经常出现，略有不适' },
        { label: 'D', value: 4, text: '持续出现，严重不适' }
      ]
    },
    {
      id: 22,
      title: '你能否正常与人沟通交流？',
      options: [
        { label: 'A', value: 1, text: '主动沟通，表达流畅' },
        { label: 'B', value: 2, text: '被动沟通，表达顺畅' },
        { label: 'C', value: 3, text: '沟通紧张，表达不畅' },
        { label: 'D', value: 4, text: '无法沟通，害怕开口' }
      ]
    },
    {
      id: 23,
      title: '你是否经常感到焦虑，无法缓解？',
      options: [
        { label: 'A', value: 1, text: '从不焦虑，心态平和' },
        { label: 'B', value: 2, text: '偶尔焦虑，可自我调节' },
        { label: 'C', value: 3, text: '经常焦虑，难以调节' },
        { label: 'D', value: 4, text: '持续焦虑，完全无法调节' }
      ]
    },
    {
      id: 24,
      title: '你是否会过度追求完美？',
      options: [
        { label: 'A', value: 1, text: '不追求完美，接纳不完美' },
        { label: 'B', value: 2, text: '偶尔追求，不影响生活' },
        { label: 'C', value: 3, text: '经常追求，过度焦虑' },
        { label: 'D', value: 4, text: '极度追求，无法容忍瑕疵' }
      ]
    },
    {
      id: 25,
      title: '你是否会因焦虑影响日常作息？',
      options: [
        { label: 'A', value: 1, text: '不影响，作息规律' },
        { label: 'B', value: 2, text: '偶尔影响，很快调整' },
        { label: 'C', value: 3, text: '经常影响，作息紊乱' },
        { label: 'D', value: 4, text: '严重影响，无法正常作息' }
      ]
    }
  ],
  // 计分规则
  scoringRule:
    'A选项1分、B选项2分、C选项3分、D选项4分，总分25-100分，根据总分对应焦虑状态等级',
  // 焦虑风险等级（分数区间+等级+结论建议）
  riskLevels: [
    {
      scoreRange: [25, 35],
      level: '低风险',
      conclusion:
        '你的焦虑状态处于健康水平，近两周内几乎没有出现焦虑相关症状，情绪平稳、心态积极，能从容应对日常压力和未知事物，睡眠、饮食及社交状态均正常，注意力集中，无明显躯体不适。偶尔出现的轻微紧张情绪，属于正常的情绪反应，无需过度关注。建议继续保持当前的生活节奏，规律作息、适度运动，维系良好的人际关系，遇到小困扰时及时自我调节，始终保持理性平和的心态，就能持续远离焦虑困扰，维持良好的心理健康状态。本结论仅为初步筛查，后续若出现情绪波动，可及时关注并调整。'
    },
    {
      scoreRange: [36, 55],
      level: '中低风险',
      conclusion:
        '近期你存在轻度焦虑情绪，偶尔出现紧张不安、莫名担忧、睡眠轻微异常等表现，可能伴随轻微的心慌、头晕等躯体不适，注意力偶尔不集中，偶尔会因小事纠结，但这些症状未明显影响日常工作、学习和社交，仍能正常完成各项日常事务。这种状态多与近期压力、作息不规律、思虑过多等因素相关，属于可调节范围。建议合理安排作息，避免过度劳累，减少不必要的思虑，遇到焦虑情绪时，可通过深呼吸、冥想、运动等方式缓解，主动向家人朋友倾诉内心困扰，若负面状态持续超过1个月，可寻求专业心理疏导。'
    },
    {
      scoreRange: [56, 75],
      level: '中高风险',
      conclusion:
        '你存在较明显的焦虑症状，近两周内经常出现紧张不安、过度担忧、胡思乱想等表现，伴随明显的躯体不适，如心慌、胸闷、头晕、失眠多梦等，注意力难以集中，情绪烦躁易怒，社交意愿下降，部分症状已影响到日常工作、学习和人际关系，甚至出现轻微的回避行为。此时需高度重视自身状态，避免忽视症状或自我硬扛。建议及时寻求专业心理医生的帮助，进行系统的评估与干预，同时调整生活节奏，减少压力源，培养积极的思维模式，主动参与能让自己放松的活动，逐步缓解焦虑情绪，避免症状进一步加重。'
    },
    {
      scoreRange: [76, 100],
      level: '高风险',
      conclusion:
        '你的焦虑症状明显且持续，近两周内几乎每天都处于紧张、焦虑、恐惧的状态，过度担忧、胡思乱想的情况严重，伴随严重的躯体不适，如持续心慌、胸闷、失眠、头晕等，无法集中注意力，情绪极易失控，社交完全封闭，甚至出现无法正常作息、无法完成日常事务的情况，已严重影响正常生活。这种情况需立即采取行动，优先寻求专业医疗干预，及时到正规医院心理科就诊，接受专业治疗。同时，身边人应给予更多的陪伴、理解与支持，帮助其缓解焦虑，引导其积极配合治疗，逐步调整心态，才能有效改善症状，恢复心理健康。'
    }
  ],
  // 重要备注
  remark:
    '本测评仅为焦虑状态初步筛查，不能作为临床焦虑症诊断的依据，无论得分高低，若长期受焦虑情绪困扰，都应重视并主动寻求专业帮助。',
  // 总分匹配风险等级的方法，传入总分直接返回对应结果
  getRiskLevel: function(totalScore) {
    // 校验分数有效性
    if (typeof totalScore !== 'number' || totalScore < 25 || totalScore > 100) {
      return { error: '分数异常，有效分数范围为25-100分，请检查总分' }
    }
    // 匹配对应风险等级
    return this.riskLevels.find(item => {
      const [min, max] = item.scoreRange
      return totalScore >= min && totalScore <= max
    })
  }
}

// 测试示例：传入总分50，调用方法获取结果
// console.log(anxietyAssessment.getRiskLevel(50));

export { anxietyAssessment }
