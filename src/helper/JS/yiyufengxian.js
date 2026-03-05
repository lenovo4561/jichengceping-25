// 抑郁风险评估测试题相关数据
const depressionAssessment = {
  // 测评说明
  assessmentDesc: `本测试共25道题目，聚焦抑郁相关核心症状，主要测评情绪状态、睡眠质量、食欲变化、兴趣动力、自我认知、社交意愿及躯体感受等项目，用于初步评估个人近期抑郁风险程度。答案无对错之分，请根据近两周内的真实感受，如实选择最符合自身情况的选项，测评结果仅作参考，不替代专业医疗诊断。`,
  // 测试题目（含题号、问题、选项）
  questions: [
    {
      id: 1,
      title: '近两周，你是否经常感到情绪低落？',
      options: [
        { label: 'A', value: 1, text: '完全没有' },
        { label: 'B', value: 2, text: '偶尔出现' },
        { label: 'C', value: 3, text: '经常出现' },
        { label: 'D', value: 4, text: '几乎每天都有' }
      ]
    },
    {
      id: 2,
      title: '你对以往喜欢的事物是否还有兴趣？',
      options: [
        { label: 'A', value: 1, text: '兴趣依旧浓厚' },
        { label: 'B', value: 2, text: '兴趣略有下降' },
        { label: 'C', value: 3, text: '兴趣明显减退' },
        { label: 'D', value: 4, text: '完全没有兴趣' }
      ]
    },
    {
      id: 3,
      title: '近两周你的睡眠情况如何？',
      options: [
        { label: 'A', value: 1, text: '睡眠安稳，作息规律' },
        { label: 'B', value: 2, text: '偶尔失眠或早醒' },
        { label: 'C', value: 3, text: '经常失眠或早醒' },
        { label: 'D', value: 4, text: '严重失眠，无法入睡' }
      ]
    },
    {
      id: 4,
      title: '你近期的食欲变化是怎样的？',
      options: [
        { label: 'A', value: 1, text: '食欲正常，饮食规律' },
        { label: 'B', value: 2, text: '食欲略有增减' },
        { label: 'C', value: 3, text: '食欲明显下降或亢进' },
        { label: 'D', value: 4, text: '几乎无食欲或暴饮暴食' }
      ]
    },
    {
      id: 5,
      title: '你是否经常感到疲惫无力？',
      options: [
        { label: 'A', value: 1, text: '精力充沛，无疲惫感' },
        { label: 'B', value: 2, text: '偶尔疲惫，休息可恢复' },
        { label: 'C', value: 3, text: '经常疲惫，休息无改善' },
        { label: 'D', value: 4, text: '持续疲惫，无法活动' }
      ]
    },
    {
      id: 6,
      title: '你对自己的评价如何？',
      options: [
        { label: 'A', value: 1, text: '接纳自己，充满自信' },
        { label: 'B', value: 2, text: '偶有自我怀疑' },
        { label: 'C', value: 3, text: '经常自我否定' },
        { label: 'D', value: 4, text: '极度自卑，厌恶自己' }
      ]
    },
    {
      id: 7,
      title: '你是否经常感到自责或内疚？',
      options: [
        { label: 'A', value: 1, text: '从不自责，理性看待过错' },
        { label: 'B', value: 2, text: '偶尔自责，很快释怀' },
        { label: 'C', value: 3, text: '经常自责，难以释怀' },
        { label: 'D', value: 4, text: '过度自责，自我折磨' }
      ]
    },
    {
      id: 8,
      title: '你做事的注意力能否集中？',
      options: [
        { label: 'A', value: 1, text: '专注高效，不易分心' },
        { label: 'B', value: 2, text: '偶尔走神，不影响进度' },
        { label: 'C', value: 3, text: '难以集中，效率低下' },
        { label: 'D', value: 4, text: '完全无法集中，无法做事' }
      ]
    },
    {
      id: 9,
      title: '你是否有过自杀的念头？',
      options: [
        { label: 'A', value: 1, text: '完全没有' },
        { label: 'B', value: 2, text: '偶尔闪过，很快打消' },
        { label: 'C', value: 3, text: '经常出现，有轻微想法' },
        { label: 'D', value: 4, text: '频繁出现，有实施冲动' }
      ]
    },
    {
      id: 10,
      title: '你是否愿意与人交流？',
      options: [
        { label: 'A', value: 1, text: '主动社交，乐于沟通' },
        { label: 'B', value: 2, text: '被动交流，相处轻松' },
        { label: 'C', value: 3, text: '害怕社交，不愿开口' },
        { label: 'D', value: 4, text: '拒绝交流，封闭自我' }
      ]
    },
    {
      id: 11,
      title: '近两周，你是否经常烦躁易怒？',
      options: [
        { label: 'A', value: 1, text: '脾气温和，不易发怒' },
        { label: 'B', value: 2, text: '偶尔烦躁，可自我调节' },
        { label: 'C', value: 3, text: '经常烦躁，易发脾气' },
        { label: 'D', value: 4, text: '极度易怒，情绪失控' }
      ]
    },
    {
      id: 12,
      title: '你对未来是否有期待？',
      options: [
        { label: 'A', value: 1, text: '目标清晰，对未来充满期待' },
        { label: 'B', value: 2, text: '有模糊方向，慢慢探索' },
        { label: 'C', value: 3, text: '迷茫无措，对未来无期待' },
        { label: 'D', value: 4, text: '极度绝望，放弃未来' }
      ]
    },
    {
      id: 13,
      title: '你是否经常感到孤独？',
      options: [
        { label: 'A', value: 1, text: '从不孤独，享受陪伴与独处' },
        { label: 'B', value: 2, text: '偶尔孤独，很快缓解' },
        { label: 'C', value: 3, text: '经常孤独，内心空虚' },
        { label: 'D', value: 4, text: '极度孤独，无法缓解' }
      ]
    },
    {
      id: 14,
      title: '你的体重近期是否有明显变化？',
      options: [
        { label: 'A', value: 1, text: '体重稳定，无明显变化' },
        { label: 'B', value: 2, text: '轻微变化，不影响健康' },
        { label: 'C', value: 3, text: '明显增减（超过5斤）' },
        { label: 'D', value: 4, text: '急剧增减，影响正常生活' }
      ]
    },
    {
      id: 15,
      title: '你是否经常感到胸闷、头疼等不适？',
      options: [
        { label: 'A', value: 1, text: '无任何躯体不适' },
        { label: 'B', value: 2, text: '偶尔不适，无大碍' },
        { label: 'C', value: 3, text: '经常不适，查无实病' },
        { label: 'D', value: 4, text: '持续不适，影响正常生活' }
      ]
    },
    {
      id: 16,
      title: '你能否正常完成日常工作/学习？',
      options: [
        { label: 'A', value: 1, text: '高效完成，毫无压力' },
        { label: 'B', value: 2, text: '基本完成，略有压力' },
        { label: 'C', value: 3, text: '勉强完成，压力极大' },
        { label: 'D', value: 4, text: '无法完成，彻底停滞' }
      ]
    },
    {
      id: 17,
      title: '你是否经常陷入胡思乱想？',
      options: [
        { label: 'A', value: 1, text: '思维清晰，不胡思乱想' },
        { label: 'B', value: 2, text: '偶尔走神，很快拉回' },
        { label: 'C', value: 3, text: '经常胡思乱想，难以控制' },
        { label: 'D', value: 4, text: '被负面想法困扰，无法自拔' }
      ]
    },
    {
      id: 18,
      title: '你对生活是否有动力？',
      options: [
        { label: 'A', value: 1, text: '动力十足，主动规划生活' },
        { label: 'B', value: 2, text: '有基本动力，完成日常事务' },
        { label: 'C', value: 3, text: '动力不足，被动应付' },
        { label: 'D', value: 4, text: '毫无动力，什么都不想做' }
      ]
    },
    {
      id: 19,
      title: '你是否害怕面对陌生人或陌生场景？',
      options: [
        { label: 'A', value: 1, text: '不害怕，适应能力强' },
        { label: 'B', value: 2, text: '偶尔紧张，可快速适应' },
        { label: 'C', value: 3, text: '经常害怕，回避陌生环境' },
        { label: 'D', value: 4, text: '极度恐惧，无法面对' }
      ]
    },
    {
      id: 20,
      title: '你是否经常感到情绪麻木？',
      options: [
        { label: 'A', value: 1, text: '情绪丰富，能正常感知喜怒哀乐' },
        { label: 'B', value: 2, text: '偶尔麻木，很快恢复' },
        { label: 'C', value: 3, text: '经常麻木，感受不到情绪' },
        { label: 'D', value: 4, text: '持续麻木，对一切毫无感觉' }
      ]
    },
    {
      id: 21,
      title: '你是否会刻意回避以往的社交场合？',
      options: [
        { label: 'A', value: 1, text: '不回避，乐于参与' },
        { label: 'B', value: 2, text: '偶尔回避，无影响' },
        { label: 'C', value: 3, text: '经常回避，减少社交' },
        { label: 'D', value: 4, text: '完全回避，拒绝所有社交' }
      ]
    },
    {
      id: 22,
      title: '你对自己的未来是否有规划？',
      options: [
        { label: 'A', value: 1, text: '规划清晰，稳步推进' },
        { label: 'B', value: 2, text: '有简单规划，偶尔调整' },
        { label: 'C', value: 3, text: '无规划，走一步看一步' },
        { label: 'D', value: 4, text: '无任何规划，对未来绝望' }
      ]
    },
    {
      id: 23,
      title: '你是否经常感到委屈、难过？',
      options: [
        { label: 'A', value: 1, text: '从不委屈，心态平和' },
        { label: 'B', value: 2, text: '偶尔委屈，很快平复' },
        { label: 'C', value: 3, text: '经常委屈，难以平复' },
        { label: 'D', value: 4, text: '极度委屈，经常落泪' }
      ]
    },
    {
      id: 24,
      title: '你能否自我调节负面情绪？',
      options: [
        { label: 'A', value: 1, text: '能快速调节，恢复平和' },
        { label: 'B', value: 2, text: '需借助他人，可调节' },
        { label: 'C', value: 3, text: '难以调节，负面情绪持续' },
        { label: 'D', value: 4, text: '完全无法调节，被情绪控制' }
      ]
    },
    {
      id: 25,
      title: '你是否觉得自己毫无价值？',
      options: [
        { label: 'A', value: 1, text: '觉得自己有价值，充满自信' },
        { label: 'B', value: 2, text: '偶尔怀疑，很快肯定自己' },
        { label: 'C', value: 3, text: '经常觉得自己无价值' },
        { label: 'D', value: 4, text: '坚信自己毫无价值，毫无意义' }
      ]
    }
  ],
  // 计分规则
  scoringRule:
    'A选项1分、B选项2分、C选项3分、D选项4分，总分25-100分，根据总分对应抑郁风险等级',
  // 风险等级判定（含分数区间、等级、结论建议）
  riskLevels: [
    {
      scoreRange: [25, 35],
      level: '低风险',
      conclusion:
        '你的心理健康状态良好，近两周内几乎没有出现抑郁相关症状，情绪平和、睡眠规律、食欲正常，对生活充满兴趣和动力，能正常社交并接纳自己。偶尔出现的轻微负面情绪，属于正常的情绪波动，无需过度担忧。建议继续保持当前的生活状态，规律作息、适度运动，主动维系良好的人际关系，遇到小困扰时及时自我调节，始终保持积极乐观的心态，就能持续维持良好的心理健康水平。本等级仅为初步筛查结果，若后续出现情绪异常，可及时关注并调整。'
    },
    {
      scoreRange: [36, 55],
      level: '中低风险',
      conclusion:
        '近期你可能存在轻度情绪困扰，偶尔出现情绪低落、兴趣略有减退、睡眠或食欲轻微异常的情况，精力偶尔不足，注意力偶尔不集中，但未明显影响日常工作、学习和社交，仍能基本完成各项日常事务。这种状态多与近期压力、作息不规律等因素相关，属于可调节范围。建议多关注自身感受，避免过度劳累，合理安排休息与娱乐时间，主动向家人、朋友倾诉内心困扰，必要时可通过运动、冥想等方式调节情绪，若负面状态持续超过1个月，建议寻求专业心理疏导。'
    },
    {
      scoreRange: [56, 75],
      level: '中高风险',
      conclusion:
        '你存在较明显的抑郁相关症状，近两周内经常出现情绪低落、兴趣明显减退、疲惫无力、睡眠和食欲异常等表现，注意力难以集中，自我否定、自责情绪较为突出，社交意愿下降，部分症状已影响到日常工作、学习和人际关系。此时需高度重视自身心理健康，避免忽视症状或自我硬扛。建议及时寻求专业心理医生的帮助，进行系统的评估与干预，同时主动向身边信任的人寻求支持，合理调整生活节奏，减少压力源，逐步缓解负面情绪，避免症状进一步加重。'
    },
    {
      scoreRange: [76, 100],
      level: '高风险',
      conclusion:
        '你的抑郁症状明显且持续，近两周内几乎每天都处于情绪低落状态，对任何事物都提不起兴趣，伴随严重的睡眠、食欲障碍，持续疲惫无力，存在明显的自我否定、过度自责，甚至有自杀念头，已无法正常完成日常事务，社交完全封闭。这种情况需立即采取行动，优先寻求专业医疗干预，及时到正规医院心理科就诊，接受专业治疗。同时，身边人应给予更多的陪伴、理解与支持，避免刺激，帮助其树立治疗信心，引导其积极配合治疗，才能有效缓解症状，逐步恢复心理健康。'
    }
  ],
  // 重要备注
  remark:
    '本测评仅为抑郁风险初步筛查，不能作为临床抑郁诊断的依据，无论得分高低，若长期被负面情绪困扰，都应重视并主动寻求帮助。'
}

// 可选：添加总分计算与风险等级匹配的方法
depressionAssessment.getRiskLevel = function(totalScore) {
  // 校验分数范围
  if (totalScore < 25 || totalScore > 100) {
    return { error: '分数异常，有效分数范围为25-100分' }
  }
  // 匹配对应风险等级
  return this.riskLevels.find(item => {
    const [min, max] = item.scoreRange
    return totalScore >= min && totalScore <= max
  })
}

// 测试示例：若总分40，调用方法获取风险等级
// console.log(depressionAssessment.getRiskLevel(40));

export { depressionAssessment }
