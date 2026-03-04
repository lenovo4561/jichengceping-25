// 职场类测评（含题目+得分计算+结论生成）
function workplaceTest(testTypeId, answers) {
  // 1. 职场测评题库配置（14类测评，每类5题，每题1-4分，总分5-20分）
  const workplaceTestBank = {
    // 1: 职场沟通力测评
    1: {
      title: '职场沟通力测评',
      questions: [
        {
          id: 1,
          title: '职场中，你能清晰表达观点吗？',
          options: [
            { label: '能，清晰准确且有条理', score: 1 },
            { label: '基本能，表达较顺畅', score: 2 },
            { label: '不太能，表达易混乱', score: 3 },
            { label: '不能，难以准确表达', score: 4 }
          ]
        },
        {
          id: 2,
          title: '同事倾诉工作烦恼，你会？',
          options: [
            { label: '认真倾听，积极回应', score: 1 },
            { label: '耐心倾听，适当安慰', score: 2 },
            { label: '敷衍倾听，不愿回应', score: 3 },
            { label: '打断拒绝，不愿倾听', score: 4 }
          ]
        },
        {
          id: 3,
          title: '与跨部门协作，你能高效沟通吗？',
          options: [
            { label: '能，主动对接，高效推进', score: 1 },
            { label: '基本能，配合对接不拖沓', score: 2 },
            { label: '不太能，沟通易有阻碍', score: 3 },
            { label: '不能，拒绝主动沟通', score: 4 }
          ]
        },
        {
          id: 4,
          title: '面对批评，你会如何回应？',
          options: [
            { label: '虚心接受，及时改进', score: 1 },
            { label: '接受建议，偶尔辩解', score: 2 },
            { label: '内心抵触，表面接受', score: 3 },
            { label: '坚决反驳，拒不接受', score: 4 }
          ]
        },
        {
          id: 5,
          title: '向领导汇报工作，你会？',
          options: [
            { label: '重点突出，简洁明了', score: 1 },
            { label: '完整汇报，略有冗余', score: 2 },
            { label: '条理混乱，重点不明', score: 3 },
            { label: '敷衍汇报，避重就轻', score: 4 }
          ]
        }
      ]
    },
    // 2: 职场执行力测评
    2: {
      title: '职场执行力测评',
      questions: [
        {
          id: 1,
          title: '领导安排任务，你会如何执行？',
          options: [
            { label: '立刻执行，高效完成', score: 1 },
            { label: '规划后，按时完成', score: 2 },
            { label: '拖延执行，偶尔超时', score: 3 },
            { label: '敷衍拖延，拒不完成', score: 4 }
          ]
        },
        {
          id: 2,
          title: '遇到任务难点，你会？',
          options: [
            { label: '主动钻研，高效突破', score: 1 },
            { label: '请教他人，逐步解决', score: 2 },
            { label: '消极应对，等待帮助', score: 3 },
            { label: '直接放弃，不予处理', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你能按时完成既定工作目标吗？',
          options: [
            { label: '能，提前完成，质量达标', score: 1 },
            { label: '基本能，按时完成，质量尚可', score: 2 },
            { label: '偶尔能，经常超时或不达标', score: 3 },
            { label: '不能，长期超时且质量较差', score: 4 }
          ]
        },
        {
          id: 4,
          title: '多项任务并行，你会？',
          options: [
            { label: '合理规划，有序推进', score: 1 },
            { label: '逐步推进，基本完成', score: 2 },
            { label: '手忙脚乱，难以兼顾', score: 3 },
            { label: '不知所措，彻底停滞', score: 4 }
          ]
        },
        {
          id: 5,
          title: '任务完成后，你会复盘总结吗？',
          options: [
            { label: '会，及时复盘，总结经验', score: 1 },
            { label: '会，偶尔复盘，简单总结', score: 2 },
            { label: '不会，很少复盘，得过且过', score: 3 },
            { label: '不会，从不复盘，重复犯错', score: 4 }
          ]
        }
      ]
    },
    // 3: 职场责任心测评
    3: {
      title: '职场责任心测评',
      questions: [
        {
          id: 1,
          title: '工作中出现失误，你会？',
          options: [
            { label: '主动承担，及时补救', score: 1 },
            { label: '承认错误，尽力补救', score: 2 },
            { label: '推卸责任，敷衍补救', score: 3 },
            { label: '拒不承认，逃避责任', score: 4 }
          ]
        },
        {
          id: 2,
          title: '面对额外工作任务，你会？',
          options: [
            { label: '主动承接，认真完成', score: 1 },
            { label: '欣然接受，按时完成', score: 2 },
            { label: '勉强接受，敷衍完成', score: 3 },
            { label: '坚决拒绝，不愿承担', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你会主动检查工作细节吗？',
          options: [
            { label: '会，反复检查，避免失误', score: 1 },
            { label: '会，简单检查，基本无误', score: 2 },
            { label: '不会，偶尔检查，易出错', score: 3 },
            { label: '不会，从不检查，频繁出错', score: 4 }
          ]
        },
        {
          id: 4,
          title: '下班前，你会梳理当日工作吗？',
          options: [
            { label: '会，梳理总结，规划次日', score: 1 },
            { label: '会，简单梳理，明确进度', score: 2 },
            { label: '不会，偶尔梳理，毫无规划', score: 3 },
            { label: '不会，从不梳理，杂乱无章', score: 4 }
          ]
        },
        {
          id: 5,
          title: '团队目标未达成，你会？',
          options: [
            { label: '主动反思，积极改进', score: 1 },
            { label: '配合反思，参与改进', score: 2 },
            { label: '漠不关心，不愿反思', score: 3 },
            { label: '推卸责任，指责他人', score: 4 }
          ]
        }
      ]
    },
    // 4: 职场抗压能力测评
    4: {
      title: '职场抗压能力测评',
      questions: [
        {
          id: 1,
          title: '工作压力大时，你能调整心态吗？',
          options: [
            { label: '能，快速调整，从容应对', score: 1 },
            { label: '能，慢慢调整，逐步适应', score: 2 },
            { label: '不能，焦虑烦躁，影响工作', score: 3 },
            { label: '不能，彻底崩溃，无法工作', score: 4 }
          ]
        },
        {
          id: 2,
          title: '面对紧急工作，你会？',
          options: [
            { label: '冷静应对，高效完成', score: 1 },
            { label: '沉着应对，按时完成', score: 2 },
            { label: '慌乱无序，效率低下', score: 3 },
            { label: '不知所措，无法推进', score: 4 }
          ]
        },
        {
          id: 3,
          title: '被领导批评后，你会？',
          options: [
            { label: '正视不足，积极改进', score: 1 },
            { label: '调整心态，努力改进', score: 2 },
            { label: '情绪低落，消极怠工', score: 3 },
            { label: '心生怨恨，敷衍工作', score: 4 }
          ]
        },
        {
          id: 4,
          title: '长期加班，你能坚持吗？',
          options: [
            { label: '能，合理调节，高效配合', score: 1 },
            { label: '能，咬牙坚持，完成任务', score: 2 },
            { label: '不能，抱怨抵触，效率下降', score: 3 },
            { label: '不能，直接拒绝，擅自离岗', score: 4 }
          ]
        },
        {
          id: 5,
          title: '工作出现瓶颈，你会？',
          options: [
            { label: '主动突破，寻找解决办法', score: 1 },
            { label: '请教他人，逐步突破', score: 2 },
            { label: '消极等待，顺其自然', score: 3 },
            { label: '彻底放弃，逃避瓶颈', score: 4 }
          ]
        }
      ]
    },
    // 5: 职场协作能力测评
    5: {
      title: '职场协作能力测评',
      questions: [
        {
          id: 1,
          title: '团队协作中，你会主动配合他人吗？',
          options: [
            { label: '会，主动配合，积极补位', score: 1 },
            { label: '会，按时配合，不拖后腿', score: 2 },
            { label: '不会，被动配合，敷衍了事', score: 3 },
            { label: '不会，拒绝配合，我行我素', score: 4 }
          ]
        },
        {
          id: 2,
          title: '同事需要帮助，你会？',
          options: [
            { label: '主动帮忙，尽力协助', score: 1 },
            { label: '欣然帮忙，按时完成', score: 2 },
            { label: '勉强帮忙，敷衍应对', score: 3 },
            { label: '坚决拒绝，不愿帮忙', score: 4 }
          ]
        },
        {
          id: 3,
          title: '团队讨论，你会主动发表观点吗？',
          options: [
            { label: '会，主动发表，积极建言', score: 1 },
            { label: '会，被询问后发表观点', score: 2 },
            { label: '不会，很少发言，被动倾听', score: 3 },
            { label: '不会，拒绝发言，不愿参与', score: 4 }
          ]
        },
        {
          id: 4,
          title: '与同事有分歧，你会？',
          options: [
            { label: '换位思考，协商解决', score: 1 },
            { label: '理性沟通，寻求共识', score: 2 },
            { label: '坚持己见，不愿妥协', score: 3 },
            { label: '争吵指责，激化矛盾', score: 4 }
          ]
        },
        {
          id: 5,
          title: '团队目标达成，你会？',
          options: [
            { label: '分享喜悦，感恩团队', score: 1 },
            { label: '认可团队，总结经验', score: 2 },
            { label: '漠不关心，独享功劳', score: 3 },
            { label: '贬低他人，凸显自己', score: 4 }
          ]
        }
      ]
    },
    // 6: 职场学习能力测评
    6: {
      title: '职场学习能力测评',
      questions: [
        {
          id: 1,
          title: '接触新工作技能，你会？',
          options: [
            { label: '主动学习，快速掌握', score: 1 },
            { label: '认真学习，逐步掌握', score: 2 },
            { label: '被动学习，勉强掌握', score: 3 },
            { label: '拒绝学习，无法掌握', score: 4 }
          ]
        },
        {
          id: 2,
          title: '工作中遇到不懂的问题，你会？',
          options: [
            { label: '主动钻研，自主解决', score: 1 },
            { label: '请教他人，学会运用', score: 2 },
            { label: '消极等待，依赖他人', score: 3 },
            { label: '视而不见，回避问题', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你会主动学习职场相关知识吗？',
          options: [
            { label: '会，定期学习，提升自己', score: 1 },
            { label: '会，偶尔学习，补充知识', score: 2 },
            { label: '不会，很少学习，安于现状', score: 3 },
            { label: '不会，从不学习，拒绝提升', score: 4 }
          ]
        },
        {
          id: 4,
          title: '领导提出新要求，你会？',
          options: [
            { label: '主动学习，满足要求', score: 1 },
            { label: '认真学习，逐步达标', score: 2 },
            { label: '勉强学习，难以达标', score: 3 },
            { label: '拒绝学习，无法达标', score: 4 }
          ]
        },
        {
          id: 5,
          title: '你能将所学知识运用到工作中吗？',
          options: [
            { label: '能，灵活运用，提升效率', score: 1 },
            { label: '能，基本运用，完成工作', score: 2 },
            { label: '不能，偶尔运用，效果不佳', score: 3 },
            { label: '不能，无法运用，学用脱节', score: 4 }
          ]
        }
      ]
    },
    // 7: 职场应变能力测评
    7: {
      title: '职场应变能力测评',
      questions: [
        {
          id: 1,
          title: '工作中出现突发状况，你会？',
          options: [
            { label: '冷静应对，快速解决', score: 1 },
            { label: '沉着应对，逐步解决', score: 2 },
            { label: '慌乱无措，难以应对', score: 3 },
            { label: '逃避退缩，不予处理', score: 4 }
          ]
        },
        {
          id: 2,
          title: '计划被临时调整，你会？',
          options: [
            { label: '快速调整，高效适配', score: 1 },
            { label: '逐步调整，基本适配', score: 2 },
            { label: '抱怨抵触，难以适配', score: 3 },
            { label: '拒绝调整，坚持原计划', score: 4 }
          ]
        },
        {
          id: 3,
          title: '客户提出不合理要求，你会？',
          options: [
            { label: '理性沟通，合理引导', score: 1 },
            { label: '耐心解释，寻求共识', score: 2 },
            { label: '不知所措，求助领导', score: 3 },
            { label: '直接拒绝，激化矛盾', score: 4 }
          ]
        },
        {
          id: 4,
          title: '同事临时请假，你会接手其工作吗？',
          options: [
            { label: '主动接手，高效完成', score: 1 },
            { label: '欣然接手，按时完成', score: 2 },
            { label: '勉强接手，敷衍完成', score: 3 },
            { label: '坚决拒绝，不愿接手', score: 4 }
          ]
        },
        {
          id: 5,
          title: '工作出现失误，你能快速补救吗？',
          options: [
            { label: '能，快速补救，减少损失', score: 1 },
            { label: '能，逐步补救，降低损失', score: 2 },
            { label: '不能，补救缓慢，损失扩大', score: 3 },
            { label: '不能，无法补救，放任损失', score: 4 }
          ]
        }
      ]
    },
    // 8: 职场自律能力测评
    8: {
      title: '职场自律能力测评',
      questions: [
        {
          id: 1,
          title: '你能按时上下班，不迟到早退吗？',
          options: [
            { label: '能，严格遵守，从不违规', score: 1 },
            { label: '基本能，偶尔违规及时改正', score: 2 },
            { label: '不能，经常迟到早退', score: 3 },
            { label: '不能，长期违规，屡教不改', score: 4 }
          ]
        },
        {
          id: 2,
          title: '工作时间，你会专注工作吗？',
          options: [
            { label: '会，全程专注，不做私事', score: 1 },
            { label: '基本会，偶尔做私事不影响', score: 2 },
            { label: '不会，经常做私事，影响效率', score: 3 },
            { label: '不会，全程做私事，不务正业', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你能按计划完成每日工作吗？',
          options: [
            { label: '能，严格执行，提前完成', score: 1 },
            { label: '基本能，按时完成，不拖延', score: 2 },
            { label: '不能，经常拖延，无法完成', score: 3 },
            { label: '不能，从不计划，敷衍度日', score: 4 }
          ]
        },
        {
          id: 4,
          title: '面对职场诱惑（摸鱼、闲聊），你会？',
          options: [
            { label: '果断拒绝，专注工作', score: 1 },
            { label: '适当控制，不影响工作', score: 2 },
            { label: '难以控制，偶尔摸鱼闲聊', score: 3 },
            { label: '完全失控，沉迷摸鱼闲聊', score: 4 }
          ]
        },
        {
          id: 5,
          title: '你会主动提升职场技能吗？',
          options: [
            { label: '会，制定计划，持续提升', score: 1 },
            { label: '会，偶尔提升，补充技能', score: 2 },
            { label: '不会，很少提升，安于现状', score: 3 },
            { label: '不会，从不提升，拒绝进步', score: 4 }
          ]
        }
      ]
    },
    // 9: 职场创新能力测评
    9: {
      title: '职场创新能力测评',
      questions: [
        {
          id: 1,
          title: '面对繁琐工作，你会尝试简化流程吗？',
          options: [
            { label: '会，主动思考，优化流程', score: 1 },
            { label: '会，尝试优化，逐步简化', score: 2 },
            { label: '不会，按部就班，不愿改变', score: 3 },
            { label: '不会，拒绝尝试，墨守成规', score: 4 }
          ]
        },
        {
          id: 2,
          title: '领导布置任务，你会创新方法吗？',
          options: [
            { label: '会，主动创新，提升效率', score: 1 },
            { label: '会，适当创新，完成任务', score: 2 },
            { label: '不会，按常规方法，敷衍完成', score: 3 },
            { label: '不会，拒绝创新，机械执行', score: 4 }
          ]
        },
        {
          id: 3,
          title: '团队讨论，你会提出创新思路吗？',
          options: [
            { label: '会，主动思考，提出新思路', score: 1 },
            { label: '会，结合经验，提出建议', score: 2 },
            { label: '不会，很少思考，被动倾听', score: 3 },
            { label: '不会，拒绝思考，不愿参与', score: 4 }
          ]
        },
        {
          id: 4,
          title: '工作中遇到瓶颈，你会创新突破吗？',
          options: [
            { label: '会，主动创新，突破瓶颈', score: 1 },
            { label: '会，尝试创新，逐步突破', score: 2 },
            { label: '不会，消极等待，无法突破', score: 3 },
            { label: '不会，放弃突破，维持现状', score: 4 }
          ]
        },
        {
          id: 5,
          title: '你会关注行业新方法、新趋势吗？',
          options: [
            { label: '会，主动关注，学以致用', score: 1 },
            { label: '会，偶尔关注，了解动态', score: 2 },
            { label: '不会，很少关注，安于现状', score: 3 },
            { label: '不会，从不关注，一无所知', score: 4 }
          ]
        }
      ]
    },
    // 10: 职场职业素养测评
    10: {
      title: '职场职业素养测评',
      questions: [
        {
          id: 1,
          title: '你会保守公司商业机密吗？',
          options: [
            { label: '会，严格保守，绝不泄露', score: 1 },
            { label: '会，基本保守，不随意泄露', score: 2 },
            { label: '不会，偶尔泄露，不加重视', score: 3 },
            { label: '不会，随意泄露，毫无意识', score: 4 }
          ]
        },
        {
          id: 2,
          title: '面对工作中的不公，你会？',
          options: [
            { label: '理性沟通，合理诉求', score: 1 },
            { label: '冷静面对，寻求解决', score: 2 },
            { label: '抱怨吐槽，消极怠工', score: 3 },
            { label: '争吵闹事，激化矛盾', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你会尊重领导和同事吗？',
          options: [
            { label: '会，真诚尊重，平等相处', score: 1 },
            { label: '会，基本尊重，礼貌待人', score: 2 },
            { label: '不会，偶尔不尊重，态度敷衍', score: 3 },
            { label: '不会，从不尊重，态度恶劣', score: 4 }
          ]
        },
        {
          id: 4,
          title: '工作中，你会注重自身形象吗？',
          options: [
            { label: '会，整洁得体，符合职场规范', score: 1 },
            { label: '会，基本整洁，不违规', score: 2 },
            { label: '不会，偶尔随意，影响形象', score: 3 },
            { label: '不会，全程随意，严重违规', score: 4 }
          ]
        },
        {
          id: 5,
          title: '你会对自己的工作成果负责吗？',
          options: [
            { label: '会，精益求精，对成果负责', score: 1 },
            { label: '会，认真对待，不敷衍了事', score: 2 },
            { label: '不会，敷衍了事，不负责任', score: 3 },
            { label: '不会，随意应付，毫无责任心', score: 4 }
          ]
        }
      ]
    },
    // 11: 职场决策能力测评
    11: {
      title: '职场决策能力测评',
      questions: [
        {
          id: 1,
          title: '面对职场选择，你能快速决策吗？',
          options: [
            { label: '能，理性分析，快速决断', score: 1 },
            { label: '基本能，分析后逐步决策', score: 2 },
            { label: '不太能，犹豫不定难抉择', score: 3 },
            { label: '不能，依赖他人，无法决策', score: 4 }
          ]
        },
        {
          id: 2,
          title: '决策后发现偏差，你会？',
          options: [
            { label: '及时调整，快速纠正偏差', score: 1 },
            { label: '冷静分析，逐步修正方向', score: 2 },
            { label: '不知所措，被动等待指示', score: 3 },
            { label: '固执己见，拒绝调整决策', score: 4 }
          ]
        },
        {
          id: 3,
          title: '缺乏足够信息时，你会？',
          options: [
            { label: '主动调研，补充信息再决策', score: 1 },
            { label: '结合经验，谨慎做出决策', score: 2 },
            { label: '拖延决策，等待更多信息', score: 3 },
            { label: '盲目决策，不计后果', score: 4 }
          ]
        },
        {
          id: 4,
          title: '团队决策有分歧，你会？',
          options: [
            { label: '统筹分析，提出合理方案', score: 1 },
            { label: '倾听意见，协调达成共识', score: 2 },
            { label: '随波逐流，不愿发表观点', score: 3 },
            { label: '坚持己见，激化决策矛盾', score: 4 }
          ]
        },
        {
          id: 5,
          title: '决策失误，你会如何应对？',
          options: [
            { label: '主动承担，总结教训改进', score: 1 },
            { label: '承认失误，配合补救改进', score: 2 },
            { label: '推卸责任，回避失误问题', score: 3 },
            { label: '视而不见，任由损失扩大', score: 4 }
          ]
        }
      ]
    },
    // 12: 职场时间管理能力测评
    12: {
      title: '职场时间管理能力测评',
      questions: [
        {
          id: 1,
          title: '你会制定每日/每周工作规划吗？',
          options: [
            { label: '会，详细规划，严格执行', score: 1 },
            { label: '会，简单规划，基本执行', score: 2 },
            { label: '不会，偶尔规划，难以执行', score: 3 },
            { label: '不会，从不规划，杂乱无序', score: 4 }
          ]
        },
        {
          id: 2,
          title: '面对紧急且重要的任务，你会？',
          options: [
            { label: '优先处理，高效完成', score: 1 },
            { label: '合理安排，按时完成', score: 2 },
            { label: '拖延处理，临近截止发力', score: 3 },
            { label: '忽视优先级，随意处理', score: 4 }
          ]
        },
        {
          id: 3,
          title: '工作中被突发事务打断，你会？',
          options: [
            { label: '快速处理，及时回归本职', score: 1 },
            { label: '合理分工，逐步回归正轨', score: 2 },
            { label: '手忙脚乱，无法回归本职', score: 3 },
            { label: '被带偏节奏，彻底停滞工作', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你能合理分配工作与休息时间吗？',
          options: [
            { label: '能，劳逸结合，高效工作', score: 1 },
            { label: '基本能，偶尔失衡及时调整', score: 2 },
            { label: '不能，经常加班，过度劳累', score: 3 },
            { label: '不能，沉迷休息，敷衍工作', score: 4 }
          ]
        },
        {
          id: 5,
          title: '面对拖延倾向，你会？',
          options: [
            { label: '主动克服，立即行动', score: 1 },
            { label: '自我督促，逐步克服', score: 2 },
            { label: '难以克服，继续拖延', score: 3 },
            { label: '放任拖延，从不改变', score: 4 }
          ]
        }
      ]
    },
    // 13: 职场情绪管理能力测评
    13: {
      title: '职场情绪管理能力测评',
      questions: [
        {
          id: 1,
          title: '工作中被误解，你会控制情绪吗？',
          options: [
            { label: '能，冷静解释，不被情绪左右', score: 1 },
            { label: '基本能，调整后理性应对', score: 2 },
            { label: '不能，情绪激动，急于辩解', score: 3 },
            { label: '不能，暴怒失控，引发冲突', score: 4 }
          ]
        },
        {
          id: 2,
          title: '工作失误，你会如何调节情绪？',
          options: [
            { label: '快速平复，专注补救改进', score: 1 },
            { label: '慢慢调整，配合补救工作', score: 2 },
            { label: '情绪低落，消极怠工', score: 3 },
            { label: '自我否定，陷入内耗', score: 4 }
          ]
        },
        {
          id: 3,
          title: '同事态度恶劣，你会？',
          options: [
            { label: '理性应对，不被影响情绪', score: 1 },
            { label: '冷静沟通，化解矛盾', score: 2 },
            { label: '情绪受挫，消极应对', score: 3 },
            { label: '针锋相对，激化矛盾', score: 4 }
          ]
        },
        {
          id: 4,
          title: '工作压力大时，你会调节情绪吗？',
          options: [
            { label: '能，快速疏导，保持积极心态', score: 1 },
            { label: '能，慢慢调节，逐步适应', score: 2 },
            { label: '不能，焦虑烦躁，影响工作', score: 3 },
            { label: '不能，情绪崩溃，无法工作', score: 4 }
          ]
        },
        {
          id: 5,
          title: '职场竞争中，你会控制嫉妒心吗？',
          options: [
            { label: '能，转化动力，努力提升', score: 1 },
            { label: '基本能，调整心态，正视差距', score: 2 },
            { label: '不能，心生嫉妒，消极抵触', score: 3 },
            { label: '不能，恶意诋毁，阻碍他人', score: 4 }
          ]
        }
      ]
    },
    // 14: 职场领导力测评
    14: {
      title: '职场领导力测评',
      questions: [
        {
          id: 1,
          title: '带领团队时，你能明确目标吗？',
          options: [
            { label: '能，清晰明确，合理分配任务', score: 1 },
            { label: '基本能，明确目标，简单分配', score: 2 },
            { label: '不太能，目标模糊，分配混乱', score: 3 },
            { label: '不能，无明确目标，无法分配', score: 4 }
          ]
        },
        {
          id: 2,
          title: '团队成员出错，你会？',
          options: [
            { label: '耐心指导，帮助改进提升', score: 1 },
            { label: '指出问题，督促整改完善', score: 2 },
            { label: '严厉批评，推卸责任', score: 3 },
            { label: '视而不见，放任不管', score: 4 }
          ]
        },
        {
          id: 3,
          title: '团队遇到困难，你会？',
          options: [
            { label: '主动担当，带领团队突破', score: 1 },
            { label: '积极协调，配合团队解决', score: 2 },
            { label: '消极等待，依赖他人解决', score: 3 },
            { label: '逃避退缩，推卸领导责任', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你会关注团队成员成长吗？',
          options: [
            { label: '会，主动指导，助力成长', score: 1 },
            { label: '会，偶尔关注，给予建议', score: 2 },
            { label: '不会，很少关注，只看结果', score: 3 },
            { label: '不会，从不关注，忽视成长', score: 4 }
          ]
        },
        {
          id: 5,
          title: '你能凝聚团队凝聚力吗？',
          options: [
            { label: '能，营造氛围，凝聚团队力量', score: 1 },
            { label: '基本能，协调关系，维持团结', score: 2 },
            { label: '不太能，氛围松散，难以凝聚', score: 3 },
            { label: '不能，加剧矛盾，分裂团队', score: 4 }
          ]
        }
      ]
    },
    // 15: 职场目标规划能力测评
    15: {
      title: '职场目标规划能力测评',
      questions: [
        {
          id: 1,
          title: '你会制定长期（1-3年）职场发展目标吗？',
          options: [
            { label: '会，详细规划，拆解到季度/月度', score: 1 },
            { label: '会，制定框架，明确大致方向', score: 2 },
            { label: '不会，偶尔思考，无具体规划', score: 3 },
            { label: '不会，从不思考，走一步看一步', score: 4 }
          ]
        },
        {
          id: 2,
          title: '年度工作目标制定后，你会？',
          options: [
            { label: '拆解为月度/周度计划，严格执行', score: 1 },
            { label: '制定执行计划，基本按计划推进', score: 2 },
            { label: '仅停留在纸面，很少落地执行', score: 3 },
            { label: '制定后束之高阁，完全不执行', score: 4 }
          ]
        },
        {
          id: 3,
          title: '目标未达成时，你会？',
          options: [
            { label: '分析原因，调整计划，快速补救', score: 1 },
            { label: '简单复盘，微调方向继续推进', score: 2 },
            { label: '抱怨客观因素，消极放弃', score: 3 },
            { label: '视而不见，继续按原方式行事', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你会定期复盘目标完成进度吗？',
          options: [
            { label: '每周复盘，及时调整执行策略', score: 1 },
            { label: '每月复盘，总结进度并规划下月', score: 2 },
            { label: '偶尔复盘，无固定周期和方法', score: 3 },
            { label: '从不复盘，不清楚目标进度', score: 4 }
          ]
        },
        {
          id: 5,
          title: '面对突发变化，你会调整目标吗？',
          options: [
            { label: '快速评估，动态调整目标和计划', score: 1 },
            { label: '分析后，逐步优化目标和执行', score: 2 },
            { label: '抵触调整，勉强维持原目标', score: 3 },
            { label: '拒绝调整，任由目标无法达成', score: 4 }
          ]
        }
      ]
    },
    // 16: 职场问题解决能力测评
    16: {
      title: '职场问题解决能力测评',
      questions: [
        {
          id: 1,
          title: '工作中遇到复杂问题，你会？',
          options: [
            { label: '拆解问题，逐个突破，高效解决', score: 1 },
            { label: '梳理思路，逐步分析，找到方案', score: 2 },
            { label: '毫无头绪，等待他人指点', score: 3 },
            { label: '逃避问题，任由问题扩大', score: 4 }
          ]
        },
        {
          id: 2,
          title: '常规方法无法解决问题时，你会？',
          options: [
            { label: '创新思路，尝试多种方案解决', score: 1 },
            { label: '请教他人，借鉴经验寻找方法', score: 2 },
            { label: '反复尝试旧方法，效率低下', score: 3 },
            { label: '直接放弃，承认无法解决', score: 4 }
          ]
        },
        {
          id: 3,
          title: '解决问题后，你会总结经验吗？',
          options: [
            { label: '详细总结，形成方法论复用', score: 1 },
            { label: '简单总结，记录关键要点', score: 2 },
            { label: '偶尔总结，无系统记录', score: 3 },
            { label: '从不总结，下次遇到仍无思路', score: 4 }
          ]
        },
        {
          id: 4,
          title: '跨部门协作问题，你会？',
          options: [
            { label: '主动牵头，协调各方解决', score: 1 },
            { label: '配合沟通，推动问题解决', score: 2 },
            { label: '等待牵头人，被动配合', score: 3 },
            { label: '推卸责任，加剧问题矛盾', score: 4 }
          ]
        },
        {
          id: 5,
          title: '紧急问题出现时，你会？',
          options: [
            { label: '冷静分析，快速制定解决方案', score: 1 },
            { label: '按流程处理，逐步解决问题', score: 2 },
            { label: '慌乱无措，依赖领导指示', score: 3 },
            { label: '手足无措，任由问题恶化', score: 4 }
          ]
        }
      ]
    },
    // 17: 职场客户服务能力测评
    17: {
      title: '职场客户服务能力测评',
      questions: [
        {
          id: 1,
          title: '客户提出需求，你会？',
          options: [
            { label: '快速响应，超预期满足需求', score: 1 },
            { label: '及时回应，按时满足需求', score: 2 },
            { label: '拖延回应，勉强满足需求', score: 3 },
            { label: '消极回应，无法满足需求', score: 4 }
          ]
        },
        {
          id: 2,
          title: '客户投诉时，你会？',
          options: [
            { label: '真诚道歉，快速解决，回访确认', score: 1 },
            { label: '耐心解释，妥善处理，跟踪进度', score: 2 },
            { label: '敷衍应对，拖延处理，不跟进', score: 3 },
            { label: '推卸责任，拒绝处理，激化矛盾', score: 4 }
          ]
        },
        {
          id: 3,
          title: '你会主动了解客户潜在需求吗？',
          options: [
            { label: '会，深度沟通，挖掘潜在需求', score: 1 },
            { label: '会，简单询问，了解基本诉求', score: 2 },
            { label: '不会，仅处理明确提出的需求', score: 3 },
            { label: '不会，无视客户需求，按自己想法来', score: 4 }
          ]
        },
        {
          id: 4,
          title: '客户要求超出权限时，你会？',
          options: [
            { label: '主动协调，给出替代解决方案', score: 1 },
            { label: '说明情况，引导客户调整预期', score: 2 },
            { label: '直接拒绝，不做任何解释', score: 3 },
            { label: '承诺无法兑现的要求，敷衍客户', score: 4 }
          ]
        },
        {
          id: 5,
          title: '服务结束后，你会维护客户关系吗？',
          options: [
            { label: '定期回访，持续维护客户关系', score: 1 },
            { label: '偶尔回访，保持基本联系', score: 2 },
            { label: '不回访，仅在有需求时联系', score: 3 },
            { label: '从不联系，服务结束即断联', score: 4 }
          ]
        }
      ]
    },
    // 18: 职场谈判能力测评
    18: {
      title: '职场谈判能力测评',
      questions: [
        {
          id: 1,
          title: '商务谈判前，你会做准备吗？',
          options: [
            { label: '全面调研，制定详细谈判策略', score: 1 },
            { label: '简单准备，明确核心诉求', score: 2 },
            { label: '很少准备，临场发挥', score: 3 },
            { label: '从不准备，盲目谈判', score: 4 }
          ]
        },
        {
          id: 2,
          title: '谈判中陷入僵局，你会？',
          options: [
            { label: '灵活变通，寻找共赢方案', score: 1 },
            { label: '冷静分析，调整谈判策略', score: 2 },
            { label: '坚持己见，不愿让步', score: 3 },
            { label: '情绪激动，终止谈判', score: 4 }
          ]
        },
        {
          id: 3,
          title: '面对对方压价/提要求，你会？',
          options: [
            { label: '有理有据，合理争取权益', score: 1 },
            { label: '适度让步，换取其他利益', score: 2 },
            { label: '被动接受，放弃自身权益', score: 3 },
            { label: '直接拒绝，激化谈判矛盾', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你能准确把握对方谈判底线吗？',
          options: [
            { label: '能，通过沟通快速判断底线', score: 1 },
            { label: '基本能，逐步试探了解底线', score: 2 },
            { label: '很难，只能猜测对方意图', score: 3 },
            { label: '不能，完全无法判断对方想法', score: 4 }
          ]
        },
        {
          id: 5,
          title: '谈判达成共识后，你会？',
          options: [
            { label: '书面确认，跟进落地执行', score: 1 },
            { label: '口头确认，提醒对方执行', score: 2 },
            { label: '达成共识后，不跟进执行', score: 3 },
            { label: '反悔共识，重新提出要求', score: 4 }
          ]
        }
      ]
    },
    // 19: 职场风险管理能力测评
    19: {
      title: '职场风险管理能力测评',
      questions: [
        {
          id: 1,
          title: '开展新项目前，你会评估风险吗？',
          options: [
            { label: '全面评估，制定风险应对预案', score: 1 },
            { label: '简单评估，识别主要风险点', score: 2 },
            { label: '很少评估，仅关注收益', score: 3 },
            { label: '从不评估，盲目推进项目', score: 4 }
          ]
        },
        {
          id: 2,
          title: '工作中发现潜在风险，你会？',
          options: [
            { label: '立即上报，主动制定防控措施', score: 1 },
            { label: '及时反馈，配合制定应对方案', score: 2 },
            { label: '视而不见，等风险爆发再处理', score: 3 },
            { label: '隐瞒风险，避免承担责任', score: 4 }
          ]
        },
        {
          id: 3,
          title: '风险发生后，你会？',
          options: [
            { label: '快速响应，控制风险扩大化', score: 1 },
            { label: '按流程处理，逐步降低风险', score: 2 },
            { label: '慌乱应对，无法有效控制', score: 3 },
            { label: '逃避责任，任由风险恶化', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你会定期复盘风险管理效果吗？',
          options: [
            { label: '定期复盘，优化风险防控体系', score: 1 },
            { label: '偶尔复盘，总结风险处理经验', score: 2 },
            { label: '很少复盘，仅在重大风险后反思', score: 3 },
            { label: '从不复盘，重复犯同类错误', score: 4 }
          ]
        },
        {
          id: 5,
          title: '面对高风险高收益的工作，你会？',
          options: [
            { label: '权衡利弊，制定风控方案后推进', score: 1 },
            { label: '谨慎评估，小步试错推进', score: 2 },
            { label: '忽视风险，盲目追求收益', score: 3 },
            { label: '因风险放弃，错失发展机会', score: 4 }
          ]
        }
      ]
    },
    // 20: 职场品牌塑造能力测评
    20: {
      title: '职场品牌塑造能力测评',
      questions: [
        {
          id: 1,
          title: '你会有意识塑造个人职场形象吗？',
          options: [
            { label: '会，精准定位，持续打造个人品牌', score: 1 },
            { label: '会，注重言行，维护职业形象', score: 2 },
            { label: '偶尔注意，无系统规划', score: 3 },
            { label: '从不注意，随意展现自我', score: 4 }
          ]
        },
        {
          id: 2,
          title: '在专业领域，你会输出价值吗？',
          options: [
            { label: '会，定期分享，建立专业影响力', score: 1 },
            { label: '会，偶尔分享，展示专业能力', score: 2 },
            { label: '很少分享，仅完成本职工作', score: 3 },
            { label: '从不分享，隐藏自身能力', score: 4 }
          ]
        },
        {
          id: 3,
          title: '面对职场口碑问题，你会？',
          options: [
            { label: '主动修复，优化自身行为', score: 1 },
            { label: '正视问题，逐步改进', score: 2 },
            { label: '忽视问题，我行我素', score: 3 },
            { label: '破罐破摔，加剧口碑恶化', score: 4 }
          ]
        },
        {
          id: 4,
          title: '你会维护职场人脉网络吗？',
          options: [
            { label: '会，精准维护，构建优质人脉圈', score: 1 },
            { label: '会，定期联系，保持人脉活跃', score: 2 },
            { label: '偶尔联系，仅在需要时互动', score: 3 },
            { label: '从不维护，人脉逐步流失', score: 4 }
          ]
        },
        {
          id: 5,
          title: '职业发展中，你会持续提升品牌价值吗？',
          options: [
            { label: '会，制定计划，持续提升核心竞争力', score: 1 },
            { label: '会，学习提升，保持竞争力', score: 2 },
            { label: '偶尔提升，缺乏持续性', score: 3 },
            { label: '从不提升，品牌价值逐步贬值', score: 4 }
          ]
        }
      ]
    }
  }

  // 2. 职场测评结论配置（新增15-20类）
  const workplaceResults = {
    // ========== 原有1-14类结论（省略，保持和之前一致） ==========
    15: {
      low: {
        title: 'Ⅰ型·目标规划能力极强',
        content:
          '你具备卓越的职场目标规划能力，能制定详细的长短期职业目标并拆解落地，定期复盘进度并动态调整，目标未达成时能快速分析原因并补救。善于以目标为导向推进工作，职业发展路径清晰，建议保持优势，结合行业趋势优化目标体系。'
      },
      mediumLow: {
        title: 'Ⅱ型·目标规划能力良好',
        content:
          '你有基本的目标规划意识，能制定职场发展框架和年度计划，按计划推进工作并每月复盘，面对变化能逐步调整目标。能满足职场基本规划需求，偶尔会出现执行不到位的情况，建议提升计划拆解的精细化程度和执行的刚性。'
      },
      mediumHigh: {
        title: 'Ⅲ型·目标规划能力较弱',
        content:
          '你缺乏系统的目标规划能力，仅偶尔思考职业发展方向，计划制定后落地执行不足，目标未达成时易抱怨放弃。职业发展缺乏清晰方向，易随波逐流，建议从制定月度小目标开始，培养规划和执行的习惯。'
      },
      high: {
        title: 'Ⅳ型·目标规划能力极差',
        content:
          '你完全没有职场目标规划意识，从不思考职业发展方向，制定的计划形同虚设，面对变化拒绝调整。职业发展盲目无序，易错失发展机会，建议先明确核心职业诉求，从简单的周计划开始逐步建立规划能力。'
      }
    },
    16: {
      low: {
        title: 'Ⅰ型·问题解决能力极强',
        content:
          '你拥有出色的职场问题解决能力，能拆解复杂问题并高效突破，常规方法无效时能创新思路，解决后会总结方法论复用。跨部门和紧急问题都能从容应对，是团队的"问题解决专家"，建议保持优势，分享解决思路帮助团队提升。'
      },
      mediumLow: {
        title: 'Ⅱ型·问题解决能力良好',
        content:
          '你具备基本的问题解决能力，能梳理思路分析问题，常规问题能独立解决，解决后会简单总结要点。能应对日常工作中的常见问题，复杂问题需要借助外部力量，建议多积累解决案例，提升独立解决复杂问题的能力。'
      },
      mediumHigh: {
        title: 'Ⅲ型·问题解决能力较弱',
        content:
          '你解决问题的能力不足，面对复杂问题毫无头绪，依赖他人指点，解决后很少总结经验。仅能处理简单问题，易因问题堆积影响工作推进，建议学习问题拆解方法，从解决小问题开始积累经验。'
      },
      high: {
        title: 'Ⅳ型·问题解决能力极差',
        content:
          '你缺乏基本的问题解决能力，遇到问题习惯性逃避，常规方法无效时直接放弃，甚至会推卸责任加剧问题。频繁因问题处理不当造成损失，建议建立直面问题的意识，学习基础的问题分析和解决方法。'
      }
    },
    17: {
      low: {
        title: 'Ⅰ型·客户服务能力极强',
        content:
          '你具备顶级的客户服务意识和能力，能快速响应并超预期满足客户需求，处理投诉时真诚高效，主动挖掘潜在需求并维护长期客户关系。是客户眼中的优质服务者，能为公司积累优质客户资源，建议保持优势，总结服务经验形成标准化流程。'
      },
      mediumLow: {
        title: 'Ⅱ型·客户服务能力良好',
        content:
          '你有基本的客户服务意识，能及时回应并满足客户明确需求，投诉处理得当，偶尔会回访维护关系。能满足日常客户服务需求，缺乏主动挖掘潜在需求的意识，建议提升服务的主动性和前瞻性。'
      },
      mediumHigh: {
        title: 'Ⅲ型·客户服务能力较弱',
        content:
          '你客户服务意识不足，响应客户需求不及时，投诉处理敷衍，仅关注明确提出的需求，服务结束后很少维护关系。易因服务不到位流失客户，建议强化服务意识，规范服务流程和标准。'
      },
      high: {
        title: 'Ⅳ型·客户服务能力极差',
        content:
          '你完全缺乏客户服务意识，消极回应甚至无视客户需求，投诉处理时推卸责任，承诺无法兑现的要求。严重损害公司客户关系和品牌形象，建议重新树立以客户为中心的服务理念，系统学习客户服务技巧。'
      }
    },
    18: {
      low: {
        title: 'Ⅰ型·谈判能力极强',
        content:
          '你是优秀的职场谈判者，谈判前会做全面准备和策略制定，僵局中能灵活变通寻找共赢方案，精准把握对方底线并合理争取权益。谈判成功率高且能维护长期合作关系，建议保持优势，兼顾原则性和灵活性。'
      },
      mediumLow: {
        title: 'Ⅱ型·谈判能力良好',
        content:
          '你具备基本的谈判能力，会做简单准备并明确核心诉求，僵局中能冷静调整策略，适度让步换取利益。能完成常规职场谈判，复杂谈判需要更多技巧，建议学习谈判心理学，提升底线判断和策略制定能力。'
      },
      mediumHigh: {
        title: 'Ⅲ型·谈判能力较弱',
        content:
          '你谈判准备不足，临场发挥居多，僵局中易坚持己见不愿让步，面对压价时被动接受。谈判结果往往不利于自身/公司，建议谈判前做好充分准备，学习基本的谈判技巧和让步策略。'
      },
      high: {
        title: 'Ⅳ型·谈判能力极差',
        content:
          '你完全没有谈判准备意识，盲目参与谈判，僵局中情绪激动甚至终止谈判，要么过度让步要么直接拒绝。频繁因谈判失误造成利益损失，建议先学习谈判的基础流程和技巧，从简单的沟通谈判开始练习。'
      }
    },
    19: {
      low: {
        title: 'Ⅰ型·风险管理能力极强',
        content:
          '你具备专业的职场风险管理能力，项目前全面评估风险并制定预案，发现潜在风险立即上报并防控，风险发生后快速响应控制，定期复盘优化风控体系。能有效规避和降低职场风险，是团队的"安全屏障"，建议保持优势，建立风险预警机制。'
      },
      mediumLow: {
        title: 'Ⅱ型·风险管理能力良好',
        content:
          '你有基本的风险意识，能识别主要风险点并简单评估，发现风险及时反馈，按流程处理已发生的风险。能应对常规职场风险，缺乏系统的风控体系，建议建立风险清单，提升风险预判和快速响应能力。'
      },
      mediumHigh: {
        title: 'Ⅲ型·风险管理能力较弱',
        content:
          '你风险意识不足，仅关注收益忽视风险评估，发现潜在风险视而不见，风险发生后慌乱应对。易因风控不到位造成损失，建议树立风险意识，学习基础的风险评估和应对方法。'
      },
      high: {
        title: 'Ⅳ型·风险管理能力极差',
        content:
          '你完全没有风险意识，盲目推进工作，隐瞒潜在风险，风险发生后逃避责任。频繁引发重大风险事件，严重影响工作和团队发展，建议建立敬畏风险的意识，严格按风控流程开展工作。'
      }
    },
    20: {
      low: {
        title: 'Ⅰ型·品牌塑造能力极强',
        content:
          '你具备卓越的个人职场品牌塑造能力，精准定位自身优势并持续打造，在专业领域输出价值建立影响力，主动维护口碑和人脉网络，持续提升核心竞争力。是职场中具有鲜明个人品牌的优秀从业者，建议保持优势，扩大品牌影响力。'
      },
      mediumLow: {
        title: 'Ⅱ型·品牌塑造能力良好',
        content:
          '你有基本的个人品牌意识，注重职业言行和形象维护，偶尔分享专业内容，定期联系职场人脉。个人品牌有一定基础，但缺乏系统性打造，建议明确品牌定位，持续输出专业价值提升影响力。'
      },
      mediumHigh: {
        title: 'Ⅲ型·品牌塑造能力较弱',
        content:
          '你缺乏主动的品牌塑造意识，仅偶尔注意职业形象，很少分享专业内容，人脉维护仅限需要时互动。个人职场品牌模糊，难以形成差异化优势，建议从规范职业言行开始，逐步建立个人品牌意识。'
      },
      high: {
        title: 'Ⅳ型·品牌塑造能力极差',
        content:
          '你完全没有个人品牌意识，言行随意损害职业形象，从不分享专业价值，人脉网络逐步流失。个人职场口碑差，职业发展受限，建议重新审视自身职业形象，从基础的言行规范和人脉维护开始改进。'
      }
    }
  }

  // 3. 核心功能实现
  // 验证测评类型是否存在
  if (!workplaceTestBank[testTypeId]) {
    return {
      success: false,
      message: `不存在编号为${testTypeId}的职场测评类型`,
      data: null
    }
  }

  // 验证答案数量是否匹配
  const questionCount = workplaceTestBank[testTypeId].questions.length
  // 无答题参数 → 返回题目列表（供 CeshiDatiPage 加载题目使用）
  if (!answers) {
    return {
      success: true,
      testId: testTypeId,
      testTitle: workplaceTestBank[testTypeId].title,
      questions: workplaceTestBank[testTypeId].questions.map(function(q) {
        return {
          id: q.id,
          title: q.title,
          options: q.options.map(function(opt) {
            return opt.label
          })
        }
      })
    }
  }
  if (answers.length !== questionCount) {
    return {
      success: false,
      message: `请回答全部${questionCount}道测评题目`,
      data: null
    }
  }

  // 计算总分
  let totalScore = 0
  answers.forEach((answerScore, index) => {
    // 验证每题得分是否在1-4分范围内
    if (answerScore < 1 || answerScore > 4) {
      throw new Error(`第${index + 1}题得分无效，需为1-4分`)
    }
    totalScore += answerScore
  })

  // 判定得分等级（总分5-20分）
  let scoreLevel = ''
  if (totalScore <= 5) {
    scoreLevel = 'low'
  } else if (totalScore <= 10) {
    scoreLevel = 'mediumLow'
  } else if (totalScore <= 15) {
    scoreLevel = 'mediumHigh'
  } else {
    scoreLevel = 'high'
  }

  // 获取测评结论
  const result = workplaceResults[testTypeId][scoreLevel]

  // 返回完整结果
  return {
    success: true,
    message: '测评完成',
    data: {
      testType: workplaceTestBank[testTypeId].title,
      totalScore,
      scoreLevel,
      resultTitle: result.title,
      resultContent: result.content,
      questions: workplaceTestBank[testTypeId].questions // 返回题库便于前端展示
    }
  }
}

// ========== 使用示例 ==========
// 测试第15类（目标规划能力）测评，答案为[1,1,1,1,1]（满分5分）
// const testResult15 = workplaceTest(15, [1, 1, 1, 1, 1])
// console.log('第15类测评结果：', testResult15)

// 测试第20类（品牌塑造能力）测评，答案为[3,3,3,3,3]（15分）
// const testResult20 = workplaceTest(20, [3, 3, 3, 3, 3])
// console.log('第20类测评结果：', testResult20)

module.exports = { workplaceTest }
