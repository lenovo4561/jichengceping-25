// 心理状态测试（含题目+得分计算+结论生成）
function mentalHealthTest(answers) {
  // 1. 测试题目配置（含所属维度、计分规则）
  const testQuestions = [
    // 第一部分：抑郁维度（1-11题，每题1-4分，总分11-44分）
    {
      id: 1,
      dimension: 'depression',
      title: '我觉得闷闷不乐，情绪低沉',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 2,
      dimension: 'depression',
      title: '我觉得一天之中早晨最好',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 3,
      dimension: 'depression',
      title: '我一阵阵哭出来或觉得想哭',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 4,
      dimension: 'depression',
      title: '我晚上睡眠不好',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 5,
      dimension: 'depression',
      title: '我吃得跟平常一样多',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 6,
      dimension: 'depression',
      title: '我与异性密切接触时和以往一样感到愉快',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 7,
      dimension: 'depression',
      title: '我发觉我的体重在下降',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 8,
      dimension: 'depression',
      title: '我有便秘的苦恼',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 9,
      dimension: 'depression',
      title: '我心跳比平时快',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 10,
      dimension: 'depression',
      title: '我无缘无故地感到疲乏',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 11,
      dimension: 'depression',
      title: '我的头脑跟平常一样清楚',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },

    // 第二部分：焦虑维度（12-22题，每题1-4分，总分11-44分）
    {
      id: 12,
      dimension: 'anxiety',
      title: '我觉得心平气和，并且容易安静坐着',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 13,
      dimension: 'anxiety',
      title: '我觉得心跳得很快',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 14,
      dimension: 'anxiety',
      title: '我因为一阵阵头晕而苦恼',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 15,
      dimension: 'anxiety',
      title: '我有晕倒发作，或觉得要晕倒似的',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 16,
      dimension: 'anxiety',
      title: '我吸气呼气都感到很容易',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 17,
      dimension: 'anxiety',
      title: '我的手脚麻木和刺痛',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 18,
      dimension: 'anxiety',
      title: '我因胃痛和消化不良而苦恼',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 19,
      dimension: 'anxiety',
      title: '我常常要小便',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 20,
      dimension: 'anxiety',
      title: '我的手常常是干燥温暖的',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 21,
      dimension: 'anxiety',
      title: '我脸红发热',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 22,
      dimension: 'anxiety',
      title: '我容易入睡并且一夜睡得很好',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },

    // 第三部分：人际关系敏感维度（23-32题，每题1-4分，总分10-40分）
    {
      id: 23,
      dimension: 'interpersonal',
      title: '我不喜欢参加社交活动，觉得很不自在',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 24,
      dimension: 'interpersonal',
      title: '我害怕别人议论我',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 25,
      dimension: 'interpersonal',
      title: '我觉得别人不理解我',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 26,
      dimension: 'interpersonal',
      title: '我愿意主动和陌生人交流',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 27,
      dimension: 'interpersonal',
      title: '我觉得和人相处很累',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 28,
      dimension: 'interpersonal',
      title: '我容易对他人产生不信任感',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 29,
      dimension: 'interpersonal',
      title: '我能轻松表达自己的想法和感受',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 30,
      dimension: 'interpersonal',
      title: '我害怕被别人拒绝',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    },
    {
      id: 31,
      dimension: 'interpersonal',
      title: '我觉得自己在集体中很受欢迎',
      options: [
        { label: '没有或很少时间', score: 4 }, // 反向计分
        { label: '小部分时间', score: 3 },
        { label: '相当多时间', score: 2 },
        { label: '绝大部分或全部时间', score: 1 }
      ]
    },
    {
      id: 32,
      dimension: 'interpersonal',
      title: '我容易因为他人的一句话多想',
      options: [
        { label: '没有或很少时间', score: 1 },
        { label: '小部分时间', score: 2 },
        { label: '相当多时间', score: 3 },
        { label: '绝大部分或全部时间', score: 4 }
      ]
    }
  ]

  // 2. 得分计算逻辑
  const calculateScores = userAnswers => {
    // 初始化各维度得分
    const scores = {
      depression: 0,
      anxiety: 0,
      interpersonal: 0
    }

    // 遍历题目，累加对应维度得分
    testQuestions.forEach(question => {
      const userAnswerIdx = userAnswers[question.id - 1] // 答题索引（0-3对应4个选项）
      // 校验答题有效性
      if (
        userAnswerIdx === undefined ||
        userAnswerIdx < 0 ||
        userAnswerIdx > 3
      ) {
        console.warn(`第${question.id}题答题无效（需传入0-3的索引），该题计0分`)
        return
      }
      // 累加得分
      scores[question.dimension] += question.options[userAnswerIdx].score
    })

    return scores
  }

  // 3. 结论生成逻辑
  const getResult = scores => {
    const results = {
      depression: {
        low: {
          title: '无明显抑郁倾向',
          content:
            '你目前心态积极乐观，对生活和以往喜欢的事物保持热情，自我认知清晰且认可自己，有明确的生活目标和动力。偶尔会出现轻微的情绪低落或疲惫，但能快速自我调节，不影响正常生活、工作和学习，属于正常的情绪波动。建议继续保持良好的生活作息，主动疏导负面情绪，多参与能让自己愉悦的活动，维系良好的人际关系，始终保持积极向上的心态，预防抑郁情绪的产生。'
        },
        medium: {
          title: '轻微抑郁倾向',
          content:
            '你偶尔会出现明显的情绪低落、兴趣下降、疲惫乏力等表现，对自我的评价偶尔会出现否定，睡眠和食欲可能出现轻微异常，偶尔会感到生活缺乏意义，但这些表现尚未严重影响正常生活。建议重视自我心理调节，主动向家人、朋友倾诉内心的困扰，减少独处时间，多参与社交和兴趣活动，规律作息、均衡饮食，若情绪持续低落，可尝试简单的心理疏导方法，避免情绪进一步堆积。'
        },
        high: {
          title: '明显抑郁倾向',
          content:
            '你持续被低落情绪包围，对任何事物都缺乏兴趣，自我否定严重，经常感到疲惫不堪、睡眠和食欲异常明显，频繁出现自责情绪，甚至有自杀相关念头，严重影响正常的生活、工作和学习。请务必重视自身心理状态，及时停止内耗，主动寻求家人、朋友的陪伴和支持，尽快联系专业心理医生进行干预和治疗，正视抑郁困扰，积极配合调整，逐步恢复心理健康。'
        }
      },
      anxiety: {
        low: {
          title: '无明显焦虑倾向',
          content:
            '你目前心态平稳，能从容应对生活中的压力和未知事物，很少出现紧张、担忧等情绪，身心状态良好，能有效控制自己的思绪和情绪，不被过度思虑困扰。偶尔出现的紧张情绪的能快速缓解，不影响正常的生活节奏和人际交往。建议继续保持良好的心态，合理安排生活和工作，学会科学释放压力，保持规律的作息和适度的运动，始终维持平稳的心理状态，避免焦虑情绪滋生。'
        },
        medium: {
          title: '轻微焦虑倾向',
          content:
            '你偶尔会出现紧张不安、胡思乱想、烦躁易怒等表现，对未知事物会产生轻微恐惧，偶尔会出现胸闷、头痛等躯体不适，注意力和记忆力可能受到轻微影响，但这些表现能通过自我调节缓解，对生活的影响较小。建议学会自我放松，通过深呼吸、冥想、听舒缓音乐等方式缓解紧张情绪，减少过度思虑，合理规划生活，避免过度追求完美，必要时可向身边人倾诉，释放内心的焦虑。'
        },
        high: {
          title: '明显焦虑倾向',
          content:
            '你频繁出现紧张不安、过度担忧、坐立难安等症状，经常被莫名的恐慌和烦躁情绪包围，躯体不适明显且频繁出现，注意力不集中、记忆力下降，在压力下容易慌乱，严重影响正常生活、工作和人际交往。建议及时寻求专业心理干预，学习科学的焦虑调节方法，主动远离引发焦虑的诱因，合理安排作息，避免过度劳累，同时寻求家人和朋友的支持，逐步缓解焦虑情绪，恢复心理平衡。'
        }
      },
      interpersonal: {
        low: {
          title: '无明显敏感倾向',
          content:
            '你善于与人交往，愿意主动与人沟通交流，对他人充满信任，能轻松融入集体，与身边人相处融洽。不轻易在意他人的评价，敢于主动表达自己的想法，能理性处理人际交往中的矛盾，很少感到孤独，拥有良好的人际关系模式。建议继续保持真诚待人的态度，主动维系身边的人际关系，适当拓展社交圈，在交往中保持自我，同时学会倾听他人的想法，进一步提升人际交往能力，让人际关系更加和谐。'
        },
        medium: {
          title: '轻微敏感倾向',
          content:
            '你偶尔会出现社交疲惫、刻意回避社交的情况，容易在意他人的评价，偶尔会误解他人的意图，对他人存在轻微的戒备心理，偶尔会感到孤独，在集体中偶尔会出现不适，难以完全放开自己。建议学会接纳自我，减少过度内耗，不要过度在意他人的看法，主动尝试与身边人沟通，放下不必要的戒备，逐步克服社交中的犹豫，多参与集体活动，慢慢提升社交自信，改善人际关系状态。'
        },
        high: {
          title: '明显敏感倾向',
          content:
            '你存在严重的社交回避，拒绝主动与人沟通，对他人极度戒备、难以信任，容易过度在意他人的评价，经常误解他人的意图，害怕与人发生矛盾、害怕被他人拒绝，长期感到孤独，无法融入集体，难以建立良好的人际关系，严重影响社交生活。建议主动寻求心理帮助，逐步克服社交恐惧，学会信任他人，放下心理戒备，从小范围的社交开始，慢慢锻炼沟通能力，学会表达自己的想法，逐步改善人际关系敏感的问题。'
        }
      }
    }

    // 维度得分判断
    const getDimensionResult = (dimension, score) => {
      const config = results[dimension]
      switch (dimension) {
        case 'depression':
        case 'anxiety':
          if (score >= 11 && score <= 22) return config.low
          if (score >= 23 && score <= 33) return config.medium
          if (score >= 34 && score <= 44) return config.high
          break
        case 'interpersonal':
          if (score >= 10 && score <= 20) return config.low
          if (score >= 21 && score <= 30) return config.medium
          if (score >= 31 && score <= 40) return config.high
          break
      }
      return {
        title: '得分异常',
        content: `该维度得分${score}超出正常范围，测试结果仅供参考，建议重新答题。`
      }
    }

    return {
      depressionResult: getDimensionResult('depression', scores.depression),
      anxietyResult: getDimensionResult('anxiety', scores.anxiety),
      interpersonalResult: getDimensionResult(
        'interpersonal',
        scores.interpersonal
      ),
      note:
        '本测试仅作趣味参考，不构成专业诊断。若存在明显心理困扰，建议及时寻求专业心理医生或心理咨询师的支持与帮助。'
    }
  }

  // 4. 主逻辑：无答题参数时返回题目列表，有参数时计算得分并返回结论
  if (!answers) {
    // 返回格式化的题目列表（供展示答题）
    return testQuestions.map(q => ({
      id: q.id,
      title: q.title,
      options: q.options.map(opt => opt.label)
    }))
  } else {
    // 校验答题数量（需32题）
    if (answers.length !== 32) {
      return {
        error: `答题数量异常（需32题），当前提交${answers.length}题`,
        code: -1
      }
    }
    // 计算得分 + 生成结论
    const scores = calculateScores(answers)
    const result = getResult(scores)
    return {
      questions: testQuestions.map(q => ({
        id: q.id,
        title: q.title,
        options: q.options.map(opt => opt.label)
      })), // 附带题目列表
      scores: scores, // 各维度总分
      result: result // 测评结论
    }
  }
}

// ====================== 使用示例 ======================
// 示例1：获取完整题目列表（用于前端展示答题）
const allQuestions = mentalHealthTest()
console.log('测试题目列表：', allQuestions)

// 示例2：提交答题结果（数组长度32，每个元素0-3对应每题的选项索引）
const userAnswers = [
  0,
  1,
  0,
  0,
  1,
  2,
  0,
  0,
  0,
  1,
  0, // 1-11题（抑郁维度）
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1, // 12-22题（焦虑维度）
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  0 // 23-32题（人际关系敏感维度）
]
const testResult = mentalHealthTest(userAnswers)
console.log('测评得分：', testResult.scores)
console.log('抑郁维度结论：', testResult.result.depressionResult)
console.log('焦虑维度结论：', testResult.result.anxietyResult)
console.log('人际关系敏感结论：', testResult.result.interpersonalResult)
