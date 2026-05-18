'use client'
import { useExamStore } from '@/store/examStore'
import ExamToolbar from '@/components/exam/ExamToolbar'
import ToolsPanel from '@/components/exam/ToolsPanel'
import ExamSidebar from '@/components/exam/ExamSidebar'
import QuestionArea from '@/components/exam/QuestionArea'
import ExamNavBar from '@/components/exam/ExamNavBar'
import FocusWarn from '@/components/exam/FocusWarn'

export default function ActiveExam() {
  const activeTool = useExamStore((s) => s.activeTool)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <ExamToolbar />
      {activeTool !== null && <ToolsPanel />}
      <div className="flex flex-1 overflow-hidden">
        <ExamSidebar />
        <QuestionArea />
      </div>
      <ExamNavBar />
      <FocusWarn />
    </div>
  )
}
