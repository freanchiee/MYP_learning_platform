import { notFound } from 'next/navigation'
import ProjectWorkspace from '@/components/design/ProjectWorkspace'
import { getProject } from '@/data/design/projects'

export default function DesignProjectPage({
  params,
  searchParams,
}: {
  params: { projectId: string }
  searchParams: { mode?: string }
}) {
  const project = getProject(params.projectId)
  if (!project) notFound()
  const initialMode = searchParams.mode === 'build' ? 'build' : 'study'
  return <ProjectWorkspace project={project} initialMode={initialMode} />
}
