'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import teamData from '@/data/team.json'
import BusinessCard, { TeamMember } from '@/components/BusinessCard'

interface TeamData {
  leader: TeamMember[]
  phdStudents: TeamMember[]
  postgraduate: TeamMember[]
  undergraduate: TeamMember[]
  alumni: TeamMember[]
}

const data = teamData as TeamData

// 合併所有成員
const allMembers = [
  ...data.leader,
  ...data.phdStudents,
  ...data.postgraduate,
  ...data.undergraduate,
  ...data.alumni,
]

// 從名字生成 slug
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/^(prof\.|dr\.|mr\.|ms\.|mrs\.)\s*/i, '') // 移除頭銜
    .replace(/[^a-z0-9]+/g, '') // 只保留字母和數字
}

// 根據 slug 找到成員
function findMemberBySlug(slug: string): TeamMember | undefined {
  return allMembers.find(member => generateSlug(member.name) === slug)
}

export default function SingleCardPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const member = findMemberBySlug(slug)
  
  if (!member) {
    return (
      <div className="min-h-screen bg-surface-dim flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-on-surface mb-4">Member Not Found</h1>
        <p className="text-on-surface-variant mb-6">The requested business card does not exist.</p>
        <Link 
          href="/card" 
          className="text-primary hover:text-primary/80 transition-colors"
        >
          ← View all team members
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-dim flex flex-col items-center justify-center p-4">
      {/* 名片 - 使用 full 尺寸 */}
      <BusinessCard member={member} size="full" />
      
      {/* 底部資訊 */}
      <div className="mt-10 text-center">
        <p className="text-on-surface-variant text-sm">
          {member.name} • TIME Lab
        </p>
        <Link 
          href="/card" 
          className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          ← View all team members
        </Link>
      </div>
    </div>
  )
}
