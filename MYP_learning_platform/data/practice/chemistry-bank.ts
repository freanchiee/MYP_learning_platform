import type { Question } from '@/lib/types'
import { questions as q_may_2016 } from '@/data/papers/chemistry-may-2016/questions'
import { questions as q_nov_2016 } from '@/data/papers/chemistry-nov-2016/questions'
import { questions as q_may_2017 } from '@/data/papers/chemistry-may-2017/questions'
import { questions as q_nov_2017 } from '@/data/papers/chemistry-nov-2017/questions'
import { questions as q_may_2018 } from '@/data/papers/chemistry-may-2018/questions'
import { questions as q_nov_2018 } from '@/data/papers/chemistry-nov-2018/questions'
import { questions as q_may_2019 } from '@/data/papers/chemistry-may-2019/questions'
import { questions as q_nov_2019 } from '@/data/papers/chemistry-nov-2019/questions'
import { questions as q_nov_2020 } from '@/data/papers/chemistry-nov-2020/questions'
import { questions as q_may_2021 } from '@/data/papers/chemistry-may-2021/questions'
import { questions as q_nov_2021 } from '@/data/papers/chemistry-nov-2021/questions'
import { questions as q_may_2022 } from '@/data/papers/chemistry-may-2022/questions'
import { questions as q_nov_2022 } from '@/data/papers/chemistry-nov-2022/questions'
import { questions as q_may_2023 } from '@/data/papers/chemistry-may-2023/questions'
import { questions as q_nov_2023 } from '@/data/papers/chemistry-nov-2023/questions'
import { questions as q_may_2024 } from '@/data/papers/chemistry-may-2024/questions'
import { questions as q_nov_2024 } from '@/data/papers/chemistry-nov-2024/questions'
import { questions as q_may_2025 } from '@/data/papers/chemistry-may-2025/questions'

function tag(qs: Question[], paperId: string): Question[] {
  return qs.map(q => ({ ...q, sourcePaperId: paperId }))
}

export const CHEMISTRY_BANK: Question[] = [
  ...tag(q_may_2016 as unknown as Question[], 'chemistry-may-2016'),
  ...tag(q_nov_2016 as unknown as Question[], 'chemistry-nov-2016'),
  ...tag(q_may_2017 as unknown as Question[], 'chemistry-may-2017'),
  ...tag(q_nov_2017 as unknown as Question[], 'chemistry-nov-2017'),
  ...tag(q_may_2018 as unknown as Question[], 'chemistry-may-2018'),
  ...tag(q_nov_2018 as unknown as Question[], 'chemistry-nov-2018'),
  ...tag(q_may_2019 as unknown as Question[], 'chemistry-may-2019'),
  ...tag(q_nov_2019 as unknown as Question[], 'chemistry-nov-2019'),
  ...tag(q_nov_2020 as unknown as Question[], 'chemistry-nov-2020'),
  ...tag(q_may_2021 as unknown as Question[], 'chemistry-may-2021'),
  ...tag(q_nov_2021 as unknown as Question[], 'chemistry-nov-2021'),
  ...tag(q_may_2022 as unknown as Question[], 'chemistry-may-2022'),
  ...tag(q_nov_2022 as unknown as Question[], 'chemistry-nov-2022'),
  ...tag(q_may_2023 as unknown as Question[], 'chemistry-may-2023'),
  ...tag(q_nov_2023 as unknown as Question[], 'chemistry-nov-2023'),
  ...tag(q_may_2024 as unknown as Question[], 'chemistry-may-2024'),
  ...tag(q_nov_2024 as unknown as Question[], 'chemistry-nov-2024'),
  ...tag(q_may_2025 as unknown as Question[], 'chemistry-may-2025'),
]
