import type { Question } from '@/lib/types'
import { questions as q_may_2016 } from '@/data/papers/physics-may-2016/questions'
import { questions as q_nov_2016 } from '@/data/papers/physics-nov-2016/questions'
import { questions as q_may_2017 } from '@/data/papers/physics-may-2017/questions'
import { questions as q_nov_2017 } from '@/data/papers/physics-nov-2017/questions'
import { questions as q_may_2018 } from '@/data/papers/physics-may-2018/questions'
import { questions as q_nov_2018 } from '@/data/papers/physics-nov-2018/questions'
import { questions as q_may_2019 } from '@/data/papers/physics-may-2019/questions'
import { questions as q_nov_2019 } from '@/data/papers/physics-nov-2019/questions'
import { questions as q_nov_2020 } from '@/data/papers/physics-nov-2020/questions'
import { questions as q_may_2021 } from '@/data/papers/physics-may-2021/questions'
import { questions as q_nov_2021 } from '@/data/papers/physics-nov-2021/questions'
import { questions as q_may_2022 } from '@/data/papers/physics-may-2022/questions'
import { questions as q_nov_2022 } from '@/data/papers/physics-nov-2022/questions'
import { questions as q_may_2023 } from '@/data/papers/physics-may-2023/questions'
import { questions as q_nov_2023 } from '@/data/papers/physics-nov-2023/questions'
import { questions as q_may_2024 } from '@/data/papers/physics-may-2024/questions'
import { questions as q_nov_2024 } from '@/data/papers/physics-nov-2024/questions'
import { questions as q_may_2025 } from '@/data/papers/physics-may-2025/questions'
import { questions as q_practice_v1 } from '@/data/papers/physics-practice-v1/questions'

function tag(qs: Question[], paperId: string): Question[] {
  return qs.map(q => ({ ...q, sourcePaperId: paperId }))
}

export const PHYSICS_BANK: Question[] = [
  ...tag(q_may_2016,     'physics-may-2016'),
  ...tag(q_nov_2016,     'physics-nov-2016'),
  ...tag(q_may_2017,     'physics-may-2017'),
  ...tag(q_nov_2017,     'physics-nov-2017'),
  ...tag(q_may_2018,     'physics-may-2018'),
  ...tag(q_nov_2018,     'physics-nov-2018'),
  ...tag(q_may_2019,     'physics-may-2019'),
  ...tag(q_nov_2019,     'physics-nov-2019'),
  ...tag(q_nov_2020,     'physics-nov-2020'),
  ...tag(q_may_2021,     'physics-may-2021'),
  ...tag(q_nov_2021,     'physics-nov-2021'),
  ...tag(q_may_2022,     'physics-may-2022'),
  ...tag(q_nov_2022,     'physics-nov-2022'),
  ...tag(q_may_2023,     'physics-may-2023'),
  ...tag(q_nov_2023,     'physics-nov-2023'),
  ...tag(q_may_2024,     'physics-may-2024'),
  ...tag(q_nov_2024,     'physics-nov-2024'),
  ...tag(q_may_2025,     'physics-may-2025'),
  ...tag(q_practice_v1,  'physics-practice-v1'),
]
